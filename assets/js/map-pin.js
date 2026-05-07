/* map-pin.js
 * Custom Leaflet map pin syncing for PropertyHive results.
 *
 * - Does NOT modify your filter logic.
 * - You call: window.PHPinsSync.onResultsUpdated(url)
 *   after you replace the results HTML in your AJAX flow.
 *
 * Optional:
 * - If you implement the WP AJAX endpoint `custom_ph_map_markers`,
 *   set PHPinsSyncConfig.useAllMatchesEndpoint = true
 *   and pins will represent ALL matches (not just current page).
 */

(() => {
  // ---------------- config (override via window.PHPinsSyncConfig) ----------------
  const defaults = {
    mapContainerId: "custom-results-map",
    resultsRootSelector: "#ph-search-results",
    cardSelector: ".mega-card[data-lat][data-lng]",
    cardTitleSelector: ".mega-card__title",
    cardLinkSelector: ".mega-card__whole-link",

    defaultCenter: [53.48, -2.24],
    defaultZoom: 10,
    fitToPinsOnUpdate: true,
    fitPadding: [30, 30],
    maxFitZoom: 13,
    selectedPinZoom: 16,
    centerSelectedPin: true,

    tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    tileOptions: {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    },

    useAllMatchesEndpoint: true,
    ajaxUrl: null,
    ajaxAction: "custom_ph_map_markers",
    queryParamName: "query",
    expectMarkerUrlKey: "url",

    popupMaxWidth: 280,
    popupClassName: "ph-leaflet-popup",

    debug: true,
  };

  //const cfg = { ...defaults, ...(window.PHPinsSyncConfig || {}) };
  const cfg = {
    ...defaults,
    ...(window.PropertySearchMapConfig || {}),
  };

  // ---------------- internal state ----------------
  let map = null;
  let layer = null;
  let initialized = false;
  let markerIndex = new Map();

  // ---------------- utilities ----------------

  function log(...args) {
    if (cfg.debug) console.log("[PHPinsSync]", ...args);
  }

  function warn(...args) {
    console.warn("[PHPinsSync]", ...args);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getAjaxUrl() {
    return cfg.ajaxUrl || window.ajaxurl || "/wp-admin/admin-ajax.php";
  }

  function focusMarkerForCard(card) {
    if (!card || !map) return;

    const id = card.dataset.propertyId;
    const lat = Number(card.dataset.lat);
    const lng = Number(card.dataset.lng);

    let marker = null;

    if (id != null && markerIndex.has(`id:${id}`)) {
      marker = markerIndex.get(`id:${id}`);
    } else if (Number.isFinite(lat) && Number.isFinite(lng)) {
      marker = markerIndex.get(`coords:${lat},${lng}`);
    }

    if (!marker) return;

    const ll = marker.getLatLng();

    if (cfg.centerSelectedPin) {
      map.setView(
        [ll.lat, ll.lng],
        Math.max(map.getZoom(), cfg.selectedPinZoom),
        {
          animate: true,
        },
      );
    } else {
      map.panTo(ll, { animate: true });
    }

    marker.openPopup();
  }

  function makeSvgPinIcon() {
    const svg = `
      <svg width="45" height="57" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1901 0.5C10.2097 0.5 0.5 10.276 0.5 22.3384C0.5 37.4284 22.1901 55.5 22.1901 55.5C22.1901 55.5 43.8803 37.4284 43.8803 22.3384C43.8803 10.2783 34.1706 0.5 22.1901 0.5Z" fill="#2D2D35" stroke="#FAF8F4" stroke-miterlimit="10"/>
        <path d="M32.0494 18.952L22.4714 12.8945L12.8945 18.952" stroke="#C1D42F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.1738 19.9756V30.7374H30.7721V19.9756" stroke="#C1D42F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.1448 30.7362V24.4121H20.8027V30.7362" stroke="#C1D42F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `.trim();

    return L.divIcon({
      className: "ph-svg-pin",
      html: svg,
      iconSize: [45, 57],
      iconAnchor: [22.5, 57],
      popupAnchor: [0, -57],
    });
  }

  // ---------------- map init ----------------

  function initMapIfNeeded() {
    if (initialized) return true;

    if (!window.L) {
      warn(
        "Leaflet not loaded. Ensure leaflet.js is enqueued before map-pin.js",
      );
      return false;
    }

    const el = document.getElementById(cfg.mapContainerId);
    if (!el) {
      warn(`Map container #${cfg.mapContainerId} not found`);
      return false;
    }

    const h = el.getBoundingClientRect().height;
    if (h < 50) {
      warn(
        `Map container #${cfg.mapContainerId} height is ${Math.round(
          h,
        )}px. Leaflet needs a height (e.g. 400px+).`,
      );
    }

    map = L.map(el, { scrollWheelZoom: false }).setView(
      cfg.defaultCenter,
      cfg.defaultZoom,
    );

    // 2. Enable zoom when they click/interact with the map
    map.on("focus", () => {
      map.scrollWheelZoom.enable();
    });

    // 3. Disable it again when they click away
    map.on("blur", () => {
      map.scrollWheelZoom.disable();
    });

    L.tileLayer(cfg.tileUrl, cfg.tileOptions).addTo(map);

    layer = L.layerGroup().addTo(map);

    setTimeout(() => {
      try {
        map.invalidateSize(true);
      } catch {}
    }, 50);

    initialized = true;
    log("Map initialised");
    return true;
  }

  // ---------------- popup HTML ----------------

  function buildPopupHtml(p) {
    const title = escapeHtml(p.title || "Property");

    const link = p.url || p.href || p[cfg.expectMarkerUrlKey] || "#";
    const safeLink = link ? String(link) : "#";

    // These may be missing if markers came from ALL endpoint and you haven’t added them there yet
    const price = p.price ? escapeHtml(p.price) : "";
    const address = p.address ? escapeHtml(p.address) : "";
    const beds = p.beds ? escapeHtml(p.beds) : "";
    const img = p.image ? String(p.image) : "";
    const sold = !!p.sold;

    return `
      <div class="ph-popup">
        ${
          img
            ? `<a class="ph-popup__imgWrap" href="${safeLink}">
                <img class="ph-popup__img" src="${img}" alt="${title}" loading="lazy">
              </a>`
            : ""
        }

        <div class="ph-popup__body">
  ${sold ? `<div class="ph-popup__tag">Just sold</div>` : ""}

  <a class="ph-popup__title" href="${safeLink}">${title}</a>

  ${
    price || beds
      ? `<div class="ph-popup__meta">
          ${price ? `<span class="ph-popup__price">${price}</span>` : ""}

          ${
            beds
              ? `<div class="flex gap-8 align-center">
                 <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288" stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.46231 13.123V14.4584H2.12695V13.123" stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8158 13.123V14.4584H15.4805V13.123" stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.489 7.84277H2.5354C1.4112 7.84277 0.5 8.77155 0.5 9.91742V11.848H18.5234V9.91742C18.5234 8.77155 17.6122 7.84277 16.488 7.84277H16.489Z" stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5784 7.36877V5.512C15.5784 4.92189 15.1486 4.44434 14.6173 4.44434H11.2755C10.7443 4.44434 10.3145 4.92189 10.3145 5.512V7.36877" stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.85552 7.36877V5.512C8.85552 4.92189 8.4137 4.44434 7.86773 4.44434H4.4331C3.88713 4.44434 3.44531 4.92189 3.44531 5.512V7.36877" stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  <span class="ph-popup__beds">${beds} bed</span>
                </div>`
              : ""
          }
        </div>`
      : ""
  }

  ${address ? `<div class="ph-popup__addr">${address}</div>` : ""}
</div>
      </div>
    `;
  }

  // ---------------- extract markers from DOM (current page) ----------------

  function extractMarkersFromDom() {
    const root = document.querySelector(cfg.resultsRootSelector);
    if (!root) {
      warn(`Results root not found: ${cfg.resultsRootSelector}`);
      return [];
    }

    const cards = root.querySelectorAll(cfg.cardSelector);
    log("DOM cards found:", cards.length);

    const out = [];
    cards.forEach((card) => {
      const lat = Number(card.dataset.lat);
      const lng = Number(card.dataset.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

      const title =
        card.querySelector(cfg.cardTitleSelector)?.textContent?.trim() ||
        "Property";

      const href =
        card.dataset.cardHref ||
        card.querySelector(cfg.cardLinkSelector)?.getAttribute("href") ||
        null;

      // extra fields from data-attrs
      const price = card.dataset.price || "";
      const beds = card.dataset.beds || "";
      const address = card.dataset.address || "";
      const image = card.dataset.image || "";
      const sold = card.dataset.sold === "1";

      out.push({ lat, lng, title, href, price, beds, address, image, sold });
    });

    // De-dupe coords
    const seen = new Set();
    return out.filter((m) => {
      const k = `${m.lat.toFixed(6)},${m.lng.toFixed(6)}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  // ---------------- render pins ----------------

  function renderPins(markers, { fit } = {}) {
    if (!initMapIfNeeded()) return;

    if (markers.length) {
      console.log("🔎 First marker sample:", markers[0]);
    }

    layer.clearLayers();
    markerIndex.clear();

    if (!markers || !markers.length) {
      log("No markers to render");
      return;
    }

    const pinIcon = makeSvgPinIcon();
    const popupOpts = {
      className: cfg.popupClassName,
      maxWidth: cfg.popupMaxWidth,
    };

    markers.forEach((p) => {
      const marker = L.marker([p.lat, p.lng], { icon: pinIcon });
      marker.bindPopup(buildPopupHtml(p), popupOpts);

      marker.on("click", () => {
        const ll = marker.getLatLng();
        map.panTo(ll, { animate: true });
      });

      layer.addLayer(marker);

      if (p.id != null) {
        markerIndex.set(`id:${p.id}`, marker);
      }
      markerIndex.set(`coords:${p.lat},${p.lng}`, marker);
    });

    const shouldFit = typeof fit === "boolean" ? fit : !!cfg.fitToPinsOnUpdate;

    if (shouldFit) {
      if (markers.length === 1) {
        const only = markers[0];
        map.setView(
          [only.lat, only.lng],
          Math.min(cfg.selectedPinZoom, cfg.maxFitZoom),
        );
      } else {
        const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));

        const isMobile = window.innerWidth < 768;

        map.fitBounds(bounds, {
          paddingTopLeft: isMobile ? [120, 120] : [220, 220],
          paddingBottomRight: isMobile ? [120, 120] : [220, 220],
          maxZoom: 10, // 👈 THIS is the key change
        });
      }
    }

    setTimeout(() => {
      try {
        map.invalidateSize(true);
      } catch {}
    }, 50);

    log("Rendered markers:", markers.length);
  }

  // ---------------- optional: fetch ALL matching markers ----------------

  async function fetchAllMarkersForMap(urlForQuery) {
    const u = new URL(
      urlForQuery || window.location.href,
      window.location.href,
    );
    const qs = u.search.replace(/^\?/, "");

    const body = new URLSearchParams();
    body.set("action", cfg.ajaxAction);
    body.set(cfg.queryParamName, qs);

    const res = await fetch(getAjaxUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      credentials: "same-origin",
      body: body.toString(),
    });

    const text = await res.text();

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      warn("ALL markers endpoint returned non-JSON:", text.slice(0, 300));
      throw new Error("ALL markers endpoint non-JSON");
    }

    if (!json?.success) {
      warn("ALL markers endpoint error payload:", json);
      throw new Error("ALL markers endpoint failed");
    }

    const markers = json.data?.markers || [];
    log("ALL markers returned:", markers.length);
    return markers;
  }

  // ---------------- public API ----------------

  async function onResultsUpdated(urlForQuery) {
    const pageMarkers = extractMarkersFromDom();
    log("Page markers:", pageMarkers.length);

    if (!cfg.useAllMatchesEndpoint) {
      renderPins(pageMarkers, { fit: cfg.fitToPinsOnUpdate });
      return;
    }

    try {
      const allMarkers = await fetchAllMarkersForMap(urlForQuery);

      // If endpoint does NOT include the extra fields, popups will show basic info.
      // If endpoint returns 0 but page has pins, fall back.
      if (allMarkers.length === 0 && pageMarkers.length > 0) {
        warn("ALL markers returned 0 but page has results; using page markers");
        renderPins(pageMarkers, { fit: cfg.fitToPinsOnUpdate });
        return;
      }

      renderPins(allMarkers, { fit: cfg.fitToPinsOnUpdate });
    } catch (e) {
      warn("ALL markers failed; falling back to page markers", e);
      renderPins(pageMarkers, { fit: cfg.fitToPinsOnUpdate });
    }
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".mega-card[data-lat][data-lng]");
    if (!card) return;

    // ignore clicks on internal buttons/links you don't want to hijack
    focusMarkerForCard(card);
  });

  // function init() {
  //   initMapIfNeeded();
  //   onResultsUpdated(window.location.href);
  // }

  function init() {
    if (!initMapIfNeeded()) return;

    // wait for layout + CSS + results DOM
    requestAnimationFrame(() => {
      setTimeout(() => {
        onResultsUpdated(window.location.href);
      }, 150);
    });
  }

  //window.PHPinsSync = { init, onResultsUpdated, renderPins };

  window.PropertySearchMap = {
    init,
    onResultsUpdated,
    renderPins,
    focusMarkerForCard,
  };

  window.PHPinsSync = window.PropertySearchMap;

  document.addEventListener("DOMContentLoaded", init);

  //window.PropertySearchMap.onResultsUpdated(url);
})();

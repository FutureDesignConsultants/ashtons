/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./assets/js/map-pin.js ***!
  \******************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

(function () {
  // ---------------- config (override via window.PHPinsSyncConfig) ----------------
  var defaults = {
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
      attribution: "&copy; OpenStreetMap contributors"
    },
    useAllMatchesEndpoint: true,
    ajaxUrl: null,
    ajaxAction: "custom_ph_map_markers",
    queryParamName: "query",
    expectMarkerUrlKey: "url",
    popupMaxWidth: 280,
    popupClassName: "ph-leaflet-popup",
    debug: true
  };

  //const cfg = { ...defaults, ...(window.PHPinsSyncConfig || {}) };
  var cfg = _objectSpread(_objectSpread({}, defaults), window.PropertySearchMapConfig || {});

  // ---------------- internal state ----------------
  var map = null;
  var layer = null;
  var initialized = false;
  var markerIndex = new Map();

  // ---------------- utilities ----------------

  function log() {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (cfg.debug) (_console = console).log.apply(_console, ["[PHPinsSync]"].concat(args));
  }
  function warn() {
    var _console2;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    (_console2 = console).warn.apply(_console2, ["[PHPinsSync]"].concat(args));
  }
  function escapeHtml(str) {
    return String(str).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  function getAjaxUrl() {
    return cfg.ajaxUrl || window.ajaxurl || "/wp-admin/admin-ajax.php";
  }
  function focusMarkerForCard(card) {
    if (!card || !map) return;
    var id = card.dataset.propertyId;
    var lat = Number(card.dataset.lat);
    var lng = Number(card.dataset.lng);
    var marker = null;
    if (id != null && markerIndex.has("id:".concat(id))) {
      marker = markerIndex.get("id:".concat(id));
    } else if (Number.isFinite(lat) && Number.isFinite(lng)) {
      marker = markerIndex.get("coords:".concat(lat, ",").concat(lng));
    }
    if (!marker) return;
    var ll = marker.getLatLng();
    if (cfg.centerSelectedPin) {
      map.setView([ll.lat, ll.lng], Math.max(map.getZoom(), cfg.selectedPinZoom), {
        animate: true
      });
    } else {
      map.panTo(ll, {
        animate: true
      });
    }
    marker.openPopup();
  }
  function makeSvgPinIcon() {
    var svg = "\n      <svg width=\"45\" height=\"57\" viewBox=\"0 0 45 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M22.1901 0.5C10.2097 0.5 0.5 10.276 0.5 22.3384C0.5 37.4284 22.1901 55.5 22.1901 55.5C22.1901 55.5 43.8803 37.4284 43.8803 22.3384C43.8803 10.2783 34.1706 0.5 22.1901 0.5Z\" fill=\"#2D2D35\" stroke=\"#FAF8F4\" stroke-miterlimit=\"10\"/>\n        <path d=\"M32.0494 18.952L22.4714 12.8945L12.8945 18.952\" stroke=\"#C1D42F\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M14.1738 19.9756V30.7374H30.7721V19.9756\" stroke=\"#C1D42F\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M24.1448 30.7362V24.4121H20.8027V30.7362\" stroke=\"#C1D42F\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ".trim();
    return L.divIcon({
      className: "ph-svg-pin",
      html: svg,
      iconSize: [45, 57],
      iconAnchor: [22.5, 57],
      popupAnchor: [0, -57]
    });
  }

  // ---------------- map init ----------------

  function initMapIfNeeded() {
    if (initialized) return true;
    if (!window.L) {
      warn("Leaflet not loaded. Ensure leaflet.js is enqueued before map-pin.js");
      return false;
    }
    var el = document.getElementById(cfg.mapContainerId);
    if (!el) {
      warn("Map container #".concat(cfg.mapContainerId, " not found"));
      return false;
    }
    var h = el.getBoundingClientRect().height;
    if (h < 50) {
      warn("Map container #".concat(cfg.mapContainerId, " height is ").concat(Math.round(h), "px. Leaflet needs a height (e.g. 400px+)."));
    }
    map = L.map(el, {
      scrollWheelZoom: false
    }).setView(cfg.defaultCenter, cfg.defaultZoom);

    // 2. Enable zoom when they click/interact with the map
    map.on("focus", function () {
      map.scrollWheelZoom.enable();
    });

    // 3. Disable it again when they click away
    map.on("blur", function () {
      map.scrollWheelZoom.disable();
    });
    L.tileLayer(cfg.tileUrl, cfg.tileOptions).addTo(map);
    layer = L.layerGroup().addTo(map);
    setTimeout(function () {
      try {
        map.invalidateSize(true);
      } catch (_unused) {}
    }, 50);
    initialized = true;
    log("Map initialised");
    return true;
  }

  // ---------------- popup HTML ----------------

  function buildPopupHtml(p) {
    var title = escapeHtml(p.title || "Property");
    var link = p.url || p.href || p[cfg.expectMarkerUrlKey] || "#";
    var safeLink = link ? String(link) : "#";

    // These may be missing if markers came from ALL endpoint and you haven’t added them there yet
    var price = p.price ? escapeHtml(p.price) : "";
    var address = p.address ? escapeHtml(p.address) : "";
    var beds = p.beds ? escapeHtml(p.beds) : "";
    var img = p.image ? String(p.image) : "";
    var sold = !!p.sold;
    return "\n      <div class=\"ph-popup\">\n        ".concat(img ? "<a class=\"ph-popup__imgWrap\" href=\"".concat(safeLink, "\">\n                <img class=\"ph-popup__img\" src=\"").concat(img, "\" alt=\"").concat(title, "\" loading=\"lazy\">\n              </a>") : "", "\n\n        <div class=\"ph-popup__body\">\n  ").concat(sold ? "<div class=\"ph-popup__tag\">Just sold</div>" : "", "\n\n  <a class=\"ph-popup__title\" href=\"").concat(safeLink, "\">").concat(title, "</a>\n\n  ").concat(price || beds ? "<div class=\"ph-popup__meta\">\n          ".concat(price ? "<span class=\"ph-popup__price\">".concat(price, "</span>") : "", "\n\n          ").concat(beds ? "<div class=\"flex gap-8 align-center\">\n                 <svg width=\"20\" height=\"15\" viewBox=\"0 0 20 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288\" stroke=\"#B8B9BD\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M3.46231 13.123V14.4584H2.12695V13.123\" stroke=\"#B8B9BD\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M16.8158 13.123V14.4584H15.4805V13.123\" stroke=\"#B8B9BD\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M16.489 7.84277H2.5354C1.4112 7.84277 0.5 8.77155 0.5 9.91742V11.848H18.5234V9.91742C18.5234 8.77155 17.6122 7.84277 16.488 7.84277H16.489Z\" stroke=\"#B8B9BD\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M15.5784 7.36877V5.512C15.5784 4.92189 15.1486 4.44434 14.6173 4.44434H11.2755C10.7443 4.44434 10.3145 4.92189 10.3145 5.512V7.36877\" stroke=\"#B8B9BD\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M8.85552 7.36877V5.512C8.85552 4.92189 8.4137 4.44434 7.86773 4.44434H4.4331C3.88713 4.44434 3.44531 4.92189 3.44531 5.512V7.36877\" stroke=\"#B8B9BD\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n                  <span class=\"ph-popup__beds\">".concat(beds, " bed</span>\n                </div>") : "", "\n        </div>") : "", "\n\n  ").concat(address ? "<div class=\"ph-popup__addr\">".concat(address, "</div>") : "", "\n</div>\n      </div>\n    ");
  }

  // ---------------- extract markers from DOM (current page) ----------------

  function extractMarkersFromDom() {
    var root = document.querySelector(cfg.resultsRootSelector);
    if (!root) {
      warn("Results root not found: ".concat(cfg.resultsRootSelector));
      return [];
    }
    var cards = root.querySelectorAll(cfg.cardSelector);
    log("DOM cards found:", cards.length);
    var out = [];
    cards.forEach(function (card) {
      var _card$querySelector, _card$querySelector2;
      var lat = Number(card.dataset.lat);
      var lng = Number(card.dataset.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
      var title = ((_card$querySelector = card.querySelector(cfg.cardTitleSelector)) === null || _card$querySelector === void 0 || (_card$querySelector = _card$querySelector.textContent) === null || _card$querySelector === void 0 ? void 0 : _card$querySelector.trim()) || "Property";
      var href = card.dataset.cardHref || ((_card$querySelector2 = card.querySelector(cfg.cardLinkSelector)) === null || _card$querySelector2 === void 0 ? void 0 : _card$querySelector2.getAttribute("href")) || null;

      // extra fields from data-attrs
      var price = card.dataset.price || "";
      var beds = card.dataset.beds || "";
      var address = card.dataset.address || "";
      var image = card.dataset.image || "";
      var sold = card.dataset.sold === "1";
      out.push({
        lat: lat,
        lng: lng,
        title: title,
        href: href,
        price: price,
        beds: beds,
        address: address,
        image: image,
        sold: sold
      });
    });

    // De-dupe coords
    var seen = new Set();
    return out.filter(function (m) {
      var k = "".concat(m.lat.toFixed(6), ",").concat(m.lng.toFixed(6));
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  // ---------------- render pins ----------------

  function renderPins(markers) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fit = _ref.fit;
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
    var pinIcon = makeSvgPinIcon();
    var popupOpts = {
      className: cfg.popupClassName,
      maxWidth: cfg.popupMaxWidth
    };
    markers.forEach(function (p) {
      var marker = L.marker([p.lat, p.lng], {
        icon: pinIcon
      });
      marker.bindPopup(buildPopupHtml(p), popupOpts);
      marker.on("click", function () {
        var ll = marker.getLatLng();
        map.panTo(ll, {
          animate: true
        });
      });
      layer.addLayer(marker);
      if (p.id != null) {
        markerIndex.set("id:".concat(p.id), marker);
      }
      markerIndex.set("coords:".concat(p.lat, ",").concat(p.lng), marker);
    });
    var shouldFit = typeof fit === "boolean" ? fit : !!cfg.fitToPinsOnUpdate;
    if (shouldFit) {
      if (markers.length === 1) {
        var only = markers[0];
        map.setView([only.lat, only.lng], Math.min(cfg.selectedPinZoom, cfg.maxFitZoom));
      } else {
        var bounds = L.latLngBounds(markers.map(function (m) {
          return [m.lat, m.lng];
        }));
        var isMobile = window.innerWidth < 768;
        map.fitBounds(bounds, {
          paddingTopLeft: isMobile ? [120, 120] : [220, 220],
          paddingBottomRight: isMobile ? [120, 120] : [220, 220],
          maxZoom: 10 // 👈 THIS is the key change
        });
      }
    }
    setTimeout(function () {
      try {
        map.invalidateSize(true);
      } catch (_unused2) {}
    }, 50);
    log("Rendered markers:", markers.length);
  }

  // ---------------- optional: fetch ALL matching markers ----------------
  function fetchAllMarkersForMap(_x) {
    return _fetchAllMarkersForMap.apply(this, arguments);
  } // ---------------- public API ----------------
  function _fetchAllMarkersForMap() {
    _fetchAllMarkersForMap = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(urlForQuery) {
      var _json, _json$data;
      var u, qs, body, res, text, json, markers, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            u = new URL(urlForQuery || window.location.href, window.location.href);
            qs = u.search.replace(/^\?/, "");
            body = new URLSearchParams();
            body.set("action", cfg.ajaxAction);
            body.set(cfg.queryParamName, qs);
            _context.n = 1;
            return fetch(getAjaxUrl(), {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              credentials: "same-origin",
              body: body.toString()
            });
          case 1:
            res = _context.v;
            _context.n = 2;
            return res.text();
          case 2:
            text = _context.v;
            _context.p = 3;
            json = JSON.parse(text);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            warn("ALL markers endpoint returned non-JSON:", text.slice(0, 300));
            throw new Error("ALL markers endpoint non-JSON");
          case 5:
            if ((_json = json) !== null && _json !== void 0 && _json.success) {
              _context.n = 6;
              break;
            }
            warn("ALL markers endpoint error payload:", json);
            throw new Error("ALL markers endpoint failed");
          case 6:
            markers = ((_json$data = json.data) === null || _json$data === void 0 ? void 0 : _json$data.markers) || [];
            log("ALL markers returned:", markers.length);
            return _context.a(2, markers);
        }
      }, _callee, null, [[3, 4]]);
    }));
    return _fetchAllMarkersForMap.apply(this, arguments);
  }
  function onResultsUpdated(_x2) {
    return _onResultsUpdated.apply(this, arguments);
  }
  function _onResultsUpdated() {
    _onResultsUpdated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(urlForQuery) {
      var pageMarkers, allMarkers, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            pageMarkers = extractMarkersFromDom();
            log("Page markers:", pageMarkers.length);
            if (cfg.useAllMatchesEndpoint) {
              _context2.n = 1;
              break;
            }
            renderPins(pageMarkers, {
              fit: cfg.fitToPinsOnUpdate
            });
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return fetchAllMarkersForMap(urlForQuery);
          case 2:
            allMarkers = _context2.v;
            if (!(allMarkers.length === 0 && pageMarkers.length > 0)) {
              _context2.n = 3;
              break;
            }
            warn("ALL markers returned 0 but page has results; using page markers");
            renderPins(pageMarkers, {
              fit: cfg.fitToPinsOnUpdate
            });
            return _context2.a(2);
          case 3:
            renderPins(allMarkers, {
              fit: cfg.fitToPinsOnUpdate
            });
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            warn("ALL markers failed; falling back to page markers", _t2);
            renderPins(pageMarkers, {
              fit: cfg.fitToPinsOnUpdate
            });
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return _onResultsUpdated.apply(this, arguments);
  }
  document.addEventListener("click", function (e) {
    var card = e.target.closest(".mega-card[data-lat][data-lng]");
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
    requestAnimationFrame(function () {
      setTimeout(function () {
        onResultsUpdated(window.location.href);
      }, 150);
    });
  }

  //window.PHPinsSync = { init, onResultsUpdated, renderPins };

  window.PropertySearchMap = {
    init: init,
    onResultsUpdated: onResultsUpdated,
    renderPins: renderPins,
    focusMarkerForCard: focusMarkerForCard
  };
  window.PHPinsSync = window.PropertySearchMap;
  document.addEventListener("DOMContentLoaded", init);

  //window.PropertySearchMap.onResultsUpdated(url);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQy9ELElBQUksQ0FBQzVJLElBQUksRUFBRTs7SUFFWDtJQUNBRCxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDO0VBQzFCLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxTQUFTNkksSUFBSUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDaEgsZUFBZSxDQUFDLENBQUMsRUFBRTs7SUFFeEI7SUFDQWlILHFCQUFxQixDQUFDLFlBQU07TUFDMUJsRyxVQUFVLENBQUMsWUFBTTtRQUNmc0YsZ0JBQWdCLENBQUMzSixNQUFNLENBQUM0SSxRQUFRLENBQUNoRSxJQUFJLENBQUM7TUFDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNULENBQUMsQ0FBQztFQUNKOztFQUVBOztFQUVBNUUsTUFBTSxDQUFDd0ssaUJBQWlCLEdBQUc7SUFDekJGLElBQUksRUFBSkEsSUFBSTtJQUNKWCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQnZELFVBQVUsRUFBVkEsVUFBVTtJQUNWNUUsa0JBQWtCLEVBQWxCQTtFQUNGLENBQUM7RUFFRHhCLE1BQU0sQ0FBQ3lLLFVBQVUsR0FBR3pLLE1BQU0sQ0FBQ3dLLGlCQUFpQjtFQUU1Q2hILFFBQVEsQ0FBQzJHLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFRyxJQUFJLENBQUM7O0VBRW5EO0FBQ0YsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYXAtcGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIG1hcC1waW4uanNcbiAqIEN1c3RvbSBMZWFmbGV0IG1hcCBwaW4gc3luY2luZyBmb3IgUHJvcGVydHlIaXZlIHJlc3VsdHMuXG4gKlxuICogLSBEb2VzIE5PVCBtb2RpZnkgeW91ciBmaWx0ZXIgbG9naWMuXG4gKiAtIFlvdSBjYWxsOiB3aW5kb3cuUEhQaW5zU3luYy5vblJlc3VsdHNVcGRhdGVkKHVybClcbiAqICAgYWZ0ZXIgeW91IHJlcGxhY2UgdGhlIHJlc3VsdHMgSFRNTCBpbiB5b3VyIEFKQVggZmxvdy5cbiAqXG4gKiBPcHRpb25hbDpcbiAqIC0gSWYgeW91IGltcGxlbWVudCB0aGUgV1AgQUpBWCBlbmRwb2ludCBgY3VzdG9tX3BoX21hcF9tYXJrZXJzYCxcbiAqICAgc2V0IFBIUGluc1N5bmNDb25maWcudXNlQWxsTWF0Y2hlc0VuZHBvaW50ID0gdHJ1ZVxuICogICBhbmQgcGlucyB3aWxsIHJlcHJlc2VudCBBTEwgbWF0Y2hlcyAobm90IGp1c3QgY3VycmVudCBwYWdlKS5cbiAqL1xuXG4oKCkgPT4ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tIGNvbmZpZyAob3ZlcnJpZGUgdmlhIHdpbmRvdy5QSFBpbnNTeW5jQ29uZmlnKSAtLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIG1hcENvbnRhaW5lcklkOiBcImN1c3RvbS1yZXN1bHRzLW1hcFwiLFxuICAgIHJlc3VsdHNSb290U2VsZWN0b3I6IFwiI3BoLXNlYXJjaC1yZXN1bHRzXCIsXG4gICAgY2FyZFNlbGVjdG9yOiBcIi5tZWdhLWNhcmRbZGF0YS1sYXRdW2RhdGEtbG5nXVwiLFxuICAgIGNhcmRUaXRsZVNlbGVjdG9yOiBcIi5tZWdhLWNhcmRfX3RpdGxlXCIsXG4gICAgY2FyZExpbmtTZWxlY3RvcjogXCIubWVnYS1jYXJkX193aG9sZS1saW5rXCIsXG5cbiAgICBkZWZhdWx0Q2VudGVyOiBbNTMuNDgsIC0yLjI0XSxcbiAgICBkZWZhdWx0Wm9vbTogMTAsXG4gICAgZml0VG9QaW5zT25VcGRhdGU6IHRydWUsXG4gICAgZml0UGFkZGluZzogWzMwLCAzMF0sXG4gICAgbWF4Rml0Wm9vbTogMTMsXG4gICAgc2VsZWN0ZWRQaW5ab29tOiAxNixcbiAgICBjZW50ZXJTZWxlY3RlZFBpbjogdHJ1ZSxcblxuICAgIHRpbGVVcmw6IFwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIixcbiAgICB0aWxlT3B0aW9uczoge1xuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICBhdHRyaWJ1dGlvbjogXCImY29weTsgT3BlblN0cmVldE1hcCBjb250cmlidXRvcnNcIixcbiAgICB9LFxuXG4gICAgdXNlQWxsTWF0Y2hlc0VuZHBvaW50OiB0cnVlLFxuICAgIGFqYXhVcmw6IG51bGwsXG4gICAgYWpheEFjdGlvbjogXCJjdXN0b21fcGhfbWFwX21hcmtlcnNcIixcbiAgICBxdWVyeVBhcmFtTmFtZTogXCJxdWVyeVwiLFxuICAgIGV4cGVjdE1hcmtlclVybEtleTogXCJ1cmxcIixcblxuICAgIHBvcHVwTWF4V2lkdGg6IDI4MCxcbiAgICBwb3B1cENsYXNzTmFtZTogXCJwaC1sZWFmbGV0LXBvcHVwXCIsXG5cbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgfTtcblxuICAvL2NvbnN0IGNmZyA9IHsgLi4uZGVmYXVsdHMsIC4uLih3aW5kb3cuUEhQaW5zU3luY0NvbmZpZyB8fCB7fSkgfTtcbiAgY29uc3QgY2ZnID0ge1xuICAgIC4uLmRlZmF1bHRzLFxuICAgIC4uLih3aW5kb3cuUHJvcGVydHlTZWFyY2hNYXBDb25maWcgfHwge30pLFxuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gaW50ZXJuYWwgc3RhdGUgLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgbWFwID0gbnVsbDtcbiAgbGV0IGxheWVyID0gbnVsbDtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGxldCBtYXJrZXJJbmRleCA9IG5ldyBNYXAoKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIHV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgICBpZiAoY2ZnLmRlYnVnKSBjb25zb2xlLmxvZyhcIltQSFBpbnNTeW5jXVwiLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhcm4oLi4uYXJncykge1xuICAgIGNvbnNvbGUud2FybihcIltQSFBpbnNTeW5jXVwiLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHIpXG4gICAgICAucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKVxuICAgICAgLnJlcGxhY2VBbGwoXCI8XCIsIFwiJmx0O1wiKVxuICAgICAgLnJlcGxhY2VBbGwoXCI+XCIsIFwiJmd0O1wiKVxuICAgICAgLnJlcGxhY2VBbGwoJ1wiJywgXCImcXVvdDtcIilcbiAgICAgIC5yZXBsYWNlQWxsKFwiJ1wiLCBcIiYjMDM5O1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFqYXhVcmwoKSB7XG4gICAgcmV0dXJuIGNmZy5hamF4VXJsIHx8IHdpbmRvdy5hamF4dXJsIHx8IFwiL3dwLWFkbWluL2FkbWluLWFqYXgucGhwXCI7XG4gIH1cblxuICBmdW5jdGlvbiBmb2N1c01hcmtlckZvckNhcmQoY2FyZCkge1xuICAgIGlmICghY2FyZCB8fCAhbWFwKSByZXR1cm47XG5cbiAgICBjb25zdCBpZCA9IGNhcmQuZGF0YXNldC5wcm9wZXJ0eUlkO1xuICAgIGNvbnN0IGxhdCA9IE51bWJlcihjYXJkLmRhdGFzZXQubGF0KTtcbiAgICBjb25zdCBsbmcgPSBOdW1iZXIoY2FyZC5kYXRhc2V0LmxuZyk7XG5cbiAgICBsZXQgbWFya2VyID0gbnVsbDtcblxuICAgIGlmIChpZCAhPSBudWxsICYmIG1hcmtlckluZGV4LmhhcyhgaWQ6JHtpZH1gKSkge1xuICAgICAgbWFya2VyID0gbWFya2VySW5kZXguZ2V0KGBpZDoke2lkfWApO1xuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzRmluaXRlKGxhdCkgJiYgTnVtYmVyLmlzRmluaXRlKGxuZykpIHtcbiAgICAgIG1hcmtlciA9IG1hcmtlckluZGV4LmdldChgY29vcmRzOiR7bGF0fSwke2xuZ31gKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtlcikgcmV0dXJuO1xuXG4gICAgY29uc3QgbGwgPSBtYXJrZXIuZ2V0TGF0TG5nKCk7XG5cbiAgICBpZiAoY2ZnLmNlbnRlclNlbGVjdGVkUGluKSB7XG4gICAgICBtYXAuc2V0VmlldyhcbiAgICAgICAgW2xsLmxhdCwgbGwubG5nXSxcbiAgICAgICAgTWF0aC5tYXgobWFwLmdldFpvb20oKSwgY2ZnLnNlbGVjdGVkUGluWm9vbSksXG4gICAgICAgIHtcbiAgICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLnBhblRvKGxsLCB7IGFuaW1hdGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgbWFya2VyLm9wZW5Qb3B1cCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVN2Z1Bpbkljb24oKSB7XG4gICAgY29uc3Qgc3ZnID0gYFxuICAgICAgPHN2ZyB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNTdcIiB2aWV3Qm94PVwiMCAwIDQ1IDU3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjIuMTkwMSAwLjVDMTAuMjA5NyAwLjUgMC41IDEwLjI3NiAwLjUgMjIuMzM4NEMwLjUgMzcuNDI4NCAyMi4xOTAxIDU1LjUgMjIuMTkwMSA1NS41QzIyLjE5MDEgNTUuNSA0My44ODAzIDM3LjQyODQgNDMuODgwMyAyMi4zMzg0QzQzLjg4MDMgMTAuMjc4MyAzNC4xNzA2IDAuNSAyMi4xOTAxIDAuNVpcIiBmaWxsPVwiIzJEMkQzNVwiIHN0cm9rZT1cIiNGQUY4RjRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTMyLjA0OTQgMTguOTUyTDIyLjQ3MTQgMTIuODk0NUwxMi44OTQ1IDE4Ljk1MlwiIHN0cm9rZT1cIiNDMUQ0MkZcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTQuMTczOCAxOS45NzU2VjMwLjczNzRIMzAuNzcyMVYxOS45NzU2XCIgc3Ryb2tlPVwiI0MxRDQyRlwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yNC4xNDQ4IDMwLjczNjJWMjQuNDEyMUgyMC44MDI3VjMwLjczNjJcIiBzdHJva2U9XCIjQzFENDJGXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgICAgPC9zdmc+XG4gICAgYC50cmltKCk7XG5cbiAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgIGNsYXNzTmFtZTogXCJwaC1zdmctcGluXCIsXG4gICAgICBodG1sOiBzdmcsXG4gICAgICBpY29uU2l6ZTogWzQ1LCA1N10sXG4gICAgICBpY29uQW5jaG9yOiBbMjIuNSwgNTddLFxuICAgICAgcG9wdXBBbmNob3I6IFswLCAtNTddLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLSBtYXAgaW5pdCAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gaW5pdE1hcElmTmVlZGVkKCkge1xuICAgIGlmIChpbml0aWFsaXplZCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoIXdpbmRvdy5MKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIkxlYWZsZXQgbm90IGxvYWRlZC4gRW5zdXJlIGxlYWZsZXQuanMgaXMgZW5xdWV1ZWQgYmVmb3JlIG1hcC1waW4uanNcIixcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZmcubWFwQ29udGFpbmVySWQpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHdhcm4oYE1hcCBjb250YWluZXIgIyR7Y2ZnLm1hcENvbnRhaW5lcklkfSBub3QgZm91bmRgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBoID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGlmIChoIDwgNTApIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGBNYXAgY29udGFpbmVyICMke2NmZy5tYXBDb250YWluZXJJZH0gaGVpZ2h0IGlzICR7TWF0aC5yb3VuZChcbiAgICAgICAgICBoLFxuICAgICAgICApfXB4LiBMZWFmbGV0IG5lZWRzIGEgaGVpZ2h0IChlLmcuIDQwMHB4KykuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbWFwID0gTC5tYXAoZWwsIHsgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSB9KS5zZXRWaWV3KFxuICAgICAgY2ZnLmRlZmF1bHRDZW50ZXIsXG4gICAgICBjZmcuZGVmYXVsdFpvb20sXG4gICAgKTtcblxuICAgIC8vIDIuIEVuYWJsZSB6b29tIHdoZW4gdGhleSBjbGljay9pbnRlcmFjdCB3aXRoIHRoZSBtYXBcbiAgICBtYXAub24oXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBtYXAuc2Nyb2xsV2hlZWxab29tLmVuYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gMy4gRGlzYWJsZSBpdCBhZ2FpbiB3aGVuIHRoZXkgY2xpY2sgYXdheVxuICAgIG1hcC5vbihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgbWFwLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgfSk7XG5cbiAgICBMLnRpbGVMYXllcihjZmcudGlsZVVybCwgY2ZnLnRpbGVPcHRpb25zKS5hZGRUbyhtYXApO1xuXG4gICAgbGF5ZXIgPSBMLmxheWVyR3JvdXAoKS5hZGRUbyhtYXApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBtYXAuaW52YWxpZGF0ZVNpemUodHJ1ZSk7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfSwgNTApO1xuXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGxvZyhcIk1hcCBpbml0aWFsaXNlZFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gcG9wdXAgSFRNTCAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gYnVpbGRQb3B1cEh0bWwocCkge1xuICAgIGNvbnN0IHRpdGxlID0gZXNjYXBlSHRtbChwLnRpdGxlIHx8IFwiUHJvcGVydHlcIik7XG5cbiAgICBjb25zdCBsaW5rID0gcC51cmwgfHwgcC5ocmVmIHx8IHBbY2ZnLmV4cGVjdE1hcmtlclVybEtleV0gfHwgXCIjXCI7XG4gICAgY29uc3Qgc2FmZUxpbmsgPSBsaW5rID8gU3RyaW5nKGxpbmspIDogXCIjXCI7XG5cbiAgICAvLyBUaGVzZSBtYXkgYmUgbWlzc2luZyBpZiBtYXJrZXJzIGNhbWUgZnJvbSBBTEwgZW5kcG9pbnQgYW5kIHlvdSBoYXZlbuKAmXQgYWRkZWQgdGhlbSB0aGVyZSB5ZXRcbiAgICBjb25zdCBwcmljZSA9IHAucHJpY2UgPyBlc2NhcGVIdG1sKHAucHJpY2UpIDogXCJcIjtcbiAgICBjb25zdCBhZGRyZXNzID0gcC5hZGRyZXNzID8gZXNjYXBlSHRtbChwLmFkZHJlc3MpIDogXCJcIjtcbiAgICBjb25zdCBiZWRzID0gcC5iZWRzID8gZXNjYXBlSHRtbChwLmJlZHMpIDogXCJcIjtcbiAgICBjb25zdCBpbWcgPSBwLmltYWdlID8gU3RyaW5nKHAuaW1hZ2UpIDogXCJcIjtcbiAgICBjb25zdCBzb2xkID0gISFwLnNvbGQ7XG5cbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cInBoLXBvcHVwXCI+XG4gICAgICAgICR7XG4gICAgICAgICAgaW1nXG4gICAgICAgICAgICA/IGA8YSBjbGFzcz1cInBoLXBvcHVwX19pbWdXcmFwXCIgaHJlZj1cIiR7c2FmZUxpbmt9XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBoLXBvcHVwX19pbWdcIiBzcmM9XCIke2ltZ31cIiBhbHQ9XCIke3RpdGxlfVwiIGxvYWRpbmc9XCJsYXp5XCI+XG4gICAgICAgICAgICAgIDwvYT5gXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaC1wb3B1cF9fYm9keVwiPlxuICAke3NvbGQgPyBgPGRpdiBjbGFzcz1cInBoLXBvcHVwX190YWdcIj5KdXN0IHNvbGQ8L2Rpdj5gIDogXCJcIn1cblxuICA8YSBjbGFzcz1cInBoLXBvcHVwX190aXRsZVwiIGhyZWY9XCIke3NhZmVMaW5rfVwiPiR7dGl0bGV9PC9hPlxuXG4gICR7XG4gICAgcHJpY2UgfHwgYmVkc1xuICAgICAgPyBgPGRpdiBjbGFzcz1cInBoLXBvcHVwX19tZXRhXCI+XG4gICAgICAgICAgJHtwcmljZSA/IGA8c3BhbiBjbGFzcz1cInBoLXBvcHVwX19wcmljZVwiPiR7cHJpY2V9PC9zcGFuPmAgOiBcIlwifVxuXG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGJlZHNcbiAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTggYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAyMCAxNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xLjgzMzk4IDcuODQyODhWMy4yNDQ3MUMxLjgzMzk4IDEuNzI4NjYgMi45MzI2NiAwLjUgNC4yODgzMSAwLjVIMTQuNzMzQzE2LjA4ODYgMC41IDE3LjE4NzMgMS43Mjg2NiAxNy4xODczIDMuMjQ0NzFWNy44NDI4OFwiIHN0cm9rZT1cIiNCOEI5QkRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG48cGF0aCBkPVwiTTMuNDYyMzEgMTMuMTIzVjE0LjQ1ODRIMi4xMjY5NVYxMy4xMjNcIiBzdHJva2U9XCIjQjhCOUJEXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuPHBhdGggZD1cIk0xNi44MTU4IDEzLjEyM1YxNC40NTg0SDE1LjQ4MDVWMTMuMTIzXCIgc3Ryb2tlPVwiI0I4QjlCRFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbjxwYXRoIGQ9XCJNMTYuNDg5IDcuODQyNzdIMi41MzU0QzEuNDExMiA3Ljg0Mjc3IDAuNSA4Ljc3MTU1IDAuNSA5LjkxNzQyVjExLjg0OEgxOC41MjM0VjkuOTE3NDJDMTguNTIzNCA4Ljc3MTU1IDE3LjYxMjIgNy44NDI3NyAxNi40ODggNy44NDI3N0gxNi40ODlaXCIgc3Ryb2tlPVwiI0I4QjlCRFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbjxwYXRoIGQ9XCJNMTUuNTc4NCA3LjM2ODc3VjUuNTEyQzE1LjU3ODQgNC45MjE4OSAxNS4xNDg2IDQuNDQ0MzQgMTQuNjE3MyA0LjQ0NDM0SDExLjI3NTVDMTAuNzQ0MyA0LjQ0NDM0IDEwLjMxNDUgNC45MjE4OSAxMC4zMTQ1IDUuNTEyVjcuMzY4NzdcIiBzdHJva2U9XCIjQjhCOUJEXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuPHBhdGggZD1cIk04Ljg1NTUyIDcuMzY4NzdWNS41MTJDOC44NTU1MiA0LjkyMTg5IDguNDEzNyA0LjQ0NDM0IDcuODY3NzMgNC40NDQzNEg0LjQzMzFDMy44ODcxMyA0LjQ0NDM0IDMuNDQ1MzEgNC45MjE4OSAzLjQ0NTMxIDUuNTEyVjcuMzY4NzdcIiBzdHJva2U9XCIjQjhCOUJEXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBoLXBvcHVwX19iZWRzXCI+JHtiZWRzfSBiZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PmBcbiAgICAgIDogXCJcIlxuICB9XG5cbiAgJHthZGRyZXNzID8gYDxkaXYgY2xhc3M9XCJwaC1wb3B1cF9fYWRkclwiPiR7YWRkcmVzc308L2Rpdj5gIDogXCJcIn1cbjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gZXh0cmFjdCBtYXJrZXJzIGZyb20gRE9NIChjdXJyZW50IHBhZ2UpIC0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBleHRyYWN0TWFya2Vyc0Zyb21Eb20oKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2ZnLnJlc3VsdHNSb290U2VsZWN0b3IpO1xuICAgIGlmICghcm9vdCkge1xuICAgICAgd2FybihgUmVzdWx0cyByb290IG5vdCBmb3VuZDogJHtjZmcucmVzdWx0c1Jvb3RTZWxlY3Rvcn1gKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChjZmcuY2FyZFNlbGVjdG9yKTtcbiAgICBsb2coXCJET00gY2FyZHMgZm91bmQ6XCIsIGNhcmRzLmxlbmd0aCk7XG5cbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBsYXQgPSBOdW1iZXIoY2FyZC5kYXRhc2V0LmxhdCk7XG4gICAgICBjb25zdCBsbmcgPSBOdW1iZXIoY2FyZC5kYXRhc2V0LmxuZyk7XG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobG5nKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcihjZmcuY2FyZFRpdGxlU2VsZWN0b3IpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8XG4gICAgICAgIFwiUHJvcGVydHlcIjtcblxuICAgICAgY29uc3QgaHJlZiA9XG4gICAgICAgIGNhcmQuZGF0YXNldC5jYXJkSHJlZiB8fFxuICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoY2ZnLmNhcmRMaW5rU2VsZWN0b3IpPy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8XG4gICAgICAgIG51bGw7XG5cbiAgICAgIC8vIGV4dHJhIGZpZWxkcyBmcm9tIGRhdGEtYXR0cnNcbiAgICAgIGNvbnN0IHByaWNlID0gY2FyZC5kYXRhc2V0LnByaWNlIHx8IFwiXCI7XG4gICAgICBjb25zdCBiZWRzID0gY2FyZC5kYXRhc2V0LmJlZHMgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBjYXJkLmRhdGFzZXQuYWRkcmVzcyB8fCBcIlwiO1xuICAgICAgY29uc3QgaW1hZ2UgPSBjYXJkLmRhdGFzZXQuaW1hZ2UgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNvbGQgPSBjYXJkLmRhdGFzZXQuc29sZCA9PT0gXCIxXCI7XG5cbiAgICAgIG91dC5wdXNoKHsgbGF0LCBsbmcsIHRpdGxlLCBocmVmLCBwcmljZSwgYmVkcywgYWRkcmVzcywgaW1hZ2UsIHNvbGQgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBEZS1kdXBlIGNvb3Jkc1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIG91dC5maWx0ZXIoKG0pID0+IHtcbiAgICAgIGNvbnN0IGsgPSBgJHttLmxhdC50b0ZpeGVkKDYpfSwke20ubG5nLnRvRml4ZWQoNil9YDtcbiAgICAgIGlmIChzZWVuLmhhcyhrKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgc2Vlbi5hZGQoayk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gcmVuZGVyIHBpbnMgLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBpbnMobWFya2VycywgeyBmaXQgfSA9IHt9KSB7XG4gICAgaWYgKCFpbml0TWFwSWZOZWVkZWQoKSkgcmV0dXJuO1xuXG4gICAgaWYgKG1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIvCflI4gRmlyc3QgbWFya2VyIHNhbXBsZTpcIiwgbWFya2Vyc1swXSk7XG4gICAgfVxuXG4gICAgbGF5ZXIuY2xlYXJMYXllcnMoKTtcbiAgICBtYXJrZXJJbmRleC5jbGVhcigpO1xuXG4gICAgaWYgKCFtYXJrZXJzIHx8ICFtYXJrZXJzLmxlbmd0aCkge1xuICAgICAgbG9nKFwiTm8gbWFya2VycyB0byByZW5kZXJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGluSWNvbiA9IG1ha2VTdmdQaW5JY29uKCk7XG4gICAgY29uc3QgcG9wdXBPcHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjZmcucG9wdXBDbGFzc05hbWUsXG4gICAgICBtYXhXaWR0aDogY2ZnLnBvcHVwTWF4V2lkdGgsXG4gICAgfTtcblxuICAgIG1hcmtlcnMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoW3AubGF0LCBwLmxuZ10sIHsgaWNvbjogcGluSWNvbiB9KTtcbiAgICAgIG1hcmtlci5iaW5kUG9wdXAoYnVpbGRQb3B1cEh0bWwocCksIHBvcHVwT3B0cyk7XG5cbiAgICAgIG1hcmtlci5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGwgPSBtYXJrZXIuZ2V0TGF0TG5nKCk7XG4gICAgICAgIG1hcC5wYW5UbyhsbCwgeyBhbmltYXRlOiB0cnVlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGxheWVyLmFkZExheWVyKG1hcmtlcik7XG5cbiAgICAgIGlmIChwLmlkICE9IG51bGwpIHtcbiAgICAgICAgbWFya2VySW5kZXguc2V0KGBpZDoke3AuaWR9YCwgbWFya2VyKTtcbiAgICAgIH1cbiAgICAgIG1hcmtlckluZGV4LnNldChgY29vcmRzOiR7cC5sYXR9LCR7cC5sbmd9YCwgbWFya2VyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3VsZEZpdCA9IHR5cGVvZiBmaXQgPT09IFwiYm9vbGVhblwiID8gZml0IDogISFjZmcuZml0VG9QaW5zT25VcGRhdGU7XG5cbiAgICBpZiAoc2hvdWxkRml0KSB7XG4gICAgICBpZiAobWFya2Vycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3Qgb25seSA9IG1hcmtlcnNbMF07XG4gICAgICAgIG1hcC5zZXRWaWV3KFxuICAgICAgICAgIFtvbmx5LmxhdCwgb25seS5sbmddLFxuICAgICAgICAgIE1hdGgubWluKGNmZy5zZWxlY3RlZFBpblpvb20sIGNmZy5tYXhGaXRab29tKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBbbS5sYXQsIG0ubG5nXSkpO1xuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG5cbiAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMsIHtcbiAgICAgICAgICBwYWRkaW5nVG9wTGVmdDogaXNNb2JpbGUgPyBbMTIwLCAxMjBdIDogWzIyMCwgMjIwXSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IGlzTW9iaWxlID8gWzEyMCwgMTIwXSA6IFsyMjAsIDIyMF0sXG4gICAgICAgICAgbWF4Wm9vbTogMTAsIC8vIPCfkYggVEhJUyBpcyB0aGUga2V5IGNoYW5nZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1hcC5pbnZhbGlkYXRlU2l6ZSh0cnVlKTtcbiAgICAgIH0gY2F0Y2gge31cbiAgICB9LCA1MCk7XG5cbiAgICBsb2coXCJSZW5kZXJlZCBtYXJrZXJzOlwiLCBtYXJrZXJzLmxlbmd0aCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIG9wdGlvbmFsOiBmZXRjaCBBTEwgbWF0Y2hpbmcgbWFya2VycyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxNYXJrZXJzRm9yTWFwKHVybEZvclF1ZXJ5KSB7XG4gICAgY29uc3QgdSA9IG5ldyBVUkwoXG4gICAgICB1cmxGb3JRdWVyeSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICk7XG4gICAgY29uc3QgcXMgPSB1LnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgXCJcIik7XG5cbiAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGJvZHkuc2V0KFwiYWN0aW9uXCIsIGNmZy5hamF4QWN0aW9uKTtcbiAgICBib2R5LnNldChjZmcucXVlcnlQYXJhbU5hbWUsIHFzKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdldEFqYXhVcmwoKSwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgIH0sXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgYm9keTogYm9keS50b1N0cmluZygpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cbiAgICBsZXQganNvbjtcbiAgICB0cnkge1xuICAgICAganNvbiA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgZW5kcG9pbnQgcmV0dXJuZWQgbm9uLUpTT046XCIsIHRleHQuc2xpY2UoMCwgMzAwKSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBTEwgbWFya2VycyBlbmRwb2ludCBub24tSlNPTlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWpzb24/LnN1Y2Nlc3MpIHtcbiAgICAgIHdhcm4oXCJBTEwgbWFya2VycyBlbmRwb2ludCBlcnJvciBwYXlsb2FkOlwiLCBqc29uKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFMTCBtYXJrZXJzIGVuZHBvaW50IGZhaWxlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJzID0ganNvbi5kYXRhPy5tYXJrZXJzIHx8IFtdO1xuICAgIGxvZyhcIkFMTCBtYXJrZXJzIHJldHVybmVkOlwiLCBtYXJrZXJzLmxlbmd0aCk7XG4gICAgcmV0dXJuIG1hcmtlcnM7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIHB1YmxpYyBBUEkgLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uUmVzdWx0c1VwZGF0ZWQodXJsRm9yUXVlcnkpIHtcbiAgICBjb25zdCBwYWdlTWFya2VycyA9IGV4dHJhY3RNYXJrZXJzRnJvbURvbSgpO1xuICAgIGxvZyhcIlBhZ2UgbWFya2VyczpcIiwgcGFnZU1hcmtlcnMubGVuZ3RoKTtcblxuICAgIGlmICghY2ZnLnVzZUFsbE1hdGNoZXNFbmRwb2ludCkge1xuICAgICAgcmVuZGVyUGlucyhwYWdlTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsTWFya2VycyA9IGF3YWl0IGZldGNoQWxsTWFya2Vyc0Zvck1hcCh1cmxGb3JRdWVyeSk7XG5cbiAgICAgIC8vIElmIGVuZHBvaW50IGRvZXMgTk9UIGluY2x1ZGUgdGhlIGV4dHJhIGZpZWxkcywgcG9wdXBzIHdpbGwgc2hvdyBiYXNpYyBpbmZvLlxuICAgICAgLy8gSWYgZW5kcG9pbnQgcmV0dXJucyAwIGJ1dCBwYWdlIGhhcyBwaW5zLCBmYWxsIGJhY2suXG4gICAgICBpZiAoYWxsTWFya2Vycy5sZW5ndGggPT09IDAgJiYgcGFnZU1hcmtlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgcmV0dXJuZWQgMCBidXQgcGFnZSBoYXMgcmVzdWx0czsgdXNpbmcgcGFnZSBtYXJrZXJzXCIpO1xuICAgICAgICByZW5kZXJQaW5zKHBhZ2VNYXJrZXJzLCB7IGZpdDogY2ZnLmZpdFRvUGluc09uVXBkYXRlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbmRlclBpbnMoYWxsTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgZmFpbGVkOyBmYWxsaW5nIGJhY2sgdG8gcGFnZSBtYXJrZXJzXCIsIGUpO1xuICAgICAgcmVuZGVyUGlucyhwYWdlTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZS50YXJnZXQuY2xvc2VzdChcIi5tZWdhLWNhcmRbZGF0YS1sYXRdW2RhdGEtbG5nXVwiKTtcbiAgICBpZiAoIWNhcmQpIHJldHVybjtcblxuICAgIC8vIGlnbm9yZSBjbGlja3Mgb24gaW50ZXJuYWwgYnV0dG9ucy9saW5rcyB5b3UgZG9uJ3Qgd2FudCB0byBoaWphY2tcbiAgICBmb2N1c01hcmtlckZvckNhcmQoY2FyZCk7XG4gIH0pO1xuXG4gIC8vIGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vICAgaW5pdE1hcElmTmVlZGVkKCk7XG4gIC8vICAgb25SZXN1bHRzVXBkYXRlZCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8vIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghaW5pdE1hcElmTmVlZGVkKCkpIHJldHVybjtcblxuICAgIC8vIHdhaXQgZm9yIGxheW91dCArIENTUyArIHJlc3VsdHMgRE9NXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvblJlc3VsdHNVcGRhdGVkKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfSk7XG4gIH1cblxuICAvL3dpbmRvdy5QSFBpbnNTeW5jID0geyBpbml0LCBvblJlc3VsdHNVcGRhdGVkLCByZW5kZXJQaW5zIH07XG5cbiAgd2luZG93LlByb3BlcnR5U2VhcmNoTWFwID0ge1xuICAgIGluaXQsXG4gICAgb25SZXN1bHRzVXBkYXRlZCxcbiAgICByZW5kZXJQaW5zLFxuICAgIGZvY3VzTWFya2VyRm9yQ2FyZCxcbiAgfTtcblxuICB3aW5kb3cuUEhQaW5zU3luYyA9IHdpbmRvdy5Qcm9wZXJ0eVNlYXJjaE1hcDtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuICAvL3dpbmRvdy5Qcm9wZXJ0eVNlYXJjaE1hcC5vblJlc3VsdHNVcGRhdGVkKHVybCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiX29iamVjdFNwcmVhZCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiZGVmYXVsdHMiLCJtYXBDb250YWluZXJJZCIsInJlc3VsdHNSb290U2VsZWN0b3IiLCJjYXJkU2VsZWN0b3IiLCJjYXJkVGl0bGVTZWxlY3RvciIsImNhcmRMaW5rU2VsZWN0b3IiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJmaXRUb1BpbnNPblVwZGF0ZSIsImZpdFBhZGRpbmciLCJtYXhGaXRab29tIiwic2VsZWN0ZWRQaW5ab29tIiwiY2VudGVyU2VsZWN0ZWRQaW4iLCJ0aWxlVXJsIiwidGlsZU9wdGlvbnMiLCJtYXhab29tIiwiYXR0cmlidXRpb24iLCJ1c2VBbGxNYXRjaGVzRW5kcG9pbnQiLCJhamF4VXJsIiwiYWpheEFjdGlvbiIsInF1ZXJ5UGFyYW1OYW1lIiwiZXhwZWN0TWFya2VyVXJsS2V5IiwicG9wdXBNYXhXaWR0aCIsInBvcHVwQ2xhc3NOYW1lIiwiZGVidWciLCJjZmciLCJ3aW5kb3ciLCJQcm9wZXJ0eVNlYXJjaE1hcENvbmZpZyIsIm1hcCIsImxheWVyIiwiaW5pdGlhbGl6ZWQiLCJtYXJrZXJJbmRleCIsIk1hcCIsImxvZyIsIl9jb25zb2xlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25zb2xlIiwiY29uY2F0Iiwid2FybiIsIl9jb25zb2xlMiIsIl9sZW4yIiwiX2tleTIiLCJlc2NhcGVIdG1sIiwic3RyIiwicmVwbGFjZUFsbCIsImdldEFqYXhVcmwiLCJhamF4dXJsIiwiZm9jdXNNYXJrZXJGb3JDYXJkIiwiY2FyZCIsImlkIiwiZGF0YXNldCIsInByb3BlcnR5SWQiLCJsYXQiLCJsbmciLCJtYXJrZXIiLCJoYXMiLCJnZXQiLCJpc0Zpbml0ZSIsImxsIiwiZ2V0TGF0TG5nIiwic2V0VmlldyIsIk1hdGgiLCJtYXgiLCJnZXRab29tIiwiYW5pbWF0ZSIsInBhblRvIiwib3BlblBvcHVwIiwibWFrZVN2Z1Bpbkljb24iLCJzdmciLCJ0cmltIiwiTCIsImRpdkljb24iLCJjbGFzc05hbWUiLCJodG1sIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJpbml0TWFwSWZOZWVkZWQiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwicm91bmQiLCJzY3JvbGxXaGVlbFpvb20iLCJvbiIsImVuYWJsZSIsImRpc2FibGUiLCJ0aWxlTGF5ZXIiLCJhZGRUbyIsImxheWVyR3JvdXAiLCJzZXRUaW1lb3V0IiwiaW52YWxpZGF0ZVNpemUiLCJfdW51c2VkIiwiYnVpbGRQb3B1cEh0bWwiLCJ0aXRsZSIsImxpbmsiLCJ1cmwiLCJocmVmIiwic2FmZUxpbmsiLCJwcmljZSIsImFkZHJlc3MiLCJiZWRzIiwiaW1nIiwiaW1hZ2UiLCJzb2xkIiwiZXh0cmFjdE1hcmtlcnNGcm9tRG9tIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvdXQiLCJfY2FyZCRxdWVyeVNlbGVjdG9yIiwiX2NhcmQkcXVlcnlTZWxlY3RvcjIiLCJ0ZXh0Q29udGVudCIsImNhcmRIcmVmIiwiZ2V0QXR0cmlidXRlIiwic2VlbiIsIlNldCIsImsiLCJ0b0ZpeGVkIiwiYWRkIiwicmVuZGVyUGlucyIsIm1hcmtlcnMiLCJfcmVmIiwidW5kZWZpbmVkIiwiZml0IiwiY2xlYXJMYXllcnMiLCJjbGVhciIsInBpbkljb24iLCJwb3B1cE9wdHMiLCJtYXhXaWR0aCIsImljb24iLCJiaW5kUG9wdXAiLCJhZGRMYXllciIsInNldCIsInNob3VsZEZpdCIsIm9ubHkiLCJtaW4iLCJib3VuZHMiLCJsYXRMbmdCb3VuZHMiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJmaXRCb3VuZHMiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsIl91bnVzZWQyIiwiZmV0Y2hBbGxNYXJrZXJzRm9yTWFwIiwiX3giLCJfZmV0Y2hBbGxNYXJrZXJzRm9yTWFwIiwiX2NhbGxlZSIsInVybEZvclF1ZXJ5IiwiX2pzb24iLCJfanNvbiRkYXRhIiwicXMiLCJib2R5IiwicmVzIiwidGV4dCIsImpzb24iLCJfdCIsIl9jb250ZXh0IiwiVVJMIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsInNsaWNlIiwiRXJyb3IiLCJzdWNjZXNzIiwiZGF0YSIsIm9uUmVzdWx0c1VwZGF0ZWQiLCJfeDIiLCJfb25SZXN1bHRzVXBkYXRlZCIsIl9jYWxsZWUyIiwicGFnZU1hcmtlcnMiLCJhbGxNYXJrZXJzIiwiX3QyIiwiX2NvbnRleHQyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNsb3Nlc3QiLCJpbml0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUHJvcGVydHlTZWFyY2hNYXAiLCJQSFBpbnNTeW5jIl0sInNvdXJjZVJvb3QiOiIifQ==
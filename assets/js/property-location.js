(() => {
  const sectionSelector = ".property-location";
  const mapContainerId = "property-location-map";

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
    });
  }

  function init() {
    const section = document.querySelector(sectionSelector);
    const mapEl = document.getElementById(mapContainerId);
    if (!section || !mapEl) return;

    if (!window.L) {
      console.warn(
        "[PropertyLocationMap] Leaflet not loaded (window.L missing)",
      );
      return;
    }

    const lat = Number(section.dataset.lat);
    const lng = Number(section.dataset.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    // If theme re-renders this block, prevent "already initialised" errors
    if (mapEl._leaflet_id) {
      mapEl._leaflet_id = null;
      mapEl.innerHTML = "";
    }

    const map = L.map(mapEl, {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView([lat, lng], 15);

    // 2. Enable zoom when they click/interact with the map
    map.on("focus", () => {
      map.scrollWheelZoom.enable();
    });

    // 3. Disable it again when they click away
    map.on("blur", () => {
      map.scrollWheelZoom.disable();
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // ✅ single pin, no popup
    L.marker([lat, lng], { icon: makeSvgPinIcon() }).addTo(map);

    // ✅ redraw fixes if inside layout shifts / accordions etc
    requestAnimationFrame(() => map.invalidateSize(true));
    setTimeout(() => map.invalidateSize(true), 300);
  }

  document.addEventListener("DOMContentLoaded", init);
})();

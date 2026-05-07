/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./assets/js/branch-listing-map.js ***!
  \*****************************************/
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
(function () {
  // ---------------- config (override via window.PHPinsSyncConfig) ----------------
  var defaults = {
    mapContainerId: "branch-listing-map",
    resultsRootSelector: ".inner-wrap",
    cardSelector: ".card a[data-lat][data-lng]",
    cardTitleSelector: ".card__title",
    cardLinkSelector: ":scope",
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
    ajaxUrl: null,
    ajaxAction: "custom_ph_map_markers",
    queryParamName: "query",
    expectMarkerUrlKey: "url",
    popupMaxWidth: 280,
    popupClassName: "ph-leaflet-popup",
    debug: true
  };

  //const cfg = { ...defaults, ...(window.PHPinsSyncConfig || {}) };
  var cfg = _objectSpread(_objectSpread({}, defaults), window.BranchListingMapConfig || {});

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
    var title = escapeHtml(p.title || "Branch");
    var link = p.href || "#";
    var img = p.image || "";
    return "\n    <div class=\"ph-popup-simple\">\n      ".concat(img ? "<a href=\"".concat(link, "\" class=\"ph-popup-simple__imgWrap\">\n               <img src=\"").concat(img, "\" alt=\"").concat(title, "\" loading=\"lazy\" />\n             </a>") : "", "\n\n      <a href=\"").concat(link, "\" class=\"ph-popup-simple__title\">\n        ").concat(title, "\n      </a>\n    </div>\n  ");
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
      var latRaw = Number(card.dataset.lat);
      var lngRaw = Number(card.dataset.lng);
      if (!latRaw || !lngRaw) return;
      var lat = parseFloat(latRaw);
      var lng = parseFloat(lngRaw);
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
  } // CLICK HANDLER
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
    var btn = e.target.closest(".branch-listing .button");
    if (!btn) return;
    var view = btn.dataset.view;
    if (!view) return;
    e.preventDefault();
    var mapEl = document.getElementById("branch-listing-map");
    var grid = document.querySelector(".inner-wrap");
    document.querySelectorAll(".branch-listing .button").forEach(function (b) {
      return b.classList.remove("is-active");
    });
    btn.classList.add("is-active");
    if (view === "map") {
      mapEl.style.display = "block";
      grid.style.display = "none";
      requestAnimationFrame(function () {
        window.BranchListingMap.init();
        setTimeout(function () {
          var _window$BranchListing, _window$BranchListing2;
          var m = (_window$BranchListing = (_window$BranchListing2 = window.BranchListingMap).getMap) === null || _window$BranchListing === void 0 ? void 0 : _window$BranchListing.call(_window$BranchListing2);
          if (m) m.invalidateSize();
        }, 200);
      });
    }
    if (view === "grid") {
      mapEl.style.display = "none";
      grid.style.display = "grid";
    }
  });

  // INIT MAP

  function init() {
    if (!initMapIfNeeded()) return;
    requestAnimationFrame(function () {
      setTimeout(function () {
        onResultsUpdated(window.location.href);
      }, 150);
    });
  }
  function getMap() {
    return map;
  }

  //window.PHPinsSync = { init, onResultsUpdated, renderPins, getMap };

  window.BranchListingMap = {
    init: init,
    onResultsUpdated: onResultsUpdated,
    renderPins: renderPins,
    getMap: getMap
  };
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLEdBQUcsQ0FBQUMsc0JBQUEsR0FBQXRMLE1BQU0sQ0FBQ21MLGdCQUFnQixFQUFDSSxNQUFNLGNBQUFGLHFCQUFBLHVCQUE5QkEscUJBQUEsQ0FBQTFQLElBQUEsQ0FBQTJQLHNCQUFpQyxDQUFDO1VBQzVDLElBQUloUCxDQUFDLEVBQUVBLENBQUMsQ0FBQ2dJLGNBQWMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDVCxDQUFDLENBQUM7SUFDSjtJQUVBLElBQUltRyxJQUFJLEtBQUssTUFBTSxFQUFFO01BQ25CRSxLQUFLLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDNUJMLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUM3QjtFQUNGLENBQUMsQ0FBQzs7RUFFRjs7RUFFQSxTQUFTRyxJQUFJQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUM5SCxlQUFlLENBQUMsQ0FBQyxFQUFFO0lBRXhCNEgscUJBQXFCLENBQUMsWUFBTTtNQUMxQjdHLFVBQVUsQ0FBQyxZQUFNO1FBQ2Z1RixnQkFBZ0IsQ0FBQzVKLE1BQU0sQ0FBQzZJLFFBQVEsQ0FBQ2xFLElBQUksQ0FBQztNQUN4QyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1QsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTNEcsTUFBTUEsQ0FBQSxFQUFHO0lBQ2hCLE9BQU9yTCxHQUFHO0VBQ1o7O0VBRUE7O0VBRUFGLE1BQU0sQ0FBQ21MLGdCQUFnQixHQUFHO0lBQ3hCQyxJQUFJLEVBQUpBLElBQUk7SUFDSnhCLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCdkQsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZrRixNQUFNLEVBQU5BO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYnJhbmNoLWxpc3RpbmctbWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gY29uZmlnIChvdmVycmlkZSB2aWEgd2luZG93LlBIUGluc1N5bmNDb25maWcpIC0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbWFwQ29udGFpbmVySWQ6IFwiYnJhbmNoLWxpc3RpbmctbWFwXCIsXG4gICAgcmVzdWx0c1Jvb3RTZWxlY3RvcjogXCIuaW5uZXItd3JhcFwiLFxuICAgIGNhcmRTZWxlY3RvcjogXCIuY2FyZCBhW2RhdGEtbGF0XVtkYXRhLWxuZ11cIixcbiAgICBjYXJkVGl0bGVTZWxlY3RvcjogXCIuY2FyZF9fdGl0bGVcIixcbiAgICBjYXJkTGlua1NlbGVjdG9yOiBcIjpzY29wZVwiLFxuXG4gICAgZGVmYXVsdENlbnRlcjogWzUzLjQ4LCAtMi4yNF0sXG4gICAgZGVmYXVsdFpvb206IDEwLFxuICAgIGZpdFRvUGluc09uVXBkYXRlOiB0cnVlLFxuICAgIGZpdFBhZGRpbmc6IFszMCwgMzBdLFxuICAgIG1heEZpdFpvb206IDEzLFxuICAgIHNlbGVjdGVkUGluWm9vbTogMTYsXG4gICAgY2VudGVyU2VsZWN0ZWRQaW46IHRydWUsXG5cbiAgICB0aWxlVXJsOiBcImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCIsXG4gICAgdGlsZU9wdGlvbnM6IHtcbiAgICAgIG1heFpvb206IDE5LFxuICAgICAgYXR0cmlidXRpb246IFwiJmNvcHk7IE9wZW5TdHJlZXRNYXAgY29udHJpYnV0b3JzXCIsXG4gICAgfSxcblxuICAgIGFqYXhVcmw6IG51bGwsXG4gICAgYWpheEFjdGlvbjogXCJjdXN0b21fcGhfbWFwX21hcmtlcnNcIixcbiAgICBxdWVyeVBhcmFtTmFtZTogXCJxdWVyeVwiLFxuICAgIGV4cGVjdE1hcmtlclVybEtleTogXCJ1cmxcIixcblxuICAgIHBvcHVwTWF4V2lkdGg6IDI4MCxcbiAgICBwb3B1cENsYXNzTmFtZTogXCJwaC1sZWFmbGV0LXBvcHVwXCIsXG5cbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgfTtcblxuICAvL2NvbnN0IGNmZyA9IHsgLi4uZGVmYXVsdHMsIC4uLih3aW5kb3cuUEhQaW5zU3luY0NvbmZpZyB8fCB7fSkgfTtcbiAgY29uc3QgY2ZnID0ge1xuICAgIC4uLmRlZmF1bHRzLFxuICAgIC4uLih3aW5kb3cuQnJhbmNoTGlzdGluZ01hcENvbmZpZyB8fCB7fSksXG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLSBpbnRlcm5hbCBzdGF0ZSAtLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBtYXAgPSBudWxsO1xuICBsZXQgbGF5ZXIgPSBudWxsO1xuICBsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgbGV0IG1hcmtlckluZGV4ID0gbmV3IE1hcCgpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gdXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBsb2coLi4uYXJncykge1xuICAgIGlmIChjZmcuZGVidWcpIGNvbnNvbGUubG9nKFwiW1BIUGluc1N5bmNdXCIsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FybiguLi5hcmdzKSB7XG4gICAgY29uc29sZS53YXJuKFwiW1BIUGluc1N5bmNdXCIsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cilcbiAgICAgIC5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpXG4gICAgICAucmVwbGFjZUFsbChcIjxcIiwgXCImbHQ7XCIpXG4gICAgICAucmVwbGFjZUFsbChcIj5cIiwgXCImZ3Q7XCIpXG4gICAgICAucmVwbGFjZUFsbCgnXCInLCBcIiZxdW90O1wiKVxuICAgICAgLnJlcGxhY2VBbGwoXCInXCIsIFwiJiMwMzk7XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWpheFVybCgpIHtcbiAgICByZXR1cm4gY2ZnLmFqYXhVcmwgfHwgd2luZG93LmFqYXh1cmwgfHwgXCIvd3AtYWRtaW4vYWRtaW4tYWpheC5waHBcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvY3VzTWFya2VyRm9yQ2FyZChjYXJkKSB7XG4gICAgaWYgKCFjYXJkIHx8ICFtYXApIHJldHVybjtcblxuICAgIGNvbnN0IGlkID0gY2FyZC5kYXRhc2V0LnByb3BlcnR5SWQ7XG4gICAgY29uc3QgbGF0ID0gTnVtYmVyKGNhcmQuZGF0YXNldC5sYXQpO1xuICAgIGNvbnN0IGxuZyA9IE51bWJlcihjYXJkLmRhdGFzZXQubG5nKTtcblxuICAgIGxldCBtYXJrZXIgPSBudWxsO1xuXG4gICAgaWYgKGlkICE9IG51bGwgJiYgbWFya2VySW5kZXguaGFzKGBpZDoke2lkfWApKSB7XG4gICAgICBtYXJrZXIgPSBtYXJrZXJJbmRleC5nZXQoYGlkOiR7aWR9YCk7XG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNGaW5pdGUobGF0KSAmJiBOdW1iZXIuaXNGaW5pdGUobG5nKSkge1xuICAgICAgbWFya2VyID0gbWFya2VySW5kZXguZ2V0KGBjb29yZHM6JHtsYXR9LCR7bG5nfWApO1xuICAgIH1cblxuICAgIGlmICghbWFya2VyKSByZXR1cm47XG5cbiAgICBjb25zdCBsbCA9IG1hcmtlci5nZXRMYXRMbmcoKTtcblxuICAgIGlmIChjZmcuY2VudGVyU2VsZWN0ZWRQaW4pIHtcbiAgICAgIG1hcC5zZXRWaWV3KFxuICAgICAgICBbbGwubGF0LCBsbC5sbmddLFxuICAgICAgICBNYXRoLm1heChtYXAuZ2V0Wm9vbSgpLCBjZmcuc2VsZWN0ZWRQaW5ab29tKSxcbiAgICAgICAge1xuICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXAucGFuVG8obGwsIHsgYW5pbWF0ZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBtYXJrZXIub3BlblBvcHVwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU3ZnUGluSWNvbigpIHtcbiAgICBjb25zdCBzdmcgPSBgXG4gICAgICA8c3ZnIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI1N1wiIHZpZXdCb3g9XCIwIDAgNDUgNTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yMi4xOTAxIDAuNUMxMC4yMDk3IDAuNSAwLjUgMTAuMjc2IDAuNSAyMi4zMzg0QzAuNSAzNy40Mjg0IDIyLjE5MDEgNTUuNSAyMi4xOTAxIDU1LjVDMjIuMTkwMSA1NS41IDQzLjg4MDMgMzcuNDI4NCA0My44ODAzIDIyLjMzODRDNDMuODgwMyAxMC4yNzgzIDM0LjE3MDYgMC41IDIyLjE5MDEgMC41WlwiIGZpbGw9XCIjMkQyRDM1XCIgc3Ryb2tlPVwiI0ZBRjhGNFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzIuMDQ5NCAxOC45NTJMMjIuNDcxNCAxMi44OTQ1TDEyLjg5NDUgMTguOTUyXCIgc3Ryb2tlPVwiI0MxRDQyRlwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0xNC4xNzM4IDE5Ljk3NTZWMzAuNzM3NEgzMC43NzIxVjE5Ljk3NTZcIiBzdHJva2U9XCIjQzFENDJGXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTI0LjE0NDggMzAuNzM2MlYyNC40MTIxSDIwLjgwMjdWMzAuNzM2MlwiIHN0cm9rZT1cIiNDMUQ0MkZcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgLnRyaW0oKTtcblxuICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgY2xhc3NOYW1lOiBcInBoLXN2Zy1waW5cIixcbiAgICAgIGh0bWw6IHN2ZyxcbiAgICAgIGljb25TaXplOiBbNDUsIDU3XSxcbiAgICAgIGljb25BbmNob3I6IFsyMi41LCA1N10sXG4gICAgICBwb3B1cEFuY2hvcjogWzAsIC01N10sXG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIG1hcCBpbml0IC0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBpbml0TWFwSWZOZWVkZWQoKSB7XG4gICAgaWYgKGluaXRpYWxpemVkKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICghd2luZG93LkwpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiTGVhZmxldCBub3QgbG9hZGVkLiBFbnN1cmUgbGVhZmxldC5qcyBpcyBlbnF1ZXVlZCBiZWZvcmUgbWFwLXBpbi5qc1wiLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNmZy5tYXBDb250YWluZXJJZCk7XG4gICAgaWYgKCFlbCkge1xuICAgICAgd2FybihgTWFwIGNvbnRhaW5lciAjJHtjZmcubWFwQ29udGFpbmVySWR9IG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaWYgKGggPCA1MCkge1xuICAgICAgd2FybihcbiAgICAgICAgYE1hcCBjb250YWluZXIgIyR7Y2ZnLm1hcENvbnRhaW5lcklkfSBoZWlnaHQgaXMgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgIGgsXG4gICAgICAgICl9cHguIExlYWZsZXQgbmVlZHMgYSBoZWlnaHQgKGUuZy4gNDAwcHgrKS5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBtYXAgPSBMLm1hcChlbCwgeyBzY3JvbGxXaGVlbFpvb206IGZhbHNlIH0pLnNldFZpZXcoXG4gICAgICBjZmcuZGVmYXVsdENlbnRlcixcbiAgICAgIGNmZy5kZWZhdWx0Wm9vbSxcbiAgICApO1xuXG4gICAgLy8gMi4gRW5hYmxlIHpvb20gd2hlbiB0aGV5IGNsaWNrL2ludGVyYWN0IHdpdGggdGhlIG1hcFxuICAgIG1hcC5vbihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIG1hcC5zY3JvbGxXaGVlbFpvb20uZW5hYmxlKCk7XG4gICAgfSk7XG5cbiAgICAvLyAzLiBEaXNhYmxlIGl0IGFnYWluIHdoZW4gdGhleSBjbGljayBhd2F5XG4gICAgbWFwLm9uKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBtYXAuc2Nyb2xsV2hlZWxab29tLmRpc2FibGUoKTtcbiAgICB9KTtcblxuICAgIEwudGlsZUxheWVyKGNmZy50aWxlVXJsLCBjZmcudGlsZU9wdGlvbnMpLmFkZFRvKG1hcCk7XG5cbiAgICBsYXllciA9IEwubGF5ZXJHcm91cCgpLmFkZFRvKG1hcCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1hcC5pbnZhbGlkYXRlU2l6ZSh0cnVlKTtcbiAgICAgIH0gY2F0Y2gge31cbiAgICB9LCA1MCk7XG5cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgbG9nKFwiTWFwIGluaXRpYWxpc2VkXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLSBwb3B1cCBIVE1MIC0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBidWlsZFBvcHVwSHRtbChwKSB7XG4gICAgY29uc3QgdGl0bGUgPSBlc2NhcGVIdG1sKHAudGl0bGUgfHwgXCJCcmFuY2hcIik7XG4gICAgY29uc3QgbGluayA9IHAuaHJlZiB8fCBcIiNcIjtcbiAgICBjb25zdCBpbWcgPSBwLmltYWdlIHx8IFwiXCI7XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJwaC1wb3B1cC1zaW1wbGVcIj5cbiAgICAgICR7XG4gICAgICAgIGltZ1xuICAgICAgICAgID8gYDxhIGhyZWY9XCIke2xpbmt9XCIgY2xhc3M9XCJwaC1wb3B1cC1zaW1wbGVfX2ltZ1dyYXBcIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWd9XCIgYWx0PVwiJHt0aXRsZX1cIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgICAgICAgPC9hPmBcbiAgICAgICAgICA6IFwiXCJcbiAgICAgIH1cblxuICAgICAgPGEgaHJlZj1cIiR7bGlua31cIiBjbGFzcz1cInBoLXBvcHVwLXNpbXBsZV9fdGl0bGVcIj5cbiAgICAgICAgJHt0aXRsZX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gZXh0cmFjdCBtYXJrZXJzIGZyb20gRE9NIChjdXJyZW50IHBhZ2UpIC0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBleHRyYWN0TWFya2Vyc0Zyb21Eb20oKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2ZnLnJlc3VsdHNSb290U2VsZWN0b3IpO1xuICAgIGlmICghcm9vdCkge1xuICAgICAgd2FybihgUmVzdWx0cyByb290IG5vdCBmb3VuZDogJHtjZmcucmVzdWx0c1Jvb3RTZWxlY3Rvcn1gKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChjZmcuY2FyZFNlbGVjdG9yKTtcbiAgICBsb2coXCJET00gY2FyZHMgZm91bmQ6XCIsIGNhcmRzLmxlbmd0aCk7XG5cbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBsYXRSYXcgPSBOdW1iZXIoY2FyZC5kYXRhc2V0LmxhdCk7XG4gICAgICBjb25zdCBsbmdSYXcgPSBOdW1iZXIoY2FyZC5kYXRhc2V0LmxuZyk7XG5cbiAgICAgIGlmICghbGF0UmF3IHx8ICFsbmdSYXcpIHJldHVybjtcblxuICAgICAgY29uc3QgbGF0ID0gcGFyc2VGbG9hdChsYXRSYXcpO1xuICAgICAgY29uc3QgbG5nID0gcGFyc2VGbG9hdChsbmdSYXcpO1xuXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobG5nKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcihjZmcuY2FyZFRpdGxlU2VsZWN0b3IpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8XG4gICAgICAgIFwiUHJvcGVydHlcIjtcblxuICAgICAgY29uc3QgaHJlZiA9XG4gICAgICAgIGNhcmQuZGF0YXNldC5jYXJkSHJlZiB8fFxuICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoY2ZnLmNhcmRMaW5rU2VsZWN0b3IpPy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8XG4gICAgICAgIG51bGw7XG5cbiAgICAgIC8vIGV4dHJhIGZpZWxkcyBmcm9tIGRhdGEtYXR0cnNcbiAgICAgIGNvbnN0IHByaWNlID0gY2FyZC5kYXRhc2V0LnByaWNlIHx8IFwiXCI7XG4gICAgICBjb25zdCBiZWRzID0gY2FyZC5kYXRhc2V0LmJlZHMgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBjYXJkLmRhdGFzZXQuYWRkcmVzcyB8fCBcIlwiO1xuICAgICAgY29uc3QgaW1hZ2UgPSBjYXJkLmRhdGFzZXQuaW1hZ2UgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNvbGQgPSBjYXJkLmRhdGFzZXQuc29sZCA9PT0gXCIxXCI7XG5cbiAgICAgIG91dC5wdXNoKHsgbGF0LCBsbmcsIHRpdGxlLCBocmVmLCBwcmljZSwgYmVkcywgYWRkcmVzcywgaW1hZ2UsIHNvbGQgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBEZS1kdXBlIGNvb3Jkc1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIG91dC5maWx0ZXIoKG0pID0+IHtcbiAgICAgIGNvbnN0IGsgPSBgJHttLmxhdC50b0ZpeGVkKDYpfSwke20ubG5nLnRvRml4ZWQoNil9YDtcbiAgICAgIGlmIChzZWVuLmhhcyhrKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgc2Vlbi5hZGQoayk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gcmVuZGVyIHBpbnMgLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBpbnMobWFya2VycywgeyBmaXQgfSA9IHt9KSB7XG4gICAgaWYgKCFpbml0TWFwSWZOZWVkZWQoKSkgcmV0dXJuO1xuXG4gICAgaWYgKG1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIvCflI4gRmlyc3QgbWFya2VyIHNhbXBsZTpcIiwgbWFya2Vyc1swXSk7XG4gICAgfVxuXG4gICAgbGF5ZXIuY2xlYXJMYXllcnMoKTtcbiAgICBtYXJrZXJJbmRleC5jbGVhcigpO1xuXG4gICAgaWYgKCFtYXJrZXJzIHx8ICFtYXJrZXJzLmxlbmd0aCkge1xuICAgICAgbG9nKFwiTm8gbWFya2VycyB0byByZW5kZXJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGluSWNvbiA9IG1ha2VTdmdQaW5JY29uKCk7XG4gICAgY29uc3QgcG9wdXBPcHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjZmcucG9wdXBDbGFzc05hbWUsXG4gICAgICBtYXhXaWR0aDogY2ZnLnBvcHVwTWF4V2lkdGgsXG4gICAgfTtcblxuICAgIG1hcmtlcnMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoW3AubGF0LCBwLmxuZ10sIHsgaWNvbjogcGluSWNvbiB9KTtcbiAgICAgIG1hcmtlci5iaW5kUG9wdXAoYnVpbGRQb3B1cEh0bWwocCksIHBvcHVwT3B0cyk7XG5cbiAgICAgIG1hcmtlci5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGwgPSBtYXJrZXIuZ2V0TGF0TG5nKCk7XG4gICAgICAgIG1hcC5wYW5UbyhsbCwgeyBhbmltYXRlOiB0cnVlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGxheWVyLmFkZExheWVyKG1hcmtlcik7XG5cbiAgICAgIGlmIChwLmlkICE9IG51bGwpIHtcbiAgICAgICAgbWFya2VySW5kZXguc2V0KGBpZDoke3AuaWR9YCwgbWFya2VyKTtcbiAgICAgIH1cbiAgICAgIG1hcmtlckluZGV4LnNldChgY29vcmRzOiR7cC5sYXR9LCR7cC5sbmd9YCwgbWFya2VyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3VsZEZpdCA9IHR5cGVvZiBmaXQgPT09IFwiYm9vbGVhblwiID8gZml0IDogISFjZmcuZml0VG9QaW5zT25VcGRhdGU7XG5cbiAgICBpZiAoc2hvdWxkRml0KSB7XG4gICAgICBpZiAobWFya2Vycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3Qgb25seSA9IG1hcmtlcnNbMF07XG4gICAgICAgIG1hcC5zZXRWaWV3KFxuICAgICAgICAgIFtvbmx5LmxhdCwgb25seS5sbmddLFxuICAgICAgICAgIE1hdGgubWluKGNmZy5zZWxlY3RlZFBpblpvb20sIGNmZy5tYXhGaXRab29tKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBbbS5sYXQsIG0ubG5nXSkpO1xuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG5cbiAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMsIHtcbiAgICAgICAgICBwYWRkaW5nVG9wTGVmdDogaXNNb2JpbGUgPyBbMTIwLCAxMjBdIDogWzIyMCwgMjIwXSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IGlzTW9iaWxlID8gWzEyMCwgMTIwXSA6IFsyMjAsIDIyMF0sXG4gICAgICAgICAgbWF4Wm9vbTogMTAsIC8vIPCfkYggVEhJUyBpcyB0aGUga2V5IGNoYW5nZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1hcC5pbnZhbGlkYXRlU2l6ZSh0cnVlKTtcbiAgICAgIH0gY2F0Y2gge31cbiAgICB9LCA1MCk7XG5cbiAgICBsb2coXCJSZW5kZXJlZCBtYXJrZXJzOlwiLCBtYXJrZXJzLmxlbmd0aCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIG9wdGlvbmFsOiBmZXRjaCBBTEwgbWF0Y2hpbmcgbWFya2VycyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxNYXJrZXJzRm9yTWFwKHVybEZvclF1ZXJ5KSB7XG4gICAgY29uc3QgdSA9IG5ldyBVUkwoXG4gICAgICB1cmxGb3JRdWVyeSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICk7XG4gICAgY29uc3QgcXMgPSB1LnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgXCJcIik7XG5cbiAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGJvZHkuc2V0KFwiYWN0aW9uXCIsIGNmZy5hamF4QWN0aW9uKTtcbiAgICBib2R5LnNldChjZmcucXVlcnlQYXJhbU5hbWUsIHFzKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdldEFqYXhVcmwoKSwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgIH0sXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgYm9keTogYm9keS50b1N0cmluZygpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cbiAgICBsZXQganNvbjtcbiAgICB0cnkge1xuICAgICAganNvbiA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgZW5kcG9pbnQgcmV0dXJuZWQgbm9uLUpTT046XCIsIHRleHQuc2xpY2UoMCwgMzAwKSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBTEwgbWFya2VycyBlbmRwb2ludCBub24tSlNPTlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWpzb24/LnN1Y2Nlc3MpIHtcbiAgICAgIHdhcm4oXCJBTEwgbWFya2VycyBlbmRwb2ludCBlcnJvciBwYXlsb2FkOlwiLCBqc29uKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFMTCBtYXJrZXJzIGVuZHBvaW50IGZhaWxlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJzID0ganNvbi5kYXRhPy5tYXJrZXJzIHx8IFtdO1xuICAgIGxvZyhcIkFMTCBtYXJrZXJzIHJldHVybmVkOlwiLCBtYXJrZXJzLmxlbmd0aCk7XG4gICAgcmV0dXJuIG1hcmtlcnM7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIHB1YmxpYyBBUEkgLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uUmVzdWx0c1VwZGF0ZWQodXJsRm9yUXVlcnkpIHtcbiAgICBjb25zdCBwYWdlTWFya2VycyA9IGV4dHJhY3RNYXJrZXJzRnJvbURvbSgpO1xuICAgIGxvZyhcIlBhZ2UgbWFya2VyczpcIiwgcGFnZU1hcmtlcnMubGVuZ3RoKTtcblxuICAgIGlmICghY2ZnLnVzZUFsbE1hdGNoZXNFbmRwb2ludCkge1xuICAgICAgcmVuZGVyUGlucyhwYWdlTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsTWFya2VycyA9IGF3YWl0IGZldGNoQWxsTWFya2Vyc0Zvck1hcCh1cmxGb3JRdWVyeSk7XG5cbiAgICAgIC8vIElmIGVuZHBvaW50IGRvZXMgTk9UIGluY2x1ZGUgdGhlIGV4dHJhIGZpZWxkcywgcG9wdXBzIHdpbGwgc2hvdyBiYXNpYyBpbmZvLlxuICAgICAgLy8gSWYgZW5kcG9pbnQgcmV0dXJucyAwIGJ1dCBwYWdlIGhhcyBwaW5zLCBmYWxsIGJhY2suXG4gICAgICBpZiAoYWxsTWFya2Vycy5sZW5ndGggPT09IDAgJiYgcGFnZU1hcmtlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgcmV0dXJuZWQgMCBidXQgcGFnZSBoYXMgcmVzdWx0czsgdXNpbmcgcGFnZSBtYXJrZXJzXCIpO1xuICAgICAgICByZW5kZXJQaW5zKHBhZ2VNYXJrZXJzLCB7IGZpdDogY2ZnLmZpdFRvUGluc09uVXBkYXRlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbmRlclBpbnMoYWxsTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgZmFpbGVkOyBmYWxsaW5nIGJhY2sgdG8gcGFnZSBtYXJrZXJzXCIsIGUpO1xuICAgICAgcmVuZGVyUGlucyhwYWdlTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBDTElDSyBIQU5ETEVSXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdChcIi5icmFuY2gtbGlzdGluZyAuYnV0dG9uXCIpO1xuICAgIGlmICghYnRuKSByZXR1cm47XG5cbiAgICBjb25zdCB2aWV3ID0gYnRuLmRhdGFzZXQudmlldztcbiAgICBpZiAoIXZpZXcpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG1hcEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicmFuY2gtbGlzdGluZy1tYXBcIik7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXItd3JhcFwiKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5icmFuY2gtbGlzdGluZyAuYnV0dG9uXCIpXG4gICAgICAuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpKTtcblxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgaWYgKHZpZXcgPT09IFwibWFwXCIpIHtcbiAgICAgIG1hcEVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBncmlkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgd2luZG93LkJyYW5jaExpc3RpbmdNYXAuaW5pdCgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG0gPSB3aW5kb3cuQnJhbmNoTGlzdGluZ01hcC5nZXRNYXA/LigpO1xuICAgICAgICAgIGlmIChtKSBtLmludmFsaWRhdGVTaXplKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmlldyA9PT0gXCJncmlkXCIpIHtcbiAgICAgIG1hcEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGdyaWQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gSU5JVCBNQVBcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghaW5pdE1hcElmTmVlZGVkKCkpIHJldHVybjtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25SZXN1bHRzVXBkYXRlZCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB9LCAxNTApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwKCkge1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICAvL3dpbmRvdy5QSFBpbnNTeW5jID0geyBpbml0LCBvblJlc3VsdHNVcGRhdGVkLCByZW5kZXJQaW5zLCBnZXRNYXAgfTtcblxuICB3aW5kb3cuQnJhbmNoTGlzdGluZ01hcCA9IHtcbiAgICBpbml0LFxuICAgIG9uUmVzdWx0c1VwZGF0ZWQsXG4gICAgcmVuZGVyUGlucyxcbiAgICBnZXRNYXAsXG4gIH07XG59KSgpO1xuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiX29iamVjdFNwcmVhZCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiZGVmYXVsdHMiLCJtYXBDb250YWluZXJJZCIsInJlc3VsdHNSb290U2VsZWN0b3IiLCJjYXJkU2VsZWN0b3IiLCJjYXJkVGl0bGVTZWxlY3RvciIsImNhcmRMaW5rU2VsZWN0b3IiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJmaXRUb1BpbnNPblVwZGF0ZSIsImZpdFBhZGRpbmciLCJtYXhGaXRab29tIiwic2VsZWN0ZWRQaW5ab29tIiwiY2VudGVyU2VsZWN0ZWRQaW4iLCJ0aWxlVXJsIiwidGlsZU9wdGlvbnMiLCJtYXhab29tIiwiYXR0cmlidXRpb24iLCJhamF4VXJsIiwiYWpheEFjdGlvbiIsInF1ZXJ5UGFyYW1OYW1lIiwiZXhwZWN0TWFya2VyVXJsS2V5IiwicG9wdXBNYXhXaWR0aCIsInBvcHVwQ2xhc3NOYW1lIiwiZGVidWciLCJjZmciLCJ3aW5kb3ciLCJCcmFuY2hMaXN0aW5nTWFwQ29uZmlnIiwibWFwIiwibGF5ZXIiLCJpbml0aWFsaXplZCIsIm1hcmtlckluZGV4IiwiTWFwIiwibG9nIiwiX2NvbnNvbGUiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJjb25jYXQiLCJ3YXJuIiwiX2NvbnNvbGUyIiwiX2xlbjIiLCJfa2V5MiIsImVzY2FwZUh0bWwiLCJzdHIiLCJyZXBsYWNlQWxsIiwiZ2V0QWpheFVybCIsImFqYXh1cmwiLCJmb2N1c01hcmtlckZvckNhcmQiLCJjYXJkIiwiaWQiLCJkYXRhc2V0IiwicHJvcGVydHlJZCIsImxhdCIsImxuZyIsIm1hcmtlciIsImhhcyIsImdldCIsImlzRmluaXRlIiwibGwiLCJnZXRMYXRMbmciLCJzZXRWaWV3IiwiTWF0aCIsIm1heCIsImdldFpvb20iLCJhbmltYXRlIiwicGFuVG8iLCJvcGVuUG9wdXAiLCJtYWtlU3ZnUGluSWNvbiIsInN2ZyIsInRyaW0iLCJMIiwiZGl2SWNvbiIsImNsYXNzTmFtZSIsImh0bWwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsImluaXRNYXBJZk5lZWRlZCIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJyb3VuZCIsInNjcm9sbFdoZWVsWm9vbSIsIm9uIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRpbGVMYXllciIsImFkZFRvIiwibGF5ZXJHcm91cCIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsIl91bnVzZWQiLCJidWlsZFBvcHVwSHRtbCIsInRpdGxlIiwibGluayIsImhyZWYiLCJpbWciLCJpbWFnZSIsImV4dHJhY3RNYXJrZXJzRnJvbURvbSIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3V0IiwiX2NhcmQkcXVlcnlTZWxlY3RvciIsIl9jYXJkJHF1ZXJ5U2VsZWN0b3IyIiwibGF0UmF3IiwibG5nUmF3IiwicGFyc2VGbG9hdCIsInRleHRDb250ZW50IiwiY2FyZEhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJwcmljZSIsImJlZHMiLCJhZGRyZXNzIiwic29sZCIsInNlZW4iLCJTZXQiLCJrIiwidG9GaXhlZCIsImFkZCIsInJlbmRlclBpbnMiLCJtYXJrZXJzIiwiX3JlZiIsInVuZGVmaW5lZCIsImZpdCIsImNsZWFyTGF5ZXJzIiwiY2xlYXIiLCJwaW5JY29uIiwicG9wdXBPcHRzIiwibWF4V2lkdGgiLCJpY29uIiwiYmluZFBvcHVwIiwiYWRkTGF5ZXIiLCJzZXQiLCJzaG91bGRGaXQiLCJvbmx5IiwibWluIiwiYm91bmRzIiwibGF0TG5nQm91bmRzIiwiaXNNb2JpbGUiLCJpbm5lcldpZHRoIiwiZml0Qm91bmRzIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJfdW51c2VkMiIsImZldGNoQWxsTWFya2Vyc0Zvck1hcCIsIl94IiwiX2ZldGNoQWxsTWFya2Vyc0Zvck1hcCIsIl9jYWxsZWUiLCJ1cmxGb3JRdWVyeSIsIl9qc29uIiwiX2pzb24kZGF0YSIsInFzIiwiYm9keSIsInJlcyIsInRleHQiLCJqc29uIiwiX3QiLCJfY29udGV4dCIsIlVSTCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJzbGljZSIsIkVycm9yIiwic3VjY2VzcyIsImRhdGEiLCJvblJlc3VsdHNVcGRhdGVkIiwiX3gyIiwiX29uUmVzdWx0c1VwZGF0ZWQiLCJfY2FsbGVlMiIsInBhZ2VNYXJrZXJzIiwiYWxsTWFya2VycyIsIl90MiIsIl9jb250ZXh0MiIsInVzZUFsbE1hdGNoZXNFbmRwb2ludCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidG4iLCJ0YXJnZXQiLCJjbG9zZXN0IiwidmlldyIsInByZXZlbnREZWZhdWx0IiwibWFwRWwiLCJncmlkIiwiYiIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwiZGlzcGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkJyYW5jaExpc3RpbmdNYXAiLCJpbml0IiwiX3dpbmRvdyRCcmFuY2hMaXN0aW5nIiwiX3dpbmRvdyRCcmFuY2hMaXN0aW5nMiIsImdldE1hcCJdLCJzb3VyY2VSb290IjoiIn0=
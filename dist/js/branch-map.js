/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./assets/js/branch-map.js ***!
  \*********************************/
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
    mapContainerId: "branch-map",
    resultsRootSelector: ".branch-main",
    cardSelector: ".branch-map[data-lat][data-lng]",
    cardTitleSelector: ".branch-title",
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
  var cfg = _objectSpread(_objectSpread({}, defaults), window.BranchMapConfig || {});

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

  //   function focusMarkerForCard(card) {
  //     if (!card || !map) return;

  //     const id = card.dataset.propertyId;
  //     const lat = Number(card.dataset.lat);
  //     const lng = Number(card.dataset.lng);

  //     let marker = null;

  //     if (id != null && markerIndex.has(`id:${id}`)) {
  //       marker = markerIndex.get(`id:${id}`);
  //     } else if (Number.isFinite(lat) && Number.isFinite(lng)) {
  //       marker = markerIndex.get(`coords:${lat},${lng}`);
  //     }

  //     if (!marker) return;

  //     const ll = marker.getLatLng();

  //     if (cfg.centerSelectedPin) {
  //       map.setView(
  //         [ll.lat, ll.lng],
  //         Math.max(map.getZoom(), cfg.selectedPinZoom),
  //         {
  //           animate: true,
  //         },
  //       );
  //     } else {
  //       map.panTo(ll, { animate: true });
  //     }

  //     marker.openPopup();
  //   }

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

    // 👇 ADD THIS
    map.whenReady(function () {
      setTimeout(function () {
        map.invalidateSize(true);
      }, 300);
    });
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

    // setTimeout(() => {
    //   try {
    //     map.invalidateSize(true);
    //   } catch {}
    // }, 50);

    log("Rendered markers:", markers.length);
  }
  function fixMapSize() {
    if (!map) return;
    var run = function run() {
      map.invalidateSize(true);
      console.log("✅ map resized");
    };

    // run multiple times as layout stabilises (mobile needs this)
    setTimeout(run, 300);
    setTimeout(run, 800);
    setTimeout(run, 1500);

    // ALSO fix on orientation / resize
    window.addEventListener("resize", run);
  }
  function watchLayoutChanges() {
    var el = document.querySelector(".images-map");
    if (!el || !map) return;
    var observer = new ResizeObserver(function () {
      if (!map) return;
      setTimeout(function () {
        map.invalidateSize(true);
        console.log("🔁 layout change detected → map fixed");
      }, 50);
    });
    observer.observe(el);
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
  } // INIT MAP
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

  window.BranchMap = {
    init: init,
    onResultsUpdated: onResultsUpdated,
    renderPins: renderPins,
    getMap: getMap
  };
  document.addEventListener("DOMContentLoaded", function () {
    window.BranchMap.init();
    fixMapSize();
    watchLayoutChanges();
  });
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ1o7O0VBRUE7O0VBRUFGLE1BQU0sQ0FBQ3NLLFNBQVMsR0FBRztJQUNqQkgsSUFBSSxFQUFKQSxJQUFJO0lBQ0pULGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCbkUsVUFBVSxFQUFWQSxVQUFVO0lBQ1Y4RSxNQUFNLEVBQU5BO0VBQ0YsQ0FBQztFQUVEakksUUFBUSxDQUFDbUYsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtJQUNsRHZILE1BQU0sQ0FBQ3NLLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFDdkI5QyxVQUFVLENBQUMsQ0FBQztJQUNaRyxrQkFBa0IsQ0FBQyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNKLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYnJhbmNoLW1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tIGNvbmZpZyAob3ZlcnJpZGUgdmlhIHdpbmRvdy5QSFBpbnNTeW5jQ29uZmlnKSAtLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIG1hcENvbnRhaW5lcklkOiBcImJyYW5jaC1tYXBcIixcbiAgICByZXN1bHRzUm9vdFNlbGVjdG9yOiBcIi5icmFuY2gtbWFpblwiLFxuICAgIGNhcmRTZWxlY3RvcjogXCIuYnJhbmNoLW1hcFtkYXRhLWxhdF1bZGF0YS1sbmddXCIsXG4gICAgY2FyZFRpdGxlU2VsZWN0b3I6IFwiLmJyYW5jaC10aXRsZVwiLFxuICAgIGNhcmRMaW5rU2VsZWN0b3I6IFwiOnNjb3BlXCIsXG5cbiAgICBkZWZhdWx0Q2VudGVyOiBbNTMuNDgsIC0yLjI0XSxcbiAgICBkZWZhdWx0Wm9vbTogMTAsXG4gICAgZml0VG9QaW5zT25VcGRhdGU6IHRydWUsXG4gICAgZml0UGFkZGluZzogWzMwLCAzMF0sXG4gICAgbWF4Rml0Wm9vbTogMTMsXG4gICAgc2VsZWN0ZWRQaW5ab29tOiAxNixcbiAgICBjZW50ZXJTZWxlY3RlZFBpbjogdHJ1ZSxcblxuICAgIHRpbGVVcmw6IFwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIixcbiAgICB0aWxlT3B0aW9uczoge1xuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICBhdHRyaWJ1dGlvbjogXCImY29weTsgT3BlblN0cmVldE1hcCBjb250cmlidXRvcnNcIixcbiAgICB9LFxuXG4gICAgYWpheFVybDogbnVsbCxcbiAgICBhamF4QWN0aW9uOiBcImN1c3RvbV9waF9tYXBfbWFya2Vyc1wiLFxuICAgIHF1ZXJ5UGFyYW1OYW1lOiBcInF1ZXJ5XCIsXG4gICAgZXhwZWN0TWFya2VyVXJsS2V5OiBcInVybFwiLFxuXG4gICAgcG9wdXBNYXhXaWR0aDogMjgwLFxuICAgIHBvcHVwQ2xhc3NOYW1lOiBcInBoLWxlYWZsZXQtcG9wdXBcIixcblxuICAgIGRlYnVnOiB0cnVlLFxuICB9O1xuXG4gIC8vY29uc3QgY2ZnID0geyAuLi5kZWZhdWx0cywgLi4uKHdpbmRvdy5QSFBpbnNTeW5jQ29uZmlnIHx8IHt9KSB9O1xuICBjb25zdCBjZmcgPSB7XG4gICAgLi4uZGVmYXVsdHMsXG4gICAgLi4uKHdpbmRvdy5CcmFuY2hNYXBDb25maWcgfHwge30pLFxuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gaW50ZXJuYWwgc3RhdGUgLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgbWFwID0gbnVsbDtcbiAgbGV0IGxheWVyID0gbnVsbDtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGxldCBtYXJrZXJJbmRleCA9IG5ldyBNYXAoKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIHV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgICBpZiAoY2ZnLmRlYnVnKSBjb25zb2xlLmxvZyhcIltQSFBpbnNTeW5jXVwiLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhcm4oLi4uYXJncykge1xuICAgIGNvbnNvbGUud2FybihcIltQSFBpbnNTeW5jXVwiLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHIpXG4gICAgICAucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKVxuICAgICAgLnJlcGxhY2VBbGwoXCI8XCIsIFwiJmx0O1wiKVxuICAgICAgLnJlcGxhY2VBbGwoXCI+XCIsIFwiJmd0O1wiKVxuICAgICAgLnJlcGxhY2VBbGwoJ1wiJywgXCImcXVvdDtcIilcbiAgICAgIC5yZXBsYWNlQWxsKFwiJ1wiLCBcIiYjMDM5O1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFqYXhVcmwoKSB7XG4gICAgcmV0dXJuIGNmZy5hamF4VXJsIHx8IHdpbmRvdy5hamF4dXJsIHx8IFwiL3dwLWFkbWluL2FkbWluLWFqYXgucGhwXCI7XG4gIH1cblxuICAvLyAgIGZ1bmN0aW9uIGZvY3VzTWFya2VyRm9yQ2FyZChjYXJkKSB7XG4gIC8vICAgICBpZiAoIWNhcmQgfHwgIW1hcCkgcmV0dXJuO1xuXG4gIC8vICAgICBjb25zdCBpZCA9IGNhcmQuZGF0YXNldC5wcm9wZXJ0eUlkO1xuICAvLyAgICAgY29uc3QgbGF0ID0gTnVtYmVyKGNhcmQuZGF0YXNldC5sYXQpO1xuICAvLyAgICAgY29uc3QgbG5nID0gTnVtYmVyKGNhcmQuZGF0YXNldC5sbmcpO1xuXG4gIC8vICAgICBsZXQgbWFya2VyID0gbnVsbDtcblxuICAvLyAgICAgaWYgKGlkICE9IG51bGwgJiYgbWFya2VySW5kZXguaGFzKGBpZDoke2lkfWApKSB7XG4gIC8vICAgICAgIG1hcmtlciA9IG1hcmtlckluZGV4LmdldChgaWQ6JHtpZH1gKTtcbiAgLy8gICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzRmluaXRlKGxhdCkgJiYgTnVtYmVyLmlzRmluaXRlKGxuZykpIHtcbiAgLy8gICAgICAgbWFya2VyID0gbWFya2VySW5kZXguZ2V0KGBjb29yZHM6JHtsYXR9LCR7bG5nfWApO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICBpZiAoIW1hcmtlcikgcmV0dXJuO1xuXG4gIC8vICAgICBjb25zdCBsbCA9IG1hcmtlci5nZXRMYXRMbmcoKTtcblxuICAvLyAgICAgaWYgKGNmZy5jZW50ZXJTZWxlY3RlZFBpbikge1xuICAvLyAgICAgICBtYXAuc2V0VmlldyhcbiAgLy8gICAgICAgICBbbGwubGF0LCBsbC5sbmddLFxuICAvLyAgICAgICAgIE1hdGgubWF4KG1hcC5nZXRab29tKCksIGNmZy5zZWxlY3RlZFBpblpvb20pLFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIG1hcC5wYW5UbyhsbCwgeyBhbmltYXRlOiB0cnVlIH0pO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICBtYXJrZXIub3BlblBvcHVwKCk7XG4gIC8vICAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VTdmdQaW5JY29uKCkge1xuICAgIGNvbnN0IHN2ZyA9IGBcbiAgICAgIDxzdmcgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjU3XCIgdmlld0JveD1cIjAgMCA0NSA1N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTIyLjE5MDEgMC41QzEwLjIwOTcgMC41IDAuNSAxMC4yNzYgMC41IDIyLjMzODRDMC41IDM3LjQyODQgMjIuMTkwMSA1NS41IDIyLjE5MDEgNTUuNUMyMi4xOTAxIDU1LjUgNDMuODgwMyAzNy40Mjg0IDQzLjg4MDMgMjIuMzM4NEM0My44ODAzIDEwLjI3ODMgMzQuMTcwNiAwLjUgMjIuMTkwMSAwLjVaXCIgZmlsbD1cIiMyRDJEMzVcIiBzdHJva2U9XCIjRkFGOEY0XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0zMi4wNDk0IDE4Ljk1MkwyMi40NzE0IDEyLjg5NDVMMTIuODk0NSAxOC45NTJcIiBzdHJva2U9XCIjQzFENDJGXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTE0LjE3MzggMTkuOTc1NlYzMC43Mzc0SDMwLjc3MjFWMTkuOTc1NlwiIHN0cm9rZT1cIiNDMUQ0MkZcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQuMTQ0OCAzMC43MzYyVjI0LjQxMjFIMjAuODAyN1YzMC43MzYyXCIgc3Ryb2tlPVwiI0MxRDQyRlwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIGAudHJpbSgpO1xuXG4gICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICBjbGFzc05hbWU6IFwicGgtc3ZnLXBpblwiLFxuICAgICAgaHRtbDogc3ZnLFxuICAgICAgaWNvblNpemU6IFs0NSwgNTddLFxuICAgICAgaWNvbkFuY2hvcjogWzIyLjUsIDU3XSxcbiAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLTU3XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gbWFwIGluaXQgLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGZ1bmN0aW9uIGluaXRNYXBJZk5lZWRlZCgpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKCF3aW5kb3cuTCkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJMZWFmbGV0IG5vdCBsb2FkZWQuIEVuc3VyZSBsZWFmbGV0LmpzIGlzIGVucXVldWVkIGJlZm9yZSBtYXAtcGluLmpzXCIsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2ZnLm1hcENvbnRhaW5lcklkKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICB3YXJuKGBNYXAgY29udGFpbmVyICMke2NmZy5tYXBDb250YWluZXJJZH0gbm90IGZvdW5kYCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBpZiAoaCA8IDUwKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBgTWFwIGNvbnRhaW5lciAjJHtjZmcubWFwQ29udGFpbmVySWR9IGhlaWdodCBpcyAke01hdGgucm91bmQoXG4gICAgICAgICAgaCxcbiAgICAgICAgKX1weC4gTGVhZmxldCBuZWVkcyBhIGhlaWdodCAoZS5nLiA0MDBweCspLmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIG1hcCA9IEwubWFwKGVsLCB7IHNjcm9sbFdoZWVsWm9vbTogZmFsc2UgfSkuc2V0VmlldyhcbiAgICAgIGNmZy5kZWZhdWx0Q2VudGVyLFxuICAgICAgY2ZnLmRlZmF1bHRab29tLFxuICAgICk7XG5cbiAgICAvLyAyLiBFbmFibGUgem9vbSB3aGVuIHRoZXkgY2xpY2svaW50ZXJhY3Qgd2l0aCB0aGUgbWFwXG4gICAgbWFwLm9uKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgbWFwLnNjcm9sbFdoZWVsWm9vbS5lbmFibGUoKTtcbiAgICB9KTtcblxuICAgIC8vIDMuIERpc2FibGUgaXQgYWdhaW4gd2hlbiB0aGV5IGNsaWNrIGF3YXlcbiAgICBtYXAub24oXCJibHVyXCIsICgpID0+IHtcbiAgICAgIG1hcC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgTC50aWxlTGF5ZXIoY2ZnLnRpbGVVcmwsIGNmZy50aWxlT3B0aW9ucykuYWRkVG8obWFwKTtcblxuICAgIGxheWVyID0gTC5sYXllckdyb3VwKCkuYWRkVG8obWFwKTtcblxuICAgIC8vIPCfkYcgQUREIFRISVNcbiAgICBtYXAud2hlblJlYWR5KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYXAuaW52YWxpZGF0ZVNpemUodHJ1ZSk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBtYXAuaW52YWxpZGF0ZVNpemUodHJ1ZSk7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfSwgNTApO1xuXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGxvZyhcIk1hcCBpbml0aWFsaXNlZFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0gcG9wdXAgSFRNTCAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gYnVpbGRQb3B1cEh0bWwocCkge1xuICAgIGNvbnN0IHRpdGxlID0gZXNjYXBlSHRtbChwLnRpdGxlIHx8IFwiQnJhbmNoXCIpO1xuICAgIGNvbnN0IGxpbmsgPSBwLmhyZWYgfHwgXCIjXCI7XG4gICAgY29uc3QgaW1nID0gcC5pbWFnZSB8fCBcIlwiO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicGgtcG9wdXAtc2ltcGxlXCI+XG4gICAgICAke1xuICAgICAgICBpbWdcbiAgICAgICAgICA/IGA8YSBocmVmPVwiJHtsaW5rfVwiIGNsYXNzPVwicGgtcG9wdXAtc2ltcGxlX19pbWdXcmFwXCI+XG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIiR7dGl0bGV9XCIgbG9hZGluZz1cImxhenlcIiAvPlxuICAgICAgICAgICAgIDwvYT5gXG4gICAgICAgICAgOiBcIlwiXG4gICAgICB9XG5cbiAgICAgIDxhIGhyZWY9XCIke2xpbmt9XCIgY2xhc3M9XCJwaC1wb3B1cC1zaW1wbGVfX3RpdGxlXCI+XG4gICAgICAgICR7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIGA7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIGV4dHJhY3QgbWFya2VycyBmcm9tIERPTSAoY3VycmVudCBwYWdlKSAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gZXh0cmFjdE1hcmtlcnNGcm9tRG9tKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNmZy5yZXN1bHRzUm9vdFNlbGVjdG9yKTtcbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHdhcm4oYFJlc3VsdHMgcm9vdCBub3QgZm91bmQ6ICR7Y2ZnLnJlc3VsdHNSb290U2VsZWN0b3J9YCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoY2ZnLmNhcmRTZWxlY3Rvcik7XG4gICAgbG9nKFwiRE9NIGNhcmRzIGZvdW5kOlwiLCBjYXJkcy5sZW5ndGgpO1xuXG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY29uc3QgbGF0ID0gTnVtYmVyKGNhcmQuZGF0YXNldC5sYXQpO1xuICAgICAgY29uc3QgbG5nID0gTnVtYmVyKGNhcmQuZGF0YXNldC5sbmcpO1xuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcblxuICAgICAgY29uc3QgdGl0bGUgPVxuICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoY2ZnLmNhcmRUaXRsZVNlbGVjdG9yKT8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fFxuICAgICAgICBcIlByb3BlcnR5XCI7XG5cbiAgICAgIGNvbnN0IGhyZWYgPVxuICAgICAgICBjYXJkLmRhdGFzZXQuY2FyZEhyZWYgfHxcbiAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKGNmZy5jYXJkTGlua1NlbGVjdG9yKT8uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fFxuICAgICAgICBudWxsO1xuXG4gICAgICAvLyBleHRyYSBmaWVsZHMgZnJvbSBkYXRhLWF0dHJzXG4gICAgICBjb25zdCBwcmljZSA9IGNhcmQuZGF0YXNldC5wcmljZSB8fCBcIlwiO1xuICAgICAgY29uc3QgYmVkcyA9IGNhcmQuZGF0YXNldC5iZWRzIHx8IFwiXCI7XG4gICAgICBjb25zdCBhZGRyZXNzID0gY2FyZC5kYXRhc2V0LmFkZHJlc3MgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGltYWdlID0gY2FyZC5kYXRhc2V0LmltYWdlIHx8IFwiXCI7XG4gICAgICBjb25zdCBzb2xkID0gY2FyZC5kYXRhc2V0LnNvbGQgPT09IFwiMVwiO1xuXG4gICAgICBvdXQucHVzaCh7IGxhdCwgbG5nLCB0aXRsZSwgaHJlZiwgcHJpY2UsIGJlZHMsIGFkZHJlc3MsIGltYWdlLCBzb2xkIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRGUtZHVwZSBjb29yZHNcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xuICAgIHJldHVybiBvdXQuZmlsdGVyKChtKSA9PiB7XG4gICAgICBjb25zdCBrID0gYCR7bS5sYXQudG9GaXhlZCg2KX0sJHttLmxuZy50b0ZpeGVkKDYpfWA7XG4gICAgICBpZiAoc2Vlbi5oYXMoaykpIHJldHVybiBmYWxzZTtcbiAgICAgIHNlZW4uYWRkKGspO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tIHJlbmRlciBwaW5zIC0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiByZW5kZXJQaW5zKG1hcmtlcnMsIHsgZml0IH0gPSB7fSkge1xuICAgIGlmICghaW5pdE1hcElmTmVlZGVkKCkpIHJldHVybjtcblxuICAgIGlmIChtYXJrZXJzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coXCLwn5SOIEZpcnN0IG1hcmtlciBzYW1wbGU6XCIsIG1hcmtlcnNbMF0pO1xuICAgIH1cblxuICAgIGxheWVyLmNsZWFyTGF5ZXJzKCk7XG4gICAgbWFya2VySW5kZXguY2xlYXIoKTtcblxuICAgIGlmICghbWFya2VycyB8fCAhbWFya2Vycy5sZW5ndGgpIHtcbiAgICAgIGxvZyhcIk5vIG1hcmtlcnMgdG8gcmVuZGVyXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBpbkljb24gPSBtYWtlU3ZnUGluSWNvbigpO1xuICAgIGNvbnN0IHBvcHVwT3B0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY2ZnLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgbWF4V2lkdGg6IGNmZy5wb3B1cE1heFdpZHRoLFxuICAgIH07XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKFtwLmxhdCwgcC5sbmddLCB7IGljb246IHBpbkljb24gfSk7XG4gICAgICBtYXJrZXIuYmluZFBvcHVwKGJ1aWxkUG9wdXBIdG1sKHApLCBwb3B1cE9wdHMpO1xuXG4gICAgICBtYXJrZXIub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxsID0gbWFya2VyLmdldExhdExuZygpO1xuICAgICAgICBtYXAucGFuVG8obGwsIHsgYW5pbWF0ZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBsYXllci5hZGRMYXllcihtYXJrZXIpO1xuXG4gICAgICBpZiAocC5pZCAhPSBudWxsKSB7XG4gICAgICAgIG1hcmtlckluZGV4LnNldChgaWQ6JHtwLmlkfWAsIG1hcmtlcik7XG4gICAgICB9XG4gICAgICBtYXJrZXJJbmRleC5zZXQoYGNvb3Jkczoke3AubGF0fSwke3AubG5nfWAsIG1hcmtlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaG91bGRGaXQgPSB0eXBlb2YgZml0ID09PSBcImJvb2xlYW5cIiA/IGZpdCA6ICEhY2ZnLmZpdFRvUGluc09uVXBkYXRlO1xuXG4gICAgaWYgKHNob3VsZEZpdCkge1xuICAgICAgaWYgKG1hcmtlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG9ubHkgPSBtYXJrZXJzWzBdO1xuICAgICAgICBtYXAuc2V0VmlldyhcbiAgICAgICAgICBbb25seS5sYXQsIG9ubHkubG5nXSxcbiAgICAgICAgICBNYXRoLm1pbihjZmcuc2VsZWN0ZWRQaW5ab29tLCBjZmcubWF4Rml0Wm9vbSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gW20ubGF0LCBtLmxuZ10pKTtcblxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xuXG4gICAgICAgIG1hcC5maXRCb3VuZHMoYm91bmRzLCB7XG4gICAgICAgICAgcGFkZGluZ1RvcExlZnQ6IGlzTW9iaWxlID8gWzEyMCwgMTIwXSA6IFsyMjAsIDIyMF0sXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBpc01vYmlsZSA/IFsxMjAsIDEyMF0gOiBbMjIwLCAyMjBdLFxuICAgICAgICAgIG1heFpvb206IDEwLCAvLyDwn5GIIFRISVMgaXMgdGhlIGtleSBjaGFuZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICB0cnkge1xuICAgIC8vICAgICBtYXAuaW52YWxpZGF0ZVNpemUodHJ1ZSk7XG4gICAgLy8gICB9IGNhdGNoIHt9XG4gICAgLy8gfSwgNTApO1xuXG4gICAgbG9nKFwiUmVuZGVyZWQgbWFya2VyczpcIiwgbWFya2Vycy5sZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZml4TWFwU2l6ZSgpIHtcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgICAgbWFwLmludmFsaWRhdGVTaXplKHRydWUpO1xuICAgICAgY29uc29sZS5sb2coXCLinIUgbWFwIHJlc2l6ZWRcIik7XG4gICAgfTtcblxuICAgIC8vIHJ1biBtdWx0aXBsZSB0aW1lcyBhcyBsYXlvdXQgc3RhYmlsaXNlcyAobW9iaWxlIG5lZWRzIHRoaXMpXG4gICAgc2V0VGltZW91dChydW4sIDMwMCk7XG4gICAgc2V0VGltZW91dChydW4sIDgwMCk7XG4gICAgc2V0VGltZW91dChydW4sIDE1MDApO1xuXG4gICAgLy8gQUxTTyBmaXggb24gb3JpZW50YXRpb24gLyByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBydW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gd2F0Y2hMYXlvdXRDaGFuZ2VzKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZXMtbWFwXCIpO1xuICAgIGlmICghZWwgfHwgIW1hcCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1hcC5pbnZhbGlkYXRlU2l6ZSh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SBIGxheW91dCBjaGFuZ2UgZGV0ZWN0ZWQg4oaSIG1hcCBmaXhlZFwiKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9KTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLSBvcHRpb25hbDogZmV0Y2ggQUxMIG1hdGNoaW5nIG1hcmtlcnMgLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsTWFya2Vyc0Zvck1hcCh1cmxGb3JRdWVyeSkge1xuICAgIGNvbnN0IHUgPSBuZXcgVVJMKFxuICAgICAgdXJsRm9yUXVlcnkgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICApO1xuICAgIGNvbnN0IHFzID0gdS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sIFwiXCIpO1xuXG4gICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBib2R5LnNldChcImFjdGlvblwiLCBjZmcuYWpheEFjdGlvbik7XG4gICAgYm9keS5zZXQoY2ZnLnF1ZXJ5UGFyYW1OYW1lLCBxcyk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChnZXRBamF4VXJsKCksIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsXG4gICAgICB9LFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgIGJvZHk6IGJvZHkudG9TdHJpbmcoKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuXG4gICAgbGV0IGpzb247XG4gICAgdHJ5IHtcbiAgICAgIGpzb24gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgd2FybihcIkFMTCBtYXJrZXJzIGVuZHBvaW50IHJldHVybmVkIG5vbi1KU09OOlwiLCB0ZXh0LnNsaWNlKDAsIDMwMCkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQUxMIG1hcmtlcnMgZW5kcG9pbnQgbm9uLUpTT05cIik7XG4gICAgfVxuXG4gICAgaWYgKCFqc29uPy5zdWNjZXNzKSB7XG4gICAgICB3YXJuKFwiQUxMIG1hcmtlcnMgZW5kcG9pbnQgZXJyb3IgcGF5bG9hZDpcIiwganNvbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBTEwgbWFya2VycyBlbmRwb2ludCBmYWlsZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VycyA9IGpzb24uZGF0YT8ubWFya2VycyB8fCBbXTtcbiAgICBsb2coXCJBTEwgbWFya2VycyByZXR1cm5lZDpcIiwgbWFya2Vycy5sZW5ndGgpO1xuICAgIHJldHVybiBtYXJrZXJzO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLSBwdWJsaWMgQVBJIC0tLS0tLS0tLS0tLS0tLS1cblxuICBhc3luYyBmdW5jdGlvbiBvblJlc3VsdHNVcGRhdGVkKHVybEZvclF1ZXJ5KSB7XG4gICAgY29uc3QgcGFnZU1hcmtlcnMgPSBleHRyYWN0TWFya2Vyc0Zyb21Eb20oKTtcbiAgICBsb2coXCJQYWdlIG1hcmtlcnM6XCIsIHBhZ2VNYXJrZXJzLmxlbmd0aCk7XG5cbiAgICBpZiAoIWNmZy51c2VBbGxNYXRjaGVzRW5kcG9pbnQpIHtcbiAgICAgIHJlbmRlclBpbnMocGFnZU1hcmtlcnMsIHsgZml0OiBjZmcuZml0VG9QaW5zT25VcGRhdGUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFsbE1hcmtlcnMgPSBhd2FpdCBmZXRjaEFsbE1hcmtlcnNGb3JNYXAodXJsRm9yUXVlcnkpO1xuXG4gICAgICAvLyBJZiBlbmRwb2ludCBkb2VzIE5PVCBpbmNsdWRlIHRoZSBleHRyYSBmaWVsZHMsIHBvcHVwcyB3aWxsIHNob3cgYmFzaWMgaW5mby5cbiAgICAgIC8vIElmIGVuZHBvaW50IHJldHVybnMgMCBidXQgcGFnZSBoYXMgcGlucywgZmFsbCBiYWNrLlxuICAgICAgaWYgKGFsbE1hcmtlcnMubGVuZ3RoID09PSAwICYmIHBhZ2VNYXJrZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgd2FybihcIkFMTCBtYXJrZXJzIHJldHVybmVkIDAgYnV0IHBhZ2UgaGFzIHJlc3VsdHM7IHVzaW5nIHBhZ2UgbWFya2Vyc1wiKTtcbiAgICAgICAgcmVuZGVyUGlucyhwYWdlTWFya2VycywgeyBmaXQ6IGNmZy5maXRUb1BpbnNPblVwZGF0ZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJQaW5zKGFsbE1hcmtlcnMsIHsgZml0OiBjZmcuZml0VG9QaW5zT25VcGRhdGUgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd2FybihcIkFMTCBtYXJrZXJzIGZhaWxlZDsgZmFsbGluZyBiYWNrIHRvIHBhZ2UgbWFya2Vyc1wiLCBlKTtcbiAgICAgIHJlbmRlclBpbnMocGFnZU1hcmtlcnMsIHsgZml0OiBjZmcuZml0VG9QaW5zT25VcGRhdGUgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5JVCBNQVBcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghaW5pdE1hcElmTmVlZGVkKCkpIHJldHVybjtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25SZXN1bHRzVXBkYXRlZCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB9LCAxNTApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwKCkge1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICAvL3dpbmRvdy5QSFBpbnNTeW5jID0geyBpbml0LCBvblJlc3VsdHNVcGRhdGVkLCByZW5kZXJQaW5zLCBnZXRNYXAgfTtcblxuICB3aW5kb3cuQnJhbmNoTWFwID0ge1xuICAgIGluaXQsXG4gICAgb25SZXN1bHRzVXBkYXRlZCxcbiAgICByZW5kZXJQaW5zLFxuICAgIGdldE1hcCxcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgd2luZG93LkJyYW5jaE1hcC5pbml0KCk7XG4gICAgZml4TWFwU2l6ZSgpO1xuICAgIHdhdGNoTGF5b3V0Q2hhbmdlcygpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJfb2JqZWN0U3ByZWFkIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJkZWZhdWx0cyIsIm1hcENvbnRhaW5lcklkIiwicmVzdWx0c1Jvb3RTZWxlY3RvciIsImNhcmRTZWxlY3RvciIsImNhcmRUaXRsZVNlbGVjdG9yIiwiY2FyZExpbmtTZWxlY3RvciIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZpdFRvUGluc09uVXBkYXRlIiwiZml0UGFkZGluZyIsIm1heEZpdFpvb20iLCJzZWxlY3RlZFBpblpvb20iLCJjZW50ZXJTZWxlY3RlZFBpbiIsInRpbGVVcmwiLCJ0aWxlT3B0aW9ucyIsIm1heFpvb20iLCJhdHRyaWJ1dGlvbiIsImFqYXhVcmwiLCJhamF4QWN0aW9uIiwicXVlcnlQYXJhbU5hbWUiLCJleHBlY3RNYXJrZXJVcmxLZXkiLCJwb3B1cE1heFdpZHRoIiwicG9wdXBDbGFzc05hbWUiLCJkZWJ1ZyIsImNmZyIsIndpbmRvdyIsIkJyYW5jaE1hcENvbmZpZyIsIm1hcCIsImxheWVyIiwiaW5pdGlhbGl6ZWQiLCJtYXJrZXJJbmRleCIsIk1hcCIsImxvZyIsIl9jb25zb2xlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25zb2xlIiwiY29uY2F0Iiwid2FybiIsIl9jb25zb2xlMiIsIl9sZW4yIiwiX2tleTIiLCJlc2NhcGVIdG1sIiwic3RyIiwicmVwbGFjZUFsbCIsImdldEFqYXhVcmwiLCJhamF4dXJsIiwibWFrZVN2Z1Bpbkljb24iLCJzdmciLCJ0cmltIiwiTCIsImRpdkljb24iLCJjbGFzc05hbWUiLCJodG1sIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJpbml0TWFwSWZOZWVkZWQiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwic2Nyb2xsV2hlZWxab29tIiwic2V0VmlldyIsIm9uIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRpbGVMYXllciIsImFkZFRvIiwibGF5ZXJHcm91cCIsIndoZW5SZWFkeSIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsIl91bnVzZWQiLCJidWlsZFBvcHVwSHRtbCIsInRpdGxlIiwibGluayIsImhyZWYiLCJpbWciLCJpbWFnZSIsImV4dHJhY3RNYXJrZXJzRnJvbURvbSIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3V0IiwiY2FyZCIsIl9jYXJkJHF1ZXJ5U2VsZWN0b3IiLCJfY2FyZCRxdWVyeVNlbGVjdG9yMiIsImxhdCIsImRhdGFzZXQiLCJsbmciLCJpc0Zpbml0ZSIsInRleHRDb250ZW50IiwiY2FyZEhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJwcmljZSIsImJlZHMiLCJhZGRyZXNzIiwic29sZCIsInNlZW4iLCJTZXQiLCJrIiwidG9GaXhlZCIsImhhcyIsImFkZCIsInJlbmRlclBpbnMiLCJtYXJrZXJzIiwiX3JlZiIsInVuZGVmaW5lZCIsImZpdCIsImNsZWFyTGF5ZXJzIiwiY2xlYXIiLCJwaW5JY29uIiwicG9wdXBPcHRzIiwibWF4V2lkdGgiLCJtYXJrZXIiLCJpY29uIiwiYmluZFBvcHVwIiwibGwiLCJnZXRMYXRMbmciLCJwYW5UbyIsImFuaW1hdGUiLCJhZGRMYXllciIsImlkIiwic2V0Iiwic2hvdWxkRml0Iiwib25seSIsIm1pbiIsImJvdW5kcyIsImxhdExuZ0JvdW5kcyIsImlzTW9iaWxlIiwiaW5uZXJXaWR0aCIsImZpdEJvdW5kcyIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwiZml4TWFwU2l6ZSIsInJ1biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3YXRjaExheW91dENoYW5nZXMiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImZldGNoQWxsTWFya2Vyc0Zvck1hcCIsIl94IiwiX2ZldGNoQWxsTWFya2Vyc0Zvck1hcCIsIl9jYWxsZWUiLCJ1cmxGb3JRdWVyeSIsIl9qc29uIiwiX2pzb24kZGF0YSIsInFzIiwiYm9keSIsInJlcyIsInRleHQiLCJqc29uIiwiX3QiLCJfY29udGV4dCIsIlVSTCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJzbGljZSIsIkVycm9yIiwic3VjY2VzcyIsImRhdGEiLCJvblJlc3VsdHNVcGRhdGVkIiwiX3gyIiwiX29uUmVzdWx0c1VwZGF0ZWQiLCJfY2FsbGVlMiIsInBhZ2VNYXJrZXJzIiwiYWxsTWFya2VycyIsIl90MiIsIl9jb250ZXh0MiIsInVzZUFsbE1hdGNoZXNFbmRwb2ludCIsImluaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRNYXAiLCJCcmFuY2hNYXAiXSwic291cmNlUm9vdCI6IiJ9
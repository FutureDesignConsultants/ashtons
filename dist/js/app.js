/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js"
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener("DOMContentLoaded", function () {
  // ===
  //Sticky scroll navigation
  // === //

  // Sticky header: shows when scrolling up, hides when scrolling down
  (function () {
    if (document.body.classList.contains("single-property") || document.body.classList.contains("single-blog-posts")) {
      return;
    }
    var siteHeaderElement = document.querySelector("header");
    if (!siteHeaderElement) return;
    var hiddenHeaderClassName = "header--hidden";
    var megaPanelsContainerElement = document.querySelector("#mega-panels");
    var megaPanelElementSelector = "[data-mega-panel]";
    var megaTriggerElementSelector = "[data-mega]";
    var openNavItemClassName = "is-mega-open";
    var openTriggerAriaAttributeName = "aria-expanded";
    var alwaysShowHeaderWithinTopPixels = 20;
    var scrollJitterThresholdPixels = 4;
    var previousScrollY = window.scrollY || 0;
    var isScrollUpdateScheduled = false;
    var firstSectionAfterHeader = siteHeaderElement.nextElementSibling;
    var canUseTransparentHeader = firstSectionAfterHeader && firstSectionAfterHeader.tagName === "SECTION" && !firstSectionAfterHeader.classList.contains("bg-off-white") && !firstSectionAfterHeader.classList.contains("bg-white");
    function setPageTopOffsetToHeaderHeight() {
      var headerHeightPixels = siteHeaderElement.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--fixed-header-height", "".concat(headerHeightPixels, "px"));
    }
    function showHeader() {
      var scrollPosition = window.scrollY;
      siteHeaderElement.classList.remove(hiddenHeaderClassName);
      if (scrollPosition > 98) {
        siteHeaderElement.classList.add("bg-dark-grey");
        siteHeaderElement.classList.remove("bg-transparent");
        return;
      }
      if (canUseTransparentHeader) {
        siteHeaderElement.classList.add("bg-transparent");
        siteHeaderElement.classList.remove("bg-dark-grey");
      } else {
        siteHeaderElement.classList.add("bg-dark-grey");
        siteHeaderElement.classList.remove("bg-transparent");
      }
    }
    function hideHeader() {
      siteHeaderElement.classList.add(hiddenHeaderClassName);
    }
    function closeMegaPanels() {
      if (megaPanelsContainerElement) {
        var megaPanelElements = megaPanelsContainerElement.querySelectorAll(megaPanelElementSelector);
        megaPanelElements.forEach(function (panelElement) {
          panelElement.hidden = true;
        });
      }
      var megaTriggerElements = document.querySelectorAll(megaTriggerElementSelector);
      megaTriggerElements.forEach(function (triggerElement) {
        triggerElement.classList.remove(openNavItemClassName);
        if (triggerElement.hasAttribute(openTriggerAriaAttributeName)) {
          triggerElement.setAttribute(openTriggerAriaAttributeName, "false");
        }
      });
    }
    function isAnyMegaPanelOpen() {
      if (!megaPanelsContainerElement) return false;
      return !!megaPanelsContainerElement.querySelector("".concat(megaPanelElementSelector, ":not([hidden])"));
    }
    function applyHeaderVisibilityFromScrollPosition() {
      var currentScrollY = window.scrollY || 0;
      var scrollDeltaY = currentScrollY - previousScrollY;
      if (currentScrollY <= alwaysShowHeaderWithinTopPixels) {
        showHeader();
        closeMegaPanels();
        previousScrollY = currentScrollY;
        isScrollUpdateScheduled = false;
        return;
      }
      if (Math.abs(scrollDeltaY) < scrollJitterThresholdPixels) {
        isScrollUpdateScheduled = false;
        return;
      }
      var isMegaMenuCurrentlyOpen = isAnyMegaPanelOpen();
      if (isMegaMenuCurrentlyOpen) {
        showHeader();
        closeMegaPanels();
        previousScrollY = currentScrollY;
        isScrollUpdateScheduled = false;
        return;
      }
      var isUserScrollingDown = scrollDeltaY > 0;
      closeMegaPanels();
      if (isUserScrollingDown) hideHeader();else showHeader();
      previousScrollY = currentScrollY;
      isScrollUpdateScheduled = false;
    }
    setPageTopOffsetToHeaderHeight();
    showHeader();
    window.addEventListener("resize", setPageTopOffsetToHeaderHeight);
    new ResizeObserver(setPageTopOffsetToHeaderHeight).observe(siteHeaderElement);
    window.addEventListener("scroll", function () {
      if (isScrollUpdateScheduled) return;
      isScrollUpdateScheduled = true;
      window.requestAnimationFrame(applyHeaderVisibilityFromScrollPosition);
    }, {
      passive: true
    });
  })();

  // Sticky "lock to top" for your new wrapper:
  // <div class="sticky-controls"> ...elements you want sticking... </div>

  (function () {
    var sticky = document.querySelector(".sticky-controls");
    if (!sticky) return;

    // If you have a fixed site header, set this to its height (e.g. 80)
    var TOP_OFFSET = 0;

    // Spacer prevents layout jump when sticky becomes fixed
    var spacer = document.createElement("div");
    spacer.className = "sticky-controls-spacer";
    sticky.parentNode.insertBefore(spacer, sticky);

    // Capture the point at which the wrapper should become fixed
    // (absolute position in the document)
    var stickyStartY = 0;
    var recalc = function recalc() {
      // if currently fixed, temporarily remove to measure natural position
      var wasFixed = sticky.classList.contains("is-fixed");
      if (wasFixed) {
        sticky.classList.remove("is-fixed");
        spacer.classList.remove("is-active");
        spacer.style.height = "";
      }
      var rect = sticky.getBoundingClientRect();
      stickyStartY = rect.top + window.scrollY - TOP_OFFSET;

      // restore state after measuring
      if (wasFixed) update();
    };
    var update = function update() {
      var shouldFix = window.scrollY >= stickyStartY;
      if (shouldFix && !sticky.classList.contains("is-fixed")) {
        spacer.style.height = "".concat(sticky.offsetHeight, "px");
        spacer.classList.add("is-active");
        sticky.classList.add("is-fixed");
      } else if (!shouldFix && sticky.classList.contains("is-fixed")) {
        sticky.classList.remove("is-fixed");
        spacer.classList.remove("is-active");
        spacer.style.height = "";
      }
    };

    // Run once DOM/layout is ready
    var init = function init() {
      recalc();
      update();
    };
    window.addEventListener("scroll", update, {
      passive: true
    });
    window.addEventListener("resize", function () {
      recalc();
      update();
    });

    // If fonts/images shift layout, this helps lock it in
    window.addEventListener("load", init);

    // Initial
    init();
  })();
  (function () {
    var burger = document.querySelector(".burger-btn");
    var mobileNav = document.querySelector(".mobile-nav");
    var desktopBurgerMenu = document.querySelector(".desktop-burger-menu");
    var header = document.querySelector("header");
    var blurOverlay = document.querySelector(".page-blur-overlay");
    if (!burger || !mobileNav || !header) return;
    var isDesktop = function isDesktop() {
      return window.matchMedia("(min-width: 768px)").matches;
    };
    var setHeaderHeightVar = function setHeaderHeightVar() {
      document.documentElement.style.setProperty("--header-height", "".concat(header.offsetHeight, "px"));
    };
    var updatePageBlur = function updatePageBlur() {
      if (!blurOverlay || !isDesktop()) {
        blurOverlay === null || blurOverlay === void 0 || blurOverlay.classList.remove("is-active");
        return;
      }
      var megaOpen = header.classList.contains("mega-open");
      var desktopMenuOpen = desktopBurgerMenu === null || desktopBurgerMenu === void 0 ? void 0 : desktopBurgerMenu.classList.contains("nav-open");
      blurOverlay.classList.toggle("is-active", megaOpen || desktopMenuOpen);
    };
    var openMenu = function openMenu() {
      var _window$hideMegaMenu, _window;
      (_window$hideMegaMenu = (_window = window).hideMegaMenu) === null || _window$hideMegaMenu === void 0 || _window$hideMegaMenu.call(_window);
      burger.classList.add("open");
      mobileNav.classList.add("nav-open");
      desktopBurgerMenu === null || desktopBurgerMenu === void 0 || desktopBurgerMenu.classList.add("nav-open");
      header.classList.add("nav-open");
      document.body.classList.add("nav-open");
      burger.setAttribute("aria-expanded", "true");
      mobileNav.setAttribute("aria-hidden", "false");
      burger.setAttribute("aria-label", "Close menu");
      if (!isDesktop()) {
        document.body.style.overflow = "hidden";
      }
      setHeaderHeightVar();
      updatePageBlur();
    };
    var closeMenu = function closeMenu() {
      burger.classList.remove("open");
      mobileNav.classList.remove("nav-open");
      desktopBurgerMenu === null || desktopBurgerMenu === void 0 || desktopBurgerMenu.classList.remove("nav-open");
      header.classList.remove("nav-open");
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      burger.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
      setHeaderHeightVar();
      updatePageBlur();
    };
    var toggleMenu = function toggleMenu() {
      var isOpen = mobileNav.classList.contains("nav-open");
      isOpen ? closeMenu() : openMenu();
    };
    burger.addEventListener("click", function (e) {
      if (isDesktop()) return;
      e.preventDefault();
      toggleMenu();
    });
    burger.addEventListener("mouseenter", function () {
      if (!isDesktop()) return;
      openMenu();
    });
    burger.addEventListener("focus", function () {
      if (!isDesktop()) return;
      openMenu();
    });
    var maybeCloseDesktopBurger = function maybeCloseDesktopBurger() {
      window.setTimeout(function () {
        if (!isDesktop()) return;
        var burgerHovered = burger.matches(":hover");
        var menuHovered = desktopBurgerMenu === null || desktopBurgerMenu === void 0 ? void 0 : desktopBurgerMenu.matches(":hover");
        if (!burgerHovered && !menuHovered) {
          closeMenu();
        }
      }, 120);
    };
    burger.addEventListener("mouseleave", maybeCloseDesktopBurger);
    desktopBurgerMenu === null || desktopBurgerMenu === void 0 || desktopBurgerMenu.addEventListener("mouseleave", maybeCloseDesktopBurger);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("nav-open")) {
        closeMenu();
      }
    });
    blurOverlay === null || blurOverlay === void 0 || blurOverlay.addEventListener("click", function () {
      var _window$hideMegaMenu2, _window2;
      (_window$hideMegaMenu2 = (_window2 = window).hideMegaMenu) === null || _window$hideMegaMenu2 === void 0 || _window$hideMegaMenu2.call(_window2);
      closeMenu();
    });
    window.addEventListener("resize", function () {
      setHeaderHeightVar();
      if (isDesktop()) {
        document.body.style.overflow = "";
      }
      updatePageBlur();
    });
    setHeaderHeightVar();
    window.updatePageBlur = updatePageBlur;
  })();

  // ===
  // Nav Mega Menu
  // === //

  (function () {
    var header = document.querySelector("header");
    var nav = document.querySelector(".menu-primary");
    var panelsWrap = document.getElementById("mega-panels");
    var hoverZone = document.querySelector(".nav-wrap");
    if (!header || !nav || !panelsWrap || !hoverZone) return;
    var triggers = nav.querySelectorAll("a[data-mega]");
    var panels = panelsWrap.querySelectorAll(".mega-panel[data-mega-panel]");
    var hideAll = function hideAll() {
      var _window$updatePageBlu, _window3;
      panels.forEach(function (p) {
        return p.hidden = true;
      });
      triggers.forEach(function (t) {
        return t.setAttribute("aria-expanded", "false");
      });
      panelsWrap.classList.remove("is-open");
      header.classList.remove("mega-open");
      (_window$updatePageBlu = (_window3 = window).updatePageBlur) === null || _window$updatePageBlu === void 0 || _window$updatePageBlu.call(_window3);
    };
    var showKey = function showKey(key, triggerEl) {
      var _window$updatePageBlu2, _window4;
      var panel = panelsWrap.querySelector(".mega-panel[data-mega-panel=\"".concat(CSS.escape(key), "\"]"));
      if (!panel) return;
      panels.forEach(function (p) {
        return p.hidden = p !== panel;
      });
      triggers.forEach(function (t) {
        return t.setAttribute("aria-expanded", t === triggerEl ? "true" : "false");
      });
      panelsWrap.classList.add("is-open");
      header.classList.add("mega-open");
      (_window$updatePageBlu2 = (_window4 = window).updatePageBlur) === null || _window$updatePageBlu2 === void 0 || _window$updatePageBlu2.call(_window4);
    };
    triggers.forEach(function (trigger) {
      var key = trigger.getAttribute("data-mega");
      if (!key) return;
      trigger.addEventListener("mouseenter", function () {
        return showKey(key, trigger);
      });
      trigger.addEventListener("focus", function () {
        return showKey(key, trigger);
      });
    });
    var maybeClose = function maybeClose() {
      window.setTimeout(function () {
        if (!hoverZone.matches(":hover") && !panelsWrap.matches(":hover")) {
          hideAll();
        }
      }, 120);
    };
    hoverZone.addEventListener("mouseleave", maybeClose);
    panelsWrap.addEventListener("mouseleave", maybeClose);
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) hideAll();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") hideAll();
    });
    window.hideMegaMenu = hideAll;
    hideAll();
  })();

  // ===
  // Mobile mega menu
  // === //

  (function () {
    var nav = document.querySelector(".mobile-nav");
    var panels = document.querySelectorAll(".mobile-panel");
    if (!nav) return;
    var openPanel = function openPanel(key) {
      panels.forEach(function (p) {
        var isTarget = p.dataset.mobilePanel === key;
        p.hidden = !isTarget;
        p.classList.toggle("is-active", isTarget);
      });
      nav.classList.add("panel-open");
    };
    var closePanel = function closePanel() {
      panels.forEach(function (p) {
        p.hidden = true;
        p.classList.remove("is-active");
      });
      nav.classList.remove("panel-open");
    };

    // open panel when clicking top-level item
    nav.querySelectorAll(".menu-primary > li > a[data-mega]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        openPanel(link.dataset.mega);
      });
    });

    // back buttons
    nav.querySelectorAll(".mobile-panel__back").forEach(function (btn) {
      return btn.addEventListener("click", closePanel);
    });
  })();
  (function () {
    var OFFSET = 0; // sticky header height
    var MAX_WAIT = 2000; // ms to wait for element to appear
    var STEP = 50; // ms polling interval

    var decodeHash = function decodeHash(hash) {
      if (!hash) return "";
      var h = hash.startsWith("#") ? hash.slice(1) : hash;
      try {
        return decodeURIComponent(h);
      } catch (_unused) {
        return h;
      }
    };
    var findTarget = function findTarget(id) {
      return document.getElementById(id) || document.querySelector("[name=\"".concat(CSS.escape(id), "\"]"));
    };
    var scrollToId = function scrollToId(id) {
      var el = findTarget(id);
      if (!el) return false;
      var y = el.getBoundingClientRect().top + window.pageYOffset - OFFSET;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      return true;
    };
    var scrollWhenReady = function scrollWhenReady(id) {
      var start = Date.now();
      var _tick = function tick() {
        if (scrollToId(id)) return;
        if (Date.now() - start >= MAX_WAIT) return;
        setTimeout(_tick, STEP);
      };
      _tick();
    };

    // Intercept anchor clicks (same-origin)
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href*="#"]');
      if (!a) return;
      var url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      var id = decodeHash(url.hash);
      if (!id) return;

      // If navigating to a different path, let navigation happen,
      // but remember the target for after load.
      if (url.pathname !== window.location.pathname) {
        sessionStorage.setItem("pendingAnchor", id);
        return;
      }

      // Same page: smooth scroll now
      var targetExists = !!findTarget(id);
      if (!targetExists) return; // allow default if it doesn't exist

      e.preventDefault();
      history.pushState(null, "", "#" + encodeURIComponent(id));
      scrollWhenReady(id);
    });

    // On load: handle hash or pending cross-page anchor
    window.addEventListener("load", function () {
      var pending = sessionStorage.getItem("pendingAnchor");
      if (pending) {
        sessionStorage.removeItem("pendingAnchor");
        scrollWhenReady(pending);
        return;
      }
      var id = decodeHash(window.location.hash);
      if (id) scrollWhenReady(id);
    });
  })();

  // ===
  // Team slide cards toggle
  // === //

  var cards = document.querySelectorAll(".team-slide-card");
  cards.forEach(function (card) {
    var desc = card.querySelector(".description");
    var verticalPath = card.querySelector(".icon .vertical");
    if (!desc) return;
    card.addEventListener("click", function () {
      // Close others
      cards.forEach(function (otherCard) {
        var otherDesc = otherCard.querySelector(".description");
        var otherVerticalPath = otherCard.querySelector(".icon .vertical");
        if (otherDesc && otherDesc !== desc) otherDesc.classList.remove("is-visible");
        if (otherVerticalPath && otherVerticalPath !== verticalPath) {
          otherVerticalPath.style.opacity = "1";
        }
      });

      // Toggle current
      desc.classList.toggle("is-visible");
      if (verticalPath) {
        verticalPath.style.opacity = verticalPath.style.opacity === "0" ? "1" : "0";
      }
    });
  });

  // ===
  // Custom Gravity Forms Submit
  // === //

  document.querySelectorAll(".custom-submit-button").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      var form = button.closest("form");
      if (!form) return;
      var realSubmit = form.querySelector('input[type="submit"]');
      if (realSubmit) realSubmit.click();
    });
  });

  // ===
  // Facet Custom Filter
  // === //

  var toggleBtn = document.getElementById("toggle-facet");
  var facetPanel = document.getElementById("facet-panel");
  if (toggleBtn && facetPanel) {
    toggleBtn.addEventListener("click", function () {
      toggleBtn.classList.toggle("active");
      facetPanel.classList.toggle("hidden");
    });
  }
  var svgIcon = "\n    <svg class=\"facet-radio-selected-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\">\n      <circle cx=\"9\" cy=\"9\" r=\"8.5\" stroke=\"#000\" fill=\"none\"/>\n      <path d=\"M12.47 5.43l-7 6.96\" stroke=\"#24242d\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M5.5 5.41l6.96 7\" stroke=\"#24242d\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg>\n  ";
  function updateFacetCheckboxes() {
    document.querySelectorAll(".facetwp-checkbox").forEach(function (el) {
      var iconWrapper = el.querySelector(".facet-radio-selected-icon");
      if (!iconWrapper) {
        var span = document.createElement("span");
        span.classList.add("facet-radio-selected-icon");
        span.innerHTML = svgIcon;
        el.appendChild(span);
        iconWrapper = span;
      }
      iconWrapper.style.display = el.classList.contains("checked") ? "inline-block" : "none";
    });
  }
  if (window.FWP) {
    document.addEventListener("facetwp-loaded", updateFacetCheckboxes);
  }
  (function () {
    var galleryImages = document.querySelectorAll(".property-gallery__img");
    if (!galleryImages.length) return;
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    var ticking = false;
    function updateParallax() {
      var viewportHeight = window.innerHeight;
      galleryImages.forEach(function (image) {
        var rect = image.getBoundingClientRect();

        // Skip if far outside viewport
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        // Progress through viewport: -1 to 1
        var imageCenter = rect.top + rect.height / 2;
        var viewportCenter = viewportHeight / 2;
        var distanceFromCenter = (imageCenter - viewportCenter) / viewportHeight;

        // Keep it subtle
        var translateY = distanceFromCenter * -18;
        image.style.transform = "translate3d(0, ".concat(translateY, "px, 0) scale(1.06)");
      });
      ticking = false;
    }
    function requestTick() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }
    window.addEventListener("scroll", requestTick, {
      passive: true
    });
    window.addEventListener("resize", requestTick);
    updateParallax();
  })();

  // Parallax Items
  // Initialise Instance
  var homeHeroSVG = document.querySelector(".property-listing .ribbon");
  function parallaxItem(item) {
    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    if (!item) return;
    function update() {
      var rect = item.getBoundingClientRect();
      var viewportCenter = window.innerHeight / 2;
      var offset = rect.top + rect.height / 2 - viewportCenter;

      // Inverted direction
      var translateY = offset / viewportCenter * intensity;
      item.style.transform = "translateY(".concat(translateY, "px)");
    }
    function onScroll() {
      requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll);
    update();
  }
  parallaxItem(homeHeroSVG, 25); // lower = subtler

  (function () {
    var group = document.querySelector(".team-callout .img-group");
    if (!group) return;
    var images = Array.from(group.querySelectorAll(".img-wrapper"));
    var ticking = false;
    function getVisibleImages() {
      return images.filter(function (img) {
        var style = window.getComputedStyle(img);
        return style.display !== "none" && style.visibility !== "hidden" && img.offsetWidth > 0 && img.offsetHeight > 0;
      });
    }
    function update() {
      var visibleImages = getVisibleImages();
      if (!visibleImages.length) {
        ticking = false;
        return;
      }
      var rects = visibleImages.map(function (img) {
        return img.getBoundingClientRect();
      });
      var top = Math.min.apply(Math, _toConsumableArray(rects.map(function (r) {
        return r.top;
      })));
      var bottom = Math.max.apply(Math, _toConsumableArray(rects.map(function (r) {
        return r.bottom;
      })));
      var groupCenter = (top + bottom) / 2;
      var viewportCenter = window.innerHeight / 2;
      var offset = groupCenter - viewportCenter;
      var intensity = 40;
      var parallaxY = offset / viewportCenter * intensity;
      group.style.transform = "translateY(".concat(-parallaxY, "px)");
      ticking = false;
    }
    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("load", function () {
      requestUpdate();
      setTimeout(requestUpdate, 50);
      setTimeout(requestUpdate, 150);
      setTimeout(requestUpdate, 300);
      window.addEventListener("scroll", requestUpdate, {
        passive: true
      });
      window.addEventListener("resize", requestUpdate);
    });
    group.querySelectorAll("img").forEach(function (img) {
      if (!img.complete) {
        img.addEventListener("load", requestUpdate);
      }
    });
  })();

  // Footer dropdown functionality
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".footer-column.dropdown .dropdown-btn");
    if (!btn) return;
    if (window.innerWidth >= 1024) return;
    e.preventDefault();
    e.stopPropagation();
    var dropdown = btn.closest(".footer-column.dropdown");
    var dropdowns = document.querySelectorAll(".footer-column.dropdown");
    var arrow = btn.querySelector("svg");
    var isActive = dropdown.classList.contains("active");
    dropdowns.forEach(function (d) {
      d.classList.remove("active");
      var svg = d.querySelector(".dropdown-btn svg");
      if (svg) svg.classList.remove("rotate-arrow");
    });
    if (!isActive) {
      dropdown.classList.add("active");
      if (arrow) arrow.classList.add("rotate-arrow");
    }
  });
  document.addEventListener("click", function (e) {
    if (window.innerWidth >= 1024) return;
    var clickedInsideDropdown = e.target.closest(".footer-column.dropdown");
    if (clickedInsideDropdown) return;
    document.querySelectorAll(".footer-column.dropdown").forEach(function (d) {
      d.classList.remove("active");
      var svg = d.querySelector(".dropdown-btn svg");
      if (svg) svg.classList.remove("rotate-arrow");
    });
  });
  window.addEventListener("load", function () {
    var heroSearch = document.querySelector(".hero-search");
    if (heroSearch) {
      heroSearch.style.opacity = 1;
    }
  });

  // // Instagram Modal
  window.addEventListener("load", function () {
    document.querySelectorAll(".sbi_photo").forEach(function (el) {
      if (window.sbi_lightbox && typeof window.sbi_lightbox.open === "function") {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          window.sbi_lightbox.open(el);
        });
      }
    });
  });
  // Insta Feeds
  function humanTimeDiff(from, to) {
    var diff = Math.abs(to - from);
    var minute = 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var month = day * 30;
    var year = day * 365;
    if (diff < minute) return "".concat(diff, "s");
    if (diff < hour) return "".concat(Math.floor(diff / minute), " minutes");
    if (diff < day) return "".concat(Math.floor(diff / hour), " hours");
    if (diff < week) return "".concat(Math.floor(diff / day), " days");
    if (diff < month) return "".concat(Math.floor(diff / week), " weeks");
    if (diff < year) return "".concat(Math.floor(diff / month), " months");
    return "".concat(Math.floor(diff / year), "y");
  }
  function applyInstagramDates() {
    document.querySelectorAll(".sbi_item").forEach(function (card) {
      if (card.dataset.timeagoDone) return;
      card.dataset.timeagoDone = "true";
      var timestamp = Number(card.dataset.date);
      var usernameLink = card.querySelector(".sbi_username a");
      if (!usernameLink || !timestamp) return;
      var now = Math.floor(Date.now() / 1000);
      var timeAgo = humanTimeDiff(timestamp, now);
      usernameLink.insertAdjacentHTML("afterend", "<span class=\"sbi_timeago\">".concat(timeAgo, " ago</span>"));
    });
  }
  applyInstagramDates();
  var feed = document.querySelector("#sb_instagram");
  if (feed) {
    var observer = new MutationObserver(function () {
      applyInstagramDates();
    });
    observer.observe(feed, {
      childList: true,
      subtree: true
    });
  }
  // const modal = document.getElementById("sbi-modal");
  // const modalImg = document.getElementById("sbi-modal-img");
  // const modalUser = document.getElementById("sbi-modal-user");
  // const modalCaption = document.getElementById("sbi-modal-caption");

  // document.querySelectorAll(".sbi-photo").forEach((el) => {
  //   el.addEventListener("click", function () {
  //     modal.style.display = "block";
  //     modalImg.src = this.dataset.img;
  //     modalUser.textContent = this.dataset.user;
  //     modalCaption.textContent = this.dataset.caption;
  //   });
  // });

  // document.querySelector(".sbi-close").addEventListener("click", function () {
  //   modal.style.display = "none";
  // });

  // document
  //   .querySelector(".sbi-modal-backdrop")
  //   .addEventListener("click", function () {
  //     modal.style.display = "none";
  //   });

  //   const arrangeViewingTrigger = document.querySelector(
  //     ".js-open-viewing-modal",
  //   );
  //   const arrangeViewingModal = document.getElementById("viewingModal");
  //   const arrangeViewingCloseButtons = document.querySelectorAll(
  //     ".js-close-viewing-modal",
  //   );

  //   if (!arrangeViewingTrigger || !arrangeViewingModal) return;

  //   const openArrangeViewingModal = () => {
  //     arrangeViewingModal.classList.add("is-open");
  //     arrangeViewingModal.setAttribute("aria-hidden", "false");
  //     document.body.style.overflow = "hidden";
  //   };

  //   const closeArrangeViewingModal = () => {
  //     arrangeViewingModal.classList.remove("is-open");
  //     arrangeViewingModal.setAttribute("aria-hidden", "true");
  //     document.body.style.overflow = "";
  //   };

  //   arrangeViewingTrigger.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     openArrangeViewingModal();
  //   });

  //   arrangeViewingCloseButtons.forEach((btn) => {
  //     btn.addEventListener("click", closeArrangeViewingModal);
  //   });

  //   document.addEventListener("keydown", function (e) {
  //     if (
  //       e.key === "Escape" &&
  //       arrangeViewingModal.classList.contains("is-open")
  //     ) {
  //       closeArrangeViewingModal();
  //     }
  //   });

  function valuationFormSubmit() {
    // Pop up
    var button = document.querySelector("#postcodeSubmit");
    var postcodeField = document.querySelector("#postcode");
    // Why sell hero
    var buttonWhySell = document.querySelector("#postcodeSubmitWhySell");
    var postcodeWhySellField = document.querySelector("#postcodeWhySell");

    // Shared
    var addressField = document.querySelector("#input_4_3");
    if (!button || !postcodeField || !addressField) {
      console.warn("Missing elements - retrying...");
      return;
    }

    // addressField.addEventListener("change", function () {
    //   const selectedOption = addressField.options[addressField.selectedIndex];

    //   let fullAddress =
    //     selectedOption?.dataset?.full || selectedOption?.textContent;

    //   const backupAddressField = document.querySelector("#field_4_4");

    //   // 🔥 fallback if option is empty / placeholder
    //   if (!fullAddress || fullAddress.trim() === "") {
    //     fullAddress = backupAddressField?.value || "";
    //   }

    //   const hiddenField = document.querySelector("#input_4_9");

    //   if (hiddenField) {
    //     hiddenField.value = fullAddress;
    //   }
    // });

    function syncAddressToHiddenField(fullAddress) {
      var hiddenField = document.querySelector("#input_4_9");
      if (hiddenField) {
        hiddenField.value = fullAddress || "";
      }
    }
    addressField.addEventListener("change", function () {
      var _selectedOption$datas;
      var selectedOption = addressField.options[addressField.selectedIndex];
      var fullAddress = (selectedOption === null || selectedOption === void 0 || (_selectedOption$datas = selectedOption.dataset) === null || _selectedOption$datas === void 0 ? void 0 : _selectedOption$datas.full) || (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.textContent);
      var backupAddressField = document.querySelector("#field_4_4");
      if (!fullAddress || fullAddress.trim() === "") {
        fullAddress = (backupAddressField === null || backupAddressField === void 0 ? void 0 : backupAddressField.value) || "";
      }
      syncAddressToHiddenField(fullAddress);
    });
    var backupAddressField = document.querySelector("#input_4_4");
    backupAddressField.addEventListener("input", function () {
      var fullAddress = backupAddressField === null || backupAddressField === void 0 ? void 0 : backupAddressField.value;
      if (!fullAddress || fullAddress.trim() === "") {
        fullAddress = (backupAddressField === null || backupAddressField === void 0 ? void 0 : backupAddressField.value) || "";
      }
      syncAddressToHiddenField(fullAddress);
    });
    button.addEventListener("click", function (e) {
      var button = e.target.closest("#postcodeSubmit");
      if (!button) return;
      e.preventDefault();
      var formFooter = document.querySelector("#gform_wrapper_4 .gform-footer");
      var formWrapper = document.querySelector("#gform_wrapper_4");
      if (addressField) {
        addressField.classList.add("is-visible");
        formWrapper.classList.add("is-visible");
        formFooter.classList.add("is-visible");
      }
      var postcode = postcodeField.value.trim();
      if (!postcode) {
        alert("Enter postcode");
        return;
      }
      button.classList.add("loading");
      fetch("https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=8b758-30d43-41d6d-09d4d&postcode=".concat(encodeURIComponent(postcode))).then(function (res) {
        return res.json();
      }).then(function (data) {
        var _data$thoroughfares;
        var first = (_data$thoroughfares = data.thoroughfares) === null || _data$thoroughfares === void 0 ? void 0 : _data$thoroughfares[0];
        var points = (first === null || first === void 0 ? void 0 : first.delivery_points) || [];
        if (!points.length) {
          alert("No addresses found");
          return;
        }
        var street = "".concat(first.thoroughfare_name, " ").concat(first.thoroughfare_descriptor).trim();
        addressField.innerHTML = "<option value=\"\">Select address</option>";
        points.forEach(function (item) {
          var option = document.createElement("option");
          var line1 = item.building_number || item.organisation_name || "Unknown";
          var line2 = street;
          var label = item.organisation_name ? "".concat(item.organisation_name, ", ").concat(street) : "".concat(line1, " ").concat(line2);

          // option.value = JSON.stringify({
          //   line1,
          //   line2,
          //   full: label,
          //   raw: item,
          // });

          option.value = item.udprn;
          option.textContent = label;
          option.dataset.line1 = line1;
          option.dataset.line2 = line2;
          option.dataset.full = label;
          addressField.appendChild(option);
        });
      })["catch"](function (err) {
        button.classList.remove("loading");
        console.error(err);
      });
    });
    var formHelper = document.querySelector(".form-helper");
    if (formHelper) {
      formHelper.addEventListener("click", function () {
        var field_4_4 = document.querySelector("#field_4_4");
        var field_4_6 = document.querySelector("#field_4_6");
        var field_4_7 = document.querySelector("#field_4_7");
        var field_4_8 = document.querySelector("#field_4_8");
        if (field_4_4 && field_4_6 && field_4_7 && field_4_8) {
          field_4_4.classList.add("is-visible");
          field_4_6.classList.add("is-visible");
          field_4_7.classList.add("is-visible");
          field_4_8.classList.add("is-visible");
        }
      });
    }
    if (buttonWhySell) {
      buttonWhySell.addEventListener("click", function (e) {
        var button = e.target.closest("#postcodeSubmitWhySell");
        if (!button) return;
        e.preventDefault();

        // const form = document.querySelector("#gform_wrapper_4");
        // if (form) {
        //   form.classList.add("is-visible");
        // }

        var formFooter = document.querySelector(".gform-footer");
        var formWrapper = document.querySelector("#gform_wrapper_4");
        if (addressField) {
          addressField.classList.add("is-visible");
          formWrapper.classList.add("is-visible");
          formFooter.classList.add("is-visible");
        }
        var postcode = postcodeWhySellField.value.trim();
        if (!postcode) {
          alert("Enter postcode");
          return;
        }
        button.classList.add("loading");
        fetch("https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=8b758-30d43-41d6d-09d4d&postcode=".concat(encodeURIComponent(postcode))).then(function (res) {
          return res.json();
        }).then(function (data) {
          var _data$thoroughfares2;
          var first = (_data$thoroughfares2 = data.thoroughfares) === null || _data$thoroughfares2 === void 0 ? void 0 : _data$thoroughfares2[0];
          var points = (first === null || first === void 0 ? void 0 : first.delivery_points) || [];
          if (!points.length) {
            alert("No addresses found");
            return;
          }
          var street = "".concat(first.thoroughfare_name, " ").concat(first.thoroughfare_descriptor).trim();
          addressField.innerHTML = "<option value=\"\">Select address</option>";
          points.forEach(function (item) {
            var option = document.createElement("option");
            var line1 = item.building_number || item.organisation_name || "Unknown";
            var line2 = street;
            var label = item.organisation_name ? "".concat(item.organisation_name, ", ").concat(street) : "".concat(line1, " ").concat(line2);

            // option.value = JSON.stringify({
            //   line1,
            //   line2,
            //   full: label,
            //   raw: item,
            // });

            option.value = item.udprn;
            option.textContent = label;
            option.dataset.line1 = line1;
            option.dataset.line2 = line2;
            option.dataset.full = label;
            addressField.appendChild(option);
          });
        })["catch"](function (err) {
          button.classList.remove("loading");
          console.error(err);
        });
      });
    }
  }
  valuationFormSubmit();
  function setValuationLocation() {
    var el = document.getElementById("valuationLocation");
    var address = new URLSearchParams(window.location.search).get("address");
    if (el && address) {
      el.textContent = decodeURIComponent(address);
    }
  }
  document.addEventListener("DOMContentLoaded", setValuationLocation);
  jQuery(document).on("gform_post_render", function () {
    setValuationLocation();
  });

  // enquiry popup/modal:

  var enquiryModal = document.getElementById("enquiry-modal");
  function openEnquiryModal() {
    enquiryModal.style.display = "flex";
  }
  function closeEnquiryModal() {
    enquiryModal.style.display = "none";
  }
  window.openEnquiryModal = openEnquiryModal;
  window.closeEnquiryModal = closeEnquiryModal;
  enquiryModal.addEventListener("click", function (e) {
    if (e.target === enquiryModal) {
      closeEnquiryModal();
    }
  });

  // Set Tracking Codes
  function setTrackingCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  var gclid = getParam("gclid");
  var fbclid = getParam("fbclid");
  if (gclid) setTrackingCookie("gclid", gclid, 30);
  if (fbclid) setTrackingCookie("fbclid", fbclid, 30);
});

// GF init for pop up form

jQuery(document).on("gform_post_render", function (event, formId) {
  if (window.gform && typeof gformInitSingleForm === "function") {
    gformInitSingleForm(formId);
  }
});
jQuery(document).on("gform_post_render", function (event, formId) {
  if (formId == 5) {
    var $field = jQuery("#input_5_7");

    // wait until datepicker is actually initialised
    setTimeout(function () {
      if ($field.length && $field.hasClass("hasDatepicker")) {
        $field.datepicker("option", "minDate", 2);
        $field.datepicker("refresh");
      }
    }, 50);
  }
});

/***/ },

/***/ "./assets/scss/style.scss"
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./assets/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO01BQzlCO0lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNSO0FBQ0YsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQy93Q0Y7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDL0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzcz9lODI0Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gPT09XG4gIC8vU3RpY2t5IHNjcm9sbCBuYXZpZ2F0aW9uXG4gIC8vID09PSAvL1xuXG4gIC8vIFN0aWNreSBoZWFkZXI6IHNob3dzIHdoZW4gc2Nyb2xsaW5nIHVwLCBoaWRlcyB3aGVuIHNjcm9sbGluZyBkb3duXG4gICgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtcHJvcGVydHlcIikgfHxcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLWJsb2ctcG9zdHNcIilcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaXRlSGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgaWYgKCFzaXRlSGVhZGVyRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgaGlkZGVuSGVhZGVyQ2xhc3NOYW1lID0gXCJoZWFkZXItLWhpZGRlblwiO1xuXG4gICAgY29uc3QgbWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZ2EtcGFuZWxzXCIpO1xuICAgIGNvbnN0IG1lZ2FQYW5lbEVsZW1lbnRTZWxlY3RvciA9IFwiW2RhdGEtbWVnYS1wYW5lbF1cIjtcbiAgICBjb25zdCBtZWdhVHJpZ2dlckVsZW1lbnRTZWxlY3RvciA9IFwiW2RhdGEtbWVnYV1cIjtcblxuICAgIGNvbnN0IG9wZW5OYXZJdGVtQ2xhc3NOYW1lID0gXCJpcy1tZWdhLW9wZW5cIjtcbiAgICBjb25zdCBvcGVuVHJpZ2dlckFyaWFBdHRyaWJ1dGVOYW1lID0gXCJhcmlhLWV4cGFuZGVkXCI7XG5cbiAgICBjb25zdCBhbHdheXNTaG93SGVhZGVyV2l0aGluVG9wUGl4ZWxzID0gMjA7XG4gICAgY29uc3Qgc2Nyb2xsSml0dGVyVGhyZXNob2xkUGl4ZWxzID0gNDtcblxuICAgIGxldCBwcmV2aW91c1Njcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCAwO1xuICAgIGxldCBpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZmlyc3RTZWN0aW9uQWZ0ZXJIZWFkZXIgPSBzaXRlSGVhZGVyRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgY2FuVXNlVHJhbnNwYXJlbnRIZWFkZXIgPVxuICAgICAgZmlyc3RTZWN0aW9uQWZ0ZXJIZWFkZXIgJiZcbiAgICAgIGZpcnN0U2VjdGlvbkFmdGVySGVhZGVyLnRhZ05hbWUgPT09IFwiU0VDVElPTlwiICYmXG4gICAgICAhZmlyc3RTZWN0aW9uQWZ0ZXJIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctb2ZmLXdoaXRlXCIpICYmXG4gICAgICAhZmlyc3RTZWN0aW9uQWZ0ZXJIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctd2hpdGVcIik7XG5cbiAgICBmdW5jdGlvbiBzZXRQYWdlVG9wT2Zmc2V0VG9IZWFkZXJIZWlnaHQoKSB7XG4gICAgICBjb25zdCBoZWFkZXJIZWlnaHRQaXhlbHMgPVxuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiLS1maXhlZC1oZWFkZXItaGVpZ2h0XCIsXG4gICAgICAgIGAke2hlYWRlckhlaWdodFBpeGVsc31weGAsXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dIZWFkZXIoKSB7XG4gICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkhlYWRlckNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+IDk4KSB7XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiZy1kYXJrLWdyZXlcIik7XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy10cmFuc3BhcmVudFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FuVXNlVHJhbnNwYXJlbnRIZWFkZXIpIHtcbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJnLXRyYW5zcGFyZW50XCIpO1xuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFyay1ncmV5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJnLWRhcmstZ3JleVwiKTtcbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVIZWFkZXIoKSB7XG4gICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKGhpZGRlbkhlYWRlckNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNZWdhUGFuZWxzKCkge1xuICAgICAgaWYgKG1lZ2FQYW5lbHNDb250YWluZXJFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1lZ2FQYW5lbEVsZW1lbnRzID0gbWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBtZWdhUGFuZWxFbGVtZW50U2VsZWN0b3IsXG4gICAgICAgICk7XG4gICAgICAgIG1lZ2FQYW5lbEVsZW1lbnRzLmZvckVhY2goKHBhbmVsRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHBhbmVsRWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVnYVRyaWdnZXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIG1lZ2FUcmlnZ2VyRWxlbWVudFNlbGVjdG9yLFxuICAgICAgKTtcbiAgICAgIG1lZ2FUcmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlckVsZW1lbnQpID0+IHtcbiAgICAgICAgdHJpZ2dlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShvcGVuTmF2SXRlbUNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHRyaWdnZXJFbGVtZW50Lmhhc0F0dHJpYnV0ZShvcGVuVHJpZ2dlckFyaWFBdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgIHRyaWdnZXJFbGVtZW50LnNldEF0dHJpYnV0ZShvcGVuVHJpZ2dlckFyaWFBdHRyaWJ1dGVOYW1lLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FueU1lZ2FQYW5lbE9wZW4oKSB7XG4gICAgICBpZiAoIW1lZ2FQYW5lbHNDb250YWluZXJFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gISFtZWdhUGFuZWxzQ29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgJHttZWdhUGFuZWxFbGVtZW50U2VsZWN0b3J9Om5vdChbaGlkZGVuXSlgLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUhlYWRlclZpc2liaWxpdHlGcm9tU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IDA7XG4gICAgICBjb25zdCBzY3JvbGxEZWx0YVkgPSBjdXJyZW50U2Nyb2xsWSAtIHByZXZpb3VzU2Nyb2xsWTtcblxuICAgICAgaWYgKGN1cnJlbnRTY3JvbGxZIDw9IGFsd2F5c1Nob3dIZWFkZXJXaXRoaW5Ub3BQaXhlbHMpIHtcbiAgICAgICAgc2hvd0hlYWRlcigpO1xuICAgICAgICBjbG9zZU1lZ2FQYW5lbHMoKTtcbiAgICAgICAgcHJldmlvdXNTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgICAgIGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGguYWJzKHNjcm9sbERlbHRhWSkgPCBzY3JvbGxKaXR0ZXJUaHJlc2hvbGRQaXhlbHMpIHtcbiAgICAgICAgaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc01lZ2FNZW51Q3VycmVudGx5T3BlbiA9IGlzQW55TWVnYVBhbmVsT3BlbigpO1xuICAgICAgaWYgKGlzTWVnYU1lbnVDdXJyZW50bHlPcGVuKSB7XG4gICAgICAgIHNob3dIZWFkZXIoKTtcbiAgICAgICAgY2xvc2VNZWdhUGFuZWxzKCk7XG4gICAgICAgIHByZXZpb3VzU2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xuICAgICAgICBpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVXNlclNjcm9sbGluZ0Rvd24gPSBzY3JvbGxEZWx0YVkgPiAwO1xuXG4gICAgICBjbG9zZU1lZ2FQYW5lbHMoKTtcblxuICAgICAgaWYgKGlzVXNlclNjcm9sbGluZ0Rvd24pIGhpZGVIZWFkZXIoKTtcbiAgICAgIGVsc2Ugc2hvd0hlYWRlcigpO1xuXG4gICAgICBwcmV2aW91c1Njcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICAgIGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0UGFnZVRvcE9mZnNldFRvSGVhZGVySGVpZ2h0KCk7XG4gICAgc2hvd0hlYWRlcigpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2V0UGFnZVRvcE9mZnNldFRvSGVhZGVySGVpZ2h0KTtcbiAgICBuZXcgUmVzaXplT2JzZXJ2ZXIoc2V0UGFnZVRvcE9mZnNldFRvSGVhZGVySGVpZ2h0KS5vYnNlcnZlKFxuICAgICAgc2l0ZUhlYWRlckVsZW1lbnQsXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJzY3JvbGxcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkKSByZXR1cm47XG4gICAgICAgIGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhcHBseUhlYWRlclZpc2liaWxpdHlGcm9tU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgfSxcbiAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9LFxuICAgICk7XG4gIH0pKCk7XG5cbiAgLy8gU3RpY2t5IFwibG9jayB0byB0b3BcIiBmb3IgeW91ciBuZXcgd3JhcHBlcjpcbiAgLy8gPGRpdiBjbGFzcz1cInN0aWNreS1jb250cm9sc1wiPiAuLi5lbGVtZW50cyB5b3Ugd2FudCBzdGlja2luZy4uLiA8L2Rpdj5cblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IHN0aWNreSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RpY2t5LWNvbnRyb2xzXCIpO1xuICAgIGlmICghc3RpY2t5KSByZXR1cm47XG5cbiAgICAvLyBJZiB5b3UgaGF2ZSBhIGZpeGVkIHNpdGUgaGVhZGVyLCBzZXQgdGhpcyB0byBpdHMgaGVpZ2h0IChlLmcuIDgwKVxuICAgIGNvbnN0IFRPUF9PRkZTRVQgPSAwO1xuXG4gICAgLy8gU3BhY2VyIHByZXZlbnRzIGxheW91dCBqdW1wIHdoZW4gc3RpY2t5IGJlY29tZXMgZml4ZWRcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc05hbWUgPSBcInN0aWNreS1jb250cm9scy1zcGFjZXJcIjtcbiAgICBzdGlja3kucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhY2VyLCBzdGlja3kpO1xuXG4gICAgLy8gQ2FwdHVyZSB0aGUgcG9pbnQgYXQgd2hpY2ggdGhlIHdyYXBwZXIgc2hvdWxkIGJlY29tZSBmaXhlZFxuICAgIC8vIChhYnNvbHV0ZSBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQpXG4gICAgbGV0IHN0aWNreVN0YXJ0WSA9IDA7XG5cbiAgICBjb25zdCByZWNhbGMgPSAoKSA9PiB7XG4gICAgICAvLyBpZiBjdXJyZW50bHkgZml4ZWQsIHRlbXBvcmFyaWx5IHJlbW92ZSB0byBtZWFzdXJlIG5hdHVyYWwgcG9zaXRpb25cbiAgICAgIGNvbnN0IHdhc0ZpeGVkID0gc3RpY2t5LmNsYXNzTGlzdC5jb250YWlucyhcImlzLWZpeGVkXCIpO1xuICAgICAgaWYgKHdhc0ZpeGVkKSB7XG4gICAgICAgIHN0aWNreS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XG4gICAgICAgIHNwYWNlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVjdCA9IHN0aWNreS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHN0aWNreVN0YXJ0WSA9IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFkgLSBUT1BfT0ZGU0VUO1xuXG4gICAgICAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIG1lYXN1cmluZ1xuICAgICAgaWYgKHdhc0ZpeGVkKSB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdWxkRml4ID0gd2luZG93LnNjcm9sbFkgPj0gc3RpY2t5U3RhcnRZO1xuXG4gICAgICBpZiAoc2hvdWxkRml4ICYmICFzdGlja3kuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtZml4ZWRcIikpIHtcbiAgICAgICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IGAke3N0aWNreS5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgc3RpY2t5LmNsYXNzTGlzdC5hZGQoXCJpcy1maXhlZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNob3VsZEZpeCAmJiBzdGlja3kuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtZml4ZWRcIikpIHtcbiAgICAgICAgc3RpY2t5LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcbiAgICAgICAgc3BhY2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSdW4gb25jZSBET00vbGF5b3V0IGlzIHJlYWR5XG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgIHJlY2FsYygpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHJlY2FsYygpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiBmb250cy9pbWFnZXMgc2hpZnQgbGF5b3V0LCB0aGlzIGhlbHBzIGxvY2sgaXQgaW5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdCk7XG5cbiAgICAvLyBJbml0aWFsXG4gICAgaW5pdCgpO1xuICB9KSgpO1xuXG4gICgoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItYnRuXCIpO1xuICAgIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdlwiKTtcbiAgICBjb25zdCBkZXNrdG9wQnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVza3RvcC1idXJnZXItbWVudVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGJsdXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWJsdXItb3ZlcmxheVwiKTtcblxuICAgIGlmICghYnVyZ2VyIHx8ICFtb2JpbGVOYXYgfHwgIWhlYWRlcikgcmV0dXJuO1xuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gKCkgPT4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA3NjhweClcIikubWF0Y2hlcztcblxuICAgIGNvbnN0IHNldEhlYWRlckhlaWdodFZhciA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgXCItLWhlYWRlci1oZWlnaHRcIixcbiAgICAgICAgYCR7aGVhZGVyLm9mZnNldEhlaWdodH1weGAsXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVQYWdlQmx1ciA9ICgpID0+IHtcbiAgICAgIGlmICghYmx1ck92ZXJsYXkgfHwgIWlzRGVza3RvcCgpKSB7XG4gICAgICAgIGJsdXJPdmVybGF5Py5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lZ2FPcGVuID0gaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZ2Etb3BlblwiKTtcbiAgICAgIGNvbnN0IGRlc2t0b3BNZW51T3BlbiA9IGRlc2t0b3BCdXJnZXJNZW51Py5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb3BlblwiKTtcblxuICAgICAgYmx1ck92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiLCBtZWdhT3BlbiB8fCBkZXNrdG9wTWVudU9wZW4pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuTWVudSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaWRlTWVnYU1lbnU/LigpO1xuXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LmFkZChcIm5hdi1vcGVuXCIpO1xuICAgICAgZGVza3RvcEJ1cmdlck1lbnU/LmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcblxuICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgbW9iaWxlTmF2LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gICAgICBidXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlIG1lbnVcIik7XG5cbiAgICAgIGlmICghaXNEZXNrdG9wKCkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICB9XG5cbiAgICAgIHNldEhlYWRlckhlaWdodFZhcigpO1xuICAgICAgdXBkYXRlUGFnZUJsdXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgICAgIGRlc2t0b3BCdXJnZXJNZW51Py5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG5cbiAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICBtb2JpbGVOYXYuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJPcGVuIG1lbnVcIik7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuXG4gICAgICBzZXRIZWFkZXJIZWlnaHRWYXIoKTtcbiAgICAgIHVwZGF0ZVBhZ2VCbHVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpc09wZW4gPSBtb2JpbGVOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9wZW5cIik7XG4gICAgICBpc09wZW4gPyBjbG9zZU1lbnUoKSA6IG9wZW5NZW51KCk7XG4gICAgfTtcblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChpc0Rlc2t0b3AoKSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlTWVudSgpO1xuICAgIH0pO1xuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIGlmICghaXNEZXNrdG9wKCkpIHJldHVybjtcbiAgICAgIG9wZW5NZW51KCk7XG4gICAgfSk7XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGlmICghaXNEZXNrdG9wKCkpIHJldHVybjtcbiAgICAgIG9wZW5NZW51KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXliZUNsb3NlRGVza3RvcEJ1cmdlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFpc0Rlc2t0b3AoKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGJ1cmdlckhvdmVyZWQgPSBidXJnZXIubWF0Y2hlcyhcIjpob3ZlclwiKTtcbiAgICAgICAgY29uc3QgbWVudUhvdmVyZWQgPSBkZXNrdG9wQnVyZ2VyTWVudT8ubWF0Y2hlcyhcIjpob3ZlclwiKTtcblxuICAgICAgICBpZiAoIWJ1cmdlckhvdmVyZWQgJiYgIW1lbnVIb3ZlcmVkKSB7XG4gICAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEyMCk7XG4gICAgfTtcblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtYXliZUNsb3NlRGVza3RvcEJ1cmdlcik7XG4gICAgZGVza3RvcEJ1cmdlck1lbnU/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1heWJlQ2xvc2VEZXNrdG9wQnVyZ2VyKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIgJiYgbW9iaWxlTmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vcGVuXCIpKSB7XG4gICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmx1ck92ZXJsYXk/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuaGlkZU1lZ2FNZW51Py4oKTtcbiAgICAgIGNsb3NlTWVudSgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0SGVhZGVySGVpZ2h0VmFyKCk7XG5cbiAgICAgIGlmIChpc0Rlc2t0b3AoKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlUGFnZUJsdXIoKTtcbiAgICB9KTtcblxuICAgIHNldEhlYWRlckhlaWdodFZhcigpO1xuICAgIHdpbmRvdy51cGRhdGVQYWdlQmx1ciA9IHVwZGF0ZVBhZ2VCbHVyO1xuICB9KSgpO1xuXG4gIC8vID09PVxuICAvLyBOYXYgTWVnYSBNZW51XG4gIC8vID09PSAvL1xuXG4gICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtcHJpbWFyeVwiKTtcbiAgICBjb25zdCBwYW5lbHNXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWdhLXBhbmVsc1wiKTtcbiAgICBjb25zdCBob3ZlclpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi13cmFwXCIpO1xuXG4gICAgaWYgKCFoZWFkZXIgfHwgIW5hdiB8fCAhcGFuZWxzV3JhcCB8fCAhaG92ZXJab25lKSByZXR1cm47XG5cbiAgICBjb25zdCB0cmlnZ2VycyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKFwiYVtkYXRhLW1lZ2FdXCIpO1xuICAgIGNvbnN0IHBhbmVscyA9IHBhbmVsc1dyYXAucXVlcnlTZWxlY3RvckFsbChcIi5tZWdhLXBhbmVsW2RhdGEtbWVnYS1wYW5lbF1cIik7XG5cbiAgICBjb25zdCBoaWRlQWxsID0gKCkgPT4ge1xuICAgICAgcGFuZWxzLmZvckVhY2goKHApID0+IChwLmhpZGRlbiA9IHRydWUpKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goKHQpID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpKTtcbiAgICAgIHBhbmVsc1dyYXAuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1lZ2Etb3BlblwiKTtcbiAgICAgIHdpbmRvdy51cGRhdGVQYWdlQmx1cj8uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dLZXkgPSAoa2V5LCB0cmlnZ2VyRWwpID0+IHtcbiAgICAgIGNvbnN0IHBhbmVsID0gcGFuZWxzV3JhcC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLm1lZ2EtcGFuZWxbZGF0YS1tZWdhLXBhbmVsPVwiJHtDU1MuZXNjYXBlKGtleSl9XCJdYCxcbiAgICAgICk7XG4gICAgICBpZiAoIXBhbmVsKSByZXR1cm47XG5cbiAgICAgIHBhbmVscy5mb3JFYWNoKChwKSA9PiAocC5oaWRkZW4gPSBwICE9PSBwYW5lbCkpO1xuICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodCkgPT5cbiAgICAgICAgdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHQgPT09IHRyaWdnZXJFbCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSxcbiAgICAgICk7XG5cbiAgICAgIHBhbmVsc1dyYXAuY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lZ2Etb3BlblwiKTtcbiAgICAgIHdpbmRvdy51cGRhdGVQYWdlQmx1cj8uKCk7XG4gICAgfTtcblxuICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZWdhXCIpO1xuICAgICAgaWYgKCFrZXkpIHJldHVybjtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiBzaG93S2V5KGtleSwgdHJpZ2dlcikpO1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gc2hvd0tleShrZXksIHRyaWdnZXIpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1heWJlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghaG92ZXJab25lLm1hdGNoZXMoXCI6aG92ZXJcIikgJiYgIXBhbmVsc1dyYXAubWF0Y2hlcyhcIjpob3ZlclwiKSkge1xuICAgICAgICAgIGhpZGVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTIwKTtcbiAgICB9O1xuXG4gICAgaG92ZXJab25lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1heWJlQ2xvc2UpO1xuICAgIHBhbmVsc1dyYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbWF5YmVDbG9zZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmICghaGVhZGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgaGlkZUFsbCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgaGlkZUFsbCgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmhpZGVNZWdhTWVudSA9IGhpZGVBbGw7XG4gICAgaGlkZUFsbCgpO1xuICB9KSgpO1xuXG4gIC8vID09PVxuICAvLyBNb2JpbGUgbWVnYSBtZW51XG4gIC8vID09PSAvL1xuXG4gICgoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xuICAgIGNvbnN0IHBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9iaWxlLXBhbmVsXCIpO1xuXG4gICAgaWYgKCFuYXYpIHJldHVybjtcblxuICAgIGNvbnN0IG9wZW5QYW5lbCA9IChrZXkpID0+IHtcbiAgICAgIHBhbmVscy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVGFyZ2V0ID0gcC5kYXRhc2V0Lm1vYmlsZVBhbmVsID09PSBrZXk7XG4gICAgICAgIHAuaGlkZGVuID0gIWlzVGFyZ2V0O1xuICAgICAgICBwLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiwgaXNUYXJnZXQpO1xuICAgICAgfSk7XG5cbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwicGFuZWwtb3BlblwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VQYW5lbCA9ICgpID0+IHtcbiAgICAgIHBhbmVscy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHAuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInBhbmVsLW9wZW5cIik7XG4gICAgfTtcblxuICAgIC8vIG9wZW4gcGFuZWwgd2hlbiBjbGlja2luZyB0b3AtbGV2ZWwgaXRlbVxuICAgIG5hdlxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1wcmltYXJ5ID4gbGkgPiBhW2RhdGEtbWVnYV1cIilcbiAgICAgIC5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9wZW5QYW5lbChsaW5rLmRhdGFzZXQubWVnYSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBiYWNrIGJ1dHRvbnNcbiAgICBuYXZcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vYmlsZS1wYW5lbF9fYmFja1wiKVxuICAgICAgLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBhbmVsKSk7XG4gIH0pKCk7XG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBPRkZTRVQgPSAwOyAvLyBzdGlja3kgaGVhZGVyIGhlaWdodFxuICAgIGNvbnN0IE1BWF9XQUlUID0gMjAwMDsgLy8gbXMgdG8gd2FpdCBmb3IgZWxlbWVudCB0byBhcHBlYXJcbiAgICBjb25zdCBTVEVQID0gNTA7IC8vIG1zIHBvbGxpbmcgaW50ZXJ2YWxcblxuICAgIGNvbnN0IGRlY29kZUhhc2ggPSAoaGFzaCkgPT4ge1xuICAgICAgaWYgKCFoYXNoKSByZXR1cm4gXCJcIjtcbiAgICAgIGNvbnN0IGggPSBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaC5zbGljZSgxKSA6IGhhc2g7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGgpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBoO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmaW5kVGFyZ2V0ID0gKGlkKSA9PlxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIHx8XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7Q1NTLmVzY2FwZShpZCl9XCJdYCk7XG5cbiAgICBjb25zdCBzY3JvbGxUb0lkID0gKGlkKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGZpbmRUYXJnZXQoaWQpO1xuICAgICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBjb25zdCB5ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gT0ZGU0VUO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiB5LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzY3JvbGxXaGVuUmVhZHkgPSAoaWQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxUb0lkKGlkKSkgcmV0dXJuO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID49IE1BWF9XQUlUKSByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQodGljaywgU1RFUCk7XG4gICAgICB9O1xuICAgICAgdGljaygpO1xuICAgIH07XG5cbiAgICAvLyBJbnRlcmNlcHQgYW5jaG9yIGNsaWNrcyAoc2FtZS1vcmlnaW4pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBhID0gZS50YXJnZXQuY2xvc2VzdCgnYVtocmVmKj1cIiNcIl0nKTtcbiAgICAgIGlmICghYSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGEuaHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgaWYgKHVybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHJldHVybjtcblxuICAgICAgY29uc3QgaWQgPSBkZWNvZGVIYXNoKHVybC5oYXNoKTtcbiAgICAgIGlmICghaWQpIHJldHVybjtcblxuICAgICAgLy8gSWYgbmF2aWdhdGluZyB0byBhIGRpZmZlcmVudCBwYXRoLCBsZXQgbmF2aWdhdGlvbiBoYXBwZW4sXG4gICAgICAvLyBidXQgcmVtZW1iZXIgdGhlIHRhcmdldCBmb3IgYWZ0ZXIgbG9hZC5cbiAgICAgIGlmICh1cmwucGF0aG5hbWUgIT09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicGVuZGluZ0FuY2hvclwiLCBpZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2FtZSBwYWdlOiBzbW9vdGggc2Nyb2xsIG5vd1xuICAgICAgY29uc3QgdGFyZ2V0RXhpc3RzID0gISFmaW5kVGFyZ2V0KGlkKTtcbiAgICAgIGlmICghdGFyZ2V0RXhpc3RzKSByZXR1cm47IC8vIGFsbG93IGRlZmF1bHQgaWYgaXQgZG9lc24ndCBleGlzdFxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCBcIiNcIiArIGVuY29kZVVSSUNvbXBvbmVudChpZCkpO1xuICAgICAgc2Nyb2xsV2hlblJlYWR5KGlkKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGxvYWQ6IGhhbmRsZSBoYXNoIG9yIHBlbmRpbmcgY3Jvc3MtcGFnZSBhbmNob3JcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcGVuZGluZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwZW5kaW5nQW5jaG9yXCIpO1xuICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInBlbmRpbmdBbmNob3JcIik7XG4gICAgICAgIHNjcm9sbFdoZW5SZWFkeShwZW5kaW5nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpZCA9IGRlY29kZUhhc2god2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgaWYgKGlkKSBzY3JvbGxXaGVuUmVhZHkoaWQpO1xuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vID09PVxuICAvLyBUZWFtIHNsaWRlIGNhcmRzIHRvZ2dsZVxuICAvLyA9PT0gLy9cblxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVhbS1zbGlkZS1jYXJkXCIpO1xuXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjb25zdCBkZXNjID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IHZlcnRpY2FsUGF0aCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5pY29uIC52ZXJ0aWNhbFwiKTtcblxuICAgIGlmICghZGVzYykgcmV0dXJuO1xuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gQ2xvc2Ugb3RoZXJzXG4gICAgICBjYXJkcy5mb3JFYWNoKChvdGhlckNhcmQpID0+IHtcbiAgICAgICAgY29uc3Qgb3RoZXJEZXNjID0gb3RoZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IG90aGVyVmVydGljYWxQYXRoID0gb3RoZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbiAudmVydGljYWxcIik7XG5cbiAgICAgICAgaWYgKG90aGVyRGVzYyAmJiBvdGhlckRlc2MgIT09IGRlc2MpXG4gICAgICAgICAgb3RoZXJEZXNjLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICBpZiAob3RoZXJWZXJ0aWNhbFBhdGggJiYgb3RoZXJWZXJ0aWNhbFBhdGggIT09IHZlcnRpY2FsUGF0aCkge1xuICAgICAgICAgIG90aGVyVmVydGljYWxQYXRoLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFRvZ2dsZSBjdXJyZW50XG4gICAgICBkZXNjLmNsYXNzTGlzdC50b2dnbGUoXCJpcy12aXNpYmxlXCIpO1xuXG4gICAgICBpZiAodmVydGljYWxQYXRoKSB7XG4gICAgICAgIHZlcnRpY2FsUGF0aC5zdHlsZS5vcGFjaXR5ID1cbiAgICAgICAgICB2ZXJ0aWNhbFBhdGguc3R5bGUub3BhY2l0eSA9PT0gXCIwXCIgPyBcIjFcIiA6IFwiMFwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyA9PT1cbiAgLy8gQ3VzdG9tIEdyYXZpdHkgRm9ybXMgU3VibWl0XG4gIC8vID09PSAvL1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLXN1Ym1pdC1idXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGJ1dHRvbi5jbG9zZXN0KFwiZm9ybVwiKTtcbiAgICAgIGlmICghZm9ybSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCByZWFsU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICBpZiAocmVhbFN1Ym1pdCkgcmVhbFN1Ym1pdC5jbGljaygpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyA9PT1cbiAgLy8gRmFjZXQgQ3VzdG9tIEZpbHRlclxuICAvLyA9PT0gLy9cblxuICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1mYWNldFwiKTtcbiAgY29uc3QgZmFjZXRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFjZXQtcGFuZWxcIik7XG5cbiAgaWYgKHRvZ2dsZUJ0biAmJiBmYWNldFBhbmVsKSB7XG4gICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGZhY2V0UGFuZWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN2Z0ljb24gPSBgXG4gICAgPHN2ZyBjbGFzcz1cImZhY2V0LXJhZGlvLXNlbGVjdGVkLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOCAxOFwiPlxuICAgICAgPGNpcmNsZSBjeD1cIjlcIiBjeT1cIjlcIiByPVwiOC41XCIgc3Ryb2tlPVwiIzAwMFwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgPHBhdGggZD1cIk0xMi40NyA1LjQzbC03IDYuOTZcIiBzdHJva2U9XCIjMjQyNDJkXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgPHBhdGggZD1cIk01LjUgNS40MWw2Ljk2IDdcIiBzdHJva2U9XCIjMjQyNDJkXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGw9XCJub25lXCIvPlxuICAgIDwvc3ZnPlxuICBgO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZhY2V0Q2hlY2tib3hlcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhY2V0d3AtY2hlY2tib3hcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGxldCBpY29uV3JhcHBlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZmFjZXQtcmFkaW8tc2VsZWN0ZWQtaWNvblwiKTtcblxuICAgICAgaWYgKCFpY29uV3JhcHBlcikge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImZhY2V0LXJhZGlvLXNlbGVjdGVkLWljb25cIik7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gc3ZnSWNvbjtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGljb25XcmFwcGVyID0gc3BhbjtcbiAgICAgIH1cblxuICAgICAgaWNvbldyYXBwZXIuc3R5bGUuZGlzcGxheSA9IGVsLmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrZWRcIilcbiAgICAgICAgPyBcImlubGluZS1ibG9ja1wiXG4gICAgICAgIDogXCJub25lXCI7XG4gICAgfSk7XG4gIH1cblxuICBpZiAod2luZG93LkZXUCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmYWNldHdwLWxvYWRlZFwiLCB1cGRhdGVGYWNldENoZWNrYm94ZXMpO1xuICB9XG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBnYWxsZXJ5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9wZXJ0eS1nYWxsZXJ5X19pbWdcIik7XG4gICAgaWYgKCFnYWxsZXJ5SW1hZ2VzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcHJlZmVyc1JlZHVjZWRNb3Rpb24gPSB3aW5kb3cubWF0Y2hNZWRpYShcbiAgICAgIFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIixcbiAgICApLm1hdGNoZXM7XG5cbiAgICBpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24pIHJldHVybjtcblxuICAgIGxldCB0aWNraW5nID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQYXJhbGxheCgpIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBnYWxsZXJ5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAvLyBTa2lwIGlmIGZhciBvdXRzaWRlIHZpZXdwb3J0XG4gICAgICAgIGlmIChyZWN0LmJvdHRvbSA8IDAgfHwgcmVjdC50b3AgPiB2aWV3cG9ydEhlaWdodCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFByb2dyZXNzIHRocm91Z2ggdmlld3BvcnQ6IC0xIHRvIDFcbiAgICAgICAgY29uc3QgaW1hZ2VDZW50ZXIgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgY29uc3Qgdmlld3BvcnRDZW50ZXIgPSB2aWV3cG9ydEhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlRnJvbUNlbnRlciA9XG4gICAgICAgICAgKGltYWdlQ2VudGVyIC0gdmlld3BvcnRDZW50ZXIpIC8gdmlld3BvcnRIZWlnaHQ7XG5cbiAgICAgICAgLy8gS2VlcCBpdCBzdWJ0bGVcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IGRpc3RhbmNlRnJvbUNlbnRlciAqIC0xODtcblxuICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0cmFuc2xhdGVZfXB4LCAwKSBzY2FsZSgxLjA2KWA7XG4gICAgICB9KTtcblxuICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RUaWNrKCkge1xuICAgICAgaWYgKHRpY2tpbmcpIHJldHVybjtcbiAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQYXJhbGxheCk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgcmVxdWVzdFRpY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXF1ZXN0VGljayk7XG5cbiAgICB1cGRhdGVQYXJhbGxheCgpO1xuICB9KSgpO1xuXG4gIC8vIFBhcmFsbGF4IEl0ZW1zXG4gIC8vIEluaXRpYWxpc2UgSW5zdGFuY2VcbiAgY29uc3QgaG9tZUhlcm9TVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb3BlcnR5LWxpc3RpbmcgLnJpYmJvblwiKTtcblxuICBmdW5jdGlvbiBwYXJhbGxheEl0ZW0oaXRlbSwgaW50ZW5zaXR5ID0gMTApIHtcbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgdmlld3BvcnRDZW50ZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiAtIHZpZXdwb3J0Q2VudGVyO1xuXG4gICAgICAvLyBJbnZlcnRlZCBkaXJlY3Rpb25cbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSAob2Zmc2V0IC8gdmlld3BvcnRDZW50ZXIpICogaW50ZW5zaXR5O1xuXG4gICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIHVwZGF0ZSgpO1xuICB9XG5cbiAgcGFyYWxsYXhJdGVtKGhvbWVIZXJvU1ZHLCAyNSk7IC8vIGxvd2VyID0gc3VidGxlclxuXG4gICgoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW0tY2FsbG91dCAuaW1nLWdyb3VwXCIpO1xuICAgIGlmICghZ3JvdXApIHJldHVybjtcblxuICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcIi5pbWctd3JhcHBlclwiKSk7XG4gICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGdldFZpc2libGVJbWFnZXMoKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzLmZpbHRlcigoaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW1nKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIiAmJlxuICAgICAgICAgIHN0eWxlLnZpc2liaWxpdHkgIT09IFwiaGlkZGVuXCIgJiZcbiAgICAgICAgICBpbWcub2Zmc2V0V2lkdGggPiAwICYmXG4gICAgICAgICAgaW1nLm9mZnNldEhlaWdodCA+IDBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGNvbnN0IHZpc2libGVJbWFnZXMgPSBnZXRWaXNpYmxlSW1hZ2VzKCk7XG4gICAgICBpZiAoIXZpc2libGVJbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWN0cyA9IHZpc2libGVJbWFnZXMubWFwKChpbWcpID0+IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IE1hdGgubWluKC4uLnJlY3RzLm1hcCgocikgPT4gci50b3ApKTtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KC4uLnJlY3RzLm1hcCgocikgPT4gci5ib3R0b20pKTtcbiAgICAgIGNvbnN0IGdyb3VwQ2VudGVyID0gKHRvcCArIGJvdHRvbSkgLyAyO1xuXG4gICAgICBjb25zdCB2aWV3cG9ydENlbnRlciA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICBjb25zdCBvZmZzZXQgPSBncm91cENlbnRlciAtIHZpZXdwb3J0Q2VudGVyO1xuXG4gICAgICBjb25zdCBpbnRlbnNpdHkgPSA0MDtcbiAgICAgIGNvbnN0IHBhcmFsbGF4WSA9IChvZmZzZXQgLyB2aWV3cG9ydENlbnRlcikgKiBpbnRlbnNpdHk7XG5cbiAgICAgIGdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LXBhcmFsbGF4WX1weClgO1xuXG4gICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdFVwZGF0ZSgpIHtcbiAgICAgIGlmICghdGlja2luZykge1xuICAgICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIHJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIHNldFRpbWVvdXQocmVxdWVzdFVwZGF0ZSwgNTApO1xuICAgICAgc2V0VGltZW91dChyZXF1ZXN0VXBkYXRlLCAxNTApO1xuICAgICAgc2V0VGltZW91dChyZXF1ZXN0VXBkYXRlLCAzMDApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgcmVxdWVzdFVwZGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVxdWVzdFVwZGF0ZSk7XG4gICAgfSk7XG5cbiAgICBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaWYgKCFpbWcuY29tcGxldGUpIHtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlcXVlc3RVcGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vIEZvb3RlciBkcm9wZG93biBmdW5jdGlvbmFsaXR5XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZm9vdGVyLWNvbHVtbi5kcm9wZG93biAuZHJvcGRvd24tYnRuXCIpO1xuICAgIGlmICghYnRuKSByZXR1cm47XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBkcm9wZG93biA9IGJ0bi5jbG9zZXN0KFwiLmZvb3Rlci1jb2x1bW4uZHJvcGRvd25cIik7XG4gICAgY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb290ZXItY29sdW1uLmRyb3Bkb3duXCIpO1xuICAgIGNvbnN0IGFycm93ID0gYnRuLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7XG5cbiAgICBkcm9wZG93bnMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgY29uc3Qgc3ZnID0gZC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWJ0biBzdmdcIik7XG4gICAgICBpZiAoc3ZnKSBzdmcuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZS1hcnJvd1wiKTtcbiAgICB9KTtcblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBpZiAoYXJyb3cpIGFycm93LmNsYXNzTGlzdC5hZGQoXCJyb3RhdGUtYXJyb3dcIik7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2xpY2tlZEluc2lkZURyb3Bkb3duID0gZS50YXJnZXQuY2xvc2VzdChcIi5mb290ZXItY29sdW1uLmRyb3Bkb3duXCIpO1xuICAgIGlmIChjbGlja2VkSW5zaWRlRHJvcGRvd24pIHJldHVybjtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9vdGVyLWNvbHVtbi5kcm9wZG93blwiKS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBzdmcgPSBkLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tYnRuIHN2Z1wiKTtcbiAgICAgIGlmIChzdmcpIHN2Zy5jbGFzc0xpc3QucmVtb3ZlKFwicm90YXRlLWFycm93XCIpO1xuICAgIH0pO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGhlcm9TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8tc2VhcmNoXCIpO1xuXG4gICAgaWYgKGhlcm9TZWFyY2gpIHtcbiAgICAgIGhlcm9TZWFyY2guc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuICB9KTtcblxuICAvLyAvLyBJbnN0YWdyYW0gTW9kYWxcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNiaV9waG90b1wiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB3aW5kb3cuc2JpX2xpZ2h0Ym94ICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cuc2JpX2xpZ2h0Ym94Lm9wZW4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB3aW5kb3cuc2JpX2xpZ2h0Ym94Lm9wZW4oZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8vIEluc3RhIEZlZWRzXG4gIGZ1bmN0aW9uIGh1bWFuVGltZURpZmYoZnJvbSwgdG8pIHtcbiAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModG8gLSBmcm9tKTtcblxuICAgIGNvbnN0IG1pbnV0ZSA9IDYwO1xuICAgIGNvbnN0IGhvdXIgPSBtaW51dGUgKiA2MDtcbiAgICBjb25zdCBkYXkgPSBob3VyICogMjQ7XG4gICAgY29uc3Qgd2VlayA9IGRheSAqIDc7XG4gICAgY29uc3QgbW9udGggPSBkYXkgKiAzMDtcbiAgICBjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xuXG4gICAgaWYgKGRpZmYgPCBtaW51dGUpIHJldHVybiBgJHtkaWZmfXNgO1xuICAgIGlmIChkaWZmIDwgaG91cikgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvIG1pbnV0ZSl9IG1pbnV0ZXNgO1xuICAgIGlmIChkaWZmIDwgZGF5KSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8gaG91cil9IGhvdXJzYDtcbiAgICBpZiAoZGlmZiA8IHdlZWspIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyBkYXkpfSBkYXlzYDtcbiAgICBpZiAoZGlmZiA8IG1vbnRoKSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8gd2Vlayl9IHdlZWtzYDtcbiAgICBpZiAoZGlmZiA8IHllYXIpIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyBtb250aCl9IG1vbnRoc2A7XG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvIHllYXIpfXlgO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlJbnN0YWdyYW1EYXRlcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNiaV9pdGVtXCIpLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmRhdGFzZXQudGltZWFnb0RvbmUpIHJldHVybjtcbiAgICAgIGNhcmQuZGF0YXNldC50aW1lYWdvRG9uZSA9IFwidHJ1ZVwiO1xuXG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBOdW1iZXIoY2FyZC5kYXRhc2V0LmRhdGUpO1xuICAgICAgY29uc3QgdXNlcm5hbWVMaW5rID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnNiaV91c2VybmFtZSBhXCIpO1xuXG4gICAgICBpZiAoIXVzZXJuYW1lTGluayB8fCAhdGltZXN0YW1wKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgY29uc3QgdGltZUFnbyA9IGh1bWFuVGltZURpZmYodGltZXN0YW1wLCBub3cpO1xuXG4gICAgICB1c2VybmFtZUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImFmdGVyZW5kXCIsXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInNiaV90aW1lYWdvXCI+JHt0aW1lQWdvfSBhZ288L3NwYW4+YCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseUluc3RhZ3JhbURhdGVzKCk7XG5cbiAgY29uc3QgZmVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2JfaW5zdGFncmFtXCIpO1xuXG4gIGlmIChmZWVkKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBhcHBseUluc3RhZ3JhbURhdGVzKCk7XG4gICAgfSk7XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGZlZWQsIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNiaS1tb2RhbFwiKTtcbiAgLy8gY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNiaS1tb2RhbC1pbWdcIik7XG4gIC8vIGNvbnN0IG1vZGFsVXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2JpLW1vZGFsLXVzZXJcIik7XG4gIC8vIGNvbnN0IG1vZGFsQ2FwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2JpLW1vZGFsLWNhcHRpb25cIik7XG5cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zYmktcGhvdG9cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgLy8gICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgLy8gICAgIG1vZGFsSW1nLnNyYyA9IHRoaXMuZGF0YXNldC5pbWc7XG4gIC8vICAgICBtb2RhbFVzZXIudGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQudXNlcjtcbiAgLy8gICAgIG1vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC5jYXB0aW9uO1xuICAvLyAgIH0pO1xuICAvLyB9KTtcblxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNiaS1jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gfSk7XG5cbiAgLy8gZG9jdW1lbnRcbiAgLy8gICAucXVlcnlTZWxlY3RvcihcIi5zYmktbW9kYWwtYmFja2Ryb3BcIilcbiAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gICB9KTtcblxuICAvLyAgIGNvbnN0IGFycmFuZ2VWaWV3aW5nVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIC8vICAgICBcIi5qcy1vcGVuLXZpZXdpbmctbW9kYWxcIixcbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IGFycmFuZ2VWaWV3aW5nTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdpbmdNb2RhbFwiKTtcbiAgLy8gICBjb25zdCBhcnJhbmdlVmlld2luZ0Nsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIC8vICAgICBcIi5qcy1jbG9zZS12aWV3aW5nLW1vZGFsXCIsXG4gIC8vICAgKTtcblxuICAvLyAgIGlmICghYXJyYW5nZVZpZXdpbmdUcmlnZ2VyIHx8ICFhcnJhbmdlVmlld2luZ01vZGFsKSByZXR1cm47XG5cbiAgLy8gICBjb25zdCBvcGVuQXJyYW5nZVZpZXdpbmdNb2RhbCA9ICgpID0+IHtcbiAgLy8gICAgIGFycmFuZ2VWaWV3aW5nTW9kYWwuY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIik7XG4gIC8vICAgICBhcnJhbmdlVmlld2luZ01vZGFsLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gIC8vICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgLy8gICB9O1xuXG4gIC8vICAgY29uc3QgY2xvc2VBcnJhbmdlVmlld2luZ01vZGFsID0gKCkgPT4ge1xuICAvLyAgICAgYXJyYW5nZVZpZXdpbmdNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgLy8gICAgIGFycmFuZ2VWaWV3aW5nTW9kYWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gIC8vICAgfTtcblxuICAvLyAgIGFycmFuZ2VWaWV3aW5nVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgIG9wZW5BcnJhbmdlVmlld2luZ01vZGFsKCk7XG4gIC8vICAgfSk7XG5cbiAgLy8gICBhcnJhbmdlVmlld2luZ0Nsb3NlQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgLy8gICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VBcnJhbmdlVmlld2luZ01vZGFsKTtcbiAgLy8gICB9KTtcblxuICAvLyAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vICAgICBpZiAoXG4gIC8vICAgICAgIGUua2V5ID09PSBcIkVzY2FwZVwiICYmXG4gIC8vICAgICAgIGFycmFuZ2VWaWV3aW5nTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtb3BlblwiKVxuICAvLyAgICAgKSB7XG4gIC8vICAgICAgIGNsb3NlQXJyYW5nZVZpZXdpbmdNb2RhbCgpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuXG4gIGZ1bmN0aW9uIHZhbHVhdGlvbkZvcm1TdWJtaXQoKSB7XG4gICAgLy8gUG9wIHVwXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0Y29kZVN1Ym1pdFwiKTtcbiAgICBjb25zdCBwb3N0Y29kZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0Y29kZVwiKTtcbiAgICAvLyBXaHkgc2VsbCBoZXJvXG4gICAgY29uc3QgYnV0dG9uV2h5U2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdGNvZGVTdWJtaXRXaHlTZWxsXCIpO1xuICAgIGNvbnN0IHBvc3Rjb2RlV2h5U2VsbEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0Y29kZVdoeVNlbGxcIik7XG5cbiAgICAvLyBTaGFyZWRcbiAgICBjb25zdCBhZGRyZXNzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XzRfM1wiKTtcblxuICAgIGlmICghYnV0dG9uIHx8ICFwb3N0Y29kZUZpZWxkIHx8ICFhZGRyZXNzRmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1pc3NpbmcgZWxlbWVudHMgLSByZXRyeWluZy4uLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGRyZXNzRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGFkZHJlc3NGaWVsZC5vcHRpb25zW2FkZHJlc3NGaWVsZC5zZWxlY3RlZEluZGV4XTtcblxuICAgIC8vICAgbGV0IGZ1bGxBZGRyZXNzID1cbiAgICAvLyAgICAgc2VsZWN0ZWRPcHRpb24/LmRhdGFzZXQ/LmZ1bGwgfHwgc2VsZWN0ZWRPcHRpb24/LnRleHRDb250ZW50O1xuXG4gICAgLy8gICBjb25zdCBiYWNrdXBBZGRyZXNzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfNFwiKTtcblxuICAgIC8vICAgLy8g8J+UpSBmYWxsYmFjayBpZiBvcHRpb24gaXMgZW1wdHkgLyBwbGFjZWhvbGRlclxuICAgIC8vICAgaWYgKCFmdWxsQWRkcmVzcyB8fCBmdWxsQWRkcmVzcy50cmltKCkgPT09IFwiXCIpIHtcbiAgICAvLyAgICAgZnVsbEFkZHJlc3MgPSBiYWNrdXBBZGRyZXNzRmllbGQ/LnZhbHVlIHx8IFwiXCI7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIGNvbnN0IGhpZGRlbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF80XzlcIik7XG5cbiAgICAvLyAgIGlmIChoaWRkZW5GaWVsZCkge1xuICAgIC8vICAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGZ1bGxBZGRyZXNzO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgZnVuY3Rpb24gc3luY0FkZHJlc3NUb0hpZGRlbkZpZWxkKGZ1bGxBZGRyZXNzKSB7XG4gICAgICBjb25zdCBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfNF85XCIpO1xuICAgICAgaWYgKGhpZGRlbkZpZWxkKSB7XG4gICAgICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZnVsbEFkZHJlc3MgfHwgXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRyZXNzRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGFkZHJlc3NGaWVsZC5vcHRpb25zW2FkZHJlc3NGaWVsZC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgbGV0IGZ1bGxBZGRyZXNzID1cbiAgICAgICAgc2VsZWN0ZWRPcHRpb24/LmRhdGFzZXQ/LmZ1bGwgfHwgc2VsZWN0ZWRPcHRpb24/LnRleHRDb250ZW50O1xuXG4gICAgICBjb25zdCBiYWNrdXBBZGRyZXNzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfNFwiKTtcblxuICAgICAgaWYgKCFmdWxsQWRkcmVzcyB8fCBmdWxsQWRkcmVzcy50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgZnVsbEFkZHJlc3MgPSBiYWNrdXBBZGRyZXNzRmllbGQ/LnZhbHVlIHx8IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHN5bmNBZGRyZXNzVG9IaWRkZW5GaWVsZChmdWxsQWRkcmVzcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBiYWNrdXBBZGRyZXNzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XzRfNFwiKTtcblxuICAgIGJhY2t1cEFkZHJlc3NGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGZ1bGxBZGRyZXNzID0gYmFja3VwQWRkcmVzc0ZpZWxkPy52YWx1ZTtcblxuICAgICAgaWYgKCFmdWxsQWRkcmVzcyB8fCBmdWxsQWRkcmVzcy50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgZnVsbEFkZHJlc3MgPSBiYWNrdXBBZGRyZXNzRmllbGQ/LnZhbHVlIHx8IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHN5bmNBZGRyZXNzVG9IaWRkZW5GaWVsZChmdWxsQWRkcmVzcyk7XG4gICAgfSk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KFwiI3Bvc3Rjb2RlU3VibWl0XCIpO1xuICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZ2Zvcm1fd3JhcHBlcl80IC5nZm9ybS1mb290ZXJcIixcbiAgICAgICk7XG4gICAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2Zvcm1fd3JhcHBlcl80XCIpO1xuXG4gICAgICBpZiAoYWRkcmVzc0ZpZWxkKSB7XG4gICAgICAgIGFkZHJlc3NGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgIGZvcm1Gb290ZXIuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvc3Rjb2RlID0gcG9zdGNvZGVGaWVsZC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIXBvc3Rjb2RlKSB7XG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgcG9zdGNvZGVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vcGNsczEuY3JhZnR5Y2xpY2tzLmNvLnVrL2pzb24vcmFwaWRhZGRyZXNzP2tleT04Yjc1OC0zMGQ0My00MWQ2ZC0wOWQ0ZCZwb3N0Y29kZT0ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0Y29kZSl9YCxcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCBmaXJzdCA9IGRhdGEudGhvcm91Z2hmYXJlcz8uWzBdO1xuICAgICAgICAgIGNvbnN0IHBvaW50cyA9IGZpcnN0Py5kZWxpdmVyeV9wb2ludHMgfHwgW107XG5cbiAgICAgICAgICBpZiAoIXBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTm8gYWRkcmVzc2VzIGZvdW5kXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN0cmVldCA9XG4gICAgICAgICAgICBgJHtmaXJzdC50aG9yb3VnaGZhcmVfbmFtZX0gJHtmaXJzdC50aG9yb3VnaGZhcmVfZGVzY3JpcHRvcn1gLnRyaW0oKTtcblxuICAgICAgICAgIGFkZHJlc3NGaWVsZC5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhZGRyZXNzPC9vcHRpb24+YDtcblxuICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lMSA9XG4gICAgICAgICAgICAgIGl0ZW0uYnVpbGRpbmdfbnVtYmVyIHx8IGl0ZW0ub3JnYW5pc2F0aW9uX25hbWUgfHwgXCJVbmtub3duXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmUyID0gc3RyZWV0O1xuXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGl0ZW0ub3JnYW5pc2F0aW9uX25hbWVcbiAgICAgICAgICAgICAgPyBgJHtpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lfSwgJHtzdHJlZXR9YFxuICAgICAgICAgICAgICA6IGAke2xpbmUxfSAke2xpbmUyfWA7XG5cbiAgICAgICAgICAgIC8vIG9wdGlvbi52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC8vICAgbGluZTEsXG4gICAgICAgICAgICAvLyAgIGxpbmUyLFxuICAgICAgICAgICAgLy8gICBmdWxsOiBsYWJlbCxcbiAgICAgICAgICAgIC8vICAgcmF3OiBpdGVtLFxuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udWRwcm47XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQubGluZTEgPSBsaW5lMTtcbiAgICAgICAgICAgIG9wdGlvbi5kYXRhc2V0LmxpbmUyID0gbGluZTI7XG4gICAgICAgICAgICBvcHRpb24uZGF0YXNldC5mdWxsID0gbGFiZWw7XG5cbiAgICAgICAgICAgIGFkZHJlc3NGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybUhlbHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1oZWxwZXJcIik7XG5cbiAgICBpZiAoZm9ybUhlbHBlcikge1xuICAgICAgZm9ybUhlbHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZF80XzQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfNFwiKTtcbiAgICAgICAgY29uc3QgZmllbGRfNF82ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWVsZF80XzZcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkXzRfNyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNF83XCIpO1xuICAgICAgICBjb25zdCBmaWVsZF80XzggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfOFwiKTtcblxuICAgICAgICBpZiAoZmllbGRfNF80ICYmIGZpZWxkXzRfNiAmJiBmaWVsZF80XzcgJiYgZmllbGRfNF84KSB7XG4gICAgICAgICAgZmllbGRfNF80LmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZpZWxkXzRfNi5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICBmaWVsZF80XzcuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgICAgZmllbGRfNF84LmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJ1dHRvbldoeVNlbGwpIHtcbiAgICAgIGJ1dHRvbldoeVNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIjcG9zdGNvZGVTdWJtaXRXaHlTZWxsXCIpO1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZm9ybV93cmFwcGVyXzRcIik7XG4gICAgICAgIC8vIGlmIChmb3JtKSB7XG4gICAgICAgIC8vICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGZvcm1Gb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdmb3JtLWZvb3RlclwiKTtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dmb3JtX3dyYXBwZXJfNFwiKTtcblxuICAgICAgICBpZiAoYWRkcmVzc0ZpZWxkKSB7XG4gICAgICAgICAgYWRkcmVzc0ZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZvcm1Gb290ZXIuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3N0Y29kZSA9IHBvc3Rjb2RlV2h5U2VsbEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKCFwb3N0Y29kZSkge1xuICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgcG9zdGNvZGVcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICAgIGZldGNoKFxuICAgICAgICAgIGBodHRwczovL3BjbHMxLmNyYWZ0eWNsaWNrcy5jby51ay9qc29uL3JhcGlkYWRkcmVzcz9rZXk9OGI3NTgtMzBkNDMtNDFkNmQtMDlkNGQmcG9zdGNvZGU9JHtlbmNvZGVVUklDb21wb25lbnQocG9zdGNvZGUpfWAsXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IGRhdGEudGhvcm91Z2hmYXJlcz8uWzBdO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gZmlyc3Q/LmRlbGl2ZXJ5X3BvaW50cyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKCFwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiTm8gYWRkcmVzc2VzIGZvdW5kXCIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0cmVldCA9XG4gICAgICAgICAgICAgIGAke2ZpcnN0LnRob3JvdWdoZmFyZV9uYW1lfSAke2ZpcnN0LnRob3JvdWdoZmFyZV9kZXNjcmlwdG9yfWAudHJpbSgpO1xuXG4gICAgICAgICAgICBhZGRyZXNzRmllbGQuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYWRkcmVzczwvb3B0aW9uPmA7XG5cbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgICAgICAgY29uc3QgbGluZTEgPVxuICAgICAgICAgICAgICAgIGl0ZW0uYnVpbGRpbmdfbnVtYmVyIHx8IGl0ZW0ub3JnYW5pc2F0aW9uX25hbWUgfHwgXCJVbmtub3duXCI7XG5cbiAgICAgICAgICAgICAgY29uc3QgbGluZTIgPSBzdHJlZXQ7XG5cbiAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lXG4gICAgICAgICAgICAgICAgPyBgJHtpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lfSwgJHtzdHJlZXR9YFxuICAgICAgICAgICAgICAgIDogYCR7bGluZTF9ICR7bGluZTJ9YDtcblxuICAgICAgICAgICAgICAvLyBvcHRpb24udmFsdWUgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIC8vICAgbGluZTEsXG4gICAgICAgICAgICAgIC8vICAgbGluZTIsXG4gICAgICAgICAgICAgIC8vICAgZnVsbDogbGFiZWwsXG4gICAgICAgICAgICAgIC8vICAgcmF3OiBpdGVtLFxuICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnVkcHJuO1xuICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICAgICAgICAgICAgICBvcHRpb24uZGF0YXNldC5saW5lMSA9IGxpbmUxO1xuICAgICAgICAgICAgICBvcHRpb24uZGF0YXNldC5saW5lMiA9IGxpbmUyO1xuICAgICAgICAgICAgICBvcHRpb24uZGF0YXNldC5mdWxsID0gbGFiZWw7XG5cbiAgICAgICAgICAgICAgYWRkcmVzc0ZpZWxkLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWx1YXRpb25Gb3JtU3VibWl0KCk7XG5cbiAgZnVuY3Rpb24gc2V0VmFsdWF0aW9uTG9jYXRpb24oKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbHVhdGlvbkxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcImFkZHJlc3NcIik7XG5cbiAgICBpZiAoZWwgJiYgYWRkcmVzcykge1xuICAgICAgZWwudGV4dENvbnRlbnQgPSBkZWNvZGVVUklDb21wb25lbnQoYWRkcmVzcyk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2V0VmFsdWF0aW9uTG9jYXRpb24pO1xuXG4gIGpRdWVyeShkb2N1bWVudCkub24oXCJnZm9ybV9wb3N0X3JlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VmFsdWF0aW9uTG9jYXRpb24oKTtcbiAgfSk7XG5cbiAgLy8gZW5xdWlyeSBwb3B1cC9tb2RhbDpcblxuICBjb25zdCBlbnF1aXJ5TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVucXVpcnktbW9kYWxcIik7XG5cbiAgZnVuY3Rpb24gb3BlbkVucXVpcnlNb2RhbCgpIHtcbiAgICBlbnF1aXJ5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VFbnF1aXJ5TW9kYWwoKSB7XG4gICAgZW5xdWlyeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vcGVuRW5xdWlyeU1vZGFsID0gb3BlbkVucXVpcnlNb2RhbDtcbiAgd2luZG93LmNsb3NlRW5xdWlyeU1vZGFsID0gY2xvc2VFbnF1aXJ5TW9kYWw7XG5cbiAgZW5xdWlyeU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZW5xdWlyeU1vZGFsKSB7XG4gICAgICBjbG9zZUVucXVpcnlNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2V0IFRyYWNraW5nIENvZGVzXG4gIGZ1bmN0aW9uIHNldFRyYWNraW5nQ29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XG4gICAgbGV0IGV4cGlyZXMgPSBcIlwiO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJhbShwYXJhbSkge1xuICAgIGxldCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHJldHVybiB1cmxQYXJhbXMuZ2V0KHBhcmFtKTtcbiAgfVxuXG4gIGxldCBnY2xpZCA9IGdldFBhcmFtKFwiZ2NsaWRcIik7XG4gIGxldCBmYmNsaWQgPSBnZXRQYXJhbShcImZiY2xpZFwiKTtcblxuICBpZiAoZ2NsaWQpIHNldFRyYWNraW5nQ29va2llKFwiZ2NsaWRcIiwgZ2NsaWQsIDMwKTtcbiAgaWYgKGZiY2xpZCkgc2V0VHJhY2tpbmdDb29raWUoXCJmYmNsaWRcIiwgZmJjbGlkLCAzMCk7XG59KTtcblxuLy8gR0YgaW5pdCBmb3IgcG9wIHVwIGZvcm1cblxualF1ZXJ5KGRvY3VtZW50KS5vbihcImdmb3JtX3Bvc3RfcmVuZGVyXCIsIGZ1bmN0aW9uIChldmVudCwgZm9ybUlkKSB7XG4gIGlmICh3aW5kb3cuZ2Zvcm0gJiYgdHlwZW9mIGdmb3JtSW5pdFNpbmdsZUZvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGdmb3JtSW5pdFNpbmdsZUZvcm0oZm9ybUlkKTtcbiAgfVxufSk7XG5cbmpRdWVyeShkb2N1bWVudCkub24oXCJnZm9ybV9wb3N0X3JlbmRlclwiLCBmdW5jdGlvbiAoZXZlbnQsIGZvcm1JZCkge1xuICBpZiAoZm9ybUlkID09IDUpIHtcbiAgICBjb25zdCAkZmllbGQgPSBqUXVlcnkoXCIjaW5wdXRfNV83XCIpO1xuXG4gICAgLy8gd2FpdCB1bnRpbCBkYXRlcGlja2VyIGlzIGFjdHVhbGx5IGluaXRpYWxpc2VkXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJGZpZWxkLmxlbmd0aCAmJiAkZmllbGQuaGFzQ2xhc3MoXCJoYXNEYXRlcGlja2VyXCIpKSB7XG4gICAgICAgICRmaWVsZC5kYXRlcGlja2VyKFwib3B0aW9uXCIsIFwibWluRGF0ZVwiLCAyKTtcbiAgICAgICAgJGZpZWxkLmRhdGVwaWNrZXIoXCJyZWZyZXNoXCIpO1xuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9hcHBcIjogMCxcblx0XCJjc3Mvc3R5bGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9zdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3Mvc3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2l0ZUhlYWRlckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZGVuSGVhZGVyQ2xhc3NOYW1lIiwibWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQiLCJtZWdhUGFuZWxFbGVtZW50U2VsZWN0b3IiLCJtZWdhVHJpZ2dlckVsZW1lbnRTZWxlY3RvciIsIm9wZW5OYXZJdGVtQ2xhc3NOYW1lIiwib3BlblRyaWdnZXJBcmlhQXR0cmlidXRlTmFtZSIsImFsd2F5c1Nob3dIZWFkZXJXaXRoaW5Ub3BQaXhlbHMiLCJzY3JvbGxKaXR0ZXJUaHJlc2hvbGRQaXhlbHMiLCJwcmV2aW91c1Njcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQiLCJmaXJzdFNlY3Rpb25BZnRlckhlYWRlciIsIm5leHRFbGVtZW50U2libGluZyIsImNhblVzZVRyYW5zcGFyZW50SGVhZGVyIiwidGFnTmFtZSIsInNldFBhZ2VUb3BPZmZzZXRUb0hlYWRlckhlaWdodCIsImhlYWRlckhlaWdodFBpeGVscyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjb25jYXQiLCJzaG93SGVhZGVyIiwic2Nyb2xsUG9zaXRpb24iLCJyZW1vdmUiLCJhZGQiLCJoaWRlSGVhZGVyIiwiY2xvc2VNZWdhUGFuZWxzIiwibWVnYVBhbmVsRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBhbmVsRWxlbWVudCIsImhpZGRlbiIsIm1lZ2FUcmlnZ2VyRWxlbWVudHMiLCJ0cmlnZ2VyRWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlzQW55TWVnYVBhbmVsT3BlbiIsImFwcGx5SGVhZGVyVmlzaWJpbGl0eUZyb21TY3JvbGxQb3NpdGlvbiIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsRGVsdGFZIiwiTWF0aCIsImFicyIsImlzTWVnYU1lbnVDdXJyZW50bHlPcGVuIiwiaXNVc2VyU2Nyb2xsaW5nRG93biIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhc3NpdmUiLCJzdGlja3kiLCJUT1BfT0ZGU0VUIiwic3BhY2VyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJzdGlja3lTdGFydFkiLCJyZWNhbGMiLCJ3YXNGaXhlZCIsInJlY3QiLCJ0b3AiLCJ1cGRhdGUiLCJzaG91bGRGaXgiLCJvZmZzZXRIZWlnaHQiLCJpbml0IiwiYnVyZ2VyIiwibW9iaWxlTmF2IiwiZGVza3RvcEJ1cmdlck1lbnUiLCJoZWFkZXIiLCJibHVyT3ZlcmxheSIsImlzRGVza3RvcCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2V0SGVhZGVySGVpZ2h0VmFyIiwidXBkYXRlUGFnZUJsdXIiLCJtZWdhT3BlbiIsImRlc2t0b3BNZW51T3BlbiIsInRvZ2dsZSIsIm9wZW5NZW51IiwiX3dpbmRvdyRoaWRlTWVnYU1lbnUiLCJfd2luZG93IiwiaGlkZU1lZ2FNZW51IiwiY2FsbCIsIm92ZXJmbG93IiwiY2xvc2VNZW51IiwidG9nZ2xlTWVudSIsImlzT3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1heWJlQ2xvc2VEZXNrdG9wQnVyZ2VyIiwic2V0VGltZW91dCIsImJ1cmdlckhvdmVyZWQiLCJtZW51SG92ZXJlZCIsImtleSIsIl93aW5kb3ckaGlkZU1lZ2FNZW51MiIsIl93aW5kb3cyIiwibmF2IiwicGFuZWxzV3JhcCIsImdldEVsZW1lbnRCeUlkIiwiaG92ZXJab25lIiwidHJpZ2dlcnMiLCJwYW5lbHMiLCJoaWRlQWxsIiwiX3dpbmRvdyR1cGRhdGVQYWdlQmx1IiwiX3dpbmRvdzMiLCJwIiwidCIsInNob3dLZXkiLCJ0cmlnZ2VyRWwiLCJfd2luZG93JHVwZGF0ZVBhZ2VCbHUyIiwiX3dpbmRvdzQiLCJwYW5lbCIsIkNTUyIsImVzY2FwZSIsInRyaWdnZXIiLCJnZXRBdHRyaWJ1dGUiLCJtYXliZUNsb3NlIiwidGFyZ2V0Iiwib3BlblBhbmVsIiwiaXNUYXJnZXQiLCJkYXRhc2V0IiwibW9iaWxlUGFuZWwiLCJjbG9zZVBhbmVsIiwibGluayIsIm1lZ2EiLCJidG4iLCJPRkZTRVQiLCJNQVhfV0FJVCIsIlNURVAiLCJkZWNvZGVIYXNoIiwiaGFzaCIsImgiLCJzdGFydHNXaXRoIiwic2xpY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfdW51c2VkIiwiZmluZFRhcmdldCIsImlkIiwic2Nyb2xsVG9JZCIsImVsIiwieSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInNjcm9sbFdoZW5SZWFkeSIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInRpY2siLCJhIiwiY2xvc2VzdCIsInVybCIsIlVSTCIsImhyZWYiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0RXhpc3RzIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBlbmRpbmciLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNhcmRzIiwiY2FyZCIsImRlc2MiLCJ2ZXJ0aWNhbFBhdGgiLCJvdGhlckNhcmQiLCJvdGhlckRlc2MiLCJvdGhlclZlcnRpY2FsUGF0aCIsIm9wYWNpdHkiLCJidXR0b24iLCJmb3JtIiwicmVhbFN1Ym1pdCIsImNsaWNrIiwidG9nZ2xlQnRuIiwiZmFjZXRQYW5lbCIsInN2Z0ljb24iLCJ1cGRhdGVGYWNldENoZWNrYm94ZXMiLCJpY29uV3JhcHBlciIsInNwYW4iLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXkiLCJGV1AiLCJnYWxsZXJ5SW1hZ2VzIiwibGVuZ3RoIiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJ0aWNraW5nIiwidXBkYXRlUGFyYWxsYXgiLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiaW1hZ2UiLCJib3R0b20iLCJpbWFnZUNlbnRlciIsInZpZXdwb3J0Q2VudGVyIiwiZGlzdGFuY2VGcm9tQ2VudGVyIiwidHJhbnNsYXRlWSIsInRyYW5zZm9ybSIsInJlcXVlc3RUaWNrIiwiaG9tZUhlcm9TVkciLCJwYXJhbGxheEl0ZW0iLCJpdGVtIiwiaW50ZW5zaXR5IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwib2Zmc2V0Iiwib25TY3JvbGwiLCJncm91cCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImdldFZpc2libGVJbWFnZXMiLCJmaWx0ZXIiLCJpbWciLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIm9mZnNldFdpZHRoIiwidmlzaWJsZUltYWdlcyIsInJlY3RzIiwibWFwIiwibWluIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyIiwibWF4IiwiZ3JvdXBDZW50ZXIiLCJwYXJhbGxheFkiLCJyZXF1ZXN0VXBkYXRlIiwiY29tcGxldGUiLCJpbm5lcldpZHRoIiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcGRvd24iLCJkcm9wZG93bnMiLCJhcnJvdyIsImlzQWN0aXZlIiwiZCIsInN2ZyIsImNsaWNrZWRJbnNpZGVEcm9wZG93biIsImhlcm9TZWFyY2giLCJzYmlfbGlnaHRib3giLCJvcGVuIiwiaHVtYW5UaW1lRGlmZiIsInRvIiwiZGlmZiIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJ3ZWVrIiwibW9udGgiLCJ5ZWFyIiwiZmxvb3IiLCJhcHBseUluc3RhZ3JhbURhdGVzIiwidGltZWFnb0RvbmUiLCJ0aW1lc3RhbXAiLCJOdW1iZXIiLCJkYXRlIiwidXNlcm5hbWVMaW5rIiwidGltZUFnbyIsImluc2VydEFkamFjZW50SFRNTCIsImZlZWQiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwidmFsdWF0aW9uRm9ybVN1Ym1pdCIsInBvc3Rjb2RlRmllbGQiLCJidXR0b25XaHlTZWxsIiwicG9zdGNvZGVXaHlTZWxsRmllbGQiLCJhZGRyZXNzRmllbGQiLCJjb25zb2xlIiwid2FybiIsInN5bmNBZGRyZXNzVG9IaWRkZW5GaWVsZCIsImZ1bGxBZGRyZXNzIiwiaGlkZGVuRmllbGQiLCJ2YWx1ZSIsIl9zZWxlY3RlZE9wdGlvbiRkYXRhcyIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJmdWxsIiwidGV4dENvbnRlbnQiLCJiYWNrdXBBZGRyZXNzRmllbGQiLCJ0cmltIiwiZm9ybUZvb3RlciIsImZvcm1XcmFwcGVyIiwicG9zdGNvZGUiLCJhbGVydCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiX2RhdGEkdGhvcm91Z2hmYXJlcyIsImZpcnN0IiwidGhvcm91Z2hmYXJlcyIsInBvaW50cyIsImRlbGl2ZXJ5X3BvaW50cyIsInN0cmVldCIsInRob3JvdWdoZmFyZV9uYW1lIiwidGhvcm91Z2hmYXJlX2Rlc2NyaXB0b3IiLCJvcHRpb24iLCJsaW5lMSIsImJ1aWxkaW5nX251bWJlciIsIm9yZ2FuaXNhdGlvbl9uYW1lIiwibGluZTIiLCJsYWJlbCIsInVkcHJuIiwiZXJyIiwiZXJyb3IiLCJmb3JtSGVscGVyIiwiZmllbGRfNF80IiwiZmllbGRfNF82IiwiZmllbGRfNF83IiwiZmllbGRfNF84IiwiX2RhdGEkdGhvcm91Z2hmYXJlczIiLCJzZXRWYWx1YXRpb25Mb2NhdGlvbiIsImFkZHJlc3MiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJqUXVlcnkiLCJvbiIsImVucXVpcnlNb2RhbCIsIm9wZW5FbnF1aXJ5TW9kYWwiLCJjbG9zZUVucXVpcnlNb2RhbCIsInNldFRyYWNraW5nQ29va2llIiwibmFtZSIsImRheXMiLCJleHBpcmVzIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImNvb2tpZSIsImdldFBhcmFtIiwicGFyYW0iLCJ1cmxQYXJhbXMiLCJnY2xpZCIsImZiY2xpZCIsImV2ZW50IiwiZm9ybUlkIiwiZ2Zvcm0iLCJnZm9ybUluaXRTaW5nbGVGb3JtIiwiJGZpZWxkIiwiaGFzQ2xhc3MiLCJkYXRlcGlja2VyIl0sInNvdXJjZVJvb3QiOiIifQ==
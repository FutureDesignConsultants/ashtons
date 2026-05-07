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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/ZTgyNCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIC8vID09PVxuICAvL1N0aWNreSBzY3JvbGwgbmF2aWdhdGlvblxuICAvLyA9PT0gLy9cblxuICAvLyBTdGlja3kgaGVhZGVyOiBzaG93cyB3aGVuIHNjcm9sbGluZyB1cCwgaGlkZXMgd2hlbiBzY3JvbGxpbmcgZG93blxuICAoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLXByb3BlcnR5XCIpIHx8XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1ibG9nLXBvc3RzXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2l0ZUhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGlmICghc2l0ZUhlYWRlckVsZW1lbnQpIHJldHVybjtcblxuICAgIGNvbnN0IGhpZGRlbkhlYWRlckNsYXNzTmFtZSA9IFwiaGVhZGVyLS1oaWRkZW5cIjtcblxuICAgIGNvbnN0IG1lZ2FQYW5lbHNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWdhLXBhbmVsc1wiKTtcbiAgICBjb25zdCBtZWdhUGFuZWxFbGVtZW50U2VsZWN0b3IgPSBcIltkYXRhLW1lZ2EtcGFuZWxdXCI7XG4gICAgY29uc3QgbWVnYVRyaWdnZXJFbGVtZW50U2VsZWN0b3IgPSBcIltkYXRhLW1lZ2FdXCI7XG5cbiAgICBjb25zdCBvcGVuTmF2SXRlbUNsYXNzTmFtZSA9IFwiaXMtbWVnYS1vcGVuXCI7XG4gICAgY29uc3Qgb3BlblRyaWdnZXJBcmlhQXR0cmlidXRlTmFtZSA9IFwiYXJpYS1leHBhbmRlZFwiO1xuXG4gICAgY29uc3QgYWx3YXlzU2hvd0hlYWRlcldpdGhpblRvcFBpeGVscyA9IDIwO1xuICAgIGNvbnN0IHNjcm9sbEppdHRlclRocmVzaG9sZFBpeGVscyA9IDQ7XG5cbiAgICBsZXQgcHJldmlvdXNTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgMDtcbiAgICBsZXQgaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZpcnN0U2VjdGlvbkFmdGVySGVhZGVyID0gc2l0ZUhlYWRlckVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGNhblVzZVRyYW5zcGFyZW50SGVhZGVyID1cbiAgICAgIGZpcnN0U2VjdGlvbkFmdGVySGVhZGVyICYmXG4gICAgICBmaXJzdFNlY3Rpb25BZnRlckhlYWRlci50YWdOYW1lID09PSBcIlNFQ1RJT05cIiAmJlxuICAgICAgIWZpcnN0U2VjdGlvbkFmdGVySGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImJnLW9mZi13aGl0ZVwiKSAmJlxuICAgICAgIWZpcnN0U2VjdGlvbkFmdGVySGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImJnLXdoaXRlXCIpO1xuXG4gICAgZnVuY3Rpb24gc2V0UGFnZVRvcE9mZnNldFRvSGVhZGVySGVpZ2h0KCkge1xuICAgICAgY29uc3QgaGVhZGVySGVpZ2h0UGl4ZWxzID1cbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tZml4ZWQtaGVhZGVyLWhlaWdodFwiLFxuICAgICAgICBgJHtoZWFkZXJIZWlnaHRQaXhlbHN9cHhgLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SGVhZGVyKCkge1xuICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5IZWFkZXJDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiA5OCkge1xuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmctZGFyay1ncmV5XCIpO1xuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctdHJhbnNwYXJlbnRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhblVzZVRyYW5zcGFyZW50SGVhZGVyKSB7XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiZy10cmFuc3BhcmVudFwiKTtcbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmstZ3JleVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiZy1kYXJrLWdyZXlcIik7XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy10cmFuc3BhcmVudFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlSGVhZGVyKCkge1xuICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChoaWRkZW5IZWFkZXJDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTWVnYVBhbmVscygpIHtcbiAgICAgIGlmIChtZWdhUGFuZWxzQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICBjb25zdCBtZWdhUGFuZWxFbGVtZW50cyA9IG1lZ2FQYW5lbHNDb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgbWVnYVBhbmVsRWxlbWVudFNlbGVjdG9yLFxuICAgICAgICApO1xuICAgICAgICBtZWdhUGFuZWxFbGVtZW50cy5mb3JFYWNoKChwYW5lbEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBwYW5lbEVsZW1lbnQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lZ2FUcmlnZ2VyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBtZWdhVHJpZ2dlckVsZW1lbnRTZWxlY3RvcixcbiAgICAgICk7XG4gICAgICBtZWdhVHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXJFbGVtZW50KSA9PiB7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUob3Blbk5hdkl0ZW1DbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0cmlnZ2VyRWxlbWVudC5oYXNBdHRyaWJ1dGUob3BlblRyaWdnZXJBcmlhQXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICB0cmlnZ2VyRWxlbWVudC5zZXRBdHRyaWJ1dGUob3BlblRyaWdnZXJBcmlhQXR0cmlidXRlTmFtZSwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBbnlNZWdhUGFuZWxPcGVuKCkge1xuICAgICAgaWYgKCFtZWdhUGFuZWxzQ29udGFpbmVyRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuICEhbWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCR7bWVnYVBhbmVsRWxlbWVudFNlbGVjdG9yfTpub3QoW2hpZGRlbl0pYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlIZWFkZXJWaXNpYmlsaXR5RnJvbVNjcm9sbFBvc2l0aW9uKCkge1xuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCAwO1xuICAgICAgY29uc3Qgc2Nyb2xsRGVsdGFZID0gY3VycmVudFNjcm9sbFkgLSBwcmV2aW91c1Njcm9sbFk7XG5cbiAgICAgIGlmIChjdXJyZW50U2Nyb2xsWSA8PSBhbHdheXNTaG93SGVhZGVyV2l0aGluVG9wUGl4ZWxzKSB7XG4gICAgICAgIHNob3dIZWFkZXIoKTtcbiAgICAgICAgY2xvc2VNZWdhUGFuZWxzKCk7XG4gICAgICAgIHByZXZpb3VzU2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xuICAgICAgICBpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhzY3JvbGxEZWx0YVkpIDwgc2Nyb2xsSml0dGVyVGhyZXNob2xkUGl4ZWxzKSB7XG4gICAgICAgIGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNNZWdhTWVudUN1cnJlbnRseU9wZW4gPSBpc0FueU1lZ2FQYW5lbE9wZW4oKTtcbiAgICAgIGlmIChpc01lZ2FNZW51Q3VycmVudGx5T3Blbikge1xuICAgICAgICBzaG93SGVhZGVyKCk7XG4gICAgICAgIGNsb3NlTWVnYVBhbmVscygpO1xuICAgICAgICBwcmV2aW91c1Njcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICAgICAgaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1VzZXJTY3JvbGxpbmdEb3duID0gc2Nyb2xsRGVsdGFZID4gMDtcblxuICAgICAgY2xvc2VNZWdhUGFuZWxzKCk7XG5cbiAgICAgIGlmIChpc1VzZXJTY3JvbGxpbmdEb3duKSBoaWRlSGVhZGVyKCk7XG4gICAgICBlbHNlIHNob3dIZWFkZXIoKTtcblxuICAgICAgcHJldmlvdXNTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgICBpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFBhZ2VUb3BPZmZzZXRUb0hlYWRlckhlaWdodCgpO1xuICAgIHNob3dIZWFkZXIoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNldFBhZ2VUb3BPZmZzZXRUb0hlYWRlckhlaWdodCk7XG4gICAgbmV3IFJlc2l6ZU9ic2VydmVyKHNldFBhZ2VUb3BPZmZzZXRUb0hlYWRlckhlaWdodCkub2JzZXJ2ZShcbiAgICAgIHNpdGVIZWFkZXJFbGVtZW50LFxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCkgcmV0dXJuO1xuICAgICAgICBpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHlIZWFkZXJWaXNpYmlsaXR5RnJvbVNjcm9sbFBvc2l0aW9uKTtcbiAgICAgIH0sXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfSxcbiAgICApO1xuICB9KSgpO1xuXG4gIC8vIFN0aWNreSBcImxvY2sgdG8gdG9wXCIgZm9yIHlvdXIgbmV3IHdyYXBwZXI6XG4gIC8vIDxkaXYgY2xhc3M9XCJzdGlja3ktY29udHJvbHNcIj4gLi4uZWxlbWVudHMgeW91IHdhbnQgc3RpY2tpbmcuLi4gPC9kaXY+XG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBzdGlja3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0aWNreS1jb250cm9sc1wiKTtcbiAgICBpZiAoIXN0aWNreSkgcmV0dXJuO1xuXG4gICAgLy8gSWYgeW91IGhhdmUgYSBmaXhlZCBzaXRlIGhlYWRlciwgc2V0IHRoaXMgdG8gaXRzIGhlaWdodCAoZS5nLiA4MClcbiAgICBjb25zdCBUT1BfT0ZGU0VUID0gMDtcblxuICAgIC8vIFNwYWNlciBwcmV2ZW50cyBsYXlvdXQganVtcCB3aGVuIHN0aWNreSBiZWNvbWVzIGZpeGVkXG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGFjZXIuY2xhc3NOYW1lID0gXCJzdGlja3ktY29udHJvbHMtc3BhY2VyXCI7XG4gICAgc3RpY2t5LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYWNlciwgc3RpY2t5KTtcblxuICAgIC8vIENhcHR1cmUgdGhlIHBvaW50IGF0IHdoaWNoIHRoZSB3cmFwcGVyIHNob3VsZCBiZWNvbWUgZml4ZWRcbiAgICAvLyAoYWJzb2x1dGUgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50KVxuICAgIGxldCBzdGlja3lTdGFydFkgPSAwO1xuXG4gICAgY29uc3QgcmVjYWxjID0gKCkgPT4ge1xuICAgICAgLy8gaWYgY3VycmVudGx5IGZpeGVkLCB0ZW1wb3JhcmlseSByZW1vdmUgdG8gbWVhc3VyZSBuYXR1cmFsIHBvc2l0aW9uXG4gICAgICBjb25zdCB3YXNGaXhlZCA9IHN0aWNreS5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1maXhlZFwiKTtcbiAgICAgIGlmICh3YXNGaXhlZCkge1xuICAgICAgICBzdGlja3kuY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xuICAgICAgICBzcGFjZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlY3QgPSBzdGlja3kuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBzdGlja3lTdGFydFkgPSByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gVE9QX09GRlNFVDtcblxuICAgICAgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBtZWFzdXJpbmdcbiAgICAgIGlmICh3YXNGaXhlZCkgdXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNob3VsZEZpeCA9IHdpbmRvdy5zY3JvbGxZID49IHN0aWNreVN0YXJ0WTtcblxuICAgICAgaWYgKHNob3VsZEZpeCAmJiAhc3RpY2t5LmNsYXNzTGlzdC5jb250YWlucyhcImlzLWZpeGVkXCIpKSB7XG4gICAgICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSBgJHtzdGlja3kub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIHN0aWNreS5jbGFzc0xpc3QuYWRkKFwiaXMtZml4ZWRcIik7XG4gICAgICB9IGVsc2UgaWYgKCFzaG91bGRGaXggJiYgc3RpY2t5LmNsYXNzTGlzdC5jb250YWlucyhcImlzLWZpeGVkXCIpKSB7XG4gICAgICAgIHN0aWNreS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XG4gICAgICAgIHNwYWNlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUnVuIG9uY2UgRE9NL2xheW91dCBpcyByZWFkeVxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICByZWNhbGMoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICByZWNhbGMoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgZm9udHMvaW1hZ2VzIHNoaWZ0IGxheW91dCwgdGhpcyBoZWxwcyBsb2NrIGl0IGluXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpO1xuXG4gICAgLy8gSW5pdGlhbFxuICAgIGluaXQoKTtcbiAgfSkoKTtcblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLWJ0blwiKTtcbiAgICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XG4gICAgY29uc3QgZGVza3RvcEJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2t0b3AtYnVyZ2VyLW1lbnVcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBjb25zdCBibHVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1ibHVyLW92ZXJsYXlcIik7XG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhbW9iaWxlTmF2IHx8ICFoZWFkZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGlzRGVza3RvcCA9ICgpID0+IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXM7XG5cbiAgICBjb25zdCBzZXRIZWFkZXJIZWlnaHRWYXIgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiLS1oZWFkZXItaGVpZ2h0XCIsXG4gICAgICAgIGAke2hlYWRlci5vZmZzZXRIZWlnaHR9cHhgLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlUGFnZUJsdXIgPSAoKSA9PiB7XG4gICAgICBpZiAoIWJsdXJPdmVybGF5IHx8ICFpc0Rlc2t0b3AoKSkge1xuICAgICAgICBibHVyT3ZlcmxheT8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZWdhT3BlbiA9IGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWdhLW9wZW5cIik7XG4gICAgICBjb25zdCBkZXNrdG9wTWVudU9wZW4gPSBkZXNrdG9wQnVyZ2VyTWVudT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9wZW5cIik7XG5cbiAgICAgIGJsdXJPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIiwgbWVnYU9wZW4gfHwgZGVza3RvcE1lbnVPcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuaGlkZU1lZ2FNZW51Py4oKTtcblxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgIGRlc2t0b3BCdXJnZXJNZW51Py5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1vcGVuXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG5cbiAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIG1vYmlsZU5hdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xuICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZSBtZW51XCIpO1xuXG4gICAgICBpZiAoIWlzRGVza3RvcCgpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgfVxuXG4gICAgICBzZXRIZWFkZXJIZWlnaHRWYXIoKTtcbiAgICAgIHVwZGF0ZVBhZ2VCbHVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICBkZXNrdG9wQnVyZ2VyTWVudT8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuXG4gICAgICBidXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgbW9iaWxlTmF2LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiT3BlbiBtZW51XCIpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcblxuICAgICAgc2V0SGVhZGVySGVpZ2h0VmFyKCk7XG4gICAgICB1cGRhdGVQYWdlQmx1cigpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgICAgY29uc3QgaXNPcGVuID0gbW9iaWxlTmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vcGVuXCIpO1xuICAgICAgaXNPcGVuID8gY2xvc2VNZW51KCkgOiBvcGVuTWVudSgpO1xuICAgIH07XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoaXNEZXNrdG9wKCkpIHJldHVybjtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICB9KTtcblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBpZiAoIWlzRGVza3RvcCgpKSByZXR1cm47XG4gICAgICBvcGVuTWVudSgpO1xuICAgIH0pO1xuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIWlzRGVza3RvcCgpKSByZXR1cm47XG4gICAgICBvcGVuTWVudSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWF5YmVDbG9zZURlc2t0b3BCdXJnZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghaXNEZXNrdG9wKCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBidXJnZXJIb3ZlcmVkID0gYnVyZ2VyLm1hdGNoZXMoXCI6aG92ZXJcIik7XG4gICAgICAgIGNvbnN0IG1lbnVIb3ZlcmVkID0gZGVza3RvcEJ1cmdlck1lbnU/Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cbiAgICAgICAgaWYgKCFidXJnZXJIb3ZlcmVkICYmICFtZW51SG92ZXJlZCkge1xuICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgICB9LCAxMjApO1xuICAgIH07XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbWF5YmVDbG9zZURlc2t0b3BCdXJnZXIpO1xuICAgIGRlc2t0b3BCdXJnZXJNZW51Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtYXliZUNsb3NlRGVza3RvcEJ1cmdlcik7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiICYmIG1vYmlsZU5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb3BlblwiKSkge1xuICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJsdXJPdmVybGF5Py5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LmhpZGVNZWdhTWVudT8uKCk7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHNldEhlYWRlckhlaWdodFZhcigpO1xuXG4gICAgICBpZiAoaXNEZXNrdG9wKCkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVBhZ2VCbHVyKCk7XG4gICAgfSk7XG5cbiAgICBzZXRIZWFkZXJIZWlnaHRWYXIoKTtcbiAgICB3aW5kb3cudXBkYXRlUGFnZUJsdXIgPSB1cGRhdGVQYWdlQmx1cjtcbiAgfSkoKTtcblxuICAvLyA9PT1cbiAgLy8gTmF2IE1lZ2EgTWVudVxuICAvLyA9PT0gLy9cblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXByaW1hcnlcIik7XG4gICAgY29uc3QgcGFuZWxzV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVnYS1wYW5lbHNcIik7XG4gICAgY29uc3QgaG92ZXJab25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtd3JhcFwiKTtcblxuICAgIGlmICghaGVhZGVyIHx8ICFuYXYgfHwgIXBhbmVsc1dyYXAgfHwgIWhvdmVyWm9uZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdHJpZ2dlcnMgPSBuYXYucXVlcnlTZWxlY3RvckFsbChcImFbZGF0YS1tZWdhXVwiKTtcbiAgICBjb25zdCBwYW5lbHMgPSBwYW5lbHNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVnYS1wYW5lbFtkYXRhLW1lZ2EtcGFuZWxdXCIpO1xuXG4gICAgY29uc3QgaGlkZUFsbCA9ICgpID0+IHtcbiAgICAgIHBhbmVscy5mb3JFYWNoKChwKSA9PiAocC5oaWRkZW4gPSB0cnVlKSk7XG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0KSA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKSk7XG4gICAgICBwYW5lbHNXcmFwLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWdhLW9wZW5cIik7XG4gICAgICB3aW5kb3cudXBkYXRlUGFnZUJsdXI/LigpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93S2V5ID0gKGtleSwgdHJpZ2dlckVsKSA9PiB7XG4gICAgICBjb25zdCBwYW5lbCA9IHBhbmVsc1dyYXAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5tZWdhLXBhbmVsW2RhdGEtbWVnYS1wYW5lbD1cIiR7Q1NTLmVzY2FwZShrZXkpfVwiXWAsXG4gICAgICApO1xuICAgICAgaWYgKCFwYW5lbCkgcmV0dXJuO1xuXG4gICAgICBwYW5lbHMuZm9yRWFjaCgocCkgPT4gKHAuaGlkZGVuID0gcCAhPT0gcGFuZWwpKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goKHQpID0+XG4gICAgICAgIHQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0ID09PSB0cmlnZ2VyRWwgPyBcInRydWVcIiA6IFwiZmFsc2VcIiksXG4gICAgICApO1xuXG4gICAgICBwYW5lbHNXcmFwLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtZWdhLW9wZW5cIik7XG4gICAgICB3aW5kb3cudXBkYXRlUGFnZUJsdXI/LigpO1xuICAgIH07XG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtbWVnYVwiKTtcbiAgICAgIGlmICgha2V5KSByZXR1cm47XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gc2hvd0tleShrZXksIHRyaWdnZXIpKTtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHNob3dLZXkoa2V5LCB0cmlnZ2VyKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXliZUNsb3NlID0gKCkgPT4ge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWhvdmVyWm9uZS5tYXRjaGVzKFwiOmhvdmVyXCIpICYmICFwYW5lbHNXcmFwLm1hdGNoZXMoXCI6aG92ZXJcIikpIHtcbiAgICAgICAgICBoaWRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEyMCk7XG4gICAgfTtcblxuICAgIGhvdmVyWm9uZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtYXliZUNsb3NlKTtcbiAgICBwYW5lbHNXcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1heWJlQ2xvc2UpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIWhlYWRlci5jb250YWlucyhlLnRhcmdldCkpIGhpZGVBbGwoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIGhpZGVBbGwoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5oaWRlTWVnYU1lbnUgPSBoaWRlQWxsO1xuICAgIGhpZGVBbGwoKTtcbiAgfSkoKTtcblxuICAvLyA9PT1cbiAgLy8gTW9iaWxlIG1lZ2EgbWVudVxuICAvLyA9PT0gLy9cblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdlwiKTtcbiAgICBjb25zdCBwYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vYmlsZS1wYW5lbFwiKTtcblxuICAgIGlmICghbmF2KSByZXR1cm47XG5cbiAgICBjb25zdCBvcGVuUGFuZWwgPSAoa2V5KSA9PiB7XG4gICAgICBwYW5lbHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICBjb25zdCBpc1RhcmdldCA9IHAuZGF0YXNldC5tb2JpbGVQYW5lbCA9PT0ga2V5O1xuICAgICAgICBwLmhpZGRlbiA9ICFpc1RhcmdldDtcbiAgICAgICAgcC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIsIGlzVGFyZ2V0KTtcbiAgICAgIH0pO1xuXG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZChcInBhbmVsLW9wZW5cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlUGFuZWwgPSAoKSA9PiB7XG4gICAgICBwYW5lbHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICBwLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJwYW5lbC1vcGVuXCIpO1xuICAgIH07XG5cbiAgICAvLyBvcGVuIHBhbmVsIHdoZW4gY2xpY2tpbmcgdG9wLWxldmVsIGl0ZW1cbiAgICBuYXZcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtcHJpbWFyeSA+IGxpID4gYVtkYXRhLW1lZ2FdXCIpXG4gICAgICAuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvcGVuUGFuZWwobGluay5kYXRhc2V0Lm1lZ2EpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gYmFjayBidXR0b25zXG4gICAgbmF2XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtcGFuZWxfX2JhY2tcIilcbiAgICAgIC5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQYW5lbCkpO1xuICB9KSgpO1xuXG4gICgoKSA9PiB7XG4gICAgY29uc3QgT0ZGU0VUID0gMDsgLy8gc3RpY2t5IGhlYWRlciBoZWlnaHRcbiAgICBjb25zdCBNQVhfV0FJVCA9IDIwMDA7IC8vIG1zIHRvIHdhaXQgZm9yIGVsZW1lbnQgdG8gYXBwZWFyXG4gICAgY29uc3QgU1RFUCA9IDUwOyAvLyBtcyBwb2xsaW5nIGludGVydmFsXG5cbiAgICBjb25zdCBkZWNvZGVIYXNoID0gKGhhc2gpID0+IHtcbiAgICAgIGlmICghaGFzaCkgcmV0dXJuIFwiXCI7XG4gICAgICBjb25zdCBoID0gaGFzaC5zdGFydHNXaXRoKFwiI1wiKSA/IGhhc2guc2xpY2UoMSkgOiBoYXNoO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChoKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gaDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZmluZFRhcmdldCA9IChpZCkgPT5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke0NTUy5lc2NhcGUoaWQpfVwiXWApO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9JZCA9IChpZCkgPT4ge1xuICAgICAgY29uc3QgZWwgPSBmaW5kVGFyZ2V0KGlkKTtcbiAgICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgICAgY29uc3QgeSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIE9GRlNFVDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogeSwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2Nyb2xsV2hlblJlYWR5ID0gKGlkKSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsVG9JZChpZCkpIHJldHVybjtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+PSBNQVhfV0FJVCkgcmV0dXJuO1xuICAgICAgICBzZXRUaW1lb3V0KHRpY2ssIFNURVApO1xuICAgICAgfTtcbiAgICAgIHRpY2soKTtcbiAgICB9O1xuXG4gICAgLy8gSW50ZXJjZXB0IGFuY2hvciBjbGlja3MgKHNhbWUtb3JpZ2luKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgYSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2FbaHJlZio9XCIjXCJdJyk7XG4gICAgICBpZiAoIWEpIHJldHVybjtcblxuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChhLmhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIGlmICh1cmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGlkID0gZGVjb2RlSGFzaCh1cmwuaGFzaCk7XG4gICAgICBpZiAoIWlkKSByZXR1cm47XG5cbiAgICAgIC8vIElmIG5hdmlnYXRpbmcgdG8gYSBkaWZmZXJlbnQgcGF0aCwgbGV0IG5hdmlnYXRpb24gaGFwcGVuLFxuICAgICAgLy8gYnV0IHJlbWVtYmVyIHRoZSB0YXJnZXQgZm9yIGFmdGVyIGxvYWQuXG4gICAgICBpZiAodXJsLnBhdGhuYW1lICE9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInBlbmRpbmdBbmNob3JcIiwgaWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNhbWUgcGFnZTogc21vb3RoIHNjcm9sbCBub3dcbiAgICAgIGNvbnN0IHRhcmdldEV4aXN0cyA9ICEhZmluZFRhcmdldChpZCk7XG4gICAgICBpZiAoIXRhcmdldEV4aXN0cykgcmV0dXJuOyAvLyBhbGxvdyBkZWZhdWx0IGlmIGl0IGRvZXNuJ3QgZXhpc3RcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgXCIjXCIgKyBlbmNvZGVVUklDb21wb25lbnQoaWQpKTtcbiAgICAgIHNjcm9sbFdoZW5SZWFkeShpZCk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBsb2FkOiBoYW5kbGUgaGFzaCBvciBwZW5kaW5nIGNyb3NzLXBhZ2UgYW5jaG9yXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicGVuZGluZ0FuY2hvclwiKTtcbiAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJwZW5kaW5nQW5jaG9yXCIpO1xuICAgICAgICBzY3JvbGxXaGVuUmVhZHkocGVuZGluZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWQgPSBkZWNvZGVIYXNoKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgIGlmIChpZCkgc2Nyb2xsV2hlblJlYWR5KGlkKTtcbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyA9PT1cbiAgLy8gVGVhbSBzbGlkZSBjYXJkcyB0b2dnbGVcbiAgLy8gPT09IC8vXG5cbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlYW0tc2xpZGUtY2FyZFwiKTtcblxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgZGVzYyA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCB2ZXJ0aWNhbFBhdGggPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbiAudmVydGljYWxcIik7XG5cbiAgICBpZiAoIWRlc2MpIHJldHVybjtcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIENsb3NlIG90aGVyc1xuICAgICAgY2FyZHMuZm9yRWFjaCgob3RoZXJDYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IG90aGVyRGVzYyA9IG90aGVyQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBvdGhlclZlcnRpY2FsUGF0aCA9IG90aGVyQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmljb24gLnZlcnRpY2FsXCIpO1xuXG4gICAgICAgIGlmIChvdGhlckRlc2MgJiYgb3RoZXJEZXNjICE9PSBkZXNjKVxuICAgICAgICAgIG90aGVyRGVzYy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgaWYgKG90aGVyVmVydGljYWxQYXRoICYmIG90aGVyVmVydGljYWxQYXRoICE9PSB2ZXJ0aWNhbFBhdGgpIHtcbiAgICAgICAgICBvdGhlclZlcnRpY2FsUGF0aC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgY3VycmVudFxuICAgICAgZGVzYy5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtdmlzaWJsZVwiKTtcblxuICAgICAgaWYgKHZlcnRpY2FsUGF0aCkge1xuICAgICAgICB2ZXJ0aWNhbFBhdGguc3R5bGUub3BhY2l0eSA9XG4gICAgICAgICAgdmVydGljYWxQYXRoLnN0eWxlLm9wYWNpdHkgPT09IFwiMFwiID8gXCIxXCIgOiBcIjBcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gPT09XG4gIC8vIEN1c3RvbSBHcmF2aXR5IEZvcm1zIFN1Ym1pdFxuICAvLyA9PT0gLy9cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbS1zdWJtaXQtYnV0dG9uXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBidXR0b24uY2xvc2VzdChcImZvcm1cIik7XG4gICAgICBpZiAoIWZvcm0pIHJldHVybjtcblxuICAgICAgY29uc3QgcmVhbFN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgaWYgKHJlYWxTdWJtaXQpIHJlYWxTdWJtaXQuY2xpY2soKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gPT09XG4gIC8vIEZhY2V0IEN1c3RvbSBGaWx0ZXJcbiAgLy8gPT09IC8vXG5cbiAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtZmFjZXRcIik7XG4gIGNvbnN0IGZhY2V0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhY2V0LXBhbmVsXCIpO1xuXG4gIGlmICh0b2dnbGVCdG4gJiYgZmFjZXRQYW5lbCkge1xuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBmYWNldFBhbmVsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdmdJY29uID0gYFxuICAgIDxzdmcgY2xhc3M9XCJmYWNldC1yYWRpby1zZWxlY3RlZC1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTggMThcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCI5XCIgY3k9XCI5XCIgcj1cIjguNVwiIHN0cm9rZT1cIiMwMDBcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTIuNDcgNS40M2wtNyA2Ljk2XCIgc3Ryb2tlPVwiIzI0MjQyZFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNDFsNi45NiA3XCIgc3Ryb2tlPVwiIzI0MjQyZFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBmaWxsPVwibm9uZVwiLz5cbiAgICA8L3N2Zz5cbiAgYDtcblxuICBmdW5jdGlvbiB1cGRhdGVGYWNldENoZWNrYm94ZXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWNldHdwLWNoZWNrYm94XCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBsZXQgaWNvbldyYXBwZXIgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmZhY2V0LXJhZGlvLXNlbGVjdGVkLWljb25cIik7XG5cbiAgICAgIGlmICghaWNvbldyYXBwZXIpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJmYWNldC1yYWRpby1zZWxlY3RlZC1pY29uXCIpO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IHN2Z0ljb247XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBpY29uV3JhcHBlciA9IHNwYW47XG4gICAgICB9XG5cbiAgICAgIGljb25XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja2VkXCIpXG4gICAgICAgID8gXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICA6IFwibm9uZVwiO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5GV1ApIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZmFjZXR3cC1sb2FkZWRcIiwgdXBkYXRlRmFjZXRDaGVja2JveGVzKTtcbiAgfVxuXG4gICgoKSA9PiB7XG4gICAgY29uc3QgZ2FsbGVyeUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvcGVydHktZ2FsbGVyeV9faW1nXCIpO1xuICAgIGlmICghZ2FsbGVyeUltYWdlcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID0gd2luZG93Lm1hdGNoTWVkaWEoXG4gICAgICBcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIsXG4gICAgKS5tYXRjaGVzO1xuXG4gICAgaWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKSByZXR1cm47XG5cbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XG4gICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgZ2FsbGVyeUltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgLy8gU2tpcCBpZiBmYXIgb3V0c2lkZSB2aWV3cG9ydFxuICAgICAgICBpZiAocmVjdC5ib3R0b20gPCAwIHx8IHJlY3QudG9wID4gdmlld3BvcnRIZWlnaHQpIHJldHVybjtcblxuICAgICAgICAvLyBQcm9ncmVzcyB0aHJvdWdoIHZpZXdwb3J0OiAtMSB0byAxXG4gICAgICAgIGNvbnN0IGltYWdlQ2VudGVyID0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0Q2VudGVyID0gdmlld3BvcnRIZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCBkaXN0YW5jZUZyb21DZW50ZXIgPVxuICAgICAgICAgIChpbWFnZUNlbnRlciAtIHZpZXdwb3J0Q2VudGVyKSAvIHZpZXdwb3J0SGVpZ2h0O1xuXG4gICAgICAgIC8vIEtlZXAgaXQgc3VidGxlXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBkaXN0YW5jZUZyb21DZW50ZXIgKiAtMTg7XG5cbiAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7dHJhbnNsYXRlWX1weCwgMCkgc2NhbGUoMS4wNilgO1xuICAgICAgfSk7XG5cbiAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0VGljaygpIHtcbiAgICAgIGlmICh0aWNraW5nKSByZXR1cm47XG4gICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUGFyYWxsYXgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHJlcXVlc3RUaWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVxdWVzdFRpY2spO1xuXG4gICAgdXBkYXRlUGFyYWxsYXgoKTtcbiAgfSkoKTtcblxuICAvLyBQYXJhbGxheCBJdGVtc1xuICAvLyBJbml0aWFsaXNlIEluc3RhbmNlXG4gIGNvbnN0IGhvbWVIZXJvU1ZHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9wZXJ0eS1saXN0aW5nIC5yaWJib25cIik7XG5cbiAgZnVuY3Rpb24gcGFyYWxsYXhJdGVtKGl0ZW0sIGludGVuc2l0eSA9IDEwKSB7XG4gICAgaWYgKCFpdGVtKSByZXR1cm47XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBjb25zdCByZWN0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHZpZXdwb3J0Q2VudGVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIgLSB2aWV3cG9ydENlbnRlcjtcblxuICAgICAgLy8gSW52ZXJ0ZWQgZGlyZWN0aW9uXG4gICAgICBjb25zdCB0cmFuc2xhdGVZID0gKG9mZnNldCAvIHZpZXdwb3J0Q2VudGVyKSAqIGludGVuc2l0eTtcblxuICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIHBhcmFsbGF4SXRlbShob21lSGVyb1NWRywgMjUpOyAvLyBsb3dlciA9IHN1YnRsZXJcblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZWFtLWNhbGxvdXQgLmltZy1ncm91cFwiKTtcbiAgICBpZiAoIWdyb3VwKSByZXR1cm47XG5cbiAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nLXdyYXBwZXJcIikpO1xuICAgIGxldCB0aWNraW5nID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBnZXRWaXNpYmxlSW1hZ2VzKCkge1xuICAgICAgcmV0dXJuIGltYWdlcy5maWx0ZXIoKGltZykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGltZyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIgJiZcbiAgICAgICAgICBzdHlsZS52aXNpYmlsaXR5ICE9PSBcImhpZGRlblwiICYmXG4gICAgICAgICAgaW1nLm9mZnNldFdpZHRoID4gMCAmJlxuICAgICAgICAgIGltZy5vZmZzZXRIZWlnaHQgPiAwXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBjb25zdCB2aXNpYmxlSW1hZ2VzID0gZ2V0VmlzaWJsZUltYWdlcygpO1xuICAgICAgaWYgKCF2aXNpYmxlSW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVjdHMgPSB2aXNpYmxlSW1hZ2VzLm1hcCgoaW1nKSA9PiBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXG4gICAgICBjb25zdCB0b3AgPSBNYXRoLm1pbiguLi5yZWN0cy5tYXAoKHIpID0+IHIudG9wKSk7XG4gICAgICBjb25zdCBib3R0b20gPSBNYXRoLm1heCguLi5yZWN0cy5tYXAoKHIpID0+IHIuYm90dG9tKSk7XG4gICAgICBjb25zdCBncm91cENlbnRlciA9ICh0b3AgKyBib3R0b20pIC8gMjtcblxuICAgICAgY29uc3Qgdmlld3BvcnRDZW50ZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gZ3JvdXBDZW50ZXIgLSB2aWV3cG9ydENlbnRlcjtcblxuICAgICAgY29uc3QgaW50ZW5zaXR5ID0gNDA7XG4gICAgICBjb25zdCBwYXJhbGxheFkgPSAob2Zmc2V0IC8gdmlld3BvcnRDZW50ZXIpICogaW50ZW5zaXR5O1xuXG4gICAgICBncm91cC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkey1wYXJhbGxheFl9cHgpYDtcblxuICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RVcGRhdGUoKSB7XG4gICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0VXBkYXRlKCk7XG4gICAgICBzZXRUaW1lb3V0KHJlcXVlc3RVcGRhdGUsIDUwKTtcbiAgICAgIHNldFRpbWVvdXQocmVxdWVzdFVwZGF0ZSwgMTUwKTtcbiAgICAgIHNldFRpbWVvdXQocmVxdWVzdFVwZGF0ZSwgMzAwKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHJlcXVlc3RVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlcXVlc3RVcGRhdGUpO1xuICAgIH0pO1xuXG4gICAgZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGlmICghaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZXF1ZXN0VXBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyBGb290ZXIgZHJvcGRvd24gZnVuY3Rpb25hbGl0eVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmZvb3Rlci1jb2x1bW4uZHJvcGRvd24gLmRyb3Bkb3duLWJ0blwiKTtcbiAgICBpZiAoIWJ0bikgcmV0dXJuO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgZHJvcGRvd24gPSBidG4uY2xvc2VzdChcIi5mb290ZXItY29sdW1uLmRyb3Bkb3duXCIpO1xuICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9vdGVyLWNvbHVtbi5kcm9wZG93blwiKTtcbiAgICBjb25zdCBhcnJvdyA9IGJ0bi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuXG4gICAgZHJvcGRvd25zLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGNvbnN0IHN2ZyA9IGQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1idG4gc3ZnXCIpO1xuICAgICAgaWYgKHN2Zykgc3ZnLmNsYXNzTGlzdC5yZW1vdmUoXCJyb3RhdGUtYXJyb3dcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgaWYgKGFycm93KSBhcnJvdy5jbGFzc0xpc3QuYWRkKFwicm90YXRlLWFycm93XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHJldHVybjtcblxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGVEcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZm9vdGVyLWNvbHVtbi5kcm9wZG93blwiKTtcbiAgICBpZiAoY2xpY2tlZEluc2lkZURyb3Bkb3duKSByZXR1cm47XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb3Rlci1jb2x1bW4uZHJvcGRvd25cIikuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgY29uc3Qgc3ZnID0gZC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWJ0biBzdmdcIik7XG4gICAgICBpZiAoc3ZnKSBzdmcuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZS1hcnJvd1wiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBjb25zdCBoZXJvU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLXNlYXJjaFwiKTtcblxuICAgIGlmIChoZXJvU2VhcmNoKSB7XG4gICAgICBoZXJvU2VhcmNoLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLy8gSW5zdGFncmFtIE1vZGFsXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zYmlfcGhvdG9cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgd2luZG93LnNiaV9saWdodGJveCAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93LnNiaV9saWdodGJveC5vcGVuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgd2luZG93LnNiaV9saWdodGJveC5vcGVuKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAvLyBJbnN0YSBGZWVkc1xuICBmdW5jdGlvbiBodW1hblRpbWVEaWZmKGZyb20sIHRvKSB7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRvIC0gZnJvbSk7XG5cbiAgICBjb25zdCBtaW51dGUgPSA2MDtcbiAgICBjb25zdCBob3VyID0gbWludXRlICogNjA7XG4gICAgY29uc3QgZGF5ID0gaG91ciAqIDI0O1xuICAgIGNvbnN0IHdlZWsgPSBkYXkgKiA3O1xuICAgIGNvbnN0IG1vbnRoID0gZGF5ICogMzA7XG4gICAgY29uc3QgeWVhciA9IGRheSAqIDM2NTtcblxuICAgIGlmIChkaWZmIDwgbWludXRlKSByZXR1cm4gYCR7ZGlmZn1zYDtcbiAgICBpZiAoZGlmZiA8IGhvdXIpIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyBtaW51dGUpfSBtaW51dGVzYDtcbiAgICBpZiAoZGlmZiA8IGRheSkgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvIGhvdXIpfSBob3Vyc2A7XG4gICAgaWYgKGRpZmYgPCB3ZWVrKSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8gZGF5KX0gZGF5c2A7XG4gICAgaWYgKGRpZmYgPCBtb250aCkgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvIHdlZWspfSB3ZWVrc2A7XG4gICAgaWYgKGRpZmYgPCB5ZWFyKSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8gbW9udGgpfSBtb250aHNgO1xuICAgIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyB5ZWFyKX15YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5SW5zdGFncmFtRGF0ZXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zYmlfaXRlbVwiKS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5kYXRhc2V0LnRpbWVhZ29Eb25lKSByZXR1cm47XG4gICAgICBjYXJkLmRhdGFzZXQudGltZWFnb0RvbmUgPSBcInRydWVcIjtcblxuICAgICAgY29uc3QgdGltZXN0YW1wID0gTnVtYmVyKGNhcmQuZGF0YXNldC5kYXRlKTtcbiAgICAgIGNvbnN0IHVzZXJuYW1lTGluayA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5zYmlfdXNlcm5hbWUgYVwiKTtcblxuICAgICAgaWYgKCF1c2VybmFtZUxpbmsgfHwgIXRpbWVzdGFtcCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBub3cgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgIGNvbnN0IHRpbWVBZ28gPSBodW1hblRpbWVEaWZmKHRpbWVzdGFtcCwgbm93KTtcblxuICAgICAgdXNlcm5hbWVMaW5rLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJzYmlfdGltZWFnb1wiPiR7dGltZUFnb30gYWdvPC9zcGFuPmAsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlJbnN0YWdyYW1EYXRlcygpO1xuXG4gIGNvbnN0IGZlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NiX2luc3RhZ3JhbVwiKTtcblxuICBpZiAoZmVlZCkge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgYXBwbHlJbnN0YWdyYW1EYXRlcygpO1xuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShmZWVkLCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIC8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYmktbW9kYWxcIik7XG4gIC8vIGNvbnN0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYmktbW9kYWwtaW1nXCIpO1xuICAvLyBjb25zdCBtb2RhbFVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNiaS1tb2RhbC11c2VyXCIpO1xuICAvLyBjb25zdCBtb2RhbENhcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNiaS1tb2RhbC1jYXB0aW9uXCIpO1xuXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2JpLXBob3RvXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gIC8vICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIC8vICAgICBtb2RhbEltZy5zcmMgPSB0aGlzLmRhdGFzZXQuaW1nO1xuICAvLyAgICAgbW9kYWxVc2VyLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnVzZXI7XG4gIC8vICAgICBtb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQuY2FwdGlvbjtcbiAgLy8gICB9KTtcbiAgLy8gfSk7XG5cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYmktY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIH0pO1xuXG4gIC8vIGRvY3VtZW50XG4gIC8vICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc2JpLW1vZGFsLWJhY2tkcm9wXCIpXG4gIC8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vICAgfSk7XG5cbiAgLy8gICBjb25zdCBhcnJhbmdlVmlld2luZ1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgXCIuanMtb3Blbi12aWV3aW5nLW1vZGFsXCIsXG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBhcnJhbmdlVmlld2luZ01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3aW5nTW9kYWxcIik7XG4gIC8vICAgY29uc3QgYXJyYW5nZVZpZXdpbmdDbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAvLyAgICAgXCIuanMtY2xvc2Utdmlld2luZy1tb2RhbFwiLFxuICAvLyAgICk7XG5cbiAgLy8gICBpZiAoIWFycmFuZ2VWaWV3aW5nVHJpZ2dlciB8fCAhYXJyYW5nZVZpZXdpbmdNb2RhbCkgcmV0dXJuO1xuXG4gIC8vICAgY29uc3Qgb3BlbkFycmFuZ2VWaWV3aW5nTW9kYWwgPSAoKSA9PiB7XG4gIC8vICAgICBhcnJhbmdlVmlld2luZ01vZGFsLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpO1xuICAvLyAgICAgYXJyYW5nZVZpZXdpbmdNb2RhbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xuICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIC8vICAgfTtcblxuICAvLyAgIGNvbnN0IGNsb3NlQXJyYW5nZVZpZXdpbmdNb2RhbCA9ICgpID0+IHtcbiAgLy8gICAgIGFycmFuZ2VWaWV3aW5nTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gIC8vICAgICBhcnJhbmdlVmlld2luZ01vZGFsLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAvLyAgIH07XG5cbiAgLy8gICBhcnJhbmdlVmlld2luZ1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICBvcGVuQXJyYW5nZVZpZXdpbmdNb2RhbCgpO1xuICAvLyAgIH0pO1xuXG4gIC8vICAgYXJyYW5nZVZpZXdpbmdDbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIC8vICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQXJyYW5nZVZpZXdpbmdNb2RhbCk7XG4gIC8vICAgfSk7XG5cbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAvLyAgICAgaWYgKFxuICAvLyAgICAgICBlLmtleSA9PT0gXCJFc2NhcGVcIiAmJlxuICAvLyAgICAgICBhcnJhbmdlVmlld2luZ01vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImlzLW9wZW5cIilcbiAgLy8gICAgICkge1xuICAvLyAgICAgICBjbG9zZUFycmFuZ2VWaWV3aW5nTW9kYWwoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcblxuICBmdW5jdGlvbiB2YWx1YXRpb25Gb3JtU3VibWl0KCkge1xuICAgIC8vIFBvcCB1cFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdGNvZGVTdWJtaXRcIik7XG4gICAgY29uc3QgcG9zdGNvZGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdGNvZGVcIik7XG4gICAgLy8gV2h5IHNlbGwgaGVyb1xuICAgIGNvbnN0IGJ1dHRvbldoeVNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3Rjb2RlU3VibWl0V2h5U2VsbFwiKTtcbiAgICBjb25zdCBwb3N0Y29kZVdoeVNlbGxGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdGNvZGVXaHlTZWxsXCIpO1xuXG4gICAgLy8gU2hhcmVkXG4gICAgY29uc3QgYWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF80XzNcIik7XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCAhcG9zdGNvZGVGaWVsZCB8fCAhYWRkcmVzc0ZpZWxkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJNaXNzaW5nIGVsZW1lbnRzIC0gcmV0cnlpbmcuLi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkcmVzc0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBhZGRyZXNzRmllbGQub3B0aW9uc1thZGRyZXNzRmllbGQuc2VsZWN0ZWRJbmRleF07XG5cbiAgICAvLyAgIGxldCBmdWxsQWRkcmVzcyA9XG4gICAgLy8gICAgIHNlbGVjdGVkT3B0aW9uPy5kYXRhc2V0Py5mdWxsIHx8IHNlbGVjdGVkT3B0aW9uPy50ZXh0Q29udGVudDtcblxuICAgIC8vICAgY29uc3QgYmFja3VwQWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWVsZF80XzRcIik7XG5cbiAgICAvLyAgIC8vIPCflKUgZmFsbGJhY2sgaWYgb3B0aW9uIGlzIGVtcHR5IC8gcGxhY2Vob2xkZXJcbiAgICAvLyAgIGlmICghZnVsbEFkZHJlc3MgfHwgZnVsbEFkZHJlc3MudHJpbSgpID09PSBcIlwiKSB7XG4gICAgLy8gICAgIGZ1bGxBZGRyZXNzID0gYmFja3VwQWRkcmVzc0ZpZWxkPy52YWx1ZSB8fCBcIlwiO1xuICAgIC8vICAgfVxuXG4gICAgLy8gICBjb25zdCBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfNF85XCIpO1xuXG4gICAgLy8gICBpZiAoaGlkZGVuRmllbGQpIHtcbiAgICAvLyAgICAgaGlkZGVuRmllbGQudmFsdWUgPSBmdWxsQWRkcmVzcztcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIGZ1bmN0aW9uIHN5bmNBZGRyZXNzVG9IaWRkZW5GaWVsZChmdWxsQWRkcmVzcykge1xuICAgICAgY29uc3QgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XzRfOVwiKTtcbiAgICAgIGlmIChoaWRkZW5GaWVsZCkge1xuICAgICAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGZ1bGxBZGRyZXNzIHx8IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkcmVzc0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBhZGRyZXNzRmllbGQub3B0aW9uc1thZGRyZXNzRmllbGQuc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgIGxldCBmdWxsQWRkcmVzcyA9XG4gICAgICAgIHNlbGVjdGVkT3B0aW9uPy5kYXRhc2V0Py5mdWxsIHx8IHNlbGVjdGVkT3B0aW9uPy50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgYmFja3VwQWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWVsZF80XzRcIik7XG5cbiAgICAgIGlmICghZnVsbEFkZHJlc3MgfHwgZnVsbEFkZHJlc3MudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGZ1bGxBZGRyZXNzID0gYmFja3VwQWRkcmVzc0ZpZWxkPy52YWx1ZSB8fCBcIlwiO1xuICAgICAgfVxuXG4gICAgICBzeW5jQWRkcmVzc1RvSGlkZGVuRmllbGQoZnVsbEFkZHJlc3MpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYmFja3VwQWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF80XzRcIik7XG5cbiAgICBiYWNrdXBBZGRyZXNzRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBmdWxsQWRkcmVzcyA9IGJhY2t1cEFkZHJlc3NGaWVsZD8udmFsdWU7XG5cbiAgICAgIGlmICghZnVsbEFkZHJlc3MgfHwgZnVsbEFkZHJlc3MudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGZ1bGxBZGRyZXNzID0gYmFja3VwQWRkcmVzc0ZpZWxkPy52YWx1ZSB8fCBcIlwiO1xuICAgICAgfVxuXG4gICAgICBzeW5jQWRkcmVzc1RvSGlkZGVuRmllbGQoZnVsbEFkZHJlc3MpO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdChcIiNwb3N0Y29kZVN1Ym1pdFwiKTtcbiAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZm9ybUZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI2dmb3JtX3dyYXBwZXJfNCAuZ2Zvcm0tZm9vdGVyXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dmb3JtX3dyYXBwZXJfNFwiKTtcblxuICAgICAgaWYgKGFkZHJlc3NGaWVsZCkge1xuICAgICAgICBhZGRyZXNzRmllbGQuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICBmb3JtRm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3N0Y29kZSA9IHBvc3Rjb2RlRmllbGQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCFwb3N0Y29kZSkge1xuICAgICAgICBhbGVydChcIkVudGVyIHBvc3Rjb2RlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcblxuICAgICAgZmV0Y2goXG4gICAgICAgIGBodHRwczovL3BjbHMxLmNyYWZ0eWNsaWNrcy5jby51ay9qc29uL3JhcGlkYWRkcmVzcz9rZXk9OGI3NTgtMzBkNDMtNDFkNmQtMDlkNGQmcG9zdGNvZGU9JHtlbmNvZGVVUklDb21wb25lbnQocG9zdGNvZGUpfWAsXG4gICAgICApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlyc3QgPSBkYXRhLnRob3JvdWdoZmFyZXM/LlswXTtcbiAgICAgICAgICBjb25zdCBwb2ludHMgPSBmaXJzdD8uZGVsaXZlcnlfcG9pbnRzIHx8IFtdO1xuXG4gICAgICAgICAgaWYgKCFwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbGVydChcIk5vIGFkZHJlc3NlcyBmb3VuZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzdHJlZXQgPVxuICAgICAgICAgICAgYCR7Zmlyc3QudGhvcm91Z2hmYXJlX25hbWV9ICR7Zmlyc3QudGhvcm91Z2hmYXJlX2Rlc2NyaXB0b3J9YC50cmltKCk7XG5cbiAgICAgICAgICBhZGRyZXNzRmllbGQuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYWRkcmVzczwvb3B0aW9uPmA7XG5cbiAgICAgICAgICBwb2ludHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAgICAgY29uc3QgbGluZTEgPVxuICAgICAgICAgICAgICBpdGVtLmJ1aWxkaW5nX251bWJlciB8fCBpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lIHx8IFwiVW5rbm93blwiO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lMiA9IHN0cmVldDtcblxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lXG4gICAgICAgICAgICAgID8gYCR7aXRlbS5vcmdhbmlzYXRpb25fbmFtZX0sICR7c3RyZWV0fWBcbiAgICAgICAgICAgICAgOiBgJHtsaW5lMX0gJHtsaW5lMn1gO1xuXG4gICAgICAgICAgICAvLyBvcHRpb24udmFsdWUgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAvLyAgIGxpbmUxLFxuICAgICAgICAgICAgLy8gICBsaW5lMixcbiAgICAgICAgICAgIC8vICAgZnVsbDogbGFiZWwsXG4gICAgICAgICAgICAvLyAgIHJhdzogaXRlbSxcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnVkcHJuO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgICAgICAgICAgIG9wdGlvbi5kYXRhc2V0LmxpbmUxID0gbGluZTE7XG4gICAgICAgICAgICBvcHRpb24uZGF0YXNldC5saW5lMiA9IGxpbmUyO1xuICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQuZnVsbCA9IGxhYmVsO1xuXG4gICAgICAgICAgICBhZGRyZXNzRmllbGQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1IZWxwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0taGVscGVyXCIpO1xuXG4gICAgaWYgKGZvcm1IZWxwZXIpIHtcbiAgICAgIGZvcm1IZWxwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGRfNF80ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWVsZF80XzRcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkXzRfNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNF82XCIpO1xuICAgICAgICBjb25zdCBmaWVsZF80XzcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfN1wiKTtcbiAgICAgICAgY29uc3QgZmllbGRfNF84ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWVsZF80XzhcIik7XG5cbiAgICAgICAgaWYgKGZpZWxkXzRfNCAmJiBmaWVsZF80XzYgJiYgZmllbGRfNF83ICYmIGZpZWxkXzRfOCkge1xuICAgICAgICAgIGZpZWxkXzRfNC5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICBmaWVsZF80XzYuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgICAgZmllbGRfNF83LmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZpZWxkXzRfOC5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChidXR0b25XaHlTZWxsKSB7XG4gICAgICBidXR0b25XaHlTZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KFwiI3Bvc3Rjb2RlU3VibWl0V2h5U2VsbFwiKTtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2Zvcm1fd3JhcHBlcl80XCIpO1xuICAgICAgICAvLyBpZiAoZm9ybSkge1xuICAgICAgICAvLyAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBjb25zdCBmb3JtRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZm9ybS1mb290ZXJcIik7XG4gICAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZm9ybV93cmFwcGVyXzRcIik7XG5cbiAgICAgICAgaWYgKGFkZHJlc3NGaWVsZCkge1xuICAgICAgICAgIGFkZHJlc3NGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICBmb3JtRm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zdGNvZGUgPSBwb3N0Y29kZVdoeVNlbGxGaWVsZC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICghcG9zdGNvZGUpIHtcbiAgICAgICAgICBhbGVydChcIkVudGVyIHBvc3Rjb2RlXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcblxuICAgICAgICBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly9wY2xzMS5jcmFmdHljbGlja3MuY28udWsvanNvbi9yYXBpZGFkZHJlc3M/a2V5PThiNzU4LTMwZDQzLTQxZDZkLTA5ZDRkJnBvc3Rjb2RlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3Rjb2RlKX1gLFxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBkYXRhLnRob3JvdWdoZmFyZXM/LlswXTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IGZpcnN0Py5kZWxpdmVyeV9wb2ludHMgfHwgW107XG5cbiAgICAgICAgICAgIGlmICghcG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBhbGVydChcIk5vIGFkZHJlc3NlcyBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdHJlZXQgPVxuICAgICAgICAgICAgICBgJHtmaXJzdC50aG9yb3VnaGZhcmVfbmFtZX0gJHtmaXJzdC50aG9yb3VnaGZhcmVfZGVzY3JpcHRvcn1gLnRyaW0oKTtcblxuICAgICAgICAgICAgYWRkcmVzc0ZpZWxkLmlubmVySFRNTCA9IGA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGFkZHJlc3M8L29wdGlvbj5gO1xuXG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGxpbmUxID1cbiAgICAgICAgICAgICAgICBpdGVtLmJ1aWxkaW5nX251bWJlciB8fCBpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lIHx8IFwiVW5rbm93blwiO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGxpbmUyID0gc3RyZWV0O1xuXG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXRlbS5vcmdhbmlzYXRpb25fbmFtZVxuICAgICAgICAgICAgICAgID8gYCR7aXRlbS5vcmdhbmlzYXRpb25fbmFtZX0sICR7c3RyZWV0fWBcbiAgICAgICAgICAgICAgICA6IGAke2xpbmUxfSAke2xpbmUyfWA7XG5cbiAgICAgICAgICAgICAgLy8gb3B0aW9uLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAvLyAgIGxpbmUxLFxuICAgICAgICAgICAgICAvLyAgIGxpbmUyLFxuICAgICAgICAgICAgICAvLyAgIGZ1bGw6IGxhYmVsLFxuICAgICAgICAgICAgICAvLyAgIHJhdzogaXRlbSxcbiAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS51ZHBybjtcbiAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQubGluZTEgPSBsaW5lMTtcbiAgICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQubGluZTIgPSBsaW5lMjtcbiAgICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQuZnVsbCA9IGxhYmVsO1xuXG4gICAgICAgICAgICAgIGFkZHJlc3NGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFsdWF0aW9uRm9ybVN1Ym1pdCgpO1xuXG4gIGZ1bmN0aW9uIHNldFZhbHVhdGlvbkxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWx1YXRpb25Mb2NhdGlvblwiKTtcbiAgICBjb25zdCBhZGRyZXNzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJhZGRyZXNzXCIpO1xuXG4gICAgaWYgKGVsICYmIGFkZHJlc3MpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gZGVjb2RlVVJJQ29tcG9uZW50KGFkZHJlc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldFZhbHVhdGlvbkxvY2F0aW9uKTtcblxuICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwiZ2Zvcm1fcG9zdF9yZW5kZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNldFZhbHVhdGlvbkxvY2F0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIGVucXVpcnkgcG9wdXAvbW9kYWw6XG5cbiAgY29uc3QgZW5xdWlyeU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnF1aXJ5LW1vZGFsXCIpO1xuXG4gIGZ1bmN0aW9uIG9wZW5FbnF1aXJ5TW9kYWwoKSB7XG4gICAgZW5xdWlyeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlRW5xdWlyeU1vZGFsKCkge1xuICAgIGVucXVpcnlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB3aW5kb3cub3BlbkVucXVpcnlNb2RhbCA9IG9wZW5FbnF1aXJ5TW9kYWw7XG4gIHdpbmRvdy5jbG9zZUVucXVpcnlNb2RhbCA9IGNsb3NlRW5xdWlyeU1vZGFsO1xuXG4gIGVucXVpcnlNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGVucXVpcnlNb2RhbCkge1xuICAgICAgY2xvc2VFbnF1aXJ5TW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIEdGIGluaXQgZm9yIHBvcCB1cCBmb3JtXG5cbmpRdWVyeShkb2N1bWVudCkub24oXCJnZm9ybV9wb3N0X3JlbmRlclwiLCBmdW5jdGlvbiAoZXZlbnQsIGZvcm1JZCkge1xuICBpZiAod2luZG93Lmdmb3JtICYmIHR5cGVvZiBnZm9ybUluaXRTaW5nbGVGb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBnZm9ybUluaXRTaW5nbGVGb3JtKGZvcm1JZCk7XG4gIH1cbn0pO1xuXG5qUXVlcnkoZG9jdW1lbnQpLm9uKFwiZ2Zvcm1fcG9zdF9yZW5kZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBmb3JtSWQpIHtcbiAgaWYgKGZvcm1JZCA9PSA1KSB7XG4gICAgY29uc3QgJGZpZWxkID0galF1ZXJ5KFwiI2lucHV0XzVfN1wiKTtcblxuICAgIC8vIHdhaXQgdW50aWwgZGF0ZXBpY2tlciBpcyBhY3R1YWxseSBpbml0aWFsaXNlZFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCRmaWVsZC5sZW5ndGggJiYgJGZpZWxkLmhhc0NsYXNzKFwiaGFzRGF0ZXBpY2tlclwiKSkge1xuICAgICAgICAkZmllbGQuZGF0ZXBpY2tlcihcIm9wdGlvblwiLCBcIm1pbkRhdGVcIiwgMik7XG4gICAgICAgICRmaWVsZC5kYXRlcGlja2VyKFwicmVmcmVzaFwiKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvanMvYXBwXCI6IDAsXG5cdFwiY3NzL3N0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3Mvc3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3N0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNpdGVIZWFkZXJFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGRlbkhlYWRlckNsYXNzTmFtZSIsIm1lZ2FQYW5lbHNDb250YWluZXJFbGVtZW50IiwibWVnYVBhbmVsRWxlbWVudFNlbGVjdG9yIiwibWVnYVRyaWdnZXJFbGVtZW50U2VsZWN0b3IiLCJvcGVuTmF2SXRlbUNsYXNzTmFtZSIsIm9wZW5UcmlnZ2VyQXJpYUF0dHJpYnV0ZU5hbWUiLCJhbHdheXNTaG93SGVhZGVyV2l0aGluVG9wUGl4ZWxzIiwic2Nyb2xsSml0dGVyVGhyZXNob2xkUGl4ZWxzIiwicHJldmlvdXNTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsImlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkIiwiZmlyc3RTZWN0aW9uQWZ0ZXJIZWFkZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjYW5Vc2VUcmFuc3BhcmVudEhlYWRlciIsInRhZ05hbWUiLCJzZXRQYWdlVG9wT2Zmc2V0VG9IZWFkZXJIZWlnaHQiLCJoZWFkZXJIZWlnaHRQaXhlbHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY29uY2F0Iiwic2hvd0hlYWRlciIsInNjcm9sbFBvc2l0aW9uIiwicmVtb3ZlIiwiYWRkIiwiaGlkZUhlYWRlciIsImNsb3NlTWVnYVBhbmVscyIsIm1lZ2FQYW5lbEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJwYW5lbEVsZW1lbnQiLCJoaWRkZW4iLCJtZWdhVHJpZ2dlckVsZW1lbnRzIiwidHJpZ2dlckVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJpc0FueU1lZ2FQYW5lbE9wZW4iLCJhcHBseUhlYWRlclZpc2liaWxpdHlGcm9tU2Nyb2xsUG9zaXRpb24iLCJjdXJyZW50U2Nyb2xsWSIsInNjcm9sbERlbHRhWSIsIk1hdGgiLCJhYnMiLCJpc01lZ2FNZW51Q3VycmVudGx5T3BlbiIsImlzVXNlclNjcm9sbGluZ0Rvd24iLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXNzaXZlIiwic3RpY2t5IiwiVE9QX09GRlNFVCIsInNwYWNlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwic3RpY2t5U3RhcnRZIiwicmVjYWxjIiwid2FzRml4ZWQiLCJyZWN0IiwidG9wIiwidXBkYXRlIiwic2hvdWxkRml4Iiwib2Zmc2V0SGVpZ2h0IiwiaW5pdCIsImJ1cmdlciIsIm1vYmlsZU5hdiIsImRlc2t0b3BCdXJnZXJNZW51IiwiaGVhZGVyIiwiYmx1ck92ZXJsYXkiLCJpc0Rlc2t0b3AiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNldEhlYWRlckhlaWdodFZhciIsInVwZGF0ZVBhZ2VCbHVyIiwibWVnYU9wZW4iLCJkZXNrdG9wTWVudU9wZW4iLCJ0b2dnbGUiLCJvcGVuTWVudSIsIl93aW5kb3ckaGlkZU1lZ2FNZW51IiwiX3dpbmRvdyIsImhpZGVNZWdhTWVudSIsImNhbGwiLCJvdmVyZmxvdyIsImNsb3NlTWVudSIsInRvZ2dsZU1lbnUiLCJpc09wZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXliZUNsb3NlRGVza3RvcEJ1cmdlciIsInNldFRpbWVvdXQiLCJidXJnZXJIb3ZlcmVkIiwibWVudUhvdmVyZWQiLCJrZXkiLCJfd2luZG93JGhpZGVNZWdhTWVudTIiLCJfd2luZG93MiIsIm5hdiIsInBhbmVsc1dyYXAiLCJnZXRFbGVtZW50QnlJZCIsImhvdmVyWm9uZSIsInRyaWdnZXJzIiwicGFuZWxzIiwiaGlkZUFsbCIsIl93aW5kb3ckdXBkYXRlUGFnZUJsdSIsIl93aW5kb3czIiwicCIsInQiLCJzaG93S2V5IiwidHJpZ2dlckVsIiwiX3dpbmRvdyR1cGRhdGVQYWdlQmx1MiIsIl93aW5kb3c0IiwicGFuZWwiLCJDU1MiLCJlc2NhcGUiLCJ0cmlnZ2VyIiwiZ2V0QXR0cmlidXRlIiwibWF5YmVDbG9zZSIsInRhcmdldCIsIm9wZW5QYW5lbCIsImlzVGFyZ2V0IiwiZGF0YXNldCIsIm1vYmlsZVBhbmVsIiwiY2xvc2VQYW5lbCIsImxpbmsiLCJtZWdhIiwiYnRuIiwiT0ZGU0VUIiwiTUFYX1dBSVQiLCJTVEVQIiwiZGVjb2RlSGFzaCIsImhhc2giLCJoIiwic3RhcnRzV2l0aCIsInNsaWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiX3VudXNlZCIsImZpbmRUYXJnZXQiLCJpZCIsInNjcm9sbFRvSWQiLCJlbCIsInkiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJzY3JvbGxXaGVuUmVhZHkiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJ0aWNrIiwiYSIsImNsb3Nlc3QiLCJ1cmwiLCJVUkwiLCJocmVmIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInRhcmdldEV4aXN0cyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwZW5kaW5nIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJjYXJkcyIsImNhcmQiLCJkZXNjIiwidmVydGljYWxQYXRoIiwib3RoZXJDYXJkIiwib3RoZXJEZXNjIiwib3RoZXJWZXJ0aWNhbFBhdGgiLCJvcGFjaXR5IiwiYnV0dG9uIiwiZm9ybSIsInJlYWxTdWJtaXQiLCJjbGljayIsInRvZ2dsZUJ0biIsImZhY2V0UGFuZWwiLCJzdmdJY29uIiwidXBkYXRlRmFjZXRDaGVja2JveGVzIiwiaWNvbldyYXBwZXIiLCJzcGFuIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5IiwiRldQIiwiZ2FsbGVyeUltYWdlcyIsImxlbmd0aCIsInByZWZlcnNSZWR1Y2VkTW90aW9uIiwidGlja2luZyIsInVwZGF0ZVBhcmFsbGF4Iiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImltYWdlIiwiYm90dG9tIiwiaW1hZ2VDZW50ZXIiLCJ2aWV3cG9ydENlbnRlciIsImRpc3RhbmNlRnJvbUNlbnRlciIsInRyYW5zbGF0ZVkiLCJ0cmFuc2Zvcm0iLCJyZXF1ZXN0VGljayIsImhvbWVIZXJvU1ZHIiwicGFyYWxsYXhJdGVtIiwiaXRlbSIsImludGVuc2l0eSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIm9mZnNldCIsIm9uU2Nyb2xsIiwiZ3JvdXAiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJnZXRWaXNpYmxlSW1hZ2VzIiwiZmlsdGVyIiwiaW1nIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJvZmZzZXRXaWR0aCIsInZpc2libGVJbWFnZXMiLCJyZWN0cyIsIm1hcCIsIm1pbiIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiciIsIm1heCIsImdyb3VwQ2VudGVyIiwicGFyYWxsYXhZIiwicmVxdWVzdFVwZGF0ZSIsImNvbXBsZXRlIiwiaW5uZXJXaWR0aCIsInN0b3BQcm9wYWdhdGlvbiIsImRyb3Bkb3duIiwiZHJvcGRvd25zIiwiYXJyb3ciLCJpc0FjdGl2ZSIsImQiLCJzdmciLCJjbGlja2VkSW5zaWRlRHJvcGRvd24iLCJoZXJvU2VhcmNoIiwic2JpX2xpZ2h0Ym94Iiwib3BlbiIsImh1bWFuVGltZURpZmYiLCJ0byIsImRpZmYiLCJtaW51dGUiLCJob3VyIiwiZGF5Iiwid2VlayIsIm1vbnRoIiwieWVhciIsImZsb29yIiwiYXBwbHlJbnN0YWdyYW1EYXRlcyIsInRpbWVhZ29Eb25lIiwidGltZXN0YW1wIiwiTnVtYmVyIiwiZGF0ZSIsInVzZXJuYW1lTGluayIsInRpbWVBZ28iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJmZWVkIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInZhbHVhdGlvbkZvcm1TdWJtaXQiLCJwb3N0Y29kZUZpZWxkIiwiYnV0dG9uV2h5U2VsbCIsInBvc3Rjb2RlV2h5U2VsbEZpZWxkIiwiYWRkcmVzc0ZpZWxkIiwiY29uc29sZSIsIndhcm4iLCJzeW5jQWRkcmVzc1RvSGlkZGVuRmllbGQiLCJmdWxsQWRkcmVzcyIsImhpZGRlbkZpZWxkIiwidmFsdWUiLCJfc2VsZWN0ZWRPcHRpb24kZGF0YXMiLCJzZWxlY3RlZE9wdGlvbiIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiZnVsbCIsInRleHRDb250ZW50IiwiYmFja3VwQWRkcmVzc0ZpZWxkIiwidHJpbSIsImZvcm1Gb290ZXIiLCJmb3JtV3JhcHBlciIsInBvc3Rjb2RlIiwiYWxlcnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIl9kYXRhJHRob3JvdWdoZmFyZXMiLCJmaXJzdCIsInRob3JvdWdoZmFyZXMiLCJwb2ludHMiLCJkZWxpdmVyeV9wb2ludHMiLCJzdHJlZXQiLCJ0aG9yb3VnaGZhcmVfbmFtZSIsInRob3JvdWdoZmFyZV9kZXNjcmlwdG9yIiwib3B0aW9uIiwibGluZTEiLCJidWlsZGluZ19udW1iZXIiLCJvcmdhbmlzYXRpb25fbmFtZSIsImxpbmUyIiwibGFiZWwiLCJ1ZHBybiIsImVyciIsImVycm9yIiwiZm9ybUhlbHBlciIsImZpZWxkXzRfNCIsImZpZWxkXzRfNiIsImZpZWxkXzRfNyIsImZpZWxkXzRfOCIsIl9kYXRhJHRob3JvdWdoZmFyZXMyIiwic2V0VmFsdWF0aW9uTG9jYXRpb24iLCJhZGRyZXNzIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZ2V0IiwialF1ZXJ5Iiwib24iLCJlbnF1aXJ5TW9kYWwiLCJvcGVuRW5xdWlyeU1vZGFsIiwiY2xvc2VFbnF1aXJ5TW9kYWwiLCJldmVudCIsImZvcm1JZCIsImdmb3JtIiwiZ2Zvcm1Jbml0U2luZ2xlRm9ybSIsIiRmaWVsZCIsImhhc0NsYXNzIiwiZGF0ZXBpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=
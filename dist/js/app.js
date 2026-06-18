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
      sessionStorage.setItem("valuation_postcode", postcode);
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
        sessionStorage.setItem("valuation_postcode", postcode);
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
  if (enquiryModal) {
    enquiryModal.addEventListener("click", function (e) {
      if (e.target === enquiryModal) {
        closeEnquiryModal();
      }
    });
  }

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
  var addresURL = getParam("address");
  var postcode = getParam("postcode");
  var address_5_Input = document.querySelector("#field_5_15");
  var postcode_5_16 = document.querySelector("#field_5_16");
  var form_5_title = document.querySelector(".valuation-form .title h1");
  if (!addresURL) {
    address_5_Input.style.display = "block";
    form_5_title.textContent = "ACHIEVE THE BEST PRICE WITH ASHTONS";
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2U4MjQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyA9PT1cbiAgLy9TdGlja3kgc2Nyb2xsIG5hdmlnYXRpb25cbiAgLy8gPT09IC8vXG5cbiAgLy8gU3RpY2t5IGhlYWRlcjogc2hvd3Mgd2hlbiBzY3JvbGxpbmcgdXAsIGhpZGVzIHdoZW4gc2Nyb2xsaW5nIGRvd25cbiAgKCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1wcm9wZXJ0eVwiKSB8fFxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtYmxvZy1wb3N0c1wiKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNpdGVIZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBpZiAoIXNpdGVIZWFkZXJFbGVtZW50KSByZXR1cm47XG5cbiAgICBjb25zdCBoaWRkZW5IZWFkZXJDbGFzc05hbWUgPSBcImhlYWRlci0taGlkZGVuXCI7XG5cbiAgICBjb25zdCBtZWdhUGFuZWxzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVnYS1wYW5lbHNcIik7XG4gICAgY29uc3QgbWVnYVBhbmVsRWxlbWVudFNlbGVjdG9yID0gXCJbZGF0YS1tZWdhLXBhbmVsXVwiO1xuICAgIGNvbnN0IG1lZ2FUcmlnZ2VyRWxlbWVudFNlbGVjdG9yID0gXCJbZGF0YS1tZWdhXVwiO1xuXG4gICAgY29uc3Qgb3Blbk5hdkl0ZW1DbGFzc05hbWUgPSBcImlzLW1lZ2Etb3BlblwiO1xuICAgIGNvbnN0IG9wZW5UcmlnZ2VyQXJpYUF0dHJpYnV0ZU5hbWUgPSBcImFyaWEtZXhwYW5kZWRcIjtcblxuICAgIGNvbnN0IGFsd2F5c1Nob3dIZWFkZXJXaXRoaW5Ub3BQaXhlbHMgPSAyMDtcbiAgICBjb25zdCBzY3JvbGxKaXR0ZXJUaHJlc2hvbGRQaXhlbHMgPSA0O1xuXG4gICAgbGV0IHByZXZpb3VzU2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IDA7XG4gICAgbGV0IGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmaXJzdFNlY3Rpb25BZnRlckhlYWRlciA9IHNpdGVIZWFkZXJFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBjYW5Vc2VUcmFuc3BhcmVudEhlYWRlciA9XG4gICAgICBmaXJzdFNlY3Rpb25BZnRlckhlYWRlciAmJlxuICAgICAgZmlyc3RTZWN0aW9uQWZ0ZXJIZWFkZXIudGFnTmFtZSA9PT0gXCJTRUNUSU9OXCIgJiZcbiAgICAgICFmaXJzdFNlY3Rpb25BZnRlckhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy1vZmYtd2hpdGVcIikgJiZcbiAgICAgICFmaXJzdFNlY3Rpb25BZnRlckhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy13aGl0ZVwiKTtcblxuICAgIGZ1bmN0aW9uIHNldFBhZ2VUb3BPZmZzZXRUb0hlYWRlckhlaWdodCgpIHtcbiAgICAgIGNvbnN0IGhlYWRlckhlaWdodFBpeGVscyA9XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgXCItLWZpeGVkLWhlYWRlci1oZWlnaHRcIixcbiAgICAgICAgYCR7aGVhZGVySGVpZ2h0UGl4ZWxzfXB4YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0hlYWRlcigpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuSGVhZGVyQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID4gOTgpIHtcbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJnLWRhcmstZ3JleVwiKTtcbiAgICAgICAgc2l0ZUhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXRyYW5zcGFyZW50XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5Vc2VUcmFuc3BhcmVudEhlYWRlcikge1xuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmctdHJhbnNwYXJlbnRcIik7XG4gICAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrLWdyZXlcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmctZGFyay1ncmV5XCIpO1xuICAgICAgICBzaXRlSGVhZGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctdHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUhlYWRlcigpIHtcbiAgICAgIHNpdGVIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoaGlkZGVuSGVhZGVyQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1lZ2FQYW5lbHMoKSB7XG4gICAgICBpZiAobWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbWVnYVBhbmVsRWxlbWVudHMgPSBtZWdhUGFuZWxzQ29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIG1lZ2FQYW5lbEVsZW1lbnRTZWxlY3RvcixcbiAgICAgICAgKTtcbiAgICAgICAgbWVnYVBhbmVsRWxlbWVudHMuZm9yRWFjaCgocGFuZWxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgcGFuZWxFbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZWdhVHJpZ2dlckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgbWVnYVRyaWdnZXJFbGVtZW50U2VsZWN0b3IsXG4gICAgICApO1xuICAgICAgbWVnYVRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudCkgPT4ge1xuICAgICAgICB0cmlnZ2VyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG9wZW5OYXZJdGVtQ2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodHJpZ2dlckVsZW1lbnQuaGFzQXR0cmlidXRlKG9wZW5UcmlnZ2VyQXJpYUF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgdHJpZ2dlckVsZW1lbnQuc2V0QXR0cmlidXRlKG9wZW5UcmlnZ2VyQXJpYUF0dHJpYnV0ZU5hbWUsIFwiZmFsc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQW55TWVnYVBhbmVsT3BlbigpIHtcbiAgICAgIGlmICghbWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAhIW1lZ2FQYW5lbHNDb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAke21lZ2FQYW5lbEVsZW1lbnRTZWxlY3Rvcn06bm90KFtoaWRkZW5dKWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5SGVhZGVyVmlzaWJpbGl0eUZyb21TY3JvbGxQb3NpdGlvbigpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgMDtcbiAgICAgIGNvbnN0IHNjcm9sbERlbHRhWSA9IGN1cnJlbnRTY3JvbGxZIC0gcHJldmlvdXNTY3JvbGxZO1xuXG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPD0gYWx3YXlzU2hvd0hlYWRlcldpdGhpblRvcFBpeGVscykge1xuICAgICAgICBzaG93SGVhZGVyKCk7XG4gICAgICAgIGNsb3NlTWVnYVBhbmVscygpO1xuICAgICAgICBwcmV2aW91c1Njcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICAgICAgaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsRGVsdGFZKSA8IHNjcm9sbEppdHRlclRocmVzaG9sZFBpeGVscykge1xuICAgICAgICBpc1Njcm9sbFVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzTWVnYU1lbnVDdXJyZW50bHlPcGVuID0gaXNBbnlNZWdhUGFuZWxPcGVuKCk7XG4gICAgICBpZiAoaXNNZWdhTWVudUN1cnJlbnRseU9wZW4pIHtcbiAgICAgICAgc2hvd0hlYWRlcigpO1xuICAgICAgICBjbG9zZU1lZ2FQYW5lbHMoKTtcbiAgICAgICAgcHJldmlvdXNTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgICAgIGlzU2Nyb2xsVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNVc2VyU2Nyb2xsaW5nRG93biA9IHNjcm9sbERlbHRhWSA+IDA7XG5cbiAgICAgIGNsb3NlTWVnYVBhbmVscygpO1xuXG4gICAgICBpZiAoaXNVc2VyU2Nyb2xsaW5nRG93bikgaGlkZUhlYWRlcigpO1xuICAgICAgZWxzZSBzaG93SGVhZGVyKCk7XG5cbiAgICAgIHByZXZpb3VzU2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xuICAgICAgaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRQYWdlVG9wT2Zmc2V0VG9IZWFkZXJIZWlnaHQoKTtcbiAgICBzaG93SGVhZGVyKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzZXRQYWdlVG9wT2Zmc2V0VG9IZWFkZXJIZWlnaHQpO1xuICAgIG5ldyBSZXNpemVPYnNlcnZlcihzZXRQYWdlVG9wT2Zmc2V0VG9IZWFkZXJIZWlnaHQpLm9ic2VydmUoXG4gICAgICBzaXRlSGVhZGVyRWxlbWVudCxcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInNjcm9sbFwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQpIHJldHVybjtcbiAgICAgICAgaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFwcGx5SGVhZGVyVmlzaWJpbGl0eUZyb21TY3JvbGxQb3NpdGlvbik7XG4gICAgICB9LFxuICAgICAgeyBwYXNzaXZlOiB0cnVlIH0sXG4gICAgKTtcbiAgfSkoKTtcblxuICAvLyBTdGlja3kgXCJsb2NrIHRvIHRvcFwiIGZvciB5b3VyIG5ldyB3cmFwcGVyOlxuICAvLyA8ZGl2IGNsYXNzPVwic3RpY2t5LWNvbnRyb2xzXCI+IC4uLmVsZW1lbnRzIHlvdSB3YW50IHN0aWNraW5nLi4uIDwvZGl2PlxuXG4gICgoKSA9PiB7XG4gICAgY29uc3Qgc3RpY2t5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGlja3ktY29udHJvbHNcIik7XG4gICAgaWYgKCFzdGlja3kpIHJldHVybjtcblxuICAgIC8vIElmIHlvdSBoYXZlIGEgZml4ZWQgc2l0ZSBoZWFkZXIsIHNldCB0aGlzIHRvIGl0cyBoZWlnaHQgKGUuZy4gODApXG4gICAgY29uc3QgVE9QX09GRlNFVCA9IDA7XG5cbiAgICAvLyBTcGFjZXIgcHJldmVudHMgbGF5b3V0IGp1bXAgd2hlbiBzdGlja3kgYmVjb21lcyBmaXhlZFxuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3BhY2VyLmNsYXNzTmFtZSA9IFwic3RpY2t5LWNvbnRyb2xzLXNwYWNlclwiO1xuICAgIHN0aWNreS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFjZXIsIHN0aWNreSk7XG5cbiAgICAvLyBDYXB0dXJlIHRoZSBwb2ludCBhdCB3aGljaCB0aGUgd3JhcHBlciBzaG91bGQgYmVjb21lIGZpeGVkXG4gICAgLy8gKGFic29sdXRlIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudClcbiAgICBsZXQgc3RpY2t5U3RhcnRZID0gMDtcblxuICAgIGNvbnN0IHJlY2FsYyA9ICgpID0+IHtcbiAgICAgIC8vIGlmIGN1cnJlbnRseSBmaXhlZCwgdGVtcG9yYXJpbHkgcmVtb3ZlIHRvIG1lYXN1cmUgbmF0dXJhbCBwb3NpdGlvblxuICAgICAgY29uc3Qgd2FzRml4ZWQgPSBzdGlja3kuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtZml4ZWRcIik7XG4gICAgICBpZiAod2FzRml4ZWQpIHtcbiAgICAgICAgc3RpY2t5LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcbiAgICAgICAgc3BhY2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWN0ID0gc3RpY2t5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgc3RpY2t5U3RhcnRZID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIFRPUF9PRkZTRVQ7XG5cbiAgICAgIC8vIHJlc3RvcmUgc3RhdGUgYWZ0ZXIgbWVhc3VyaW5nXG4gICAgICBpZiAod2FzRml4ZWQpIHVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaG91bGRGaXggPSB3aW5kb3cuc2Nyb2xsWSA+PSBzdGlja3lTdGFydFk7XG5cbiAgICAgIGlmIChzaG91bGRGaXggJiYgIXN0aWNreS5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1maXhlZFwiKSkge1xuICAgICAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gYCR7c3RpY2t5Lm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICBzdGlja3kuY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpO1xuICAgICAgfSBlbHNlIGlmICghc2hvdWxkRml4ICYmIHN0aWNreS5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1maXhlZFwiKSkge1xuICAgICAgICBzdGlja3kuY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xuICAgICAgICBzcGFjZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJ1biBvbmNlIERPTS9sYXlvdXQgaXMgcmVhZHlcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgcmVjYWxjKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgcmVjYWxjKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIC8vIElmIGZvbnRzL2ltYWdlcyBzaGlmdCBsYXlvdXQsIHRoaXMgaGVscHMgbG9jayBpdCBpblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcblxuICAgIC8vIEluaXRpYWxcbiAgICBpbml0KCk7XG4gIH0pKCk7XG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1idG5cIik7XG4gICAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xuICAgIGNvbnN0IGRlc2t0b3BCdXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNrdG9wLWJ1cmdlci1tZW51XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgYmx1ck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtYmx1ci1vdmVybGF5XCIpO1xuXG4gICAgaWYgKCFidXJnZXIgfHwgIW1vYmlsZU5hdiB8fCAhaGVhZGVyKSByZXR1cm47XG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSAoKSA9PiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDc2OHB4KVwiKS5tYXRjaGVzO1xuXG4gICAgY29uc3Qgc2V0SGVhZGVySGVpZ2h0VmFyID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0taGVhZGVyLWhlaWdodFwiLFxuICAgICAgICBgJHtoZWFkZXIub2Zmc2V0SGVpZ2h0fXB4YCxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVBhZ2VCbHVyID0gKCkgPT4ge1xuICAgICAgaWYgKCFibHVyT3ZlcmxheSB8fCAhaXNEZXNrdG9wKCkpIHtcbiAgICAgICAgYmx1ck92ZXJsYXk/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVnYU9wZW4gPSBoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVnYS1vcGVuXCIpO1xuICAgICAgY29uc3QgZGVza3RvcE1lbnVPcGVuID0gZGVza3RvcEJ1cmdlck1lbnU/LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vcGVuXCIpO1xuXG4gICAgICBibHVyT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIsIG1lZ2FPcGVuIHx8IGRlc2t0b3BNZW51T3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5NZW51ID0gKCkgPT4ge1xuICAgICAgd2luZG93LmhpZGVNZWdhTWVudT8uKCk7XG5cbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG4gICAgICBkZXNrdG9wQnVyZ2VyTWVudT8uY2xhc3NMaXN0LmFkZChcIm5hdi1vcGVuXCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3BlblwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5hdi1vcGVuXCIpO1xuXG4gICAgICBidXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICBtb2JpbGVOYXYuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcbiAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2UgbWVudVwiKTtcblxuICAgICAgaWYgKCFpc0Rlc2t0b3AoKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH1cblxuICAgICAgc2V0SGVhZGVySGVpZ2h0VmFyKCk7XG4gICAgICB1cGRhdGVQYWdlQmx1cigpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuICAgICAgZGVza3RvcEJ1cmdlck1lbnU/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcblxuICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgIG1vYmlsZU5hdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICBidXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIk9wZW4gbWVudVwiKTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG5cbiAgICAgIHNldEhlYWRlckhlaWdodFZhcigpO1xuICAgICAgdXBkYXRlUGFnZUJsdXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IG1vYmlsZU5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb3BlblwiKTtcbiAgICAgIGlzT3BlbiA/IGNsb3NlTWVudSgpIDogb3Blbk1lbnUoKTtcbiAgICB9O1xuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGlzRGVza3RvcCgpKSByZXR1cm47XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVNZW51KCk7XG4gICAgfSk7XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFpc0Rlc2t0b3AoKSkgcmV0dXJuO1xuICAgICAgb3Blbk1lbnUoKTtcbiAgICB9KTtcblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFpc0Rlc2t0b3AoKSkgcmV0dXJuO1xuICAgICAgb3Blbk1lbnUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1heWJlQ2xvc2VEZXNrdG9wQnVyZ2VyID0gKCkgPT4ge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVza3RvcCgpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgYnVyZ2VySG92ZXJlZCA9IGJ1cmdlci5tYXRjaGVzKFwiOmhvdmVyXCIpO1xuICAgICAgICBjb25zdCBtZW51SG92ZXJlZCA9IGRlc2t0b3BCdXJnZXJNZW51Py5tYXRjaGVzKFwiOmhvdmVyXCIpO1xuXG4gICAgICAgIGlmICghYnVyZ2VySG92ZXJlZCAmJiAhbWVudUhvdmVyZWQpIHtcbiAgICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTIwKTtcbiAgICB9O1xuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1heWJlQ2xvc2VEZXNrdG9wQnVyZ2VyKTtcbiAgICBkZXNrdG9wQnVyZ2VyTWVudT8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbWF5YmVDbG9zZURlc2t0b3BCdXJnZXIpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiBtb2JpbGVOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9wZW5cIikpIHtcbiAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBibHVyT3ZlcmxheT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaWRlTWVnYU1lbnU/LigpO1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBzZXRIZWFkZXJIZWlnaHRWYXIoKTtcblxuICAgICAgaWYgKGlzRGVza3RvcCgpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVQYWdlQmx1cigpO1xuICAgIH0pO1xuXG4gICAgc2V0SGVhZGVySGVpZ2h0VmFyKCk7XG4gICAgd2luZG93LnVwZGF0ZVBhZ2VCbHVyID0gdXBkYXRlUGFnZUJsdXI7XG4gIH0pKCk7XG5cbiAgLy8gPT09XG4gIC8vIE5hdiBNZWdhIE1lbnVcbiAgLy8gPT09IC8vXG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1wcmltYXJ5XCIpO1xuICAgIGNvbnN0IHBhbmVsc1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZ2EtcGFuZWxzXCIpO1xuICAgIGNvbnN0IGhvdmVyWm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXdyYXBcIik7XG5cbiAgICBpZiAoIWhlYWRlciB8fCAhbmF2IHx8ICFwYW5lbHNXcmFwIHx8ICFob3ZlclpvbmUpIHJldHVybjtcblxuICAgIGNvbnN0IHRyaWdnZXJzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2RhdGEtbWVnYV1cIik7XG4gICAgY29uc3QgcGFuZWxzID0gcGFuZWxzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lZ2EtcGFuZWxbZGF0YS1tZWdhLXBhbmVsXVwiKTtcblxuICAgIGNvbnN0IGhpZGVBbGwgPSAoKSA9PiB7XG4gICAgICBwYW5lbHMuZm9yRWFjaCgocCkgPT4gKHAuaGlkZGVuID0gdHJ1ZSkpO1xuICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodCkgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIikpO1xuICAgICAgcGFuZWxzV3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibWVnYS1vcGVuXCIpO1xuICAgICAgd2luZG93LnVwZGF0ZVBhZ2VCbHVyPy4oKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd0tleSA9IChrZXksIHRyaWdnZXJFbCkgPT4ge1xuICAgICAgY29uc3QgcGFuZWwgPSBwYW5lbHNXcmFwLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAubWVnYS1wYW5lbFtkYXRhLW1lZ2EtcGFuZWw9XCIke0NTUy5lc2NhcGUoa2V5KX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGlmICghcGFuZWwpIHJldHVybjtcblxuICAgICAgcGFuZWxzLmZvckVhY2goKHApID0+IChwLmhpZGRlbiA9IHAgIT09IHBhbmVsKSk7XG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0KSA9PlxuICAgICAgICB0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdCA9PT0gdHJpZ2dlckVsID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpLFxuICAgICAgKTtcblxuICAgICAgcGFuZWxzV3JhcC5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlblwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVnYS1vcGVuXCIpO1xuICAgICAgd2luZG93LnVwZGF0ZVBhZ2VCbHVyPy4oKTtcbiAgICB9O1xuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1lZ2FcIik7XG4gICAgICBpZiAoIWtleSkgcmV0dXJuO1xuXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHNob3dLZXkoa2V5LCB0cmlnZ2VyKSk7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiBzaG93S2V5KGtleSwgdHJpZ2dlcikpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWF5YmVDbG9zZSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFob3ZlclpvbmUubWF0Y2hlcyhcIjpob3ZlclwiKSAmJiAhcGFuZWxzV3JhcC5tYXRjaGVzKFwiOmhvdmVyXCIpKSB7XG4gICAgICAgICAgaGlkZUFsbCgpO1xuICAgICAgICB9XG4gICAgICB9LCAxMjApO1xuICAgIH07XG5cbiAgICBob3ZlclpvbmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbWF5YmVDbG9zZSk7XG4gICAgcGFuZWxzV3JhcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtYXliZUNsb3NlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKCFoZWFkZXIuY29udGFpbnMoZS50YXJnZXQpKSBoaWRlQWxsKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBoaWRlQWxsKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuaGlkZU1lZ2FNZW51ID0gaGlkZUFsbDtcbiAgICBoaWRlQWxsKCk7XG4gIH0pKCk7XG5cbiAgLy8gPT09XG4gIC8vIE1vYmlsZSBtZWdhIG1lbnVcbiAgLy8gPT09IC8vXG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XG4gICAgY29uc3QgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtcGFuZWxcIik7XG5cbiAgICBpZiAoIW5hdikgcmV0dXJuO1xuXG4gICAgY29uc3Qgb3BlblBhbmVsID0gKGtleSkgPT4ge1xuICAgICAgcGFuZWxzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgY29uc3QgaXNUYXJnZXQgPSBwLmRhdGFzZXQubW9iaWxlUGFuZWwgPT09IGtleTtcbiAgICAgICAgcC5oaWRkZW4gPSAhaXNUYXJnZXQ7XG4gICAgICAgIHAuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiLCBpc1RhcmdldCk7XG4gICAgICB9KTtcblxuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJwYW5lbC1vcGVuXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbG9zZVBhbmVsID0gKCkgPT4ge1xuICAgICAgcGFuZWxzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgcC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwicGFuZWwtb3BlblwiKTtcbiAgICB9O1xuXG4gICAgLy8gb3BlbiBwYW5lbCB3aGVuIGNsaWNraW5nIHRvcC1sZXZlbCBpdGVtXG4gICAgbmF2XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXByaW1hcnkgPiBsaSA+IGFbZGF0YS1tZWdhXVwiKVxuICAgICAgLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb3BlblBhbmVsKGxpbmsuZGF0YXNldC5tZWdhKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIGJhY2sgYnV0dG9uc1xuICAgIG5hdlxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9iaWxlLXBhbmVsX19iYWNrXCIpXG4gICAgICAuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUGFuZWwpKTtcbiAgfSkoKTtcblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IE9GRlNFVCA9IDA7IC8vIHN0aWNreSBoZWFkZXIgaGVpZ2h0XG4gICAgY29uc3QgTUFYX1dBSVQgPSAyMDAwOyAvLyBtcyB0byB3YWl0IGZvciBlbGVtZW50IHRvIGFwcGVhclxuICAgIGNvbnN0IFNURVAgPSA1MDsgLy8gbXMgcG9sbGluZyBpbnRlcnZhbFxuXG4gICAgY29uc3QgZGVjb2RlSGFzaCA9IChoYXNoKSA9PiB7XG4gICAgICBpZiAoIWhhc2gpIHJldHVybiBcIlwiO1xuICAgICAgY29uc3QgaCA9IGhhc2guc3RhcnRzV2l0aChcIiNcIikgPyBoYXNoLnNsaWNlKDEpIDogaGFzaDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRUYXJnZXQgPSAoaWQpID0+XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgfHxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtDU1MuZXNjYXBlKGlkKX1cIl1gKTtcblxuICAgIGNvbnN0IHNjcm9sbFRvSWQgPSAoaWQpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZmluZFRhcmdldChpZCk7XG4gICAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHkgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBPRkZTRVQ7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHksIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNjcm9sbFdoZW5SZWFkeSA9IChpZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbFRvSWQoaWQpKSByZXR1cm47XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPj0gTUFYX1dBSVQpIHJldHVybjtcbiAgICAgICAgc2V0VGltZW91dCh0aWNrLCBTVEVQKTtcbiAgICAgIH07XG4gICAgICB0aWNrKCk7XG4gICAgfTtcblxuICAgIC8vIEludGVyY2VwdCBhbmNob3IgY2xpY2tzIChzYW1lLW9yaWdpbilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBlLnRhcmdldC5jbG9zZXN0KCdhW2hyZWYqPVwiI1wiXScpO1xuICAgICAgaWYgKCFhKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYS5ocmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICBpZiAodXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikgcmV0dXJuO1xuXG4gICAgICBjb25zdCBpZCA9IGRlY29kZUhhc2godXJsLmhhc2gpO1xuICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gICAgICAvLyBJZiBuYXZpZ2F0aW5nIHRvIGEgZGlmZmVyZW50IHBhdGgsIGxldCBuYXZpZ2F0aW9uIGhhcHBlbixcbiAgICAgIC8vIGJ1dCByZW1lbWJlciB0aGUgdGFyZ2V0IGZvciBhZnRlciBsb2FkLlxuICAgICAgaWYgKHVybC5wYXRobmFtZSAhPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJwZW5kaW5nQW5jaG9yXCIsIGlkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTYW1lIHBhZ2U6IHNtb290aCBzY3JvbGwgbm93XG4gICAgICBjb25zdCB0YXJnZXRFeGlzdHMgPSAhIWZpbmRUYXJnZXQoaWQpO1xuICAgICAgaWYgKCF0YXJnZXRFeGlzdHMpIHJldHVybjsgLy8gYWxsb3cgZGVmYXVsdCBpZiBpdCBkb2Vzbid0IGV4aXN0XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIFwiI1wiICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkKSk7XG4gICAgICBzY3JvbGxXaGVuUmVhZHkoaWQpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gbG9hZDogaGFuZGxlIGhhc2ggb3IgcGVuZGluZyBjcm9zcy1wYWdlIGFuY2hvclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwZW5kaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInBlbmRpbmdBbmNob3JcIik7XG4gICAgICBpZiAocGVuZGluZykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwicGVuZGluZ0FuY2hvclwiKTtcbiAgICAgICAgc2Nyb2xsV2hlblJlYWR5KHBlbmRpbmcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkID0gZGVjb2RlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICBpZiAoaWQpIHNjcm9sbFdoZW5SZWFkeShpZCk7XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgLy8gPT09XG4gIC8vIFRlYW0gc2xpZGUgY2FyZHMgdG9nZ2xlXG4gIC8vID09PSAvL1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWFtLXNsaWRlLWNhcmRcIik7XG5cbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgdmVydGljYWxQYXRoID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmljb24gLnZlcnRpY2FsXCIpO1xuXG4gICAgaWYgKCFkZXNjKSByZXR1cm47XG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBDbG9zZSBvdGhlcnNcbiAgICAgIGNhcmRzLmZvckVhY2goKG90aGVyQ2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckRlc2MgPSBvdGhlckNhcmQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3Qgb3RoZXJWZXJ0aWNhbFBhdGggPSBvdGhlckNhcmQucXVlcnlTZWxlY3RvcihcIi5pY29uIC52ZXJ0aWNhbFwiKTtcblxuICAgICAgICBpZiAob3RoZXJEZXNjICYmIG90aGVyRGVzYyAhPT0gZGVzYylcbiAgICAgICAgICBvdGhlckRlc2MuY2xhc3NMaXN0LnJlbW92ZShcImlzLXZpc2libGVcIik7XG4gICAgICAgIGlmIChvdGhlclZlcnRpY2FsUGF0aCAmJiBvdGhlclZlcnRpY2FsUGF0aCAhPT0gdmVydGljYWxQYXRoKSB7XG4gICAgICAgICAgb3RoZXJWZXJ0aWNhbFBhdGguc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIGN1cnJlbnRcbiAgICAgIGRlc2MuY2xhc3NMaXN0LnRvZ2dsZShcImlzLXZpc2libGVcIik7XG5cbiAgICAgIGlmICh2ZXJ0aWNhbFBhdGgpIHtcbiAgICAgICAgdmVydGljYWxQYXRoLnN0eWxlLm9wYWNpdHkgPVxuICAgICAgICAgIHZlcnRpY2FsUGF0aC5zdHlsZS5vcGFjaXR5ID09PSBcIjBcIiA/IFwiMVwiIDogXCIwXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vID09PVxuICAvLyBDdXN0b20gR3Jhdml0eSBGb3JtcyBTdWJtaXRcbiAgLy8gPT09IC8vXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20tc3VibWl0LWJ1dHRvblwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gYnV0dG9uLmNsb3Nlc3QoXCJmb3JtXCIpO1xuICAgICAgaWYgKCFmb3JtKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHJlYWxTdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgIGlmIChyZWFsU3VibWl0KSByZWFsU3VibWl0LmNsaWNrKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vID09PVxuICAvLyBGYWNldCBDdXN0b20gRmlsdGVyXG4gIC8vID09PSAvL1xuXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWZhY2V0XCIpO1xuICBjb25zdCBmYWNldFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWNldC1wYW5lbFwiKTtcblxuICBpZiAodG9nZ2xlQnRuICYmIGZhY2V0UGFuZWwpIHtcbiAgICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZmFjZXRQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3ZnSWNvbiA9IGBcbiAgICA8c3ZnIGNsYXNzPVwiZmFjZXQtcmFkaW8tc2VsZWN0ZWQtaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCI4LjVcIiBzdHJva2U9XCIjMDAwXCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICA8cGF0aCBkPVwiTTEyLjQ3IDUuNDNsLTcgNi45NlwiIHN0cm9rZT1cIiMyNDI0MmRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICA8cGF0aCBkPVwiTTUuNSA1LjQxbDYuOTYgN1wiIHN0cm9rZT1cIiMyNDI0MmRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgPC9zdmc+XG4gIGA7XG5cbiAgZnVuY3Rpb24gdXBkYXRlRmFjZXRDaGVja2JveGVzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFjZXR3cC1jaGVja2JveFwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgbGV0IGljb25XcmFwcGVyID0gZWwucXVlcnlTZWxlY3RvcihcIi5mYWNldC1yYWRpby1zZWxlY3RlZC1pY29uXCIpO1xuXG4gICAgICBpZiAoIWljb25XcmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZmFjZXQtcmFkaW8tc2VsZWN0ZWQtaWNvblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBzdmdJY29uO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgaWNvbldyYXBwZXIgPSBzcGFuO1xuICAgICAgfVxuXG4gICAgICBpY29uV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKVxuICAgICAgICA/IFwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgOiBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh3aW5kb3cuRldQKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZhY2V0d3AtbG9hZGVkXCIsIHVwZGF0ZUZhY2V0Q2hlY2tib3hlcyk7XG4gIH1cblxuICAoKCkgPT4ge1xuICAgIGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb3BlcnR5LWdhbGxlcnlfX2ltZ1wiKTtcbiAgICBpZiAoIWdhbGxlcnlJbWFnZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFxuICAgICAgXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiLFxuICAgICkubWF0Y2hlcztcblxuICAgIGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbikgcmV0dXJuO1xuXG4gICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuICAgICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGdhbGxlcnlJbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIC8vIFNraXAgaWYgZmFyIG91dHNpZGUgdmlld3BvcnRcbiAgICAgICAgaWYgKHJlY3QuYm90dG9tIDwgMCB8fCByZWN0LnRvcCA+IHZpZXdwb3J0SGVpZ2h0KSByZXR1cm47XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3MgdGhyb3VnaCB2aWV3cG9ydDogLTEgdG8gMVxuICAgICAgICBjb25zdCBpbWFnZUNlbnRlciA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCB2aWV3cG9ydENlbnRlciA9IHZpZXdwb3J0SGVpZ2h0IC8gMjtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VGcm9tQ2VudGVyID1cbiAgICAgICAgICAoaW1hZ2VDZW50ZXIgLSB2aWV3cG9ydENlbnRlcikgLyB2aWV3cG9ydEhlaWdodDtcblxuICAgICAgICAvLyBLZWVwIGl0IHN1YnRsZVxuICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gZGlzdGFuY2VGcm9tQ2VudGVyICogLTE4O1xuXG4gICAgICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke3RyYW5zbGF0ZVl9cHgsIDApIHNjYWxlKDEuMDYpYDtcbiAgICAgIH0pO1xuXG4gICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdFRpY2soKSB7XG4gICAgICBpZiAodGlja2luZykgcmV0dXJuO1xuICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCByZXF1ZXN0VGljaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlcXVlc3RUaWNrKTtcblxuICAgIHVwZGF0ZVBhcmFsbGF4KCk7XG4gIH0pKCk7XG5cbiAgLy8gUGFyYWxsYXggSXRlbXNcbiAgLy8gSW5pdGlhbGlzZSBJbnN0YW5jZVxuICBjb25zdCBob21lSGVyb1NWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvcGVydHktbGlzdGluZyAucmliYm9uXCIpO1xuXG4gIGZ1bmN0aW9uIHBhcmFsbGF4SXRlbShpdGVtLCBpbnRlbnNpdHkgPSAxMCkge1xuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB2aWV3cG9ydENlbnRlciA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyIC0gdmlld3BvcnRDZW50ZXI7XG5cbiAgICAgIC8vIEludmVydGVkIGRpcmVjdGlvblxuICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IChvZmZzZXQgLyB2aWV3cG9ydENlbnRlcikgKiBpbnRlbnNpdHk7XG5cbiAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBwYXJhbGxheEl0ZW0oaG9tZUhlcm9TVkcsIDI1KTsgLy8gbG93ZXIgPSBzdWJ0bGVyXG5cbiAgKCgpID0+IHtcbiAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbS1jYWxsb3V0IC5pbWctZ3JvdXBcIik7XG4gICAgaWYgKCFncm91cCkgcmV0dXJuO1xuXG4gICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy13cmFwcGVyXCIpKTtcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0VmlzaWJsZUltYWdlcygpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuZmlsdGVyKChpbWcpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbWcpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiICYmXG4gICAgICAgICAgc3R5bGUudmlzaWJpbGl0eSAhPT0gXCJoaWRkZW5cIiAmJlxuICAgICAgICAgIGltZy5vZmZzZXRXaWR0aCA+IDAgJiZcbiAgICAgICAgICBpbWcub2Zmc2V0SGVpZ2h0ID4gMFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgY29uc3QgdmlzaWJsZUltYWdlcyA9IGdldFZpc2libGVJbWFnZXMoKTtcbiAgICAgIGlmICghdmlzaWJsZUltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gdmlzaWJsZUltYWdlcy5tYXAoKGltZykgPT4gaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblxuICAgICAgY29uc3QgdG9wID0gTWF0aC5taW4oLi4ucmVjdHMubWFwKChyKSA9PiByLnRvcCkpO1xuICAgICAgY29uc3QgYm90dG9tID0gTWF0aC5tYXgoLi4ucmVjdHMubWFwKChyKSA9PiByLmJvdHRvbSkpO1xuICAgICAgY29uc3QgZ3JvdXBDZW50ZXIgPSAodG9wICsgYm90dG9tKSAvIDI7XG5cbiAgICAgIGNvbnN0IHZpZXdwb3J0Q2VudGVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGdyb3VwQ2VudGVyIC0gdmlld3BvcnRDZW50ZXI7XG5cbiAgICAgIGNvbnN0IGludGVuc2l0eSA9IDQwO1xuICAgICAgY29uc3QgcGFyYWxsYXhZID0gKG9mZnNldCAvIHZpZXdwb3J0Q2VudGVyKSAqIGludGVuc2l0eTtcblxuICAgICAgZ3JvdXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHstcGFyYWxsYXhZfXB4KWA7XG5cbiAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0VXBkYXRlKCkge1xuICAgICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgcmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgc2V0VGltZW91dChyZXF1ZXN0VXBkYXRlLCA1MCk7XG4gICAgICBzZXRUaW1lb3V0KHJlcXVlc3RVcGRhdGUsIDE1MCk7XG4gICAgICBzZXRUaW1lb3V0KHJlcXVlc3RVcGRhdGUsIDMwMCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCByZXF1ZXN0VXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXF1ZXN0VXBkYXRlKTtcbiAgICB9KTtcblxuICAgIGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIikuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpZiAoIWltZy5jb21wbGV0ZSkge1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVxdWVzdFVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgLy8gRm9vdGVyIGRyb3Bkb3duIGZ1bmN0aW9uYWxpdHlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdChcIi5mb290ZXItY29sdW1uLmRyb3Bkb3duIC5kcm9wZG93bi1idG5cIik7XG4gICAgaWYgKCFidG4pIHJldHVybjtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IGRyb3Bkb3duID0gYnRuLmNsb3Nlc3QoXCIuZm9vdGVyLWNvbHVtbi5kcm9wZG93blwiKTtcbiAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb3Rlci1jb2x1bW4uZHJvcGRvd25cIik7XG4gICAgY29uc3QgYXJyb3cgPSBidG4ucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcblxuICAgIGRyb3Bkb3ducy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBzdmcgPSBkLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tYnRuIHN2Z1wiKTtcbiAgICAgIGlmIChzdmcpIHN2Zy5jbGFzc0xpc3QucmVtb3ZlKFwicm90YXRlLWFycm93XCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGlmIChhcnJvdykgYXJyb3cuY2xhc3NMaXN0LmFkZChcInJvdGF0ZS1hcnJvd1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSByZXR1cm47XG5cbiAgICBjb25zdCBjbGlja2VkSW5zaWRlRHJvcGRvd24gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmZvb3Rlci1jb2x1bW4uZHJvcGRvd25cIik7XG4gICAgaWYgKGNsaWNrZWRJbnNpZGVEcm9wZG93bikgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb290ZXItY29sdW1uLmRyb3Bkb3duXCIpLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGNvbnN0IHN2ZyA9IGQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1idG4gc3ZnXCIpO1xuICAgICAgaWYgKHN2Zykgc3ZnLmNsYXNzTGlzdC5yZW1vdmUoXCJyb3RhdGUtYXJyb3dcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgaGVyb1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby1zZWFyY2hcIik7XG5cbiAgICBpZiAoaGVyb1NlYXJjaCkge1xuICAgICAgaGVyb1NlYXJjaC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC8vIEluc3RhZ3JhbSBNb2RhbFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2JpX3Bob3RvXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5zYmlfbGlnaHRib3ggJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdy5zYmlfbGlnaHRib3gub3BlbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICApIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHdpbmRvdy5zYmlfbGlnaHRib3gub3BlbihlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgLy8gSW5zdGEgRmVlZHNcbiAgZnVuY3Rpb24gaHVtYW5UaW1lRGlmZihmcm9tLCB0bykge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0byAtIGZyb20pO1xuXG4gICAgY29uc3QgbWludXRlID0gNjA7XG4gICAgY29uc3QgaG91ciA9IG1pbnV0ZSAqIDYwO1xuICAgIGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcbiAgICBjb25zdCB3ZWVrID0gZGF5ICogNztcbiAgICBjb25zdCBtb250aCA9IGRheSAqIDMwO1xuICAgIGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XG5cbiAgICBpZiAoZGlmZiA8IG1pbnV0ZSkgcmV0dXJuIGAke2RpZmZ9c2A7XG4gICAgaWYgKGRpZmYgPCBob3VyKSByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8gbWludXRlKX0gbWludXRlc2A7XG4gICAgaWYgKGRpZmYgPCBkYXkpIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyBob3VyKX0gaG91cnNgO1xuICAgIGlmIChkaWZmIDwgd2VlaykgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvIGRheSl9IGRheXNgO1xuICAgIGlmIChkaWZmIDwgbW9udGgpIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyB3ZWVrKX0gd2Vla3NgO1xuICAgIGlmIChkaWZmIDwgeWVhcikgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvIG1vbnRoKX0gbW9udGhzYDtcbiAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8geWVhcil9eWA7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUluc3RhZ3JhbURhdGVzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2JpX2l0ZW1cIikuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZGF0YXNldC50aW1lYWdvRG9uZSkgcmV0dXJuO1xuICAgICAgY2FyZC5kYXRhc2V0LnRpbWVhZ29Eb25lID0gXCJ0cnVlXCI7XG5cbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IE51bWJlcihjYXJkLmRhdGFzZXQuZGF0ZSk7XG4gICAgICBjb25zdCB1c2VybmFtZUxpbmsgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc2JpX3VzZXJuYW1lIGFcIik7XG5cbiAgICAgIGlmICghdXNlcm5hbWVMaW5rIHx8ICF0aW1lc3RhbXApIHJldHVybjtcblxuICAgICAgY29uc3Qgbm93ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICBjb25zdCB0aW1lQWdvID0gaHVtYW5UaW1lRGlmZih0aW1lc3RhbXAsIG5vdyk7XG5cbiAgICAgIHVzZXJuYW1lTGluay5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYWZ0ZXJlbmRcIixcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwic2JpX3RpbWVhZ29cIj4ke3RpbWVBZ299IGFnbzwvc3Bhbj5gLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5SW5zdGFncmFtRGF0ZXMoKTtcblxuICBjb25zdCBmZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYl9pbnN0YWdyYW1cIik7XG5cbiAgaWYgKGZlZWQpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGFwcGx5SW5zdGFncmFtRGF0ZXMoKTtcbiAgICB9KTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZmVlZCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuICAvLyBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2JpLW1vZGFsXCIpO1xuICAvLyBjb25zdCBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2JpLW1vZGFsLWltZ1wiKTtcbiAgLy8gY29uc3QgbW9kYWxVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYmktbW9kYWwtdXNlclwiKTtcbiAgLy8gY29uc3QgbW9kYWxDYXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYmktbW9kYWwtY2FwdGlvblwiKTtcblxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNiaS1waG90b1wiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAvLyAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAvLyAgICAgbW9kYWxJbWcuc3JjID0gdGhpcy5kYXRhc2V0LmltZztcbiAgLy8gICAgIG1vZGFsVXNlci50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC51c2VyO1xuICAvLyAgICAgbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LmNhcHRpb247XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xuXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2JpLWNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyB9KTtcblxuICAvLyBkb2N1bWVudFxuICAvLyAgIC5xdWVyeVNlbGVjdG9yKFwiLnNiaS1tb2RhbC1iYWNrZHJvcFwiKVxuICAvLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyAgIH0pO1xuXG4gIC8vICAgY29uc3QgYXJyYW5nZVZpZXdpbmdUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgLy8gICAgIFwiLmpzLW9wZW4tdmlld2luZy1tb2RhbFwiLFxuICAvLyAgICk7XG4gIC8vICAgY29uc3QgYXJyYW5nZVZpZXdpbmdNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld2luZ01vZGFsXCIpO1xuICAvLyAgIGNvbnN0IGFycmFuZ2VWaWV3aW5nQ2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgLy8gICAgIFwiLmpzLWNsb3NlLXZpZXdpbmctbW9kYWxcIixcbiAgLy8gICApO1xuXG4gIC8vICAgaWYgKCFhcnJhbmdlVmlld2luZ1RyaWdnZXIgfHwgIWFycmFuZ2VWaWV3aW5nTW9kYWwpIHJldHVybjtcblxuICAvLyAgIGNvbnN0IG9wZW5BcnJhbmdlVmlld2luZ01vZGFsID0gKCkgPT4ge1xuICAvLyAgICAgYXJyYW5nZVZpZXdpbmdNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlblwiKTtcbiAgLy8gICAgIGFycmFuZ2VWaWV3aW5nTW9kYWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAvLyAgIH07XG5cbiAgLy8gICBjb25zdCBjbG9zZUFycmFuZ2VWaWV3aW5nTW9kYWwgPSAoKSA9PiB7XG4gIC8vICAgICBhcnJhbmdlVmlld2luZ01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAvLyAgICAgYXJyYW5nZVZpZXdpbmdNb2RhbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gIC8vICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgLy8gICB9O1xuXG4gIC8vICAgYXJyYW5nZVZpZXdpbmdUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgb3BlbkFycmFuZ2VWaWV3aW5nTW9kYWwoKTtcbiAgLy8gICB9KTtcblxuICAvLyAgIGFycmFuZ2VWaWV3aW5nQ2xvc2VCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAvLyAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUFycmFuZ2VWaWV3aW5nTW9kYWwpO1xuICAvLyAgIH0pO1xuXG4gIC8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gICAgIGlmIChcbiAgLy8gICAgICAgZS5rZXkgPT09IFwiRXNjYXBlXCIgJiZcbiAgLy8gICAgICAgYXJyYW5nZVZpZXdpbmdNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpXG4gIC8vICAgICApIHtcbiAgLy8gICAgICAgY2xvc2VBcnJhbmdlVmlld2luZ01vZGFsKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG5cbiAgZnVuY3Rpb24gdmFsdWF0aW9uRm9ybVN1Ym1pdCgpIHtcbiAgICAvLyBQb3AgdXBcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3Rjb2RlU3VibWl0XCIpO1xuICAgIGNvbnN0IHBvc3Rjb2RlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3Rjb2RlXCIpO1xuICAgIC8vIFdoeSBzZWxsIGhlcm9cbiAgICBjb25zdCBidXR0b25XaHlTZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0Y29kZVN1Ym1pdFdoeVNlbGxcIik7XG4gICAgY29uc3QgcG9zdGNvZGVXaHlTZWxsRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3Rjb2RlV2h5U2VsbFwiKTtcblxuICAgIC8vIFNoYXJlZFxuICAgIGNvbnN0IGFkZHJlc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfNF8zXCIpO1xuXG4gICAgaWYgKCFidXR0b24gfHwgIXBvc3Rjb2RlRmllbGQgfHwgIWFkZHJlc3NGaWVsZCkge1xuICAgICAgY29uc29sZS53YXJuKFwiTWlzc2luZyBlbGVtZW50cyAtIHJldHJ5aW5nLi4uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZHJlc3NGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gYWRkcmVzc0ZpZWxkLm9wdGlvbnNbYWRkcmVzc0ZpZWxkLnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgLy8gICBsZXQgZnVsbEFkZHJlc3MgPVxuICAgIC8vICAgICBzZWxlY3RlZE9wdGlvbj8uZGF0YXNldD8uZnVsbCB8fCBzZWxlY3RlZE9wdGlvbj8udGV4dENvbnRlbnQ7XG5cbiAgICAvLyAgIGNvbnN0IGJhY2t1cEFkZHJlc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNF80XCIpO1xuXG4gICAgLy8gICAvLyDwn5SlIGZhbGxiYWNrIGlmIG9wdGlvbiBpcyBlbXB0eSAvIHBsYWNlaG9sZGVyXG4gICAgLy8gICBpZiAoIWZ1bGxBZGRyZXNzIHx8IGZ1bGxBZGRyZXNzLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIC8vICAgICBmdWxsQWRkcmVzcyA9IGJhY2t1cEFkZHJlc3NGaWVsZD8udmFsdWUgfHwgXCJcIjtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgY29uc3QgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XzRfOVwiKTtcblxuICAgIC8vICAgaWYgKGhpZGRlbkZpZWxkKSB7XG4gICAgLy8gICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZnVsbEFkZHJlc3M7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICBmdW5jdGlvbiBzeW5jQWRkcmVzc1RvSGlkZGVuRmllbGQoZnVsbEFkZHJlc3MpIHtcbiAgICAgIGNvbnN0IGhpZGRlbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF80XzlcIik7XG4gICAgICBpZiAoaGlkZGVuRmllbGQpIHtcbiAgICAgICAgaGlkZGVuRmllbGQudmFsdWUgPSBmdWxsQWRkcmVzcyB8fCBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZHJlc3NGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gYWRkcmVzc0ZpZWxkLm9wdGlvbnNbYWRkcmVzc0ZpZWxkLnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICBsZXQgZnVsbEFkZHJlc3MgPVxuICAgICAgICBzZWxlY3RlZE9wdGlvbj8uZGF0YXNldD8uZnVsbCB8fCBzZWxlY3RlZE9wdGlvbj8udGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IGJhY2t1cEFkZHJlc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNF80XCIpO1xuXG4gICAgICBpZiAoIWZ1bGxBZGRyZXNzIHx8IGZ1bGxBZGRyZXNzLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICBmdWxsQWRkcmVzcyA9IGJhY2t1cEFkZHJlc3NGaWVsZD8udmFsdWUgfHwgXCJcIjtcbiAgICAgIH1cblxuICAgICAgc3luY0FkZHJlc3NUb0hpZGRlbkZpZWxkKGZ1bGxBZGRyZXNzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJhY2t1cEFkZHJlc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfNF80XCIpO1xuXG4gICAgYmFja3VwQWRkcmVzc0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZnVsbEFkZHJlc3MgPSBiYWNrdXBBZGRyZXNzRmllbGQ/LnZhbHVlO1xuXG4gICAgICBpZiAoIWZ1bGxBZGRyZXNzIHx8IGZ1bGxBZGRyZXNzLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICBmdWxsQWRkcmVzcyA9IGJhY2t1cEFkZHJlc3NGaWVsZD8udmFsdWUgfHwgXCJcIjtcbiAgICAgIH1cblxuICAgICAgc3luY0FkZHJlc3NUb0hpZGRlbkZpZWxkKGZ1bGxBZGRyZXNzKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIjcG9zdGNvZGVTdWJtaXRcIik7XG4gICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGZvcm1Gb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiNnZm9ybV93cmFwcGVyXzQgLmdmb3JtLWZvb3RlclwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZm9ybV93cmFwcGVyXzRcIik7XG5cbiAgICAgIGlmIChhZGRyZXNzRmllbGQpIHtcbiAgICAgICAgYWRkcmVzc0ZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgZm9ybUZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zdGNvZGUgPSBwb3N0Y29kZUZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghcG9zdGNvZGUpIHtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBwb3N0Y29kZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidmFsdWF0aW9uX3Bvc3Rjb2RlXCIsIHBvc3Rjb2RlKTtcblxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vcGNsczEuY3JhZnR5Y2xpY2tzLmNvLnVrL2pzb24vcmFwaWRhZGRyZXNzP2tleT04Yjc1OC0zMGQ0My00MWQ2ZC0wOWQ0ZCZwb3N0Y29kZT0ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0Y29kZSl9YCxcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCBmaXJzdCA9IGRhdGEudGhvcm91Z2hmYXJlcz8uWzBdO1xuICAgICAgICAgIGNvbnN0IHBvaW50cyA9IGZpcnN0Py5kZWxpdmVyeV9wb2ludHMgfHwgW107XG5cbiAgICAgICAgICBpZiAoIXBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTm8gYWRkcmVzc2VzIGZvdW5kXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN0cmVldCA9XG4gICAgICAgICAgICBgJHtmaXJzdC50aG9yb3VnaGZhcmVfbmFtZX0gJHtmaXJzdC50aG9yb3VnaGZhcmVfZGVzY3JpcHRvcn1gLnRyaW0oKTtcblxuICAgICAgICAgIGFkZHJlc3NGaWVsZC5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhZGRyZXNzPC9vcHRpb24+YDtcblxuICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lMSA9XG4gICAgICAgICAgICAgIGl0ZW0uYnVpbGRpbmdfbnVtYmVyIHx8IGl0ZW0ub3JnYW5pc2F0aW9uX25hbWUgfHwgXCJVbmtub3duXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmUyID0gc3RyZWV0O1xuXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGl0ZW0ub3JnYW5pc2F0aW9uX25hbWVcbiAgICAgICAgICAgICAgPyBgJHtpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lfSwgJHtzdHJlZXR9YFxuICAgICAgICAgICAgICA6IGAke2xpbmUxfSAke2xpbmUyfWA7XG5cbiAgICAgICAgICAgIC8vIG9wdGlvbi52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC8vICAgbGluZTEsXG4gICAgICAgICAgICAvLyAgIGxpbmUyLFxuICAgICAgICAgICAgLy8gICBmdWxsOiBsYWJlbCxcbiAgICAgICAgICAgIC8vICAgcmF3OiBpdGVtLFxuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udWRwcm47XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQubGluZTEgPSBsaW5lMTtcbiAgICAgICAgICAgIG9wdGlvbi5kYXRhc2V0LmxpbmUyID0gbGluZTI7XG4gICAgICAgICAgICBvcHRpb24uZGF0YXNldC5mdWxsID0gbGFiZWw7XG5cbiAgICAgICAgICAgIGFkZHJlc3NGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybUhlbHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1oZWxwZXJcIik7XG5cbiAgICBpZiAoZm9ybUhlbHBlcikge1xuICAgICAgZm9ybUhlbHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZF80XzQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfNFwiKTtcbiAgICAgICAgY29uc3QgZmllbGRfNF82ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWVsZF80XzZcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkXzRfNyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNF83XCIpO1xuICAgICAgICBjb25zdCBmaWVsZF80XzggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpZWxkXzRfOFwiKTtcblxuICAgICAgICBpZiAoZmllbGRfNF80ICYmIGZpZWxkXzRfNiAmJiBmaWVsZF80XzcgJiYgZmllbGRfNF84KSB7XG4gICAgICAgICAgZmllbGRfNF80LmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZpZWxkXzRfNi5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICBmaWVsZF80XzcuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgICAgZmllbGRfNF84LmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJ1dHRvbldoeVNlbGwpIHtcbiAgICAgIGJ1dHRvbldoeVNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIjcG9zdGNvZGVTdWJtaXRXaHlTZWxsXCIpO1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZm9ybV93cmFwcGVyXzRcIik7XG4gICAgICAgIC8vIGlmIChmb3JtKSB7XG4gICAgICAgIC8vICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGZvcm1Gb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdmb3JtLWZvb3RlclwiKTtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dmb3JtX3dyYXBwZXJfNFwiKTtcblxuICAgICAgICBpZiAoYWRkcmVzc0ZpZWxkKSB7XG4gICAgICAgICAgYWRkcmVzc0ZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIGZvcm1Gb290ZXIuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3N0Y29kZSA9IHBvc3Rjb2RlV2h5U2VsbEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKCFwb3N0Y29kZSkge1xuICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgcG9zdGNvZGVcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInZhbHVhdGlvbl9wb3N0Y29kZVwiLCBwb3N0Y29kZSk7XG5cbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICAgIGZldGNoKFxuICAgICAgICAgIGBodHRwczovL3BjbHMxLmNyYWZ0eWNsaWNrcy5jby51ay9qc29uL3JhcGlkYWRkcmVzcz9rZXk9OGI3NTgtMzBkNDMtNDFkNmQtMDlkNGQmcG9zdGNvZGU9JHtlbmNvZGVVUklDb21wb25lbnQocG9zdGNvZGUpfWAsXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IGRhdGEudGhvcm91Z2hmYXJlcz8uWzBdO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gZmlyc3Q/LmRlbGl2ZXJ5X3BvaW50cyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKCFwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwiTm8gYWRkcmVzc2VzIGZvdW5kXCIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0cmVldCA9XG4gICAgICAgICAgICAgIGAke2ZpcnN0LnRob3JvdWdoZmFyZV9uYW1lfSAke2ZpcnN0LnRob3JvdWdoZmFyZV9kZXNjcmlwdG9yfWAudHJpbSgpO1xuXG4gICAgICAgICAgICBhZGRyZXNzRmllbGQuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYWRkcmVzczwvb3B0aW9uPmA7XG5cbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgICAgICAgY29uc3QgbGluZTEgPVxuICAgICAgICAgICAgICAgIGl0ZW0uYnVpbGRpbmdfbnVtYmVyIHx8IGl0ZW0ub3JnYW5pc2F0aW9uX25hbWUgfHwgXCJVbmtub3duXCI7XG5cbiAgICAgICAgICAgICAgY29uc3QgbGluZTIgPSBzdHJlZXQ7XG5cbiAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lXG4gICAgICAgICAgICAgICAgPyBgJHtpdGVtLm9yZ2FuaXNhdGlvbl9uYW1lfSwgJHtzdHJlZXR9YFxuICAgICAgICAgICAgICAgIDogYCR7bGluZTF9ICR7bGluZTJ9YDtcblxuICAgICAgICAgICAgICAvLyBvcHRpb24udmFsdWUgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIC8vICAgbGluZTEsXG4gICAgICAgICAgICAgIC8vICAgbGluZTIsXG4gICAgICAgICAgICAgIC8vICAgZnVsbDogbGFiZWwsXG4gICAgICAgICAgICAgIC8vICAgcmF3OiBpdGVtLFxuICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnVkcHJuO1xuICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICAgICAgICAgICAgICBvcHRpb24uZGF0YXNldC5saW5lMSA9IGxpbmUxO1xuICAgICAgICAgICAgICBvcHRpb24uZGF0YXNldC5saW5lMiA9IGxpbmUyO1xuICAgICAgICAgICAgICBvcHRpb24uZGF0YXNldC5mdWxsID0gbGFiZWw7XG5cbiAgICAgICAgICAgICAgYWRkcmVzc0ZpZWxkLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWx1YXRpb25Gb3JtU3VibWl0KCk7XG5cbiAgZnVuY3Rpb24gc2V0VmFsdWF0aW9uTG9jYXRpb24oKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbHVhdGlvbkxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcImFkZHJlc3NcIik7XG5cbiAgICBpZiAoZWwgJiYgYWRkcmVzcykge1xuICAgICAgZWwudGV4dENvbnRlbnQgPSBkZWNvZGVVUklDb21wb25lbnQoYWRkcmVzcyk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2V0VmFsdWF0aW9uTG9jYXRpb24pO1xuXG4gIGpRdWVyeShkb2N1bWVudCkub24oXCJnZm9ybV9wb3N0X3JlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VmFsdWF0aW9uTG9jYXRpb24oKTtcbiAgfSk7XG5cbiAgLy8gZW5xdWlyeSBwb3B1cC9tb2RhbDpcblxuICBjb25zdCBlbnF1aXJ5TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVucXVpcnktbW9kYWxcIik7XG5cbiAgZnVuY3Rpb24gb3BlbkVucXVpcnlNb2RhbCgpIHtcbiAgICBlbnF1aXJ5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VFbnF1aXJ5TW9kYWwoKSB7XG4gICAgZW5xdWlyeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vcGVuRW5xdWlyeU1vZGFsID0gb3BlbkVucXVpcnlNb2RhbDtcbiAgd2luZG93LmNsb3NlRW5xdWlyeU1vZGFsID0gY2xvc2VFbnF1aXJ5TW9kYWw7XG5cbiAgaWYgKGVucXVpcnlNb2RhbCkge1xuICAgIGVucXVpcnlNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZW5xdWlyeU1vZGFsKSB7XG4gICAgICAgIGNsb3NlRW5xdWlyeU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZXQgVHJhY2tpbmcgQ29kZXNcbiAgZnVuY3Rpb24gc2V0VHJhY2tpbmdDb29raWUobmFtZSwgdmFsdWUsIGRheXMpIHtcbiAgICBsZXQgZXhwaXJlcyA9IFwiXCI7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhcmFtKHBhcmFtKSB7XG4gICAgbGV0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgcmV0dXJuIHVybFBhcmFtcy5nZXQocGFyYW0pO1xuICB9XG5cbiAgbGV0IGdjbGlkID0gZ2V0UGFyYW0oXCJnY2xpZFwiKTtcbiAgbGV0IGZiY2xpZCA9IGdldFBhcmFtKFwiZmJjbGlkXCIpO1xuICBsZXQgYWRkcmVzVVJMID0gZ2V0UGFyYW0oXCJhZGRyZXNzXCIpO1xuICBsZXQgcG9zdGNvZGUgPSBnZXRQYXJhbShcInBvc3Rjb2RlXCIpO1xuXG4gIGNvbnN0IGFkZHJlc3NfNV9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNV8xNVwiKTtcbiAgY29uc3QgcG9zdGNvZGVfNV8xNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmllbGRfNV8xNlwiKTtcbiAgY29uc3QgZm9ybV81X3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52YWx1YXRpb24tZm9ybSAudGl0bGUgaDFcIik7XG5cbiAgaWYgKCFhZGRyZXNVUkwpIHtcbiAgICBhZGRyZXNzXzVfSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBmb3JtXzVfdGl0bGUudGV4dENvbnRlbnQgPSBcIkFDSElFVkUgVEhFIEJFU1QgUFJJQ0UgV0lUSCBBU0hUT05TXCI7XG4gIH1cblxuICBpZiAoZ2NsaWQpIHNldFRyYWNraW5nQ29va2llKFwiZ2NsaWRcIiwgZ2NsaWQsIDMwKTtcbiAgaWYgKGZiY2xpZCkgc2V0VHJhY2tpbmdDb29raWUoXCJmYmNsaWRcIiwgZmJjbGlkLCAzMCk7XG59KTtcblxuLy8gR0YgaW5pdCBmb3IgcG9wIHVwIGZvcm1cblxualF1ZXJ5KGRvY3VtZW50KS5vbihcImdmb3JtX3Bvc3RfcmVuZGVyXCIsIGZ1bmN0aW9uIChldmVudCwgZm9ybUlkKSB7XG4gIGlmICh3aW5kb3cuZ2Zvcm0gJiYgdHlwZW9mIGdmb3JtSW5pdFNpbmdsZUZvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGdmb3JtSW5pdFNpbmdsZUZvcm0oZm9ybUlkKTtcbiAgfVxufSk7XG5cbmpRdWVyeShkb2N1bWVudCkub24oXCJnZm9ybV9wb3N0X3JlbmRlclwiLCBmdW5jdGlvbiAoZXZlbnQsIGZvcm1JZCkge1xuICBpZiAoZm9ybUlkID09IDUpIHtcbiAgICBjb25zdCAkZmllbGQgPSBqUXVlcnkoXCIjaW5wdXRfNV83XCIpO1xuXG4gICAgLy8gd2FpdCB1bnRpbCBkYXRlcGlja2VyIGlzIGFjdHVhbGx5IGluaXRpYWxpc2VkXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJGZpZWxkLmxlbmd0aCAmJiAkZmllbGQuaGFzQ2xhc3MoXCJoYXNEYXRlcGlja2VyXCIpKSB7XG4gICAgICAgICRmaWVsZC5kYXRlcGlja2VyKFwib3B0aW9uXCIsIFwibWluRGF0ZVwiLCAyKTtcbiAgICAgICAgJGZpZWxkLmRhdGVwaWNrZXIoXCJyZWZyZXNoXCIpO1xuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9hcHBcIjogMCxcblx0XCJjc3Mvc3R5bGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9zdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3Mvc3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2l0ZUhlYWRlckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZGVuSGVhZGVyQ2xhc3NOYW1lIiwibWVnYVBhbmVsc0NvbnRhaW5lckVsZW1lbnQiLCJtZWdhUGFuZWxFbGVtZW50U2VsZWN0b3IiLCJtZWdhVHJpZ2dlckVsZW1lbnRTZWxlY3RvciIsIm9wZW5OYXZJdGVtQ2xhc3NOYW1lIiwib3BlblRyaWdnZXJBcmlhQXR0cmlidXRlTmFtZSIsImFsd2F5c1Nob3dIZWFkZXJXaXRoaW5Ub3BQaXhlbHMiLCJzY3JvbGxKaXR0ZXJUaHJlc2hvbGRQaXhlbHMiLCJwcmV2aW91c1Njcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaXNTY3JvbGxVcGRhdGVTY2hlZHVsZWQiLCJmaXJzdFNlY3Rpb25BZnRlckhlYWRlciIsIm5leHRFbGVtZW50U2libGluZyIsImNhblVzZVRyYW5zcGFyZW50SGVhZGVyIiwidGFnTmFtZSIsInNldFBhZ2VUb3BPZmZzZXRUb0hlYWRlckhlaWdodCIsImhlYWRlckhlaWdodFBpeGVscyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjb25jYXQiLCJzaG93SGVhZGVyIiwic2Nyb2xsUG9zaXRpb24iLCJyZW1vdmUiLCJhZGQiLCJoaWRlSGVhZGVyIiwiY2xvc2VNZWdhUGFuZWxzIiwibWVnYVBhbmVsRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBhbmVsRWxlbWVudCIsImhpZGRlbiIsIm1lZ2FUcmlnZ2VyRWxlbWVudHMiLCJ0cmlnZ2VyRWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlzQW55TWVnYVBhbmVsT3BlbiIsImFwcGx5SGVhZGVyVmlzaWJpbGl0eUZyb21TY3JvbGxQb3NpdGlvbiIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsRGVsdGFZIiwiTWF0aCIsImFicyIsImlzTWVnYU1lbnVDdXJyZW50bHlPcGVuIiwiaXNVc2VyU2Nyb2xsaW5nRG93biIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhc3NpdmUiLCJzdGlja3kiLCJUT1BfT0ZGU0VUIiwic3BhY2VyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJzdGlja3lTdGFydFkiLCJyZWNhbGMiLCJ3YXNGaXhlZCIsInJlY3QiLCJ0b3AiLCJ1cGRhdGUiLCJzaG91bGRGaXgiLCJvZmZzZXRIZWlnaHQiLCJpbml0IiwiYnVyZ2VyIiwibW9iaWxlTmF2IiwiZGVza3RvcEJ1cmdlck1lbnUiLCJoZWFkZXIiLCJibHVyT3ZlcmxheSIsImlzRGVza3RvcCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2V0SGVhZGVySGVpZ2h0VmFyIiwidXBkYXRlUGFnZUJsdXIiLCJtZWdhT3BlbiIsImRlc2t0b3BNZW51T3BlbiIsInRvZ2dsZSIsIm9wZW5NZW51IiwiX3dpbmRvdyRoaWRlTWVnYU1lbnUiLCJfd2luZG93IiwiaGlkZU1lZ2FNZW51IiwiY2FsbCIsIm92ZXJmbG93IiwiY2xvc2VNZW51IiwidG9nZ2xlTWVudSIsImlzT3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1heWJlQ2xvc2VEZXNrdG9wQnVyZ2VyIiwic2V0VGltZW91dCIsImJ1cmdlckhvdmVyZWQiLCJtZW51SG92ZXJlZCIsImtleSIsIl93aW5kb3ckaGlkZU1lZ2FNZW51MiIsIl93aW5kb3cyIiwibmF2IiwicGFuZWxzV3JhcCIsImdldEVsZW1lbnRCeUlkIiwiaG92ZXJab25lIiwidHJpZ2dlcnMiLCJwYW5lbHMiLCJoaWRlQWxsIiwiX3dpbmRvdyR1cGRhdGVQYWdlQmx1IiwiX3dpbmRvdzMiLCJwIiwidCIsInNob3dLZXkiLCJ0cmlnZ2VyRWwiLCJfd2luZG93JHVwZGF0ZVBhZ2VCbHUyIiwiX3dpbmRvdzQiLCJwYW5lbCIsIkNTUyIsImVzY2FwZSIsInRyaWdnZXIiLCJnZXRBdHRyaWJ1dGUiLCJtYXliZUNsb3NlIiwidGFyZ2V0Iiwib3BlblBhbmVsIiwiaXNUYXJnZXQiLCJkYXRhc2V0IiwibW9iaWxlUGFuZWwiLCJjbG9zZVBhbmVsIiwibGluayIsIm1lZ2EiLCJidG4iLCJPRkZTRVQiLCJNQVhfV0FJVCIsIlNURVAiLCJkZWNvZGVIYXNoIiwiaGFzaCIsImgiLCJzdGFydHNXaXRoIiwic2xpY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfdW51c2VkIiwiZmluZFRhcmdldCIsImlkIiwic2Nyb2xsVG9JZCIsImVsIiwieSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInNjcm9sbFdoZW5SZWFkeSIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInRpY2siLCJhIiwiY2xvc2VzdCIsInVybCIsIlVSTCIsImhyZWYiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0RXhpc3RzIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBlbmRpbmciLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNhcmRzIiwiY2FyZCIsImRlc2MiLCJ2ZXJ0aWNhbFBhdGgiLCJvdGhlckNhcmQiLCJvdGhlckRlc2MiLCJvdGhlclZlcnRpY2FsUGF0aCIsIm9wYWNpdHkiLCJidXR0b24iLCJmb3JtIiwicmVhbFN1Ym1pdCIsImNsaWNrIiwidG9nZ2xlQnRuIiwiZmFjZXRQYW5lbCIsInN2Z0ljb24iLCJ1cGRhdGVGYWNldENoZWNrYm94ZXMiLCJpY29uV3JhcHBlciIsInNwYW4iLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXkiLCJGV1AiLCJnYWxsZXJ5SW1hZ2VzIiwibGVuZ3RoIiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJ0aWNraW5nIiwidXBkYXRlUGFyYWxsYXgiLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiaW1hZ2UiLCJib3R0b20iLCJpbWFnZUNlbnRlciIsInZpZXdwb3J0Q2VudGVyIiwiZGlzdGFuY2VGcm9tQ2VudGVyIiwidHJhbnNsYXRlWSIsInRyYW5zZm9ybSIsInJlcXVlc3RUaWNrIiwiaG9tZUhlcm9TVkciLCJwYXJhbGxheEl0ZW0iLCJpdGVtIiwiaW50ZW5zaXR5IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwib2Zmc2V0Iiwib25TY3JvbGwiLCJncm91cCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImdldFZpc2libGVJbWFnZXMiLCJmaWx0ZXIiLCJpbWciLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIm9mZnNldFdpZHRoIiwidmlzaWJsZUltYWdlcyIsInJlY3RzIiwibWFwIiwibWluIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyIiwibWF4IiwiZ3JvdXBDZW50ZXIiLCJwYXJhbGxheFkiLCJyZXF1ZXN0VXBkYXRlIiwiY29tcGxldGUiLCJpbm5lcldpZHRoIiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcGRvd24iLCJkcm9wZG93bnMiLCJhcnJvdyIsImlzQWN0aXZlIiwiZCIsInN2ZyIsImNsaWNrZWRJbnNpZGVEcm9wZG93biIsImhlcm9TZWFyY2giLCJzYmlfbGlnaHRib3giLCJvcGVuIiwiaHVtYW5UaW1lRGlmZiIsInRvIiwiZGlmZiIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJ3ZWVrIiwibW9udGgiLCJ5ZWFyIiwiZmxvb3IiLCJhcHBseUluc3RhZ3JhbURhdGVzIiwidGltZWFnb0RvbmUiLCJ0aW1lc3RhbXAiLCJOdW1iZXIiLCJkYXRlIiwidXNlcm5hbWVMaW5rIiwidGltZUFnbyIsImluc2VydEFkamFjZW50SFRNTCIsImZlZWQiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwidmFsdWF0aW9uRm9ybVN1Ym1pdCIsInBvc3Rjb2RlRmllbGQiLCJidXR0b25XaHlTZWxsIiwicG9zdGNvZGVXaHlTZWxsRmllbGQiLCJhZGRyZXNzRmllbGQiLCJjb25zb2xlIiwid2FybiIsInN5bmNBZGRyZXNzVG9IaWRkZW5GaWVsZCIsImZ1bGxBZGRyZXNzIiwiaGlkZGVuRmllbGQiLCJ2YWx1ZSIsIl9zZWxlY3RlZE9wdGlvbiRkYXRhcyIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJmdWxsIiwidGV4dENvbnRlbnQiLCJiYWNrdXBBZGRyZXNzRmllbGQiLCJ0cmltIiwiZm9ybUZvb3RlciIsImZvcm1XcmFwcGVyIiwicG9zdGNvZGUiLCJhbGVydCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiX2RhdGEkdGhvcm91Z2hmYXJlcyIsImZpcnN0IiwidGhvcm91Z2hmYXJlcyIsInBvaW50cyIsImRlbGl2ZXJ5X3BvaW50cyIsInN0cmVldCIsInRob3JvdWdoZmFyZV9uYW1lIiwidGhvcm91Z2hmYXJlX2Rlc2NyaXB0b3IiLCJvcHRpb24iLCJsaW5lMSIsImJ1aWxkaW5nX251bWJlciIsIm9yZ2FuaXNhdGlvbl9uYW1lIiwibGluZTIiLCJsYWJlbCIsInVkcHJuIiwiZXJyIiwiZXJyb3IiLCJmb3JtSGVscGVyIiwiZmllbGRfNF80IiwiZmllbGRfNF82IiwiZmllbGRfNF83IiwiZmllbGRfNF84IiwiX2RhdGEkdGhvcm91Z2hmYXJlczIiLCJzZXRWYWx1YXRpb25Mb2NhdGlvbiIsImFkZHJlc3MiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJqUXVlcnkiLCJvbiIsImVucXVpcnlNb2RhbCIsIm9wZW5FbnF1aXJ5TW9kYWwiLCJjbG9zZUVucXVpcnlNb2RhbCIsInNldFRyYWNraW5nQ29va2llIiwibmFtZSIsImRheXMiLCJleHBpcmVzIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImNvb2tpZSIsImdldFBhcmFtIiwicGFyYW0iLCJ1cmxQYXJhbXMiLCJnY2xpZCIsImZiY2xpZCIsImFkZHJlc1VSTCIsImFkZHJlc3NfNV9JbnB1dCIsInBvc3Rjb2RlXzVfMTYiLCJmb3JtXzVfdGl0bGUiLCJldmVudCIsImZvcm1JZCIsImdmb3JtIiwiZ2Zvcm1Jbml0U2luZ2xlRm9ybSIsIiRmaWVsZCIsImhhc0NsYXNzIiwiZGF0ZXBpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=
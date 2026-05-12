document.addEventListener("DOMContentLoaded", function () {
  // ===
  //Sticky scroll navigation
  // === //

  // Sticky header: shows when scrolling up, hides when scrolling down
  (() => {
    if (
      document.body.classList.contains("single-property") ||
      document.body.classList.contains("single-blog-posts")
    ) {
      return;
    }

    const siteHeaderElement = document.querySelector("header");
    if (!siteHeaderElement) return;

    const hiddenHeaderClassName = "header--hidden";

    const megaPanelsContainerElement = document.querySelector("#mega-panels");
    const megaPanelElementSelector = "[data-mega-panel]";
    const megaTriggerElementSelector = "[data-mega]";

    const openNavItemClassName = "is-mega-open";
    const openTriggerAriaAttributeName = "aria-expanded";

    const alwaysShowHeaderWithinTopPixels = 20;
    const scrollJitterThresholdPixels = 4;

    let previousScrollY = window.scrollY || 0;
    let isScrollUpdateScheduled = false;

    const firstSectionAfterHeader = siteHeaderElement.nextElementSibling;
    const canUseTransparentHeader =
      firstSectionAfterHeader &&
      firstSectionAfterHeader.tagName === "SECTION" &&
      !firstSectionAfterHeader.classList.contains("bg-off-white") &&
      !firstSectionAfterHeader.classList.contains("bg-white");

    function setPageTopOffsetToHeaderHeight() {
      const headerHeightPixels =
        siteHeaderElement.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--fixed-header-height",
        `${headerHeightPixels}px`,
      );
    }

    function showHeader() {
      const scrollPosition = window.scrollY;

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
        const megaPanelElements = megaPanelsContainerElement.querySelectorAll(
          megaPanelElementSelector,
        );
        megaPanelElements.forEach((panelElement) => {
          panelElement.hidden = true;
        });
      }

      const megaTriggerElements = document.querySelectorAll(
        megaTriggerElementSelector,
      );
      megaTriggerElements.forEach((triggerElement) => {
        triggerElement.classList.remove(openNavItemClassName);

        if (triggerElement.hasAttribute(openTriggerAriaAttributeName)) {
          triggerElement.setAttribute(openTriggerAriaAttributeName, "false");
        }
      });
    }

    function isAnyMegaPanelOpen() {
      if (!megaPanelsContainerElement) return false;
      return !!megaPanelsContainerElement.querySelector(
        `${megaPanelElementSelector}:not([hidden])`,
      );
    }

    function applyHeaderVisibilityFromScrollPosition() {
      const currentScrollY = window.scrollY || 0;
      const scrollDeltaY = currentScrollY - previousScrollY;

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

      const isMegaMenuCurrentlyOpen = isAnyMegaPanelOpen();
      if (isMegaMenuCurrentlyOpen) {
        showHeader();
        closeMegaPanels();
        previousScrollY = currentScrollY;
        isScrollUpdateScheduled = false;
        return;
      }

      const isUserScrollingDown = scrollDeltaY > 0;

      closeMegaPanels();

      if (isUserScrollingDown) hideHeader();
      else showHeader();

      previousScrollY = currentScrollY;
      isScrollUpdateScheduled = false;
    }

    setPageTopOffsetToHeaderHeight();
    showHeader();

    window.addEventListener("resize", setPageTopOffsetToHeaderHeight);
    new ResizeObserver(setPageTopOffsetToHeaderHeight).observe(
      siteHeaderElement,
    );

    window.addEventListener(
      "scroll",
      () => {
        if (isScrollUpdateScheduled) return;
        isScrollUpdateScheduled = true;
        window.requestAnimationFrame(applyHeaderVisibilityFromScrollPosition);
      },
      { passive: true },
    );
  })();

  // Sticky "lock to top" for your new wrapper:
  // <div class="sticky-controls"> ...elements you want sticking... </div>

  (() => {
    const sticky = document.querySelector(".sticky-controls");
    if (!sticky) return;

    // If you have a fixed site header, set this to its height (e.g. 80)
    const TOP_OFFSET = 0;

    // Spacer prevents layout jump when sticky becomes fixed
    const spacer = document.createElement("div");
    spacer.className = "sticky-controls-spacer";
    sticky.parentNode.insertBefore(spacer, sticky);

    // Capture the point at which the wrapper should become fixed
    // (absolute position in the document)
    let stickyStartY = 0;

    const recalc = () => {
      // if currently fixed, temporarily remove to measure natural position
      const wasFixed = sticky.classList.contains("is-fixed");
      if (wasFixed) {
        sticky.classList.remove("is-fixed");
        spacer.classList.remove("is-active");
        spacer.style.height = "";
      }

      const rect = sticky.getBoundingClientRect();
      stickyStartY = rect.top + window.scrollY - TOP_OFFSET;

      // restore state after measuring
      if (wasFixed) update();
    };

    const update = () => {
      const shouldFix = window.scrollY >= stickyStartY;

      if (shouldFix && !sticky.classList.contains("is-fixed")) {
        spacer.style.height = `${sticky.offsetHeight}px`;
        spacer.classList.add("is-active");
        sticky.classList.add("is-fixed");
      } else if (!shouldFix && sticky.classList.contains("is-fixed")) {
        sticky.classList.remove("is-fixed");
        spacer.classList.remove("is-active");
        spacer.style.height = "";
      }
    };

    // Run once DOM/layout is ready
    const init = () => {
      recalc();
      update();
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", () => {
      recalc();
      update();
    });

    // If fonts/images shift layout, this helps lock it in
    window.addEventListener("load", init);

    // Initial
    init();
  })();

  (() => {
    const burger = document.querySelector(".burger-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const desktopBurgerMenu = document.querySelector(".desktop-burger-menu");
    const header = document.querySelector("header");
    const blurOverlay = document.querySelector(".page-blur-overlay");

    if (!burger || !mobileNav || !header) return;

    const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

    const setHeaderHeightVar = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`,
      );
    };

    const updatePageBlur = () => {
      if (!blurOverlay || !isDesktop()) {
        blurOverlay?.classList.remove("is-active");
        return;
      }

      const megaOpen = header.classList.contains("mega-open");
      const desktopMenuOpen = desktopBurgerMenu?.classList.contains("nav-open");

      blurOverlay.classList.toggle("is-active", megaOpen || desktopMenuOpen);
    };

    const openMenu = () => {
      window.hideMegaMenu?.();

      burger.classList.add("open");
      mobileNav.classList.add("nav-open");
      desktopBurgerMenu?.classList.add("nav-open");
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

    const closeMenu = () => {
      burger.classList.remove("open");
      mobileNav.classList.remove("nav-open");
      desktopBurgerMenu?.classList.remove("nav-open");
      header.classList.remove("nav-open");
      document.body.classList.remove("nav-open");

      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      burger.setAttribute("aria-label", "Open menu");

      document.body.style.overflow = "";

      setHeaderHeightVar();
      updatePageBlur();
    };

    const toggleMenu = () => {
      const isOpen = mobileNav.classList.contains("nav-open");
      isOpen ? closeMenu() : openMenu();
    };

    burger.addEventListener("click", (e) => {
      if (isDesktop()) return;
      e.preventDefault();
      toggleMenu();
    });

    burger.addEventListener("mouseenter", () => {
      if (!isDesktop()) return;
      openMenu();
    });

    burger.addEventListener("focus", () => {
      if (!isDesktop()) return;
      openMenu();
    });

    const maybeCloseDesktopBurger = () => {
      window.setTimeout(() => {
        if (!isDesktop()) return;

        const burgerHovered = burger.matches(":hover");
        const menuHovered = desktopBurgerMenu?.matches(":hover");

        if (!burgerHovered && !menuHovered) {
          closeMenu();
        }
      }, 120);
    };

    burger.addEventListener("mouseleave", maybeCloseDesktopBurger);
    desktopBurgerMenu?.addEventListener("mouseleave", maybeCloseDesktopBurger);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("nav-open")) {
        closeMenu();
      }
    });

    blurOverlay?.addEventListener("click", () => {
      window.hideMegaMenu?.();
      closeMenu();
    });

    window.addEventListener("resize", () => {
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

  (() => {
    const header = document.querySelector("header");
    const nav = document.querySelector(".menu-primary");
    const panelsWrap = document.getElementById("mega-panels");
    const hoverZone = document.querySelector(".nav-wrap");

    if (!header || !nav || !panelsWrap || !hoverZone) return;

    const triggers = nav.querySelectorAll("a[data-mega]");
    const panels = panelsWrap.querySelectorAll(".mega-panel[data-mega-panel]");

    const hideAll = () => {
      panels.forEach((p) => (p.hidden = true));
      triggers.forEach((t) => t.setAttribute("aria-expanded", "false"));
      panelsWrap.classList.remove("is-open");
      header.classList.remove("mega-open");
      window.updatePageBlur?.();
    };

    const showKey = (key, triggerEl) => {
      const panel = panelsWrap.querySelector(
        `.mega-panel[data-mega-panel="${CSS.escape(key)}"]`,
      );
      if (!panel) return;

      panels.forEach((p) => (p.hidden = p !== panel));
      triggers.forEach((t) =>
        t.setAttribute("aria-expanded", t === triggerEl ? "true" : "false"),
      );

      panelsWrap.classList.add("is-open");
      header.classList.add("mega-open");
      window.updatePageBlur?.();
    };

    triggers.forEach((trigger) => {
      const key = trigger.getAttribute("data-mega");
      if (!key) return;

      trigger.addEventListener("mouseenter", () => showKey(key, trigger));
      trigger.addEventListener("focus", () => showKey(key, trigger));
    });

    const maybeClose = () => {
      window.setTimeout(() => {
        if (!hoverZone.matches(":hover") && !panelsWrap.matches(":hover")) {
          hideAll();
        }
      }, 120);
    };

    hoverZone.addEventListener("mouseleave", maybeClose);
    panelsWrap.addEventListener("mouseleave", maybeClose);

    document.addEventListener("click", (e) => {
      if (!header.contains(e.target)) hideAll();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hideAll();
    });

    window.hideMegaMenu = hideAll;
    hideAll();
  })();

  // ===
  // Mobile mega menu
  // === //

  (() => {
    const nav = document.querySelector(".mobile-nav");
    const panels = document.querySelectorAll(".mobile-panel");

    if (!nav) return;

    const openPanel = (key) => {
      panels.forEach((p) => {
        const isTarget = p.dataset.mobilePanel === key;
        p.hidden = !isTarget;
        p.classList.toggle("is-active", isTarget);
      });

      nav.classList.add("panel-open");
    };

    const closePanel = () => {
      panels.forEach((p) => {
        p.hidden = true;
        p.classList.remove("is-active");
      });
      nav.classList.remove("panel-open");
    };

    // open panel when clicking top-level item
    nav
      .querySelectorAll(".menu-primary > li > a[data-mega]")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          openPanel(link.dataset.mega);
        });
      });

    // back buttons
    nav
      .querySelectorAll(".mobile-panel__back")
      .forEach((btn) => btn.addEventListener("click", closePanel));
  })();

  (() => {
    const OFFSET = 0; // sticky header height
    const MAX_WAIT = 2000; // ms to wait for element to appear
    const STEP = 50; // ms polling interval

    const decodeHash = (hash) => {
      if (!hash) return "";
      const h = hash.startsWith("#") ? hash.slice(1) : hash;
      try {
        return decodeURIComponent(h);
      } catch {
        return h;
      }
    };

    const findTarget = (id) =>
      document.getElementById(id) ||
      document.querySelector(`[name="${CSS.escape(id)}"]`);

    const scrollToId = (id) => {
      const el = findTarget(id);
      if (!el) return false;

      const y = el.getBoundingClientRect().top + window.pageYOffset - OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    };

    const scrollWhenReady = (id) => {
      const start = Date.now();
      const tick = () => {
        if (scrollToId(id)) return;
        if (Date.now() - start >= MAX_WAIT) return;
        setTimeout(tick, STEP);
      };
      tick();
    };

    // Intercept anchor clicks (same-origin)
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href*="#"]');
      if (!a) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const id = decodeHash(url.hash);
      if (!id) return;

      // If navigating to a different path, let navigation happen,
      // but remember the target for after load.
      if (url.pathname !== window.location.pathname) {
        sessionStorage.setItem("pendingAnchor", id);
        return;
      }

      // Same page: smooth scroll now
      const targetExists = !!findTarget(id);
      if (!targetExists) return; // allow default if it doesn't exist

      e.preventDefault();
      history.pushState(null, "", "#" + encodeURIComponent(id));
      scrollWhenReady(id);
    });

    // On load: handle hash or pending cross-page anchor
    window.addEventListener("load", () => {
      const pending = sessionStorage.getItem("pendingAnchor");
      if (pending) {
        sessionStorage.removeItem("pendingAnchor");
        scrollWhenReady(pending);
        return;
      }

      const id = decodeHash(window.location.hash);
      if (id) scrollWhenReady(id);
    });
  })();

  // ===
  // Team slide cards toggle
  // === //

  const cards = document.querySelectorAll(".team-slide-card");

  cards.forEach((card) => {
    const desc = card.querySelector(".description");
    const verticalPath = card.querySelector(".icon .vertical");

    if (!desc) return;

    card.addEventListener("click", () => {
      // Close others
      cards.forEach((otherCard) => {
        const otherDesc = otherCard.querySelector(".description");
        const otherVerticalPath = otherCard.querySelector(".icon .vertical");

        if (otherDesc && otherDesc !== desc)
          otherDesc.classList.remove("is-visible");
        if (otherVerticalPath && otherVerticalPath !== verticalPath) {
          otherVerticalPath.style.opacity = "1";
        }
      });

      // Toggle current
      desc.classList.toggle("is-visible");

      if (verticalPath) {
        verticalPath.style.opacity =
          verticalPath.style.opacity === "0" ? "1" : "0";
      }
    });
  });

  // ===
  // Custom Gravity Forms Submit
  // === //

  document.querySelectorAll(".custom-submit-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const form = button.closest("form");
      if (!form) return;

      const realSubmit = form.querySelector('input[type="submit"]');
      if (realSubmit) realSubmit.click();
    });
  });

  // ===
  // Facet Custom Filter
  // === //

  const toggleBtn = document.getElementById("toggle-facet");
  const facetPanel = document.getElementById("facet-panel");

  if (toggleBtn && facetPanel) {
    toggleBtn.addEventListener("click", function () {
      toggleBtn.classList.toggle("active");
      facetPanel.classList.toggle("hidden");
    });
  }

  const svgIcon = `
    <svg class="facet-radio-selected-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="8.5" stroke="#000" fill="none"/>
      <path d="M12.47 5.43l-7 6.96" stroke="#24242d" stroke-linecap="round" fill="none"/>
      <path d="M5.5 5.41l6.96 7" stroke="#24242d" stroke-linecap="round" fill="none"/>
    </svg>
  `;

  function updateFacetCheckboxes() {
    document.querySelectorAll(".facetwp-checkbox").forEach((el) => {
      let iconWrapper = el.querySelector(".facet-radio-selected-icon");

      if (!iconWrapper) {
        const span = document.createElement("span");
        span.classList.add("facet-radio-selected-icon");
        span.innerHTML = svgIcon;
        el.appendChild(span);
        iconWrapper = span;
      }

      iconWrapper.style.display = el.classList.contains("checked")
        ? "inline-block"
        : "none";
    });
  }

  if (window.FWP) {
    document.addEventListener("facetwp-loaded", updateFacetCheckboxes);
  }

  (() => {
    const galleryImages = document.querySelectorAll(".property-gallery__img");
    if (!galleryImages.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let ticking = false;

    function updateParallax() {
      const viewportHeight = window.innerHeight;

      galleryImages.forEach((image) => {
        const rect = image.getBoundingClientRect();

        // Skip if far outside viewport
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        // Progress through viewport: -1 to 1
        const imageCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter =
          (imageCenter - viewportCenter) / viewportHeight;

        // Keep it subtle
        const translateY = distanceFromCenter * -18;

        image.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.06)`;
      });

      ticking = false;
    }

    function requestTick() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    updateParallax();
  })();

  // Parallax Items
  // Initialise Instance
  const homeHeroSVG = document.querySelector(".property-listing .ribbon");

  function parallaxItem(item, intensity = 10) {
    if (!item) return;

    function update() {
      const rect = item.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      const offset = rect.top + rect.height / 2 - viewportCenter;

      // Inverted direction
      const translateY = (offset / viewportCenter) * intensity;

      item.style.transform = `translateY(${translateY}px)`;
    }

    function onScroll() {
      requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll);
    update();
  }

  parallaxItem(homeHeroSVG, 25); // lower = subtler

  (() => {
    const group = document.querySelector(".team-callout .img-group");
    if (!group) return;

    const images = Array.from(group.querySelectorAll(".img-wrapper"));
    let ticking = false;

    function getVisibleImages() {
      return images.filter((img) => {
        const style = window.getComputedStyle(img);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          img.offsetWidth > 0 &&
          img.offsetHeight > 0
        );
      });
    }

    function update() {
      const visibleImages = getVisibleImages();
      if (!visibleImages.length) {
        ticking = false;
        return;
      }

      const rects = visibleImages.map((img) => img.getBoundingClientRect());

      const top = Math.min(...rects.map((r) => r.top));
      const bottom = Math.max(...rects.map((r) => r.bottom));
      const groupCenter = (top + bottom) / 2;

      const viewportCenter = window.innerHeight / 2;
      const offset = groupCenter - viewportCenter;

      const intensity = 40;
      const parallaxY = (offset / viewportCenter) * intensity;

      group.style.transform = `translateY(${-parallaxY}px)`;

      ticking = false;
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("load", () => {
      requestUpdate();
      setTimeout(requestUpdate, 50);
      setTimeout(requestUpdate, 150);
      setTimeout(requestUpdate, 300);
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    });

    group.querySelectorAll("img").forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", requestUpdate);
      }
    });
  })();

  // Footer dropdown functionality
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".footer-column.dropdown .dropdown-btn");
    if (!btn) return;

    if (window.innerWidth >= 1024) return;

    e.preventDefault();
    e.stopPropagation();

    const dropdown = btn.closest(".footer-column.dropdown");
    const dropdowns = document.querySelectorAll(".footer-column.dropdown");
    const arrow = btn.querySelector("svg");
    const isActive = dropdown.classList.contains("active");

    dropdowns.forEach((d) => {
      d.classList.remove("active");
      const svg = d.querySelector(".dropdown-btn svg");
      if (svg) svg.classList.remove("rotate-arrow");
    });

    if (!isActive) {
      dropdown.classList.add("active");
      if (arrow) arrow.classList.add("rotate-arrow");
    }
  });

  document.addEventListener("click", function (e) {
    if (window.innerWidth >= 1024) return;

    const clickedInsideDropdown = e.target.closest(".footer-column.dropdown");
    if (clickedInsideDropdown) return;

    document.querySelectorAll(".footer-column.dropdown").forEach((d) => {
      d.classList.remove("active");
      const svg = d.querySelector(".dropdown-btn svg");
      if (svg) svg.classList.remove("rotate-arrow");
    });
  });

  window.addEventListener("load", () => {
    const heroSearch = document.querySelector(".hero-search");

    if (heroSearch) {
      heroSearch.style.opacity = 1;
    }
  });

  // // Instagram Modal
  window.addEventListener("load", function () {
    document.querySelectorAll(".sbi_photo").forEach((el) => {
      if (
        window.sbi_lightbox &&
        typeof window.sbi_lightbox.open === "function"
      ) {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          window.sbi_lightbox.open(el);
        });
      }
    });
  });
  // Insta Feeds
  function humanTimeDiff(from, to) {
    const diff = Math.abs(to - from);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diff < minute) return `${diff}s`;
    if (diff < hour) return `${Math.floor(diff / minute)} minutes`;
    if (diff < day) return `${Math.floor(diff / hour)} hours`;
    if (diff < week) return `${Math.floor(diff / day)} days`;
    if (diff < month) return `${Math.floor(diff / week)} weeks`;
    if (diff < year) return `${Math.floor(diff / month)} months`;
    return `${Math.floor(diff / year)}y`;
  }

  function applyInstagramDates() {
    document.querySelectorAll(".sbi_item").forEach((card) => {
      if (card.dataset.timeagoDone) return;
      card.dataset.timeagoDone = "true";

      const timestamp = Number(card.dataset.date);
      const usernameLink = card.querySelector(".sbi_username a");

      if (!usernameLink || !timestamp) return;

      const now = Math.floor(Date.now() / 1000);
      const timeAgo = humanTimeDiff(timestamp, now);

      usernameLink.insertAdjacentHTML(
        "afterend",
        `<span class="sbi_timeago">${timeAgo} ago</span>`,
      );
    });
  }

  applyInstagramDates();

  const feed = document.querySelector("#sb_instagram");

  if (feed) {
    const observer = new MutationObserver(() => {
      applyInstagramDates();
    });

    observer.observe(feed, {
      childList: true,
      subtree: true,
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
    const button = document.querySelector("#postcodeSubmit");
    const postcodeField = document.querySelector("#postcode");
    // Why sell hero
    const buttonWhySell = document.querySelector("#postcodeSubmitWhySell");
    const postcodeWhySellField = document.querySelector("#postcodeWhySell");

    // Shared
    const addressField = document.querySelector("#input_4_3");

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
      const hiddenField = document.querySelector("#input_4_9");
      if (hiddenField) {
        hiddenField.value = fullAddress || "";
      }
    }

    addressField.addEventListener("change", function () {
      const selectedOption = addressField.options[addressField.selectedIndex];

      let fullAddress =
        selectedOption?.dataset?.full || selectedOption?.textContent;

      const backupAddressField = document.querySelector("#field_4_4");

      if (!fullAddress || fullAddress.trim() === "") {
        fullAddress = backupAddressField?.value || "";
      }

      syncAddressToHiddenField(fullAddress);
    });

    const backupAddressField = document.querySelector("#input_4_4");

    backupAddressField.addEventListener("input", function () {
      let fullAddress = backupAddressField?.value;

      if (!fullAddress || fullAddress.trim() === "") {
        fullAddress = backupAddressField?.value || "";
      }

      syncAddressToHiddenField(fullAddress);
    });

    button.addEventListener("click", function (e) {
      const button = e.target.closest("#postcodeSubmit");
      if (!button) return;

      e.preventDefault();

      const formFooter = document.querySelector(
        "#gform_wrapper_4 .gform-footer",
      );
      const formWrapper = document.querySelector("#gform_wrapper_4");

      if (addressField) {
        addressField.classList.add("is-visible");
        formWrapper.classList.add("is-visible");
        formFooter.classList.add("is-visible");
      }

      const postcode = postcodeField.value.trim();
      if (!postcode) {
        alert("Enter postcode");
        return;
      }

      button.classList.add("loading");

      fetch(
        `https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=8b758-30d43-41d6d-09d4d&postcode=${encodeURIComponent(postcode)}`,
      )
        .then((res) => res.json())
        .then((data) => {
          const first = data.thoroughfares?.[0];
          const points = first?.delivery_points || [];

          if (!points.length) {
            alert("No addresses found");
            return;
          }

          const street =
            `${first.thoroughfare_name} ${first.thoroughfare_descriptor}`.trim();

          addressField.innerHTML = `<option value="">Select address</option>`;

          points.forEach((item) => {
            const option = document.createElement("option");

            const line1 =
              item.building_number || item.organisation_name || "Unknown";

            const line2 = street;

            const label = item.organisation_name
              ? `${item.organisation_name}, ${street}`
              : `${line1} ${line2}`;

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
        })
        .catch((err) => {
          button.classList.remove("loading");
          console.error(err);
        });
    });

    const formHelper = document.querySelector(".form-helper");

    if (formHelper) {
      formHelper.addEventListener("click", () => {
        const field_4_4 = document.querySelector("#field_4_4");
        const field_4_6 = document.querySelector("#field_4_6");
        const field_4_7 = document.querySelector("#field_4_7");
        const field_4_8 = document.querySelector("#field_4_8");

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
        const button = e.target.closest("#postcodeSubmitWhySell");
        if (!button) return;

        e.preventDefault();

        // const form = document.querySelector("#gform_wrapper_4");
        // if (form) {
        //   form.classList.add("is-visible");
        // }

        const formFooter = document.querySelector(".gform-footer");
        const formWrapper = document.querySelector("#gform_wrapper_4");

        if (addressField) {
          addressField.classList.add("is-visible");
          formWrapper.classList.add("is-visible");
          formFooter.classList.add("is-visible");
        }

        const postcode = postcodeWhySellField.value.trim();
        if (!postcode) {
          alert("Enter postcode");
          return;
        }

        button.classList.add("loading");

        fetch(
          `https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=8b758-30d43-41d6d-09d4d&postcode=${encodeURIComponent(postcode)}`,
        )
          .then((res) => res.json())
          .then((data) => {
            const first = data.thoroughfares?.[0];
            const points = first?.delivery_points || [];

            if (!points.length) {
              alert("No addresses found");
              return;
            }

            const street =
              `${first.thoroughfare_name} ${first.thoroughfare_descriptor}`.trim();

            addressField.innerHTML = `<option value="">Select address</option>`;

            points.forEach((item) => {
              const option = document.createElement("option");

              const line1 =
                item.building_number || item.organisation_name || "Unknown";

              const line2 = street;

              const label = item.organisation_name
                ? `${item.organisation_name}, ${street}`
                : `${line1} ${line2}`;

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
          })
          .catch((err) => {
            button.classList.remove("loading");
            console.error(err);
          });
      });
    }
  }

  valuationFormSubmit();

  function setValuationLocation() {
    const el = document.getElementById("valuationLocation");
    const address = new URLSearchParams(window.location.search).get("address");

    if (el && address) {
      el.textContent = decodeURIComponent(address);
    }
  }

  document.addEventListener("DOMContentLoaded", setValuationLocation);

  jQuery(document).on("gform_post_render", function () {
    setValuationLocation();
  });

  // enquiry popup/modal:

  const enquiryModal = document.getElementById("enquiry-modal");

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
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  let gclid = getParam("gclid");
  let fbclid = getParam("fbclid");

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
    const $field = jQuery("#input_5_7");

    // wait until datepicker is actually initialised
    setTimeout(function () {
      if ($field.length && $field.hasClass("hasDatepicker")) {
        $field.datepicker("option", "minDate", 2);
        $field.datepicker("refresh");
      }
    }, 50);
  }
});

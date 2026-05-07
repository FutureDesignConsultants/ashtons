import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stats-swiper").forEach((el) => {
    const prevBtn = el.querySelector(".stats-swiper__prev");
    const nextBtn = el.querySelector(".stats-swiper__next");

    const swiper = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 600,

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },

      observer: true,
      observeParents: true,
      updateOnWindowResize: true,

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      },

      on: {
        init() {
          el.classList.add("is-ready");
        },
      },
    });

    window.addEventListener("load", () => {
      swiper.update();
    });
  });
  // ---------------------------------------
  // MOBILE NAV: property swipers in panels
  // ---------------------------------------
  const mobileNav = document.querySelector("#mobileNav");

  if (mobileNav) {
    const initMobilePropertySwiper = (swiperEl) => {
      if (!swiperEl || swiperEl.dataset.swiperInited === "1") return;

      const panel = swiperEl.closest(".mobile-panel");
      const nextBtn = panel?.querySelector(".mobile-property-nav__btn--next");
      const prevBtn = panel?.querySelector(".mobile-property-nav__btn--prev");

      const swiper = new Swiper(swiperEl, {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.4,
        spaceBetween: 16,
        watchOverflow: true,
        grabCursor: true,
        centeredSlidesBounds: true,
        roundLengths: true,

        ...(nextBtn && prevBtn
          ? { navigation: { nextEl: nextBtn, prevEl: prevBtn } }
          : {}),

        breakpoints: {
          360: { slidesPerView: 1.4, spaceBetween: 16 },
          480: { slidesPerView: 1.6, spaceBetween: 16 },
          640: { slidesPerView: 2.2, spaceBetween: 16 },
        },
      });

      swiperEl.dataset.swiperInited = "1";
      swiperEl._swiper = swiper;
    };

    const updateMobileSwipersInPanel = (panelEl) => {
      if (!panelEl) return;
      panelEl
        .querySelectorAll("[data-mobile-property-swiper]")
        .forEach((el) => {
          initMobilePropertySwiper(el);
          el._swiper?.update();
          el._swiper?.navigation?.update?.();
        });
    };

    const panelsWrap = mobileNav.querySelector("#mobile-panels");

    if (panelsWrap) {
      const setPanelActive = (panelKey) => {
        const panels = panelsWrap.querySelectorAll(".mobile-panel");
        let activePanel = null;

        panels.forEach((p) => {
          const match = p.dataset.mobilePanel === panelKey;
          p.classList.toggle("is-active", match);
          p.hidden = !match;
          if (match) activePanel = p;
        });

        mobileNav.classList.toggle("panel-open", !!activePanel);

        if (activePanel) {
          requestAnimationFrame(() => updateMobileSwipersInPanel(activePanel));
        }
      };

      const closePanels = () => {
        panelsWrap.querySelectorAll(".mobile-panel").forEach((p) => {
          p.classList.remove("is-active");
          p.hidden = true;
        });
        mobileNav.classList.remove("panel-open");
      };

      const slugify = (str) =>
        (str || "")
          .toLowerCase()
          .trim()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

      mobileNav.querySelectorAll(".menu-primary > li > a").forEach((a) => {
        a.addEventListener("click", (e) => {
          const key = slugify(a.textContent);
          const panel = panelsWrap.querySelector(
            `[data-mobile-panel="${key}"]`,
          );
          if (!panel) return; // normal link

          e.preventDefault();
          setPanelActive(key);
        });
      });

      mobileNav.querySelectorAll(".mobile-panel__back").forEach((btn) => {
        btn.addEventListener("click", () => closePanels());
      });

      document.addEventListener("click", (e) => {
        const burger = e.target.closest(".burger-btn");
        if (!burger) return;

        const isOpen = mobileNav.classList.contains("nav-open");
        if (!isOpen) closePanels();
      });
    }
  }

  // ---------------------------------------
  // HOMEPAGE HERO: existing toggles
  // ---------------------------------------
  // ---------------------------------------
  // HOMEPAGE HERO: existing toggles
  // ---------------------------------------
  const initHeroSwiper = (el) => {
    if (!el || el.dataset.swiperInited === "1") return;
    const rect = el.getBoundingClientRect();

    const nextBtn = el.querySelector(".property-swiper__next");
    const prevBtn = el.querySelector(".property-swiper__prev");

    const swiper = new Swiper(el, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.31,
      spaceBetween: 16,
      watchOverflow: true,
      grabCursor: true,

      // ✅ helps when inside hidden panels / layout changes
      observer: false,
      observeParents: false,
      updateOnWindowResize: true,
      watchSlidesProgress: true,

      ...(nextBtn && prevBtn
        ? { navigation: { nextEl: nextBtn, prevEl: prevBtn } }
        : {}),

      breakpoints: {
        640: { slidesPerView: 2.1, spaceBetween: 16 },
        1024: { slidesPerView: 3.1, spaceBetween: 20 },
        1280: { slidesPerView: 5.5, spaceBetween: 24 },
        1600: { slidesPerView: 6.5, spaceBetween: 32 },
      },
    });

    // ✅ update once after init
    requestAnimationFrame(() => {
      swiper.update();
      swiper.navigation?.update?.();
    });

    // ✅ update again as images load
    el.querySelectorAll("img").forEach((img) => {
      if (img.complete) return;
      img.addEventListener(
        "load",
        () => {
          swiper.update();
          swiper.navigation?.update?.();
        },
        { once: true },
      );
    });

    el.dataset.swiperInited = "1";
    el._swiper = swiper;
  };

  window.initHeroSwiper = initHeroSwiper;

  const updateHeroSwipersInPanel = (panel) => {
    panel.querySelectorAll(".property-swiper").forEach((el) => {
      initHeroSwiper(el);

      requestAnimationFrame(() => {
        el._swiper?.update();
        el._swiper?.navigation?.update?.();
      });

      setTimeout(() => {
        el._swiper?.update();
        el._swiper?.navigation?.update?.();
      }, 50);
    });
  };

  const waitForHeroImages = (swiperEl, swiperInstance) => {
    const imgs = Array.from(
      swiperEl.querySelectorAll(".swiper-slide img"),
    ).filter((img) => img.getAttribute("src"));

    if (!imgs.length) {
      swiperEl.classList.add("is-ready");
      return;
    }

    // Wait for at least the "visible" set (tweak number)
    const MIN_TO_SHOW = 6; // because you show up to ~6.5 slides at 1600px
    let loadedCount = 0;
    let resolved = false;

    const maybeReveal = () => {
      if (resolved) return;
      if (loadedCount >= Math.min(MIN_TO_SHOW, imgs.length)) {
        resolved = true;
        swiperEl.classList.add("is-ready");
        swiperInstance.update();
        swiperInstance.navigation?.update?.();
      }
    };

    const markLoaded = () => {
      loadedCount += 1;
      maybeReveal();
    };

    imgs.forEach((img) => {
      // If already cached
      if (img.complete && img.naturalWidth > 0) {
        markLoaded();
        return;
      }
      img.addEventListener("load", markLoaded, { once: true });
      img.addEventListener("error", markLoaded, { once: true }); // don't block forever
    });

    // Safety: reveal anyway after a short time so you never "hide forever"
    setTimeout(() => {
      if (!resolved) {
        swiperEl.classList.add("is-ready");
        swiperInstance.update();
        swiperInstance.navigation?.update?.();
      }
    }, 2000);
  };

  const markCardImagesLoaded = (root = document) => {
    root.querySelectorAll(".mega-card__media img").forEach((img) => {
      if (img.dataset.loaded === "1") return;

      const done = () => {
        img.classList.add("is-loaded");
        img.dataset.loaded = "1";
      };

      // already cached
      if (img.complete && img.naturalWidth > 0) {
        done();
        return;
      }

      img.addEventListener("load", done, { once: true });
      img.addEventListener(
        "error",
        () => {
          img.dataset.loaded = "1";
        },
        { once: true },
      );
    });
  };

  markCardImagesLoaded(document);

  // If you swap content in later (you already have a MutationObserver for results)
  // just call it after you re-init:
  // markCardImagesLoaded(resultsRoot);

  const waitForImages = async (root, { timeoutMs = 6000 } = {}) => {
    const imgs = Array.from(root.querySelectorAll("img")).filter(
      (img) => img.src,
    );

    if (!imgs.length) return;

    const loadPromises = imgs.map((img) => {
      // already loaded (cache)
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();

      return new Promise((resolve) => {
        const done = () => resolve();

        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true }); // don't block forever
      });
    });

    // Also wait for decode where supported (prevents “loaded but not painted”)
    const decodePromises = imgs.map((img) => {
      if (typeof img.decode !== "function") return Promise.resolve();
      // decode can reject; treat as non-fatal
      return img.decode().catch(() => {});
    });

    // Timeout safety so you never get stuck hidden
    await Promise.race([
      Promise.all([...loadPromises, ...decodePromises]),
      new Promise((resolve) => setTimeout(resolve, timeoutMs)),
    ]);
  };

  const revealPropertyListingWhenReady = async (panelEl) => {
    const listing = panelEl.querySelector(".property-listing");
    if (!listing) return;

    // reset state every time panel opens
    listing.classList.remove("is-ready");

    // Wait for ALL images in this listing (cards + any other imgs inside)
    await waitForImages(listing, { timeoutMs: 8000 });

    // Respect your existing delay (data-delay="1.2")
    const delayAttr = listing.getAttribute("data-delay");
    const delayMs = Math.max(0, parseFloat(delayAttr || "0")) * 1000;

    setTimeout(() => {
      listing.classList.add("is-ready");
    }, delayMs);
  };

  document.querySelectorAll(".homepage-hero").forEach((hero) => {
    const toggleButtons = hero.querySelectorAll(".toggle-btn");
    const togglePanels = hero.querySelectorAll(".toggle-panel");

    if (!toggleButtons.length || !togglePanels.length) return;

    const setActive = (key) => {
      toggleButtons.forEach((b) => {
        const isActive = b.dataset.toggle === key;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      let activePanel = null;

      togglePanels.forEach((panel) => {
        const match = panel.dataset.panel === key;
        panel.classList.toggle("is-active", match);
        panel.hidden = !match;
        if (match) activePanel = panel;
      });

      if (activePanel) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            updateHeroSwipersInPanel(activePanel);
            //revealPropertyListingWhenReady(activePanel);
          });
        }, 0);
      }
    };

    toggleButtons.forEach((btn) => {
      btn.addEventListener("click", () => setActive(btn.dataset.toggle));
    });

    // Remove initial animation delay on first load (BUY panel only)
    document.querySelectorAll(".homepage-hero").forEach((hero) => {
      const buyPanel = hero.querySelector('.toggle-panel[data-panel="buy"]');
      const buyListing = buyPanel?.querySelector(".property-listing");

      if (!buyListing) return;

      // Run once per page load
      if (buyListing.dataset.firstLoadNoAnim === "1") return;
      buyListing.dataset.firstLoadNoAnim = "1";

      // If your animation system reads these attributes, remove them so there's no delay
      buyListing.removeAttribute("data-anim");
      buyListing.removeAttribute("data-delay");
      buyListing.removeAttribute("data-duration");
    });

    const initial =
      hero.querySelector(".toggle-btn.is-active")?.dataset.toggle ||
      toggleButtons[0].dataset.toggle;

    setActive(initial);
  });

  // ---------------------------------------
  // SEARCH RESULTS: mega-card thumbnail swipers
  // ---------------------------------------

  // Whole card click navigates (overlay link has pointer-events:none in CSS)
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".mega-card");
    if (!card) return;

    // allow arrow clicks
    if (e.target.closest(".mega-card__nav")) return;

    const href =
      card.dataset.cardHref ||
      card.querySelector(".mega-card__whole-link")?.href;

    if (href) window.location.href = href;
  });

  const initMegaCardSwipers = (root = document) => {
    root.querySelectorAll("[data-mega-card-swiper]").forEach((el) => {
      if (el.dataset.swiperInited === "1") return;

      const container = el.closest(".mega-card__media");
      const nextBtn = container?.querySelector(".mega-card__nav--next");
      const prevBtn = container?.querySelector(".mega-card__nav--prev");

      const slides = el.querySelectorAll(".swiper-slide").length;
      const hasMultiple = slides > 1;

      const swiper = new Swiper(el, {
        slidesPerView: 1,
        loop: true,
        watchOverflow: true,
        observer: false,
        observeParents: false,
        allowTouchMove: false,
      });

      // arrows: stop navigation + move slides
      const stop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      };

      if (hasMultiple && prevBtn) {
        prevBtn.addEventListener("pointerdown", stop, true);
        prevBtn.addEventListener("click", (e) => {
          stop(e);
          swiper.slidePrev();
        });
      }

      if (hasMultiple && nextBtn) {
        nextBtn.addEventListener("pointerdown", stop, true);
        nextBtn.addEventListener("click", (e) => {
          stop(e);
          swiper.slideNext();
        });
      }

      el.dataset.swiperInited = "1";
      el._swiper = swiper;

      requestAnimationFrame(() => swiper.update());
    });
  };

  // expose for manual re-init if needed
  // Re-init mega-card swipers after DOM swap
  window.initMegaCardSwipers = initMegaCardSwipers;

  // init once on load
  initMegaCardSwipers(document);

  // ---------------------------------------
  // Re-init mega-card swipers after filtering/AJAX
  // ---------------------------------------
  const resultsRoot = document.querySelector("#ph-search-results");

  if (resultsRoot) {
    let t = null;
    const schedule = () => {
      clearTimeout(t);
      t = setTimeout(() => initMegaCardSwipers(resultsRoot), 50);
    };

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (
          m.type === "childList" &&
          (m.addedNodes?.length || m.removedNodes?.length)
        ) {
          schedule();
          break;
        }
      }
    });

    mo.observe(resultsRoot, { childList: true, subtree: true });
  }

  document.querySelectorAll("footer .top").forEach((footer) => {
    const toggleButtons = footer.querySelectorAll(".toggle-btn");
    const togglePanels = footer.querySelectorAll(".toggle-panel");

    if (!toggleButtons.length || !togglePanels.length) return;

    const setActive = (key) => {
      toggleButtons.forEach((b) => {
        const isActive = b.dataset.toggle === key;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      let activePanel = null;

      togglePanels.forEach((panel) => {
        const match = panel.dataset.panel === key;
        panel.classList.toggle("is-active", match);
        panel.hidden = !match;
        if (match) activePanel = panel;
      });

      if (activePanel) {
        requestAnimationFrame(() => updateHeroSwipersInPanel(activePanel));
      }
    };

    toggleButtons.forEach((btn) => {
      btn.addEventListener("click", () => setActive(btn.dataset.toggle));
    });

    const initial =
      footer.querySelector(".toggle-btn.is-active")?.dataset.toggle ||
      toggleButtons[0].dataset.toggle;

    setActive(initial);
  });

  // Card Swiper
  document.querySelectorAll(".card-slider .swiper").forEach((swiperEl) => {
    const root = swiperEl.closest(".card-slider");

    const swiper = new Swiper(swiperEl, {
      loop: true,
      rewind: true,
      roundLengths: true,
      grabCursor: true,
      initialSlide: 1,

      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      navigation: {
        nextEl: root.querySelector(".swiper-button-next"),
        prevEl: root.querySelector(".swiper-button-prev"),
      },

      breakpoints: {
        360: { slidesPerView: 1, spaceBetween: 16 },
        480: { slidesPerView: 1, spaceBetween: 16 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
      },
    });

    window.addEventListener("load", () => {
      swiper.update();
    });
  });

  // Testimonial Slider
  const testimonialSliders = document.querySelectorAll(".testimonials .swiper");

  testimonialSliders.forEach((slider) => {
    new Swiper(slider, {
      loop: true,
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor: true,
      roundLengths: true,

      navigation: {
        nextEl: ".testimonials .swiper-button-next",
        prevEl: ".testimonials .swiper-button-prev",
      },

      breakpoints: {
        360: { slidesPerView: 1, spaceBetween: 16 }, // mobile
        480: { slidesPerView: 1, spaceBetween: 16 },
        1024: { slidesPerView: 2, spaceBetween: 30 }, // tablet/desktop
      },
    });
  });

  document.querySelectorAll("[data-property-gallery-swiper]").forEach((el) => {
    const root = el.closest(".property-gallery") || el.parentElement;

    const nextEl = root?.querySelector(".property-gallery__nav--next");
    const prevEl = root?.querySelector(".property-gallery__nav--prev");
    const paginationEl =
      el.querySelector(".property-gallery__pagination") ||
      el.querySelector(".swiper-pagination");

    const slidesCount = el.querySelectorAll(".swiper-slide").length;

    // Don’t init heavy UI if only 1 image
    const hasMultiple = slidesCount > 1;

    new Swiper(el, {
      slidesPerView: 1,
      loop: hasMultiple,
      speed: 450, // tweak for “smooth”
      watchOverflow: true, // disables if not enough slides
      preloadImages: false,
      lazy: true,

      navigation:
        hasMultiple && nextEl && prevEl ? { nextEl, prevEl } : undefined,
      pagination:
        hasMultiple && paginationEl
          ? { el: paginationEl, clickable: true }
          : undefined,
    });
  });

  // ---------------------------------------
  // PROPERTY GALLERY (main) + MODAL GALLERY
  // ---------------------------------------
  // ---------------------------------------
  // PROPERTY GALLERY (main) + MODAL GALLERY
  // ---------------------------------------
  document.querySelectorAll(".property-gallery").forEach((gallery) => {
    // ---------- MAIN SWIPER ----------
    const mainEl = gallery.querySelector("[data-property-gallery-swiper]");
    if (mainEl && mainEl.dataset.swiperInited !== "1") {
      // IMPORTANT: scope nav to direct children of the section (not modal)
      const nextEl = gallery.querySelector(
        ":scope > .property-gallery__nav--next",
      );
      const prevEl = gallery.querySelector(
        ":scope > .property-gallery__nav--prev",
      );

      // IMPORTANT: only look for pagination inside this swiper
      const paginationEl = mainEl.querySelector(
        ".property-gallery__pagination",
      );

      const slidesCount = mainEl.querySelectorAll(".swiper-slide").length;
      const hasMultiple = slidesCount > 1;

      const mainSwiper = new Swiper(mainEl, {
        slidesPerView: 1,
        loop: hasMultiple,
        speed: 450,
        watchOverflow: true,
        preloadImages: false,
        lazy: true,

        navigation:
          hasMultiple && nextEl && prevEl ? { nextEl, prevEl } : undefined,
        pagination:
          hasMultiple && paginationEl
            ? { el: paginationEl, clickable: true }
            : undefined,
      });

      mainEl.dataset.swiperInited = "1";
      mainEl._swiper = mainSwiper;
    }

    // ---------- MODAL ----------
    // ---------- MODAL ----------
    const openBtn = gallery.querySelector("[data-open-gallery-modal]");
    const modal = gallery.querySelector("[data-gallery-modal]");
    const modalEl = gallery.querySelector(
      "[data-property-gallery-modal-swiper]",
    );

    const countEl = gallery.querySelector("[data-gallery-count]");
    const totalSlides = modalEl.querySelectorAll(".swiper-slide").length;
    const sideEl = gallery.querySelector("[data-property-gallery-modal-side]");

    if (!openBtn || !modal || !modalEl) return;

    const closeEls = modal.querySelectorAll("[data-gallery-modal-close]");
    let modalSwiper = null;

    const setupSide = () => {
      if (!sideEl || !modalSwiper) return;

      const items = Array.from(
        sideEl.querySelectorAll("[data-modal-side-item]"),
      );
      if (!items.length) return;

      const setSideWindow = (activeIndex) => {
        // show active + next 3 in the sidebar column (but we only DISPLAY 3 items)
        // here: show next 3 (not including active, since active is the big one)
        const total = items.length;

        // clear all
        items.forEach((btn) => {
          btn.classList.remove("is-active");
          btn.style.display = "none";
        });

        // mark active (optional if you want it indicated somewhere)
        items[activeIndex]?.classList.add("is-active");

        // show next 3
        for (let i = 1; i <= 3; i++) {
          const idx = (activeIndex + i) % total;
          const btn = items[idx];
          if (btn) btn.style.display = "";
        }
      };

      // initial
      setSideWindow(modalSwiper.realIndex ?? modalSwiper.activeIndex);

      // on slide change
      modalSwiper.on("slideChange", () => {
        setSideWindow(modalSwiper.realIndex ?? modalSwiper.activeIndex);
      });

      // click => go to that slide
      items.forEach((btn, idx) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          // if looping, use slideToLoop so it goes to the right duplicate
          if (modalSwiper.params.loop) {
            modalSwiper.slideToLoop(idx);
          } else {
            modalSwiper.slideTo(idx);
          }
        });
      });
    };

    const open = (e) => {
      e.preventDefault();
      modal.setAttribute("aria-hidden", "false");
      document.documentElement.classList.add("is-locked");

      if (!modalSwiper) {
        const nextEl = modal.querySelector(
          ".property-gallery-modal__nav--next",
        );
        const prevEl = modal.querySelector(
          ".property-gallery-modal__nav--prev",
        );

        const slidesCount = modalEl.querySelectorAll(".swiper-slide").length;
        const hasMultiple = slidesCount > 1;

        modalSwiper = new Swiper(modalEl, {
          speed: 450,
          watchOverflow: true,
          spaceBetween: 16,
          slidesPerView: 1,
          loop: hasMultiple,

          navigation:
            hasMultiple && nextEl && prevEl ? { nextEl, prevEl } : undefined,

          on: {
            init(swiper) {
              if (countEl) {
                countEl.textContent = `Showing ${swiper.realIndex + 1} of ${totalSlides}`;
              }
            },
            slideChange(swiper) {
              if (countEl) {
                countEl.textContent = `Showing ${swiper.realIndex + 1} of ${totalSlides}`;
              }
            },
          },
        });

        modalEl.dataset.swiperInited = "1";
        modalEl._swiper = modalSwiper;

        setupSide();
      }

      requestAnimationFrame(() => modalSwiper?.update());
    };

    const close = () => {
      modal.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("is-locked");
    };

    openBtn.addEventListener("click", open);

    closeEls.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        close();
      }),
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        close();
      }
    });
  });

  const similarSection = document.querySelector(".property-similar");
  if (!similarSection) return;

  const swiperEl = similarSection.querySelector(".property-swiper");
  const nextEl = similarSection.querySelector(".property-swiper__next");
  const prevEl = similarSection.querySelector(".property-swiper__prev");

  if (!swiperEl || !nextEl || !prevEl) return;

  new Swiper(swiperEl, {
    speed: 700,
    spaceBetween: 16,
    slidesPerView: 1.2,
    grabCursor: true,
    watchOverflow: true,

    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data-area-guide-gallery-swiper]")
    .forEach((el) => {
      if (el.dataset.swiperInited === "1") return;

      const root = el.closest(".area-guide-gallery");
      const nextEl = root?.querySelector(".area-guide-gallery__nav--next");
      const prevEl = root?.querySelector(".area-guide-gallery__nav--prev");

      const slidesCount = el.querySelectorAll(".swiper-slide").length;
      const hasMultiple = slidesCount > 1;

      const swiper = new Swiper(el, {
        slidesPerView: 1,
        loop: hasMultiple,
        speed: 450,
        watchOverflow: true,
        preloadImages: false,
        lazy: true,
        navigation:
          hasMultiple && nextEl && prevEl
            ? {
                nextEl,
                prevEl,
              }
            : undefined,
        on: {
          init() {
            el.classList.add("is-ready");
          },
        },
      });

      swiper.init();

      el.dataset.swiperInited = "1";
      el._swiper = swiper;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const initAreaPropertySwiper = (el) => {
    if (!el || el.dataset.swiperInited === "1") return;

    const section = el.closest(".area-guide-properties");
    const nextEl = section?.querySelector(".property-swiper__next");
    const prevEl = section?.querySelector(".property-swiper__prev");

    const swiper = new Swiper(el, {
      speed: 700,
      spaceBetween: 16,
      slidesPerView: 1.2,
      grabCursor: true,
      watchOverflow: true,
      navigation: nextEl && prevEl ? { nextEl, prevEl } : undefined,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });

    el.dataset.swiperInited = "1";
    el._swiper = swiper;
  };

  document
    .querySelectorAll("[data-area-guide-properties]")
    .forEach((section) => {
      const toggleButtons = section.querySelectorAll(".toggle-btn");
      const togglePanels = section.querySelectorAll(".toggle-panel");

      if (!toggleButtons.length || !togglePanels.length) return;

      const setActive = (key) => {
        toggleButtons.forEach((btn) => {
          const isActive = btn.dataset.toggle === key;
          btn.classList.toggle("is-active", isActive);
          btn.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        let activePanel = null;

        togglePanels.forEach((panel) => {
          const isMatch = panel.dataset.panel === key;
          panel.classList.toggle("is-active", isMatch);
          panel.hidden = !isMatch;
          if (isMatch) activePanel = panel;
        });

        if (activePanel) {
          const swiperEl = activePanel.querySelector(
            "[data-area-property-swiper]",
          );
          initAreaPropertySwiper(swiperEl);

          requestAnimationFrame(() => {
            swiperEl?._swiper?.update();
            swiperEl?._swiper?.navigation?.update?.();
          });
        }
      };

      toggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          setActive(btn.dataset.toggle);
        });
      });

      const initial =
        section.querySelector('.toggle-btn[data-toggle="buy"]') ||
        section.querySelector(".toggle-btn.is-active") ||
        toggleButtons[0];

      if (initial) {
        setActive(initial.dataset.toggle);
      }
    });

  // ---------------------------------------
  // BRANCH SWIPER
  // ---------------------------------------
  const initBranchSwiper = (el) => {
    if (!el || el.dataset.swiperInited === "1") return;
    const rect = el.getBoundingClientRect();

    const nextBtn = el.querySelector(".branch-swiper__next");
    const prevBtn = el.querySelector(".branch-swiper__prev");

    const swiper = new Swiper(el, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.31,
      spaceBetween: 16,
      watchOverflow: true,
      grabCursor: true,

      // ✅ helps when inside hidden panels / layout changes
      observer: false,
      observeParents: false,
      updateOnWindowResize: true,
      watchSlidesProgress: true,

      ...(nextBtn && prevBtn
        ? { navigation: { nextEl: nextBtn, prevEl: prevBtn } }
        : {}),

      breakpoints: {
        640: { slidesPerView: 2.1, spaceBetween: 16 },
        1024: { slidesPerView: 3.1, spaceBetween: 20 },
        1280: { slidesPerView: 5.5, spaceBetween: 24 },
        1600: { slidesPerView: 6.5, spaceBetween: 32 },
      },
    });

    // ✅ update once after init
    requestAnimationFrame(() => {
      swiper.update();
      swiper.navigation?.update?.();
    });

    // ✅ update again as images load
    el.querySelectorAll("img").forEach((img) => {
      if (img.complete) return;
      img.addEventListener(
        "load",
        () => {
          swiper.update();
          swiper.updateSize();
          swiper.updateSlides();
          swiper.navigation?.update?.();
        },
        { once: true },
      );
    });

    el.dataset.swiperInited = "1";
    el._swiper = swiper;
  };

  window.initBranchSwiper = initBranchSwiper;

  const branchHero = document.querySelector(".branch-swiper");
  initBranchSwiper(branchHero);
});

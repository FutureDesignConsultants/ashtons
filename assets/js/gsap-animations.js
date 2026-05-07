import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(
  MorphSVGPlugin,
  DrawSVGPlugin,
  ScrollTrigger,
  SplitText,
  Observer,
);

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".checklist-grid").forEach((grid) => {
      const items = grid.querySelectorAll(".checklist-grid__item");
      const icons = grid.querySelectorAll(".checklist-grid__item svg");
      const texts = grid.querySelectorAll(".checklist-grid__item-text");

      if (!items.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(items, {
        y: 48,
        opacity: 0,
        scale: 0.96,
        filter: "blur(6px)",
        duration: 0.8,
        stagger: {
          each: 0.12,
          grid: "auto",
          from: "start",
        },
        ease: "power3.out",
      })
        .from(
          icons,
          {
            scale: 0.55,
            rotation: -14,
            opacity: 0,
            transformOrigin: "50% 50%",
            duration: 0.45,
            stagger: 0.12,
            ease: "back.out(2)",
          },
          "-=0.55",
        )
        .from(
          texts,
          {
            x: 14,
            opacity: 0,
            duration: 0.4,
            stagger: 0.12,
            ease: "power2.out",
          },
          "<0.05",
        );
    });
  }
  gsap.from(".cta-cards .card", {
    opacity: 0,
    y: 80,
    scale: 0.92,
    duration: 1.4,
    ease: "power3.out",
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".cta-cards",
      start: "top 70%", // waits longer before triggering
      once: true,
    },
  });
  const imgs = Array.from(document.querySelectorAll(".img-wrap"));

  if (imgs.length) {
    const section = imgs[0].closest("section") || document.body;

    // Capture each image's base transform (so we can append the parallax shift consistently)
    const base = new Map(
      imgs.map((el) => [
        el,
        getComputedStyle(el).transform === "none"
          ? ""
          : getComputedStyle(el).transform,
      ]),
    );

    const state = { y: 0 };

    const apply = () => {
      imgs.forEach((el) => {
        const t = base.get(el) || "";
        // Append our parallax translate so EVERY image shifts the same direction
        el.style.transform = `${t} translate3d(0, ${state.y}px, 0)`.trim();
      });
    };

    gsap.to(state, {
      y: -150, // stronger movement
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top+=200", // slightly longer scroll window
        scrub: 0.3, // reacts faster to scrolling
      },
      onUpdate: apply,
    });

    apply();
  }
  document.querySelectorAll("[data-anim='fade']").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const duration = parseFloat(el.dataset.duration) || 1;
    const ease = el.dataset.ease || "power3.out";
    const y = el.dataset.y !== undefined ? parseFloat(el.dataset.y) : 0;

    gsap.set(el, { autoAlpha: 0, y });

    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      ease,
      clearProps: "opacity,visibility,transform",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onComplete: () => {
        el.removeAttribute("data-anim");
        el.removeAttribute("data-delay");
        el.removeAttribute("data-duration");
        el.removeAttribute("data-ease");
        el.removeAttribute("data-y");
      },
    });
  });
  gsap.utils.toArray("[data-parallax-image]").forEach((media) => {
    const image = media.querySelector(".dynamic-image__image");
    if (!image) return;

    gsap.to(image, {
      yPercent: 8,
      scale: 1.22,
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: media,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  gsap.utils.toArray("[data-parallax-accordion]").forEach((el) => {
    gsap.from(el, {
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        once: true,
      },
    });
  });

  document.querySelectorAll("svg.ribbon").forEach((svg) => {
    const grad = svg.querySelector("linearGradient");
    if (!grad) return;

    const state = { x: 0 };

    const render = () => {
      grad.setAttribute("gradientTransform", `translate(${state.x} 0)`);
    };

    render();

    gsap.to(state, {
      x: -1600,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      onUpdate: render,
    });
  });

  (() => {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (prefersReduced) return;

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // === SETTINGS (mega cards only) ===
    const BASE_SHIFT = 22;
    const PHASE_PX = 9;

    // Direction pattern for ~8 visible slides
    const DIR_PATTERN = [1, -1, -1, 1, -1, 1, 1, -1];

    const getSlideIndex = (media) => {
      const slide = media.closest(".swiper-slide");
      if (!slide) return 0;

      // Swiper loop-safe
      const loopIndex = slide.getAttribute("data-swiper-slide-index");
      if (loopIndex !== null) return Number(loopIndex);

      const slides = [...slide.parentNode.children].filter((n) =>
        n.classList?.contains("swiper-slide"),
      );
      return slides.indexOf(slide);
    };

    let items = [];
    let st;

    function build() {
      if (st) st.kill();

      items = [
        ...document.querySelectorAll(".property-swiper .mega-card__media"),
      ].map((media) => {
        const idx = getSlideIndex(media);

        const dir =
          DIR_PATTERN[
            ((idx % DIR_PATTERN.length) + DIR_PATTERN.length) %
              DIR_PATTERN.length
          ];

        const amp = 1 + ((idx % 5) - 2) * 0.06;
        const phase = ((idx % 8) - 3.5) * PHASE_PX;

        const setVar = gsap.quickSetter(media, "--parallax-y", "px");

        return { media, dir, amp, phase, setVar };
      });

      const triggerEl =
        document.querySelector(".homepage-hero") ||
        document.querySelector(".property-listing") ||
        document.body;

      st = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress * 2 - 1; // -1 to 1

          for (const item of items) {
            const y = p * BASE_SHIFT * item.dir * item.amp + item.phase;
            item.setVar(y);
          }
        },
      });
    }

    build();

    window.addEventListener("resize", gsap.utils.debounce(build, 150));

    document.addEventListener("click", (e) => {
      if (e.target.closest(".toggle-btn")) {
        setTimeout(build, 80);
      }
    });
  })();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  document.querySelectorAll(".card-slider").forEach((sliderSection) => {
    // target the actual cards (or you can target .swiper-slide)
    const cards = sliderSection.querySelectorAll(
      ".swiper-slide:not(.swiper-slide-duplicate) .card",
    );

    if (!cards.length) return;

    if (prefersReducedMotion) {
      // no animation; just ensure visible
      gsap.set(cards, { clearProps: "all" });
      return;
    }

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 90, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.52,
        scrollTrigger: {
          trigger: sliderSection,
          start: "top 75%",
          toggleActions: "play none none none", // animate once
          // markers: true, // uncomment to debug
        },
      },
    );
  });

  document.querySelectorAll(".full-width-cta-banner").forEach((section) => {
    const banner = section.querySelector(".banner-wrap");

    if (!banner) return;

    if (prefersReducedMotion) {
      gsap.set(banner, { clearProps: "all" });
      return;
    }

    gsap.fromTo(
      banner,
      { autoAlpha: 0, y: 90, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  /* ====================== Parallax scroll ======================  */
  (() => {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (prefersReduced) return;

    const ENQUIRY = {
      BASE_SHIFT: 40,
      SPEED_MIN: 0.06,
      SPEED_MAX: 0.1,
      DIR_PATTERN: [1],
    };

    const CULL_PAD = 200;

    const state = new WeakMap();
    let ticking = false;
    let animating = false;

    function getEnquiryTargets() {
      return document.querySelectorAll(".form-wrapper");
    }

    function getSpeed(cfg, idx) {
      const t = (idx % 7) / 6;
      return cfg.SPEED_MIN + (cfg.SPEED_MAX - cfg.SPEED_MIN) * t;
    }

    function computeTargetGeneric(el, cfg, idx) {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      const center = rect.top + rect.height / 2;
      const progress = Math.min(1, Math.max(0, center / vh));
      const baseY = (progress - 0.5) * 2 * cfg.BASE_SHIFT;

      const dir = cfg.DIR_PATTERN[idx % cfg.DIR_PATTERN.length] ?? 1;
      return baseY * dir;
    }

    function ensureState(el, cfg, idx) {
      const existing = state.get(el);
      if (existing) return existing;

      const s = {
        current: 0,
        target: 0,
        speed: getSpeed(cfg, idx),
      };
      state.set(el, s);
      return s;
    }

    function computeTargets() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      let active = 0;

      getEnquiryTargets().forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -CULL_PAD || rect.top > vh + CULL_PAD) return;

        active++;
        const target = computeTargetGeneric(el, ENQUIRY, i);

        const s = ensureState(el, ENQUIRY, i);
        s.target = target;
      });

      return active;
    }

    function animate() {
      const active = computeTargets();
      let maxDelta = 0;

      getEnquiryTargets().forEach((el) => {
        const s = state.get(el);
        if (!s) return;

        const delta = s.target - s.current;
        s.current += delta * s.speed;
        maxDelta = Math.max(maxDelta, Math.abs(delta));

        el.style.transform = `translate3d(0, ${s.current.toFixed(2)}px, 0)`;
        el.style.willChange = "transform";
      });

      if (active === 0 || maxDelta < 0.08) {
        animating = false;
        return;
      }
      requestAnimationFrame(animate);
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        computeTargets();

        if (!animating) {
          animating = true;
          requestAnimationFrame(animate);
        }
      });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    requestUpdate();
  })();

  /* ====================== Client Logo Carousel ======================  */
  const marqueeContent = document.querySelector(".marquee-content");
  const marqueeTrack = document.querySelector(".marquee-track");

  if (marqueeContent && marqueeTrack) {
    const clone = marqueeContent.cloneNode(true);
    marqueeTrack.appendChild(clone);

    let baseSpeed = 10;
    let currentSpeed = baseSpeed;
    let offset = 0;
    let targetSpeed = baseSpeed;

    let lastScrollY = window.scrollY;
    let scrollTimeout;

    // Animate the marquee frame-by-frame
    gsap.ticker.add(() => {
      offset -= currentSpeed;

      const contentWidth = marqueeContent.offsetWidth;
      if (offset <= -contentWidth) {
        offset = 0;
      }

      marqueeTrack.style.transform = `translateX(${offset}px)`;
    });

    // Smooth speed interpolation
    const speedProxy = { speed: baseSpeed }; // gsap will animate this
    const updateSpeed = (newTarget) => {
      if (Math.abs(newTarget - targetSpeed) < 0.05) return; // prevent micro updates

      targetSpeed = newTarget;

      gsap.to(speedProxy, {
        speed: targetSpeed,
        duration: 0.6,
        ease: "power2.out",
        onUpdate() {
          currentSpeed = speedProxy.speed;
        },
      });
    };

    // Scroll detection
    window.addEventListener("scroll", () => {
      const newScrollY = window.scrollY;
      const delta = newScrollY - lastScrollY;

      const boost = Math.min(Math.abs(delta) * 0.2, 5);
      updateSpeed(baseSpeed + boost);

      lastScrollY = newScrollY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        updateSpeed(baseSpeed);
      }, 150);
    });
  }

  // Change cursor on hover
  const cursor = document.getElementById("circle-cursor");
  const cursorText = cursor.querySelector(".cursor-text");
  const targets = document.querySelectorAll(".featured-post-link");

  if (window.innerWidth >= 768) {
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    targets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        const text = target.getAttribute("data-cursor-text") || "View";
        cursorText.textContent = text;
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      target.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  } else {
    if (cursor) {
      cursor.style.display = "none";
    }
  }
});

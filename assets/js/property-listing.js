// ---------- init ----------
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

(() => {
  const FORM_SEL = "form.property-search-form-custom";
  const SEARCH_WRAP = "#ph-search-results-wrap";
  const RESULTS_SEL = "#ph-search-results";
  const PAGINATION_SEL = "#ph-search-pagination";
  const COUNT_SEL = ".propertyhive-result-count";

  const MOBILE_MQ = window.matchMedia("(max-width: 1024px)"); // match your lg
  const isDesktop = () => !MOBILE_MQ.matches;

  let controller = null;
  let debounceTimer = null;

  let forceAjaxNextSubmit = false;

  const markForceAjax = () => {
    forceAjaxNextSubmit = true;
    // reset on next tick so it only applies to the submit triggered right now
    setTimeout(() => (forceAjaxNextSubmit = false), 0);
  };

  // ---------- helpers ----------

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  const setLoading = (on) => {
    const wrap = document.querySelector(SEARCH_WRAP);
    if (!wrap) return;
    wrap.classList.toggle("is-loading", on);
  };

  const beginAjaxSubmit = (form) => {
    // show loader immediately (no waiting for fetch to start)
    setLoading(true);

    // keep UI consistent
    syncAll(form);

    // force the next submit to be AJAX even on mobile
    markForceAjax();

    // submit on next tick
    setTimeout(() => form.requestSubmit(), 0);
  };

  const buildUrlFromForm = (form) => {
    cleanRadiusIfNoAddress(form);

    const url = new URL(form.action || window.location.href);
    const fd = new FormData(form);

    const params = new URLSearchParams();

    for (const [k, v] of fd.entries()) {
      if (v === "" || v == null) continue;

      // radius should never be submitted without address_keyword
      if (k === "radius" && !hasAddressKeyword(form)) continue;

      params.set(k, v);
    }

    if (isSoldOnly(form)) {
      params.delete("department");
      params.delete("include_sold");
    }

    const sort = document.querySelector("#sort-properties")?.value || "new";
    params.set("sort", sort);

    if (params.has("minimum_bedrooms")) {
      const v = params.get("minimum_bedrooms");
      params.delete("minimum_bedrooms");
      if (v !== "" && v != null) params.set("bedrooms", v);
    }

    url.search = params.toString();
    return url.toString();
  };

  function isSoldOnly(form) {
    const sold = form.querySelector('input[name="sold"]');
    return !!(sold && sold.checked);
  }

  function isIncludeSold(form) {
    const cb = form.querySelector('input[name="include_sold"]');
    return !!(cb && cb.checked);
  }

  function hasAddressKeyword(form) {
    const address = form.querySelector('[name="address_keyword"]')?.value || "";
    return address.trim().length > 0;
  }

  function cleanRadiusIfNoAddress(form) {
    if (hasAddressKeyword(form)) return;

    form.querySelectorAll('[name="radius"]').forEach((el) => {
      el.value = "";
    });
  }

  function syncIncludeSoldLabelText(form) {
    const mode = getMode(form);

    form.querySelectorAll(".include-sold__text").forEach((el) => {
      el.textContent =
        mode === "residential-lettings" ? "Include let agreed" : "Include sold";
    });
  }

  function getMode(form) {
    if (isSoldOnly(form)) return "sold";

    return (
      form.querySelector('input[name="department"]:checked')?.value ||
      "residential-sales"
    );
  }

  // Robust show/hide: handles BOTH style.display AND the [hidden] attribute.
  function setControlVisible(el, shouldShow) {
    if (!el) return;

    // store original inline display once
    if (el.dataset.origDisplay === undefined) {
      el.dataset.origDisplay = el.style.display || "";
    }

    if (shouldShow) {
      // if hidden attribute exists, remove it
      el.hidden = false;
      el.removeAttribute("hidden");
      el.style.display = el.dataset.origDisplay;
    } else {
      // fully remove from layout
      el.style.display = "none";
      el.hidden = true;
      el.setAttribute("hidden", "");
    }
  }

  function syncFormStateClasses(form) {
    const mode = getMode(form);

    form.classList.remove(
      "is-sales-mode",
      "is-lettings-mode",
      "is-commercial-mode",
      "is-sold-mode",
    );

    if (mode === "commercial") {
      form.classList.add("is-commercial-mode");
    } else if (mode === "residential-lettings") {
      form.classList.add("is-lettings-mode");
    } else if (mode === "sold") {
      form.classList.add("is-sold-mode");
    } else {
      form.classList.add("is-sales-mode");
    }
  }

  function clearIrrelevantFields(form) {
    const mode = getMode(form);

    const clear = (name) => {
      const el = form.querySelector(`[name="${name}"]`);
      if (!el) return;
      el.value = "";
    };

    if (mode === "residential-sales" || mode === "sold") {
      clear("minimum_rent");
      clear("maximum_rent");
      clear("minimum_floor_area");
      clear("maximum_floor_area");
    } else if (mode === "residential-lettings") {
      clear("minimum_price");
      clear("maximum_price");
      clear("minimum_floor_area");
      clear("maximum_floor_area");
      clear("office_id");
    } else if (mode === "commercial") {
      clear("minimum_price");
      clear("maximum_price");
      clear("minimum_rent");
      clear("maximum_rent");
      clear("minimum_bedrooms");
      clear("office_id");
    }
  }

  // ---------- department UI ----------

  function syncDepartmentActiveLabels(form) {
    const soldInput = form.querySelector('input[name="sold"]');
    const soldOn = !!(soldInput && soldInput.checked);
    const inc = form.querySelector('input[name="include_sold"]');
    if (inc) {
      const incLabel = inc.closest("label");
      if (incLabel) incLabel.classList.toggle("is-active", inc.checked);
    }

    // ✅ Sold label active state
    if (soldInput) {
      const soldLabel = soldInput.closest("label");
      if (soldLabel) soldLabel.classList.toggle("is-active", soldOn);
    }

    // ✅ If sold is ON, department buttons should NOT show active
    form.querySelectorAll('input[name="department"]').forEach((radio) => {
      const label = radio.closest("label");
      if (!label) return;
      label.classList.toggle("is-active", !soldOn && radio.checked);
    });
  }

  function syncSortFromUrl() {
    const sel = document.querySelector("#sort-properties");
    if (!sel) return;

    const url = new URL(window.location.href);
    const sort = url.searchParams.get("sort") || "new";

    const allowed = ["new", "old", "price_high", "price_low"];
    sel.value = allowed.includes(sort) ? sort : "new";
  }

  // toggle budget groups (price / rent / floor area) + enable active selects
  function syncBudgetFields(form) {
    const mode = getMode(form);
    const activeKey =
      mode === "commercial"
        ? "commercial"
        : mode === "residential-lettings"
          ? "lettings"
          : "sales"; // residential-sales OR sold

    form.querySelectorAll("[data-budget-set]").forEach((set) => {
      const key = set.getAttribute("data-budget-set");
      const isActive = key === activeKey;

      set.hidden = !isActive;

      // enable controls in active group, disable in inactive groups
      set.querySelectorAll("select, input, textarea").forEach((el) => {
        el.disabled = !isActive;
      });
    });
  }

  // Enforce EXACT filters per department (and restore when switching back)
  function syncDepartmentFilters(form) {
    const mode = getMode(form);

    const officeControls = form.querySelectorAll(".control-office"); // ✅ all (desktop + mobile)
    const bedsControls = form.querySelectorAll(".control-minimum_bedrooms");

    const propType = form.querySelector(".control-property_type");
    const budgetGroup = form.querySelector(".control-group-budget");

    const includeSoldLabel = form
      .querySelector('input[name="include_sold"]')
      ?.closest("label");
    const includeSoldInput = form.querySelector('input[name="include_sold"]');
    const soldOn = isSoldOnly(form);

    // hide include sold when SOLD-only mode is active
    setControlVisible(includeSoldLabel, !soldOn);

    if (includeSoldInput) {
      includeSoldInput.disabled = soldOn;
      if (soldOn) includeSoldInput.checked = false;
    }

    // always present
    setControlVisible(budgetGroup, true);
    setControlVisible(propType, true);

    const showOffice = mode !== "commercial" && mode !== "residential-lettings";
    const showBeds = mode !== "commercial";

    // ✅ hide/show ALL office controls (desktop + mobile)
    // hide/show office controls
    officeControls.forEach((office) => {
      setControlVisible(office, showOffice);

      office.querySelectorAll("select, input, textarea").forEach((el) => {
        el.disabled = !showOffice;
        if (!showOffice) el.value = "";
      });
    });

    // hide/show beds controls
    bedsControls.forEach((beds) => {
      setControlVisible(beds, showBeds);

      beds.querySelectorAll("select, input, textarea").forEach((el) => {
        el.disabled = !showBeds;
        if (!showBeds) el.value = "";
      });
    });
  }

  // ---------- separators (between visible top-level filters) ----------

  const SEP_CLASS = "control-separator";

  function syncControlSeparators(form) {
    const wrap = form.querySelector(".control-other-filters");
    if (!wrap) return;

    // always remove existing separators first
    wrap.querySelectorAll(`.${SEP_CLASS}`).forEach((n) => n.remove());

    // // ❗ NEW: if commercial on desktop → no separators at all
    // if (getMode(form) === "commercial" && isDesktop()) {
    //   return;
    // }

    // visible top-level children, excluding submit button
    const children = Array.from(wrap.children).filter((el) => {
      if (el.classList.contains(SEP_CLASS)) return false;
      if (el.classList.contains("search-submit")) return false;
      if (el.hidden) return false;
      if (el.style.display === "none") return false;
      return true;
    });

    // insert between items (not after last)
    children.slice(0, -1).forEach((el) => {
      el.insertAdjacentHTML(
        "afterend",
        `<svg class="${SEP_CLASS}" width="1" height="40" viewBox="0 0 1 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="white"/>
      </svg>`,
      );
    });
  }

  function syncMinMaxSelects(form) {
    const pairs = [
      ["minimum_price", "maximum_price"],
      ["minimum_rent", "maximum_rent"],
      ["minimum_floor_area", "maximum_floor_area"],
    ];

    pairs.forEach(([minName, maxName]) => {
      const minSelects = form.querySelectorAll(`select[name="${minName}"]`);
      const maxSelects = form.querySelectorAll(`select[name="${maxName}"]`);

      minSelects.forEach((minSelect, index) => {
        const maxSelect = maxSelects[index];
        if (!maxSelect) return;

        const minValue = Number(minSelect.value || 0);
        const maxValue = Number(maxSelect.value || 0);

        maxSelect.querySelectorAll("option").forEach((option) => {
          if (option.value === "") {
            option.hidden = false;
            option.disabled = false;
            return;
          }

          const optionValue = Number(option.value);
          const shouldHide = minValue && optionValue < minValue;

          option.hidden = shouldHide;
          option.disabled = shouldHide;
        });

        if (maxValue && minValue && maxValue < minValue) {
          maxSelect.value = "";
        }
      });
    });
  }

  function syncAll(form) {
    syncFormStateClasses(form);
    syncDepartmentActiveLabels(form);
    syncIncludeSoldLabelText(form);
    syncBudgetFields(form);
    syncDepartmentFilters(form);
    syncMinMaxSelects(form);
    syncControlSeparators(form);
  }

  // ---------- fetch ----------

  async function fetchAndSwap(url) {
    if (controller) controller.abort();
    controller = new AbortController();

    setLoading(true);
    const start = performance.now();

    try {
      const res = await fetch(url, {
        headers: { "X-Requested-With": "fetch" },
        signal: controller.signal,
      });

      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");

      const newResults = doc.querySelector(RESULTS_SEL);
      const newPagination = doc.querySelector(PAGINATION_SEL);
      const newCount = doc.querySelector(COUNT_SEL);

      if (newResults) {
        const cur = document.querySelector(RESULTS_SEL);
        if (cur) cur.replaceChildren(...newResults.childNodes);
      }

      if (newPagination) {
        const cur = document.querySelector(PAGINATION_SEL);
        if (cur) cur.replaceChildren(...newPagination.childNodes);
      }

      if (newCount) {
        const cur = document.querySelector(COUNT_SEL);
        if (cur) cur.replaceChildren(...newCount.childNodes);
      }

      // ✅ re-init swipers on the newly injected results
      window.initMegaCardSwipers?.(
        document.querySelector(RESULTS_SEL) || document,
      );

      // ✅ NEW: tell the standalone pins file to refresh
      window.PropertySearchMap?.onResultsUpdated?.(url);
    } catch (err) {
      if (err.name !== "AbortError") console.error(err);
    } finally {
      const elapsed = performance.now() - start;
      if (elapsed < 250) await wait(250 - elapsed);
      setLoading(false);
    }
  }

  // ---------- submit ----------

  document.addEventListener("change", (e) => {
    const form = document.querySelector(FORM_SEL);
    if (!form) return;

    const isSort = e.target && e.target.id === "sort-properties";
    const inForm = e.target && e.target.closest(FORM_SEL);

    if (!isSort && !inForm) return;

    // SOLD (AJAX on both)
    if (inForm && e.target.name === "sold") {
      if (e.target.checked) {
        form
          .querySelectorAll('input[name="department"]')
          .forEach((r) => (r.checked = false));
      } else {
        if (!form.querySelector('input[name="department"]:checked')) {
          const def = form.querySelector(
            'input[name="department"][value="residential-sales"]',
          );
          if (def) def.checked = true;
        }
      }
      beginAjaxSubmit(form);
      return;
    }

    // Department radios (AJAX on both)
    if (inForm && e.target.name === "department") {
      const sold = form.querySelector('input[name="sold"]');
      if (sold && sold.checked) sold.checked = false;

      clearIrrelevantFields(form);
      beginAjaxSubmit(form);
      return;
    }

    // Include sold (AJAX on both)
    // Include sold:
    // - Desktop: AJAX autosubmit
    // - Mobile: no AJAX (wait for Apply/Search submit)
    if (inForm && e.target.name === "include_sold") {
      // keep desktop+mobile checkboxes in sync (since you now have two)
      form
        .querySelectorAll('input[name="include_sold"]')
        .forEach((cb) => (cb.checked = e.target.checked));

      if (!isDesktop()) {
        syncAll(form);
        return;
      }

      beginAjaxSubmit(form);
      return;
    }

    // Sort (desktop only ajax)
    if (isSort) {
      if (!isDesktop()) return;
      setLoading(true);
      setTimeout(() => form.requestSubmit(), 0);
      return;
    }

    // Other filters:
    // - Desktop: ajax autosubmit + loader
    // - Mobile: do nothing (user must click Search)
    if (!isDesktop()) {
      syncAll(form);
      return;
    }

    if (e.target.name === "radius" && !hasAddressKeyword(form)) {
      cleanRadiusIfNoAddress(form);
      syncAll(form);
      return;
    }

    setLoading(true);
    setTimeout(() => form.requestSubmit(), 0);
  });

  document.addEventListener("submit", async (e) => {
    const form = e.target.closest(FORM_SEL);
    if (!form) return;

    syncAll(form);

    // ✅ If desktop OR forced (department/sold/include_sold), do AJAX
    if (isDesktop() || forceAjaxNextSubmit) {
      e.preventDefault();

      const url = buildUrlFromForm(form);
      await fetchAndSwap(url);
      window.history.pushState({}, "", url);
      return;
    }

    // ✅ Mobile + not forced => allow normal GET submit (Search button)
    // (do nothing)
  });

  // ---------- change ----------
  // ---------- pagination clicks (AJAX) ----------

  document.addEventListener("click", async (e) => {
    const a = e.target.closest(`${PAGINATION_SEL} a.page-numbers`);
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    // let modified clicks open new tabs etc
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return;

    // ✅ MOBILE: allow normal navigation (pagination still works)
    if (!isDesktop()) return;

    // ✅ DESKTOP: AJAX paginate
    e.preventDefault();

    const target = new URL(href, window.location.origin);
    const current = new URL(window.location.href);

    current.searchParams.forEach((v, k) => {
      if (!target.searchParams.has(k)) target.searchParams.set(k, v);
    });

    const merged = target.toString();

    await fetchAndSwap(merged);
    window.history.pushState({}, "", merged);

    document
      .querySelector(SEARCH_WRAP)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ---------- typing ----------
  document.addEventListener("input", (e) => {
    const form = e.target.closest(FORM_SEL);
    if (!form) return;

    if (e.target.name === "address_keyword") {
      if (!hasAddressKeyword(form)) {
        cleanRadiusIfNoAddress(form);
      }

      // Do NOT submit while typing location.
      // Predictive search needs the input to stay still.
      syncAll(form);
      return;
    }
  });

  // ---------- history ----------

  document.addEventListener("click", async (e) => {
    const a = e.target.closest(`${PAGINATION_SEL} a.page-numbers`);
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    // let modified clicks open new tabs etc
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return;

    // ✅ MOBILE: allow normal navigation (pagination still works)
    if (!isDesktop()) return;

    // ✅ DESKTOP: AJAX paginate
    e.preventDefault();

    const target = new URL(href, window.location.origin);
    const current = new URL(window.location.href);

    current.searchParams.forEach((v, k) => {
      if (!target.searchParams.has(k)) target.searchParams.set(k, v);
    });

    const merged = target.toString();

    await fetchAndSwap(merged);
    window.history.pushState({}, "", merged);

    document
      .querySelector(SEARCH_WRAP)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ---------- init ----------

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(FORM_SEL).forEach((form) => {
      syncAll(form);
      syncSortFromUrl();
    });
  });
})();

(() => {
  const prefersReduced = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  )?.matches;

  const init = () => {
    const trigger = document.querySelector(".filter-icon");
    const panel = document.getElementById("filters-panel");
    const inner = panel?.querySelector(".filters-panel__inner");

    if (!trigger || !panel || !inner) return;

    let isOpen = false;
    let isAnimating = false;

    const setClosedInstant = () => {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("filters-open");

      // backdrop invisible when closed
      panel.style.opacity = "0";

      // IMPORTANT: use GSAP consistently (don’t mix with inline transform strings)
      if (!prefersReduced) {
        gsap.set(inner, { xPercent: 100 });
      } else {
        inner.style.transform = "translateX(100%)";
      }

      isOpen = false;
      isAnimating = false;
    };

    // force initial state
    setClosedInstant();

    const openPanel = () => {
      if (isAnimating || isOpen) return;
      isAnimating = true;

      panel.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("filters-open");

      if (prefersReduced) {
        panel.style.opacity = "1";
        inner.style.transform = "translateX(0)";
        isOpen = true;
        isAnimating = false;
        return;
      }

      gsap.killTweensOf([panel, inner]);

      gsap.set(panel, { opacity: 0 });
      gsap.set(inner, { xPercent: 100 });

      gsap.to(panel, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(inner, {
        xPercent: 0,
        duration: 0.55,
        ease: "power3.out",
        onComplete: () => {
          isOpen = true;
          isAnimating = false;
        },
      });
    };

    const closePanel = () => {
      if (isAnimating || !isOpen) return;
      isAnimating = true;

      trigger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("filters-open");

      if (prefersReduced) {
        setClosedInstant();
        return;
      }

      gsap.killTweensOf([panel, inner]);

      gsap.to(panel, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.in",
      });

      gsap.to(inner, {
        xPercent: 100,
        duration: 0.45,
        ease: "power3.in",
        onComplete: () => {
          panel.hidden = true;
          isOpen = false;
          isAnimating = false;
        },
      });
    };

    trigger.addEventListener("click", () => {
      isOpen ? closePanel() : openPanel();
    });

    panel.addEventListener("click", (e) => {
      const clickedClose = e.target.closest(".filters-panel__close");
      const clickedBackdrop = e.target === panel;
      if (clickedClose || clickedBackdrop) closePanel();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) closePanel();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger), SplitText;

// Fade in up, down, right & left

export function fadeInUp() {
  const elements = document.querySelectorAll(".fade-in-up");
  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.from(el, {
      opacity: 0,
      y: 400,
      duration: 1,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
}

export function fadeInDown() {
  const elements = document.querySelectorAll(".fade-in-down");
  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.from(el, {
      opacity: 0,
      y: -600,
      duration: 1,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
}

export function fadeInLeft() {
  const elements = document.querySelectorAll(".fade-in-left");
  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.from(el, {
      opacity: 0,
      x: 400,
      duration: 1,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
}

export function fadeInRight() {
  const elements = document.querySelectorAll(".fade-in-right");
  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.from(el, {
      opacity: 0,
      x: -400,
      duration: 1,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
}

// Split Text

export function splitWordFadeIn() {
  const elements = document.querySelectorAll(".split-text");

  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    const split = new SplitText(el, { type: "words" }); // only split by words

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      stagger: 0.3, // stagger so words animate one after another
      duration: 0.6,
      ease: "power2.out",
      delay: delay,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
}

// Mask text
export function splitLineMaskUp() {
  const elements = document.querySelectorAll(".mask-text");

  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);

    // Step 1: Split into lines
    const split = new SplitText(el, {
      type: "lines",
      linesClass: "line-mask",
    });

    // Step 2: Wrap inner line content in a span for animation
    split.lines.forEach((line) => {
      const span = document.createElement("span");
      span.innerHTML = line.innerHTML;
      line.innerHTML = "";
      line.appendChild(span);
    });

    // Step 3: Animate the inner spans
    gsap.from(
      split.lines.map((line) => line.querySelector("span")),
      {
        yPercent: 100,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });
}



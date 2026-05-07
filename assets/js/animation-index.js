import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  splitWordFadeIn,
  splitLineMaskUp,
} from "./animations/fade.js";

document.addEventListener("DOMContentLoaded", () => {
  fadeInUp();
  fadeInDown();
  fadeInLeft();
  fadeInRight();
  splitWordFadeIn();
  splitLineMaskUp();
});

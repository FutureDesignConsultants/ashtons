import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  // Team Slider
  const teamSlider = document.querySelector(".team-glide");
  if (teamSlider) {
    new Glide(teamSlider, {
      type: "slider",
      perView: 5,
      rewind: false,
      gap: 24,
      bound: true,
      breakpoints: {
        1600: { perView: 4 },
        1280: { perView: 3 },
        1024: { perView: 2 },
        768: { perView: 1 },
      },
    }).mount();
  }

  // Testimonial Slider
  const testimonialSlider = document.querySelector(".testimonial-wrap.glide");
  if (testimonialSlider) {
    new Glide(testimonialSlider, {
      type: "carousel",
      perView: 1,
      autoplay: false,
      animationDuration: 600,
    }).mount();
  }
});

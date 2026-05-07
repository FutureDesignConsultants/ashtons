const mix = require("laravel-mix");

// Replace this with your actual local development URL
const localUrl = "http://ashtons.local";

mix.setPublicPath("dist");

mix
  .js("assets/js/app.js", "js")
  .js("assets/js/gsap-animations.js", "js")
  .js("assets/js/glide.js", "js")
  .js("assets/js/swiper.js", "js")
  .js("assets/js/map-pin.js", "js")
  .js("assets/js/property-listing.js", "js")
  .js("assets/js/property-location.js", "js")
  .js("assets/js/property-calculator.js", "js")
  .js("assets/js/divider-button.js", "js")
  .js("assets/js/cta-button.js", "js")
  .js("assets/js/branch-listing-map.js", "js")
  .js("assets/js/branch-map.js", "js")

  .js("assets/js/animations/fade.js", "js")
  .js("assets/js/animation-index.js", "js")
  .sass("assets/scss/style.scss", "css")
  .options({
    processCssUrls: false,
  })
  .sourceMaps(true, "inline-source-map")
  .browserSync({
    proxy: localUrl,
    files: ["dist/css/**/*.css", "dist/js/**/*.js", "**/*.php"],
    notify: false,
    open: false,
  });

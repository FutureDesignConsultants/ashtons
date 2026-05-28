<?php
/**
* Enqueue Scripts
*
*/

add_action('wp_enqueue_scripts', function () {
  // Ensure WP outputs something in head we can attach inline JS to
  wp_register_script('anim-prehide', '', [], null, false);
  wp_enqueue_script('anim-prehide');

  wp_add_inline_script(
    'anim-prehide',
    "document.documentElement.classList.add('anim-ready');",
    'before'
  );
});

function mytheme_enqueue_assets() {
    $theme_uri = get_stylesheet_directory_uri();
    $theme_path = get_stylesheet_directory();

	wp_enqueue_style(
    'leaflet',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    [],
    '1.9.4'
  );

  // Leaflet JS (load BEFORE your property-listing.js)
  wp_enqueue_script(
    'leaflet',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    [],
    '1.9.4',
    true
  );

  // Your custom script — note the dependency on leaflet 👇
  wp_enqueue_script(
    'property-listing',
    get_stylesheet_directory_uri() . '/dist/js/property-listing.js',
    ['leaflet'], // 👈 ensures L is defined first
    '1.0',
    true
  );



  wp_enqueue_script(
  'mytheme-property-location-js',
  $theme_uri . '/dist/js/property-location.js',
  ['mytheme-app-js', 'leaflet'],
  filemtime($theme_path . '/dist/js/property-location.js'),
  true
);

 wp_enqueue_script(
  'mytheme-property-calculator-js',
  $theme_uri . '/dist/js/property-calculator.js',
  ['mytheme-app-js', 'leaflet'],
  filemtime($theme_path . '/dist/js/property-calculator.js'),
  true
);

    // Enqueue CSS
    wp_enqueue_style(
        'mytheme-style',
        $theme_uri . '/dist/css/style.css',
        array(),
        filemtime($theme_path . '/dist/css/style.css')
    );

    // Enqueue app.js
    wp_enqueue_script(
        'mytheme-app-js',
        $theme_uri . '/dist/js/app.js',
        array(), // dependencies, e.g. ['jquery'] if needed
        filemtime($theme_path . '/dist/js/app.js'),
        true // load in footer
    );

	wp_enqueue_script(
        'mytheme-divider-js',
        $theme_uri . '/dist/js/divider-button.js',
        array(), // dependencies, e.g. ['jquery'] if needed
        filemtime($theme_path . '/dist/js/divider-button.js'),
        true // load in footer
    );

	wp_enqueue_script(
        'mytheme-cta-button-js',
        $theme_uri . '/dist/js/cta-button.js',
        array(), // dependencies, e.g. ['jquery'] if needed
        filemtime($theme_path . '/dist/js/cta-button.js'),
        true // load in footer
    );

	wp_enqueue_script(
        'mytheme-branch-listing-map-js',
        $theme_uri . '/dist/js/branch-listing-map.js',
        array(), // dependencies, e.g. ['jquery'] if needed
        filemtime($theme_path . '/dist/js/branch-listing-map.js'),
        true // load in footer
    );

        wp_enqueue_script(
        'mytheme-branch-map-js',
        $theme_uri . '/dist/js/branch-map.js',
        array(), // dependencies, e.g. ['jquery'] if needed
        filemtime($theme_path . '/dist/js/branch-map.js'),
        true // load in footer
    );


    // Enqueue gsap-animations.js
    wp_enqueue_script(
        'mytheme-gsap-js',
        $theme_uri . '/dist/js/gsap-animations.js',
        array('mytheme-app-js'), // load after app.js (adjust deps if needed)
        filemtime($theme_path . '/dist/js/gsap-animations.js'),
        true // load in footer
    );

	// Enqueue gsap-animations.js
    wp_enqueue_script(
        'mytheme-property-listing-js',
        $theme_uri . '/dist/js/property-listing.js',
        array('mytheme-app-js'), // load after app.js (adjust deps if needed)
        filemtime($theme_path . '/dist/js/property-listing.js'),
        true // load in footer
    );

	 wp_enqueue_script(
        'mytheme-map-pin-js',
        $theme_uri . '/dist/js/map-pin.js',
        array('mytheme-app-js'), // load after app.js (adjust deps if needed)
        filemtime($theme_path . '/dist/js/map-pin.js'),
        true // load in footer
    );

	wp_enqueue_script(
    'mytheme-animations-js',
    $theme_uri . '/dist/js/animation-index.js',
    ['mytheme-app-js'], // depend on app.js if needed
    filemtime($theme_path . '/dist/js/animation-index.js'),
    true
  );
	

	// Enqueue glide.js
    wp_enqueue_script(
        'mytheme-glide-js',
        $theme_uri . '/dist/js/glide.js',
        array('mytheme-app-js'), // load after app.js (adjust deps if needed)
        filemtime($theme_path . '/dist/js/glide.js'),
        true // load in footer
    );

	// Enqueue Swipe.js
    wp_enqueue_script(
        'mytheme-swiper-js',
        $theme_uri . '/dist/js/swiper.js',
        array('mytheme-app-js'), // load after app.js (adjust deps if needed)
        filemtime($theme_path . '/dist/js/swiper.js'),
        true // load in footer
    );
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_assets');


// function enqueue_adobe_fonts() {
//     wp_enqueue_style('adobe-fonts', 'https://use.typekit.net/zrw2wpa.css', false);
// }
// add_action('wp_enqueue_scripts', 'enqueue_adobe_fonts');

function enqueue_typekit_fonts() {
    wp_enqueue_style(
        'typekit-fonts',
        'https://use.typekit.net/ssd1oxv.css',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'enqueue_typekit_fonts');
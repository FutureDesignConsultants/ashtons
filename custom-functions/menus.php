<?php
/**
* Initialise WP Menu
*
*/



/// Primary navigation menu

function mytheme_register_menus() {
  register_nav_menus(array(
    'primary'                => __('Primary Menu', 'mytheme'),
    'footer'                 => __('Footer Menu', 'mytheme'),
    'burger_additional_menu' => __('Burger Additional Navigation', 'mytheme'),
    'burger_desktop_menu'    => __('Burger Desktop Menu', 'mytheme'),
    'footer_buy'             => __('Footer – Buy', 'mytheme'),
    'footer_rent'            => __('Footer – Rent', 'mytheme'),
    'footer_sell'            => __('Footer – Sell', 'mytheme'),
    'footer_mortgages'       => __('Footer – Mortgages', 'mytheme'),
    'footer_branches'        => __('Footer – Branches', 'mytheme'),
    'footer_quicklinks'      => __('Footer – Quick Links', 'mytheme'),
    'footer_policies'        => __('Footer – Policies', 'mytheme'),
  ));
}
add_action('after_setup_theme', 'mytheme_register_menus');


add_filter('nav_menu_link_attributes', function($atts, $item, $args) {
  if (($args->theme_location ?? '') !== 'primary') return $atts;
  if ((int) $item->menu_item_parent !== 0) return $atts;

  // Only add mega attrs if item has children
  $has_children = in_array('menu-item-has-children', (array) $item->classes, true);

  if ($has_children) {
    $atts['data-mega'] = sanitize_title($item->title);
    $atts['aria-haspopup'] = 'true';
    $atts['aria-expanded'] = 'false';

    // ✅ Add buy/rent/sell type from ACF on the menu item
    $panel_type = get_field('panel_type', $item); // buy|rent|sell
    if (!in_array($panel_type, ['buy','rent','sell'], true)) {
      $panel_type = 'buy';
    }

    $atts['data-panel-type'] = $panel_type;

    // Optional: add a class too (handy for CSS)
    $existing = $atts['class'] ?? '';
    $atts['class'] = trim($existing . ' menu-link--' . $panel_type);
  }

  return $atts;
}, 10, 3);




add_filter('walker_nav_menu_start_el', function ($item_output, $item, $depth, $args) {

  // Only primary menu
  if (empty($args->theme_location) || $args->theme_location !== 'primary') {
    return $item_output;
  }

  // Only top-level items
  if ((int) $item->menu_item_parent !== 0) {
    return $item_output;
  }

  $has_children = in_array('menu-item-has-children', (array) $item->classes, true);

  // Desktop icon only if has children
  $desktop_icon = $has_children ? '
    <span class="dropdown-icon dropdown-icon--desktop" aria-hidden="true">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00179 3.23617L3.76562 6.47234L0.529456 3.23617" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    </span>
  ' : '';

  // Mobile icon always
  $mobile_icon = '
    <span class="dropdown-icon dropdown-icon--mobile" aria-hidden="true">
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.5" cy="20.5" r="20" stroke="#FAF8F4"/>
        <path d="M10.248 20.1353L30.8261 20.1353" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.5996 12.6826L30.9308 20.1349L23.5996 27.5871" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  ';

  $icons = $desktop_icon . $mobile_icon;

  // Wrap link text and append icons
  $item_output = preg_replace(
    '/(<a\b[^>]*>)(.*?)(<\/a>)/is',
    '$1<span class="menu-text">$2</span>' . $icons . '$3',
    $item_output
  );

  return $item_output;

}, 10, 4);


add_filter('walker_nav_menu_start_el', function ($item_output, $item, $depth, $args) {
  if (($args->theme_location ?? '') !== 'burger_desktop_menu') {
    return $item_output;
  }

  $classes = (array) $item->classes;

  if (in_array('cta-button', $classes, true)) {
    $item_output = preg_replace(
      '/(<a\b[^>]*>)(.*?)(<\/a>)/is',
      '$1<span class="cta-text">$2</span>$3',
      $item_output
    );
  }

  return $item_output;
}, 10, 4);

add_filter('nav_menu_link_attributes', function($atts, $item, $args) {

  if (($args->theme_location ?? '') !== 'burger_desktop_menu') {
    return $atts;
  }

  $classes = (array) $item->classes;

  // Only target your CTA item
  if (in_array('cta-button', $classes, true)) {

    // Move ALL custom classes onto the <a>
    $atts['class'] = trim(($atts['class'] ?? '') . ' ' . implode(' ', $classes));
  }

  return $atts;

}, 10, 3);

add_filter('nav_menu_css_class', function($classes, $item, $args) {

  if (($args->theme_location ?? '') !== 'burger_desktop_menu') {
    return $classes;
  }

  if (in_array('cta-button', $classes, true)) {
    // remove styling classes from <li>
    $classes = array_diff($classes, ['cta-button', 'green', 'large', 'mar-top-16']);
  }

  return $classes;

}, 10, 3);
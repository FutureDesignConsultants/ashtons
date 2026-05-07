<?php
// =============================
// CONFIG (update if needed)
// =============================
define('ASHTONS_LAT_META_KEY', 'latitude');
define('ASHTONS_LNG_META_KEY', 'longitude');

// =============================
// ADD LOCATION CONTROL
// =============================
add_action('propertyhive_after_search_form_controls', function($id, $form_controls) {
  $value = isset($_GET['address_keyword']) ? sanitize_text_field($_GET['address_keyword']) : '';
  ?>
<div class="control control-address_keyword" data-move-after-department="1">
	<label for="address_keyword">Location</label>
	<input type="text" id="address_keyword" name="address_keyword" value="<?php echo esc_attr($value); ?>"
		placeholder="Enter location or postcode" autocomplete="postal-code">
</div>
<?php
}, 5, 2);

// =============================
// ADD RADIUS CONTROL
// =============================
add_action('propertyhive_after_search_form_controls', function($id, $form_controls) {
  $radius = isset($_GET['radius']) ? sanitize_text_field($_GET['radius']) : '';
  ?>
<div class="control control-radius" data-move-after-department="1">
	<label for="radius">Radius</label>
	<select name="radius" id="radius">
		<option value="" <?php selected($radius, ''); ?>>Search radius</option>
		<option value="1" <?php selected($radius, '1'); ?>>1 mile</option>
		<option value="3" <?php selected($radius, '3'); ?>>3 miles</option>
		<option value="5" <?php selected($radius, '5'); ?>>5 miles</option>
		<option value="10" <?php selected($radius, '10'); ?>>10 miles</option>
		<option value="15" <?php selected($radius, '15'); ?>>15 miles</option>
		<option value="20" <?php selected($radius, '20'); ?>>20 miles</option>
	</select>
</div>
<?php
}, 6, 2);

// =============================
// ADD OFFICE DROPDOWN
// =============================
add_action('propertyhive_after_search_form_controls', function($id, $form_controls) {

  $selected = isset($_GET['office_id']) ? sanitize_text_field($_GET['office_id']) : '';

  $offices = get_posts([
    'post_type'      => 'office',
    'post_status'    => 'publish',
    'posts_per_page' => -1,
    'orderby'        => 'title',
    'order'          => 'ASC',
  ]);

  if (empty($offices) || count($offices) <= 1) return;
  ?>
<div class="control control-office" data-move-after-department="1">
	<label for="office_id">Office</label>
	<div class="select-wrap">
		<select name="office_id" id="office_id">
			<option value="" <?php selected($selected, ''); ?>>Listings from</option>
			<?php foreach ($offices as $office): ?>
			<option value="<?php echo esc_attr($office->ID); ?>" <?php selected($selected, (string)$office->ID); ?>>
				<?php echo esc_html($office->post_title); ?>
			</option>
			<?php endforeach; ?>
		</select>
	</div>
</div>
<?php
}, 7, 2);

// =============================
// RENAME BLANK OPTIONS ("No preference") IN PH CONTROLS
// =============================
add_filter('propertyhive_search_form_controls', function($controls) {

  $map = [
    'minimum_price'    => 'Min price',
    'maximum_price'    => 'Max price',
    'minimum_bedrooms' => 'Beds',
    'property_type'    => 'Property type',
  ];

  foreach ($map as $key => $text) {
    if (empty($controls[$key]) || !is_array($controls[$key])) continue;

    // label (optional)
    $controls[$key]['label'] = $text;

    // blank option label keys used across PH versions
    $controls[$key]['blank_option'] = $text;
    $controls[$key]['data-blank-option'] = $text;

    // if options array contains blank key, update it
    if (isset($controls[$key]['options']) && is_array($controls[$key]['options'])) {
      if (array_key_exists('', $controls[$key]['options'])) {
        $controls[$key]['options'][''] = $text;
      }
    }
  }

  return $controls;
}, 999);

// =============================
// RADIUS SEARCH (postcode-only) BACKEND
// =============================
function ashtons_normalize_uk_postcode($s) {
  $s = strtoupper(trim((string)$s));
  $s = preg_replace('/\s+/', '', $s);
  return $s;
}

function ashtons_looks_like_uk_postcode($s) {
  $s = ashtons_normalize_uk_postcode($s);
  return (bool) preg_match('/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/', $s);
}

function ashtons_geocode_postcode($postcode) {
  $pc = ashtons_normalize_uk_postcode($postcode);
  if (!$pc) return null;

  $cache_key = 'ashtons_geo_' . md5($pc);
  $cached = get_transient($cache_key);
  if (is_array($cached) && isset($cached['lat'], $cached['lng'])) return $cached;

  $url = 'https://api.postcodes.io/postcodes/' . rawurlencode($pc);
  $res = wp_remote_get($url, ['timeout' => 3]);
  if (is_wp_error($res)) return null;

  $code = wp_remote_retrieve_response_code($res);
  $body = wp_remote_retrieve_body($res);
  if ($code !== 200 || !$body) return null;

  $json = json_decode($body, true);
  if (!is_array($json) || empty($json['result'])) return null;

  $lat = $json['result']['latitude'] ?? null;
  $lng = $json['result']['longitude'] ?? null;
  if (!is_numeric($lat) || !is_numeric($lng)) return null;

  $data = ['lat' => (float)$lat, 'lng' => (float)$lng];
  set_transient($cache_key, $data, 7 * DAY_IN_SECONDS);
  return $data;
}

add_action('pre_get_posts', function(WP_Query $q) {
  if (is_admin() || !$q->is_main_query()) return;
  if (!is_post_type_archive('property')) return;

  $addr = isset($_GET['address_keyword']) ? sanitize_text_field($_GET['address_keyword']) : '';
  $radius = isset($_GET['radius']) ? (float) $_GET['radius'] : 0;

  if ($radius <= 0 || $addr === '') return;
  if (!ashtons_looks_like_uk_postcode($addr)) return;

  $geo = ashtons_geocode_postcode($addr);
  if (!$geo) return;

  $q->set('ashtons_geo_lat', $geo['lat']);
  $q->set('ashtons_geo_lng', $geo['lng']);
  $q->set('ashtons_geo_radius_miles', $radius);
});

add_filter('posts_clauses', function($clauses, WP_Query $q) {
  if (is_admin() || !$q->is_main_query()) return $clauses;
  if (!is_post_type_archive('property')) return $clauses;

  $lat = $q->get('ashtons_geo_lat');
  $lng = $q->get('ashtons_geo_lng');
  $radius = $q->get('ashtons_geo_radius_miles');

  if (!is_numeric($lat) || !is_numeric($lng) || !is_numeric($radius) || $radius <= 0) {
    return $clauses;
  }

  global $wpdb;
  $lat = (float)$lat;
  $lng = (float)$lng;
  $radius = (float)$radius;

  $clauses['join'] .= $wpdb->prepare("
    INNER JOIN {$wpdb->postmeta} AS pm_lat
      ON (pm_lat.post_id = {$wpdb->posts}.ID AND pm_lat.meta_key = %s)
    INNER JOIN {$wpdb->postmeta} AS pm_lng
      ON (pm_lng.post_id = {$wpdb->posts}.ID AND pm_lng.meta_key = %s)
  ", ASHTONS_LAT_META_KEY, ASHTONS_LNG_META_KEY);

  $distance_sql = $wpdb->prepare(
    "(3959 * ACOS(
      COS(RADIANS(%f)) * COS(RADIANS(pm_lat.meta_value)) *
      COS(RADIANS(pm_lng.meta_value) - RADIANS(%f)) +
      SIN(RADIANS(%f)) * SIN(RADIANS(pm_lat.meta_value))
    ))",
    $lat, $lng, $lat
  );

  $clauses['fields'] .= ", {$distance_sql} AS ashtons_distance_miles";

  $clauses['having'] = (trim($clauses['having']) ? $clauses['having'] . " AND " : " HAVING ")
    . $wpdb->prepare(" ashtons_distance_miles <= %f ", $radius);

  $clauses['groupby'] = "{$wpdb->posts}.ID";

  return $clauses;
}, 10, 2);

add_action('pre_get_posts', function ($q) {
  if (is_admin() || !$q->is_main_query()) return;

  // PropertyHive property post type archive
  if ($q->is_post_type_archive('property')) {
    $q->set('posts_per_page', 20);
  }
}, 20);


// ==================================================
// MAP MARKERS AJAX
// ==================================================
add_action('wp_ajax_nopriv_custom_ph_map_markers', 'custom_ph_map_markers');
add_action('wp_ajax_custom_ph_map_markers', 'custom_ph_map_markers');

function custom_ph_map_markers() {
  $query_string = isset($_POST['query']) ? wp_unslash($_POST['query']) : '';
  parse_str($query_string, $qs);

  $args = [
    'post_type'      => 'property',
    'post_status'    => 'publish',
    'posts_per_page' => -1,
    'fields'         => 'ids',
    'no_found_rows'  => true,
  ];

  $tax_query  = [ 'relation' => 'AND' ];
  $meta_query = [ 'relation' => 'AND' ];

$sold_only    = !empty($qs['sold']) && $qs['sold'] === '1';
$include_sold = !empty($qs['include_sold']) && $qs['include_sold'] === '1';
$department   = !empty($qs['department']) ? sanitize_text_field($qs['department']) : '';

$sales_excluded    = ['sold', 'sold-stc'];
$lettings_excluded = ['let-agreed']; // change if your slug differs

if ($sold_only) {
  $tax_query[] = [
    'taxonomy' => 'availability',
    'field'    => 'slug',
    'terms'    => $sales_excluded,
    'operator' => 'IN',
  ];
} else {
  if ($department === 'residential-lettings') {
    if (!$include_sold) {
      $tax_query[] = [
        'taxonomy' => 'availability',
        'field'    => 'slug',
        'terms'    => $lettings_excluded,
        'operator' => 'NOT IN',
      ];
    }
  } else {
    if (!$include_sold) {
      $tax_query[] = [
        'taxonomy' => 'availability',
        'field'    => 'slug',
        'terms'    => $sales_excluded,
        'operator' => 'NOT IN',
      ];
    }
  }
}

  // -------------------------
  // Helpers
  // -------------------------
  $get_first = function($qs, $keys) {
    foreach ((array)$keys as $k) {
      if (isset($qs[$k]) && $qs[$k] !== '' && $qs[$k] !== null) return $qs[$k];
    }
    return null;
  };

  $add_tax_term = function($tax_candidates, $value) use (&$tax_query) {
    if ($value === '' || $value === null) return;

    foreach ((array)$tax_candidates as $tax) {
      if (!taxonomy_exists($tax)) continue;

      if (is_numeric($value)) {
        $tax_query[] = [
          'taxonomy' => $tax,
          'field'    => 'term_id',
          'terms'    => (int) $value,
        ];
        return;
      } else {
        $slug = sanitize_title($value);
        if (term_exists($slug, $tax)) {
          $tax_query[] = [
            'taxonomy' => $tax,
            'field'    => 'slug',
            'terms'    => $slug,
          ];
          return;
        }
      }
    }
  };

  $add_meta_exact = function($key_candidates, $value) use (&$meta_query) {
    if ($value === '' || $value === null) return;

    $or = [ 'relation' => 'OR' ];
    foreach ((array)$key_candidates as $k) {
      $or[] = [
        'key'     => $k,
        'value'   => $value,
        'compare' => '=',
      ];
    }
    $meta_query[] = $or;
  };

  $add_meta_numeric = function($key_candidates, $value, $compare) use (&$meta_query) {
    if ($value === '' || $value === null || !is_numeric($value)) return;

    $or = [ 'relation' => 'OR' ];
    foreach ((array)$key_candidates as $k) {
      $or[] = [
        'key'     => $k,
        'value'   => 0 + $value,
        'type'    => 'NUMERIC',
        'compare' => $compare,
      ];
    }
    $meta_query[] = $or;
  };

  // -------------------------
  // Department (taxonomy OR meta)
  // -------------------------
  $dept_val = $get_first($qs, ['department', 'dept']);
  if ($dept_val !== null) {
    $dept = sanitize_text_field($dept_val);

    $dept_tax_candidates = ['department', 'property_department', 'ph_department'];
    $dept_applied = false;

    foreach ($dept_tax_candidates as $tax) {
      if (taxonomy_exists($tax) && term_exists($dept, $tax)) {
        $tax_query[] = [
          'taxonomy' => $tax,
          'field'    => 'slug',
          'terms'    => $dept,
        ];
        $dept_applied = true;
        break;
      }
    }

    if (!$dept_applied) {
      $add_meta_exact(['_department','department','_property_department','property_department'], $dept);
    }
  }

  // -------------------------
  // Property type (ID or slug)
  // -------------------------
  $ptype_val = $get_first($qs, ['property_type_id', 'property_type', 'property_type_slug', 'ptype']);
  if ($ptype_val !== null) {
    $add_tax_term(['property_type', 'ph_property_type', 'property_types'], $ptype_val);

    if (is_numeric($ptype_val)) {
      $add_meta_exact(['_property_type_id','property_type_id'], (int)$ptype_val);
    } else {
      $add_meta_exact(['_property_type','property_type'], sanitize_title($ptype_val));
    }
  }

  // -------------------------
  // Availability (ID or slug)
  // -------------------------
  $avail_val = $get_first($qs, ['availability_id', 'availability', 'availability_slug']);
  if ($avail_val !== null) {
    $add_tax_term(['availability', 'ph_availability'], $avail_val);

    if (is_numeric($avail_val)) {
      $add_meta_exact(['_availability_id','availability_id'], (int)$avail_val);
    } else {
      $add_meta_exact(['_availability','availability'], sanitize_title($avail_val));
    }
  }

  // -------------------------
  // Office (ID)
  // -------------------------
  $office_val = $get_first($qs, ['office_id', 'office']);
  if ($office_val !== null && is_numeric($office_val)) {
    $add_tax_term(['office', 'offices', 'ph_office'], (int)$office_val);
    $add_meta_exact(['_office_id','office_id'], (int)$office_val);
  }

  // Negotiator (optional)
  $neg_val = $get_first($qs, ['negotiator_id', 'negotiator']);
  if ($neg_val !== null && is_numeric($neg_val)) {
    $add_tax_term(['negotiator', 'negotiators', 'ph_negotiator'], (int)$neg_val);
    $add_meta_exact(['_negotiator_id','negotiator_id'], (int)$neg_val);
  }

  // -------------------------
  // Bedrooms (EXACT)
  // -------------------------
  $beds_val = $get_first($qs, ['minimum_bedrooms', 'min_bedrooms', 'bedrooms', 'min_beds']);
  if ($beds_val !== null && is_numeric($beds_val)) {
    $beds_val = (int) $beds_val;

    $meta_query[] = [
      'relation' => 'OR',
      [
        'key'     => '_bedrooms',
        'value'   => $beds_val,
        'type'    => 'NUMERIC',
        'compare' => '=',
      ],
      [
        'key'     => 'bedrooms',
        'value'   => $beds_val,
        'type'    => 'NUMERIC',
        'compare' => '=',
      ],
      [
        'key'     => '_bedroom',
        'value'   => $beds_val,
        'type'    => 'NUMERIC',
        'compare' => '=',
      ],
      [
        'key'     => 'bedroom',
        'value'   => $beds_val,
        'type'    => 'NUMERIC',
        'compare' => '=',
      ],
    ];
  }

  // -------------------------
  // Sales prices
  // -------------------------
  $min_price = $get_first($qs, ['minimum_price', 'min_price']);
  $max_price = $get_first($qs, ['maximum_price', 'max_price']);
  if ($min_price !== null) $add_meta_numeric(['_price','price'], $min_price, '>=');
  if ($max_price !== null) $add_meta_numeric(['_price','price'], $max_price, '<=');

  // -------------------------
  // Lettings rents
  // -------------------------
  $min_rent = $get_first($qs, ['minimum_rent', 'min_rent']);
  $max_rent = $get_first($qs, ['maximum_rent', 'max_rent']);
  if ($min_rent !== null) $add_meta_numeric(['_rent','rent','_price','price'], $min_rent, '>=');
  if ($max_rent !== null) $add_meta_numeric(['_rent','rent','_price','price'], $max_rent, '<=');

  // -------------------------
  // Commercial floor area
  // -------------------------
  $min_area = $get_first($qs, ['minimum_floor_area', 'min_floor_area']);
  $max_area = $get_first($qs, ['maximum_floor_area', 'max_floor_area']);
  if ($min_area !== null) $add_meta_numeric(['_floor_area','floor_area','_internal_area','internal_area'], $min_area, '>=');
  if ($max_area !== null) $add_meta_numeric(['_floor_area','floor_area','_internal_area','internal_area'], $max_area, '<=');

  // Attach only if we added real clauses
  if (count($tax_query) > 1)  $args['tax_query']  = $tax_query;
  if (count($meta_query) > 1) $args['meta_query'] = $meta_query;

  $q = new WP_Query($args);

  $markers = [];
  foreach ($q->posts as $post_id) {
    $lat = get_post_meta($post_id, '_latitude', true);
    $lng = get_post_meta($post_id, '_longitude', true);
    if ($lat === '' || $lng === '') continue;

    $price = '';

if (function_exists('get_property')) {
  $marker_property = get_property($post_id);

  if (is_object($marker_property) && method_exists($marker_property, 'get_formatted_price')) {
    $price = html_entity_decode(
      wp_strip_all_tags($marker_property->get_formatted_price()),
      ENT_QUOTES,
      'UTF-8'
    );
  }
}

    $beds = get_post_meta($post_id, '_bedrooms', true);
    if ($beds === '') $beds = get_post_meta($post_id, 'bedrooms', true);

    $addr_1    = get_post_meta($post_id, '_address_name_number', true);
    $addr_2    = get_post_meta($post_id, '_address_street', true);
    $addr_city = get_post_meta($post_id, '_address_town', true);
    $addr_pc   = get_post_meta($post_id, '_address_postcode', true);

    $address_parts = array_filter([
      trim($addr_1 . ' ' . $addr_2),
      $addr_city,
      $addr_pc,
    ]);
    $address = implode(', ', $address_parts);

    $post_classes = get_post_class('', $post_id);
    $is_sold = in_array('availability-sold-stc', $post_classes, true) || in_array('availability-sold', $post_classes, true);

    $image = '';
    $photos_raw = get_post_meta($post_id, '_photo_urls', true);
    $photos     = maybe_unserialize($photos_raw);
    if (is_array($photos)) {
      foreach ($photos as $item) {
        if (is_array($item) && !empty($item['url'])) {
          $image = $item['url'];
          break;
        }
      }
    }

    $markers[] = [
      'id'      => (int) $post_id,
      'lat'     => (float) $lat,
      'lng'     => (float) $lng,
      'title'   => get_the_title($post_id),
      'url'     => get_permalink($post_id),
      'price'   => $price !== '' ? wp_strip_all_tags($price) : '',
      'beds'    => $beds !== '' ? (int) $beds : '',
      'address' => $address,
      'image'   => $image ? esc_url_raw($image) : '',
      'sold'    => $is_sold ? 1 : 0,
    ];
  }

  $debug = null;
  if (current_user_can('manage_options')) {
    $debug = [
      'query_string' => $query_string,
      'parsed_qs'    => $qs,
      'args'         => $args,
      'count'        => count($markers),
      'taxonomies'   => get_object_taxonomies('property', 'names'),
    ];
  }

  wp_send_json_success([
    'markers' => $markers,
    'count'   => count($markers),
    'debug'   => $debug,
  ]);
}


// ==================================================
// MAIN RESULTS QUERY TWEAKS (office, sold-only, sort)
// ==================================================
add_action('pre_get_posts', function($q) {
  if (is_admin() || !$q->is_main_query()) return;

  $pt = $q->get('post_type');
  $is_property = ($pt === 'property' || (is_array($pt) && in_array('property', $pt, true)));
  if (!$is_property) return;

  // ----------------------------
// SOLD logic (list query)
// - sold=1            => ONLY sold + sold-stc
// - sold not set:
//     - include_sold=1 => include sold + sold-stc alongside everything else
//     - default        => EXCLUDE sold + sold-stc
// ----------------------------
$sold_only    = !empty($_GET['sold']) && $_GET['sold'] === '1';
$include_sold = !empty($_GET['include_sold']) && $_GET['include_sold'] === '1';
$department   = !empty($_GET['department']) ? sanitize_text_field($_GET['department']) : '';

$sales_excluded    = ['sold', 'sold-stc'];
$lettings_excluded = ['let-agreed']; // change if your slug differs

$tax_query = (array) $q->get('tax_query');

if ($sold_only) {
  $tax_query[] = [
    'taxonomy' => 'availability',
    'field'    => 'slug',
    'terms'    => $sales_excluded,
    'operator' => 'IN',
  ];
} else {
  if ($department === 'residential-lettings') {
    if (!$include_sold) {
      $tax_query[] = [
        'taxonomy' => 'availability',
        'field'    => 'slug',
        'terms'    => $lettings_excluded,
        'operator' => 'NOT IN',
      ];
    }
  } else {
    if (!$include_sold) {
      $tax_query[] = [
        'taxonomy' => 'availability',
        'field'    => 'slug',
        'terms'    => $sales_excluded,
        'operator' => 'NOT IN',
      ];
    }
  }
}

$q->set('tax_query', $tax_query);

  // ----------------------------
  // OFFICE FILTER
  // ----------------------------
  if (!empty($_GET['office_id'])) {
    $office_id = (int) $_GET['office_id'];
    if ($office_id > 0) {
      $meta_query = (array) $q->get('meta_query');
      $meta_query[] = [
        'key'     => '_office_id',
        'value'   => $office_id,
        'compare' => '=',
        'type'    => 'NUMERIC',
      ];
      $q->set('meta_query', $meta_query);
    }
  }

  // ----------------------------
  // SORT (publish date)
  // ----------------------------
  // ----------------------------
// SORT
// ----------------------------
// ----------------------------
// SORT
// ----------------------------
$sort = isset($_GET['sort']) ? sanitize_text_field($_GET['sort']) : 'new';
$department = isset($_GET['department']) ? sanitize_text_field($_GET['department']) : '';

$is_lettings = ($department === 'residential-lettings');
$price_meta_key = $is_lettings ? '_rent' : '_price';

switch ($sort) {
  case 'old':
    $q->set('orderby', 'date');
    $q->set('order', 'ASC');
    break;

  case 'price_high':
    $q->set('meta_key', $price_meta_key);
    $q->set('orderby', 'meta_value_num');
    $q->set('order', 'DESC');
    break;

  case 'price_low':
    $q->set('meta_key', $price_meta_key);
    $q->set('orderby', 'meta_value_num');
    $q->set('order', 'ASC');
    break;

  case 'new':
  default:
    $q->set('orderby', 'date');
    $q->set('order', 'DESC');
    break;
}

}, 60);
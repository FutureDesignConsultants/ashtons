<?php
/**
* Future build kit functions and definitions - SEE /INCLUDES FOLDER FOR ALL FUNCTIONS 
*
*/

// Autoload all PHP files from /custom-functions
foreach (glob(get_template_directory() . '/custom-functions/*.php') as $file) {
    require_once $file;
}


// Gets all custom post types

add_action('init', function () {
    $cpt_files = glob(get_template_directory() . '/cpts/*.php');

    foreach ($cpt_files as $file) {
        $config = require $file;

        if (!empty($config['post_type']) && !empty($config['args'])) {
            register_post_type($config['post_type'], $config['args']);
        }
    }

    // Now register taxonomy after CPT registration
    register_taxonomy('case-study-category', 'case-studies', [
        'labels' => [
            'name' => 'Case Study Categories',
            'singular_name' => 'Case Study Category',
            'search_items' => 'Search Categories',
            'all_items' => 'All Categories',
            'edit_item' => 'Edit Category',
            'update_item' => 'Update Category',
            'add_new_item' => 'Add New Category',
            'new_item_name' => 'New Category Name',
            'menu_name' => 'Categories',
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'case-study-category'],
        'show_admin_column' => true,
    ]);

	
});


add_filter('redirect_canonical', function ($redirect_url, $requested_url) {

    $path = parse_url($requested_url, PHP_URL_PATH);

    // Match /area-guides/... but NOT exactly /area-guides/
    if (preg_match('#^/area-guides/.+#', $path)) {
        return false;
    }

    return $redirect_url;

}, 10, 2);




add_action('init', function () {
    if (!current_user_can('manage_options') || !isset($_GET['check_rules'])) {
        return;
    }

    $rules = get_option('rewrite_rules');

    echo '<pre style="padding:20px;background:#fff;">';

    foreach ($rules as $rule => $query) {
        if (strpos($rule, 'our-branches') !== false || strpos($query, 'branches') !== false) {
            echo $rule . " => " . $query . "\n";
        }
    }

    echo '</pre>';
    exit;
});

// ---------- Populate Office Dropdown ----------
add_filter('gform_pre_render_1', 'populate_office_dropdown');
add_filter('gform_pre_validation_1', 'populate_office_dropdown');
add_filter('gform_pre_submission_filter_1', 'populate_office_dropdown');
add_filter('gform_admin_pre_render_1', 'populate_office_dropdown');

function populate_office_dropdown($form) {
    foreach ($form['fields'] as &$field) {

        if ($field->type !== 'select' || $field->inputName !== 'office_branch') {
            continue;
        }

        $offices = get_posts([
            'post_type'      => 'office',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
            'orderby'        => 'title',
            'order'          => 'ASC',
        ]);

        $choices = [
            [
                'text'  => 'Choose Office',
                'value' => '',
            ],
            [
                'text'  => "I don't know",
                'value' => 'unknown',
            ],
        ];

        foreach ($offices as $office) {

           

            $choices[] = [
                'text'  => $office->post_title,
                'value' => $office->ID,
            ];
        }

        $field->choices = $choices;
    }

    return $form;
}


// ---------- Route Emails to Selected Office ----------
add_filter('gform_notification_1', 'route_contact_form_to_office', 10, 3);

function route_contact_form_to_office($notification, $form, $entry) {

    // Only modify the admin notification
    if ($notification['name'] !== 'Admin Notification') {
        return $notification;
    }

    $office_id = rgar($entry, '10'); // 👈 your dropdown field ID

    // If "Choose Office" or "I don't know"
    if (!$office_id || $office_id === 'unknown') {
        return $notification;
    }

    // Property Hive office email
    $office_email = get_post_meta($office_id, '_email_address', true);

    if (is_email($office_email)) {
        $notification['to'] = $office_email;
    }

    return $notification;
}












add_filter('gform_pre_render_4', function ($form) {

    foreach ($form['fields'] as &$field) {
        if ($field->id == 3) {
            $field->choices = [];
        }
    }

    return $form;
});

add_filter('gform_field_validation_4_3', function ($result) {
    $result['is_valid'] = true;
    return $result;
});


add_filter('gform_field_validation_5_7', function ($result, $value) {

    if ($result['is_valid'] && !empty($value)) {

        $selected = DateTime::createFromFormat('d/m/Y', $value);
        $min = new DateTime('+2 days');

        if ($selected < $min) {
            $result['is_valid'] = false;
            $result['message'] = 'Please select a date at least 2 days from today.';
        }
    }

    return $result;

}, 10, 2);

add_action('gform_enqueue_scripts_5', function () {
    ?>
    <script type="text/javascript">
    (function($){

        function applyRestrictions() {

            var $input = $('#input_5_7');

            if (!$input.length) return;

            $input.datepicker('option', {
                minDate: 2,
                beforeShowDay: function(date) {

                    var day = date.getDay();

                    // ONLY allow Mon–Fri (1–5)
                    return [(day >= 1 && day <= 5)];

                }
            });
        }

        // GF fires multiple render events — we must catch all of them
        $(document).on('gform_post_render', function(e, formId) {

            if (formId != 5) return;

            // wait for GF to finish overwriting datepicker
            setTimeout(applyRestrictions, 200);

        });

        // also apply on initial load
        $(window).on('load', function(){
            setTimeout(applyRestrictions, 300);
        });

    })(jQuery);
    </script>
    <?php
});


// Replaces Gravity Forms Submit Button

add_filter('gform_submit_button', 'custom_global_gform_submit_button', 10, 2);

function custom_global_gform_submit_button($button, $form) {
    // Original submit button ID and classes from Gravity Forms (you can adjust)
    $submit_id = 'gform_submit_button_' . $form['id'];
    $classes = 'gform_button'; // original GF class for submit buttons

        $button_class = 'green'; // default


    if ($form['id'] == 3) {
        $button_class = 'pink';
    }

    if ($form['id'] == 4) {
        $form['button']['text'] = 'Start booking';
    }

    if ($form['id'] == 5) {
        $form['button']['text'] = 'Confirm';
    }
    
    ob_start(); ?>

<?php if ($form['id'] == 5) : ?>
<p class="form-note">
	By confirming the above you agree to one of our agents to contact you and visit the property
</p>
<?php endif; ?>

<a href="#" class="cta-button <?php echo $button_class; ?> square custom-submit-button" onclick="return false;">
	<span class="cta-text"><?php echo esc_html($form['button']['text']); ?></span>
</a>

<input type="submit" id="<?php echo esc_attr($submit_id); ?>" class="<?php echo esc_attr($classes); ?>"
	value="<?php echo esc_attr($form['button']['text']); ?>"
	style="position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none;" />
<?php
    return ob_get_clean();
}








// Hides H5, H6 from WYSIWYG editor

function my_custom_tinymce_formats( $init ) {
    // Define the block formats you want to keep
    $init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Preformatted=pre';
    return $init;
}
add_filter( 'tiny_mce_before_init', 'my_custom_tinymce_formats' );


// Setup for post thumbnails
add_action('after_setup_theme', function() {
    add_theme_support('post-thumbnails');
});


// Hide WP Menu Bar when visiting front-end
// add_filter('show_admin_bar', function () {
//     return is_admin();
// });

/* :::::::::::: WYSIWYG SETTINGS ::::::::::::: */

// // Reduces amount of heading formats available to only h3 and h4
// function myformatTinyMCE($in) {
// $in['block_formats'] = "Paragraph=p;Sub Header 1=h3;Sub Header 2=h4;";
// return $in;
// }
// add_filter('tiny_mce_before_init', 'myformatTinyMCE' );


/* :::::::::::: EXCERPT SETTINGS ::::::::::::: */

//Changes length of text from get_excerpt() and adds a ... to the end

function excerpt_changes( $text ) {
	$raw_excerpt = $text;
	if ( '' == $text ) {
		//Retrieve the post content.
		$text = get_the_content(''); 
		//remove shortcode tags from the given content.
		$text = strip_shortcodes( $text );
		$text = apply_filters('the_content', $text);
		$text = str_replace(']]>', ']]&gt;', $text);

		//Regular expression that strips the header tags and their content.
		$regex = '#(<h([1-6])[^>]*>)\s?(.*)?\s?(<\/h\2>)#';
		$text = preg_replace($regex,'', $text);

		/***Change the excerpt word count.***/
		$excerpt_word_count = 30; //This is WP default.
		$excerpt_length = apply_filters('excerpt_length', $excerpt_word_count);

		/*** Change the excerpt ending.***/
		$excerpt_end = '...'; //This is the WP default.
		$excerpt_more = apply_filters('excerpt_more', '' . $excerpt_end);

		$excerpt = wp_trim_words( $text, $excerpt_length, $excerpt_more );
	}
	return apply_filters('wp_trim_excerpt', $excerpt, $raw_excerpt);
}
add_filter( 'get_the_excerpt', 'excerpt_changes', 5);


/* ::::::::::::::: COMMENTS SYSTEM REMOVAL :::::::::::: */

//Disable Built-in Wordpress comments system
function df_disable_comments_post_types_support() {
	$post_types = get_post_types();
	foreach ($post_types as $post_type) {
	   if(post_type_supports($post_type, 'comments')) {
		  remove_post_type_support($post_type, 'comments');
		  remove_post_type_support($post_type, 'trackbacks');
	   }
	}
 }
 add_action('admin_init', 'df_disable_comments_post_types_support');
 
 // Remove comments metabox from dashboard
 
 function df_disable_comments_dashboard() {
	 remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
 }
 add_action('admin_init', 'df_disable_comments_dashboard');
 
 // Remove comments page in menu
 function df_disable_comments_admin_menu() {
	 remove_menu_page('edit-comments.php');
 }
 add_action('admin_menu', 'df_disable_comments_admin_menu');
 
 // Remove comments links from admin bar
 function df_disable_comments_admin_bar() {
	 if (is_admin_bar_showing()) {
		 remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
	 }
 }
 add_action('init', 'df_disable_comments_admin_bar');
 




add_action('pre_get_posts', function ($query) {
    if (is_admin() || !$query->is_main_query()) {
        return;
    }

    if (
        isset($query->query['post_type'], $query->query['name']) &&
        $query->query['post_type'] === 'area_guide'
    ) {
        $query->set('post_type', 'area_guide');
        $query->set('tax_query', []);
    }
}, 9999);

 $selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

$meta_query = [
  [
    'key'     => '_department',
    'value'   => 'residential-sales',
    'compare' => '=',
  ],
  [
    'key'     => '_on_market',
    'value'   => 'yes',
    'compare' => '=',
  ],
];

if ($selected_office_id) {
  $meta_query[] = [
    'key'     => '_office_id',
    'value'   => $selected_office_id,
    'compare' => '=',
  ];
}

$q = new WP_Query([
  'post_type'      => 'property',
  'post_status'    => 'publish',
  'posts_per_page' => 16,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'no_found_rows'  => true,
  'meta_query'     => $meta_query,
]);

add_action('wp_footer', function () {
    ?>
    <script type="text/javascript">
    (function($){

        function hideTitle() {

            // If GF confirmation is visible for form 5
            if ($('#gform_confirmation_wrapper_5').length) {
                $('.valuation-form .title').fadeOut(200);
            }

        }

        // run on load
        $(window).on('load', hideTitle);

        // keep checking in case GF renders after
        const observer = new MutationObserver(hideTitle);

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    })(jQuery);
    </script>
    <?php
});

// Send GCLID & FBCLID URL params o gravity forms

add_filter('gform_field_value_gclid', function() {
    return $_COOKIE['gclid'] ?? '';
});

add_filter('gform_field_value_fbclid', function() {
    return $_COOKIE['fbclid'] ?? '';
});


// Instagram Dynamic Feed
add_action('wp_ajax_load_instagram_feed', 'load_instagram_feed');
add_action('wp_ajax_nopriv_load_instagram_feed', 'load_instagram_feed');

function load_instagram_feed() {

    $feed_id = intval($_GET['feed_id']);

    echo do_shortcode('[instagram-feed feed="' . $feed_id . '"]');

    wp_die();
}
<?php
/**
* Custom ACF functions
*
*/


/* :::::::::::: ACF BLOCK SETUP ::::::::::::: */

// 1. Hook into ACF field group update to scaffold block folder/files
add_action('init', function () {
    add_action('acf/update_field_group', 'handle_acf_block_group');
});

// 2. Register all ACF JSON-defined blocks with ACF (NOT core register_block_type)
add_action('acf/init', 'register_all_acf_blocks');
function register_all_acf_blocks() {
    foreach (glob(get_stylesheet_directory() . '/blocks/*/block.json') as $block_json) {
        $block_data = json_decode(file_get_contents($block_json), true);

        // Validate required field: name
        if (empty($block_data['name'])) {
            error_log("❌ Skipping block registration for invalid block.json: $block_json (missing 'name')");
            continue;
        }

        // Extract render_template from 'acf' key if present and set at top level for acf_register_block_type()
        if (isset($block_data['acf']['render_template'])) {
            $template_path = get_stylesheet_directory() . '/' . $block_data['acf']['render_template'];

            if (!file_exists($template_path)) {
                error_log("⚠️ Template file not found: $template_path");
            }

            // Set top-level key for ACF PHP registration
            $block_data['render_template'] = $template_path;

            // Optional: you can unset the nested one if you want
            // unset($block_data['acf']['render_template']);
        }

        acf_register_block_type($block_data);
        error_log("✅ Registered ACF block: " . $block_data['name']);
    }
}



// 3. Handle new ACF block creation based on field group title
function handle_acf_block_group($field_group) {
    $host = $_SERVER['HTTP_HOST'] ?? '';

    $is_local = (
        strpos($host, 'localhost') !== false ||
        strpos($host, '127.0.0.1') !== false ||
        str_ends_with($host, '.local') ||
        str_ends_with($host, '.test')
    );

    if (!$is_local) return;

    if (strpos($field_group['title'], 'Block: ') === false) return;

    $original_name = str_replace('Block: ', '', $field_group['title']);
    $block_slug = strtolower(str_replace(' ', '-', $original_name));

    $theme_dir     = get_stylesheet_directory();
    $blocks_dir    = $theme_dir . '/blocks';
    $base_block    = $blocks_dir . '/sample-block';
    $new_block     = $blocks_dir . '/' . $block_slug;
    $scss_payload  = $theme_dir . '/assets/scss/vendor/_payload.scss';

    if (is_dir($new_block)) return;

    copy_directory($base_block, $new_block);

    // Rename and replace contents
    $old_php = $new_block . '/sample-block.php';
    $new_php = $new_block . '/' . $block_slug . '.php';
    rename($old_php, $new_php);
	$php_contents = file_get_contents($new_php);

	// Replace class name and comment title
	$php_contents = str_replace('sample-block', $block_slug, $php_contents);
	$php_contents = preg_replace('/\* Block template for .*\n/', "* Block template for $original_name\n", $php_contents);

	file_put_contents($new_php, $php_contents);

    $old_scss = $new_block . '/sample-block.scss';
	$new_scss = $new_block . '/' . $block_slug . '.scss';

	// Get contents *before* renaming
	$scss_contents = file_get_contents($old_scss);

	// Replace placeholder class name
	$scss_contents = str_replace('sample-block', $block_slug, $scss_contents);

	// Save to new file
	file_put_contents($new_scss, $scss_contents);

	// Delete old file
	unlink($old_scss);


    // Update block.json
    $json_path = $new_block . '/block.json';
    if (file_exists($json_path)) {
        $block_json = json_decode(file_get_contents($json_path), true);
        $block_json['name'] = "acf/$block_slug";
        $block_json['title'] = $original_name;
        $block_json['acf']['render_template'] = "blocks/$block_slug/$block_slug.php";
        file_put_contents($json_path, json_encode($block_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }

    // Add SCSS import
    $import_line = "@import '../../../blocks/$block_slug/$block_slug';\n";
    file_put_contents($scss_payload, $import_line, FILE_APPEND | LOCK_EX);
}

// 4. Recursive directory copy helper
function copy_directory($source, $destination) {
    if (!is_dir($source)) return false;
    mkdir($destination, 0755, true);
    foreach (scandir($source) as $item) {
        if ($item === '.' || $item === '..') continue;
        $src = $source . '/' . $item;
        $dst = $destination . '/' . $item;
        is_dir($src) ? copy_directory($src, $dst) : copy($src, $dst);
    }
    return true;
}

// 5. Optional: Log when ACF is loaded
add_action('acf/init', function () {
    error_log('✅ ACF is loaded and blocks are registered');
});

// 6. Optional: Style ACF message fields in admin
add_action('acf/input/admin_head', function () {
    ?>
<style>
.acf-field.acf-field-message {
	background: #f3f4f6;
	font-size: 16px;
	font-weight: 600;
	color: #111827;
}
</style>
<?php
});


function get_block_classes() {
    $pad_top_raw   = get_field('pad-top') ?: 'default';
    $pad_btm_raw   = get_field('pad-btm') ?: 'default';
    $bg_colour     = get_field('background_colour') ?: 'white';

    $map = [
        'default'    => 'default',
        'no-pad'     => 'none',
        'small-pad'  => 'small',
        'large-pad'  => 'large',
    ];

    $pad_top = $map[$pad_top_raw] ?? 'default';
    $pad_btm = $map[$pad_btm_raw] ?? 'default';

    return implode(' ', [
        'pad-top-' . $pad_top,
        'pad-btm-' . $pad_btm,
        'bg-' . sanitize_title($bg_colour),
    ]);
}











/* :::::::::::: ACF SETTINGS::::::::::::: */

// Save ACF field groups to theme folder
add_filter('acf/settings/save_json', function () {
    return get_stylesheet_directory() . '/acf-json';
});

// Load ACF field groups from theme folder
add_filter('acf/settings/load_json', function ($paths) {
    // remove original path
    unset($paths[0]);

    // append custom path
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
});


// Google Maps field (back-end) 
function my_acf_init() {
	acf_update_setting('google_api_key', 'API_KEY');
}
add_action('acf/init', 'my_acf_init');

//Options Page
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}
if( function_exists('acf_set_options_page_title') ) {
    acf_set_options_page_title( __('Global Page Settings') );
}
<?php

return [
    'post_type' => 'area_guide',
    'args' => [
        'labels' => [
            'name' => 'Area Guides',
            'singular_name' => 'Area Guide',
            'menu_name' => 'Area Guides',
            'add_new' => 'Add Area Guide',
            'add_new_item' => 'Add New Area Guide',
            'edit_item' => 'Edit Area Guide',
            'new_item' => 'New Area Guide',
            'view_item' => 'View Area Guide',
            'search_items' => 'Search Area Guides',
            'not_found' => 'No area guides found',
            'not_found_in_trash' => 'No area guides found in Trash',
        ],
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'query_var' => true,
        'show_ui' => true,
        'show_in_rest' => false,
        'has_archive' => false,
        'rewrite' => [
            'slug' => 'area-guides',
            'with_front' => false,
        ],
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'menu_icon' => 'dashicons-location-alt',
    ],
];
<?php

return [
    'post_type' => 'branches',
    'args' => [
        'labels' => [
            'name' => 'Branches',
            'singular_name' => 'Branch',
            'add_new' => 'Add New Branch',
            'add_new_item' => 'Add New Branch',
            'edit_item' => 'Edit Branch',
            'new_item' => 'New Branch',
            'view_item' => 'View Branch',
            'search_items' => 'Search Branches',
            'not_found' => 'No branches found',
            'not_found_in_trash' => 'No branches found in Trash',
        ],
        'public' => true,
        'publicly_queryable' => true,
        'has_archive' => false,
        'rewrite' => [
            'slug' => 'find-a-branch',
            'with_front' => false,
        ],
        'query_var' => true,
        'menu_icon' => 'dashicons-building',
        'supports' => ['title'],
        'show_in_rest' => false,
    ],
];
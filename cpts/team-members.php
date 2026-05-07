<?php

// cpts/team.php

return [
    'post_type' => 'team',
    'args' => [
        'labels' => [
            'name' => 'Team Members',
            'singular_name' => 'Team Member',
            'add_new' => 'Add New Team Member',
            'add_new_item' => 'Add New Team Member',
            'edit_item' => 'Edit Team Member',
            'new_item' => 'New Team Member',
            'view_item' => 'View Team Member',
            'search_items' => 'Search Team Members',
            'not_found' => 'No team members found',
            'not_found_in_trash' => 'No team members found in Trash',
        ],
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-groups',
        'supports' => ['title'], // keep minimal, use ACF instead
        'show_in_rest' => false, // keep consistent with your setup
    ],
];
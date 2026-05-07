<?php

// cpts/cards.php

return [
    'post_type' => 'cards',
    'args' => [
        'labels' => [
            'name' => 'Cards',
            'singular_name' => 'Card',
            'add_new' => 'Add New Card',
            'add_new_item' => 'Add New Card',
            'edit_item' => 'Edit Card',
            'new_item' => 'New Card',
            'view_item' => 'View Card',
            'search_items' => 'Search Cards',
            'not_found' => 'No cards found',
            'not_found_in_trash' => 'No cards found in Trash',
        ],
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => ['title'],
        'show_in_rest' => true,
    ],
];
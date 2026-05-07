<?php

function remove_default_posts_menu() {
    remove_menu_page('edit.php');
}
add_action('admin_menu', 'remove_default_posts_menu');

return [
    'post_type' => 'blog-posts',
    'args' => [
        'labels' => [
            'name' => 'Blog posts',
            'singular_name' => 'Blog post',
        ],
        'public' => true,
        'publicly_queryable' => true,
        'has_archive' => false,
        'rewrite' => [
            'slug' => 'blog',
            'with_front' => false,
        ],
        'supports' => ['title', 'editor'],
        'menu_icon' => 'dashicons-admin-tools',
    ],
];
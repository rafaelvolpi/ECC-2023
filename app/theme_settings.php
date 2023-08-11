<?php

if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
        'menu_title' => 'Theme Settings',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => true,
        'icon_url' => get_template_directory_uri() . '/resources/images/its/ico-logo.svg',
    ]);
    acf_add_options_sub_page([
        'page_title' => 'General Settings',
        'menu_title' => 'General',
        'menu_slug' => 'general-settings',
        'parent_slug' => 'theme-general-settings',
    ]);

    acf_add_options_sub_page([
        'page_title' => 'Header settings',
        'menu_title' => 'Header ',
        'menu_slug' => 'header-settings',
        'parent_slug' => 'theme-general-settings',
    ]);

    acf_add_options_sub_page([
        'page_title' => 'Footer settings',
        'menu_title' => 'Footer ',
        'menu_slug' => 'footer-settings',
        'parent_slug' => 'theme-general-settings',
    ]);

    acf_add_options_sub_page([
        'page_title' => 'Social Media',
        'menu_title' => 'Social Media',
        'menu_slug' => 'social-media',
        'parent_slug' => 'theme-general-settings',
    ]);
    acf_add_options_sub_page([
        'page_title' => 'Gravity Forms API Keys',
        'menu_title' => 'Gravity Forms API Keys',
        'menu_slug' => 'gf-api-keys',
        'parent_slug' => 'theme-general-settings',
    ]);
    // acf_add_options_sub_page([
    //     'page_title' => 'Open Graph',
    //     'menu_title' => 'Open Graph',
    //     'menu_slug' => 'theme-open-graph-settings',
    //     'parent_slug' => 'theme-general-settings',
    // ]);
    // acf_add_options_sub_page([
    //     'page_title' => 'CookieHub Settings ',
    //     'menu_title' => 'CookieHub',
    //     'menu_slug' => 'theme-cookiehub-settings',
    //     'parent_slug' => 'theme-general-settings',
    // ]);
}

if (function_exists('acf_add_local_field_group')) {
    $generalSettings = [
        'key' => 'theme_settings_group',
        'title' => 'Theme Settings',
        'fields' => [],
        'location' => [
            0 => [
                0 => [
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'theme-general-settings',
                ],
            ],
        ],
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 0,
        'modified' => 1651518134,
    ];

    acf_add_local_field_group($generalSettings);
}






/**     ITS THEME LAYOUT SETTINGS     **/

/*
 * Change WP Login file URL using "login_url" filter hook
 * https://developer.wordpress.org/reference/hooks/login_url/
 */

/* Fix error on ACF image field */
add_action('admin_enqueue_scripts', function () {
    wp_enqueue_media();
});

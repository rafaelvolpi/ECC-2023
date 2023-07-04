<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});



/**
 * Add last item to primary menu.
 *
 *
 */

add_filter('wp_nav_menu_items', function ($nav, $args) {

    if ($args->theme_location == 'quick_navigation') {
        $nav .= '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-especial"><a role="link" class="flex" id="" href="' . get_field('ambientes_virtuais_link', 'option') . '"><span>' . get_field('ambientes_virtuais_title', 'option') . '</span><img src="' . get_template_directory_uri() . '/public/images/svg/icon/caret.svg" /></a><ul>';
        foreach (get_field('ambientes_virtuais', 'option') as $v) {
            $nav .= '<li><img src="' . $v["icon"]["sizes"]["medium"] . '"><a href="' . $v["link"] . '" class="btn">' . $v["title"] . '</a>';
            if ($v["excerpt"]) $nav .= '<p>' . $v["excerpt"] . '</p></li>';
        }
        $nav .= '</ul></li>';

        $nav .= '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-especial"><a role="link" class="flex" id="" href="' . get_field('ambientes_virtuais_link_02', 'option') . '"><span>' . get_field('ambientes_virtuais_title_02', 'option') . '</span><img src="' . get_template_directory_uri() . '/public/images/svg/icon/caret.svg" /></a><ul>';
        foreach (get_field('ambientes_virtuais_02', 'option') as $v) {
            $nav .= '<li><img src="' . $v["icon"]["sizes"]["medium"] . '"><a href="' . $v["link"] . '" class="btn">' . $v["title"] . '</a>';
            if ($v["excerpt"]) $nav .= '<p>' . $v["excerpt"] . '</p></li>';
        }
        $nav .= '</ul></li>';
    }
    return $nav;
}, 10, 2);

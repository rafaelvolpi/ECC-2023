<?php

function return_posts_array($post)
{
    return [
        'id'      => $post->ID,
        'title'   => get_the_title($post->ID),
        'image'   => get_the_post_thumbnail_url($post->ID, 'large'),
        'excerpt' => get_the_excerpt($post),
        'link' => get_permalink($post->ID),
        'categories' => array_map(function ($v) {
            return [
                'id'      => $v->term_id,
                'name'   => $v->name,
            ];
        }, get_the_terms($post->ID, 'category')),
        'date_ago' => time_elapsed_string($post->post_date),
    ];
}

function time_elapsed_string($datetime, $full = false)
{
    $now = new DateTime;
    $ago = new DateTime($datetime);
    $diff = $now->diff($ago);

    $diff->w = floor($diff->d / 7);
    $diff->d -= $diff->w * 7;

    $string = array(
        'y' => __('year'),
        'm' => __('month'),
        'w' => __('week'),
        'd' => __('day'),
        'h' => __('hour'),
        'i' => __('minute'),
        's' => __('second'),
    );
    foreach ($string as $k => &$v) {
        if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
        } else {
            unset($string[$k]);
        }
    }

    if (!$full) $string = array_slice($string, 0, 1);
    return $string ? implode(', ', $string) . __(' ago') : __('just now');
}

{{--
  Title: Notícias
  Description: Homepage News
  Category: formatting
  Icon: admin-comments
  Keywords: testimonial quote
  Mode: preview
  Align: left
  AlignWide: true
  PostTypes: page post
  SupportsAlign: false
  SupportsMode: true
  SupportsMultiple: true
  SupportsInnerBlocks: false
  SupportsColorText: false
  SupportsColorBg: false
  SupportsPadding: false
--}}

@php

function get_posts_from_category($category_id) {
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'cat' => $category_id,
    );
    $query = new WP_Query($args);
    return $query->posts;
}

$_posts = array_map('return_posts_array', get_posts_from_category(get_field('category')));

@endphp

@if (count($_posts) > 0)

<section id="{{ $block['id'] }}" class="block-{{ $block['slug'] }} relative">
    <ul class="grid grid-cols-1 gap-4 list-none">
        @foreach ($_posts as $post)
        <li class="bg-white rounded-xl hover:bg-gray-100 transition-all">
            <a href="{{ $post['link'] }}">
                <div class="p-3 flex flex-col justify-between h-full w-full">
                    <div>
                        <ul class="list-none flex flex-row gap-2 pb-3">
                        @foreach ($post['categories'] as $item)
                            <li class="tag">{{ $item['name'] }}</li>
                        @endforeach
                        </ul>
                        <h3 class="text-ecc-blue">{{ $post['title'] }}</h3>
                    </div>
                    <p class="flex justify-end items-center">
                        <img src="{{ get_template_directory_uri() }}/resources/images/svg/icon/clock.svg" class="w-3 h-3 mr-1.5"></img>
                        <span class="text-sm text-blue">{{ $post['date_ago'] }}</span>
                    </p>
                </div>
            </a>
        </li>
        @endforeach
    </ul>
</section>

@else

<div>Nenhum post encontrado</div>

@endif

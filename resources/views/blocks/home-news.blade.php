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

$_posts['featured'] = array_map('return_posts_array', get_posts(array(
    'post_type' => 'post',
    'posts_per_page' => 1,
    'meta_key' => 'featured',
    'meta_value' => '1',
)));

$_posts['default'] = array_map('return_posts_array', get_posts(array(
    'post_type' => 'post',
    'posts_per_page' => 4,
    'post__not_in' => array($_posts['featured'][0]['id']),
)));

@endphp

<section id="{{ $block['id'] }}" class="block-{{ $block['slug'] }} relative">
    <ul class="grid grid-rows-4 md:grid-cols-5 gap-4 list-none">
        <li class="row-span-4 col-span-2 bg-white rounded-xl hover:bg-gray-100 transition-all">
            <a href="{{ $_posts['featured'][0]['link'] }}">
                <img src="{{ $_posts['featured'][0]['image'] }}" class="w-full object-cover aspect-square rounded-t-lg" />
                <div class="p-3 -mt-12 flex flex-col">
                    <ul class="list-none flex flex-row gap-2">
                        @foreach ($_posts['featured'][0]['categories'] as $item)
                        <li class="tag">{{ $item['name'] }}</li>
                        @endforeach
                    </ul>
                    <h3 class="text-ecc-blue mt-7">{{ $_posts['featured'][0]['title'] }}</h3>
                    <p class="text-sm no-style pt-3">{{ $_posts['featured'][0]['excerpt'] }}</p>
                    <p class="flex justify-end items-center">
                        <img src="{{ get_template_directory_uri() }}/public/images/svg/icon/clock.svg" class="w-3 h-3 mr-1.5"></img>
                        <span class="text-sm text-blue">{{ $_posts['featured'][0]['date_ago'] }}</span>
                    </p>
                </div>
            </a>
        </li>
        @foreach ($_posts['default'] as $post)
        <li class="bg-white rounded-xl hover:bg-gray-100 transition-all col-span-3">
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
                        <img src="{{ get_template_directory_uri() }}/public/images/svg/icon/clock.svg" class="w-3 h-3 mr-1.5"></img>
                        <span class="text-sm text-blue">{{ $post['date_ago'] }}</span>
                    </p>
                </div>
            </a>
        </li>
        @endforeach
    </ul>
</section>
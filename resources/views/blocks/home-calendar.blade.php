{{--
  Title: Homepage: Calendario
  Description: Homepage News
  Category: formatting
  Icon: admin-comments
  Keywords: testimonial quote
  Mode: preview
  Align: left
  AlignWide: true
  PostTypes: page post
  SupportsAlign: left right
  SupportsMode: true
  SupportsMultiple: true
  SupportsInnerBlocks: true
  SupportsColorText: false
  SupportsColorBg: false
  SupportsPadding: true
--}}

@php

    $style = null;
    if (isset($block['style']['spacing'])) {
        foreach($block['style']['spacing']['padding'] as $k => $v) {
            if (strpos($v, "preset") > 0) {
                $v = "var(" . str_replace(["|", "var:"], ["--", "--wp--"], $v) . ")";
            }
            $style .= "padding-" . $k . ": " . $v . ";";
        }
    }

    $eventos = array_map(function ($post) {
        return [
            'id' => $post->ID,
            'title' => $post->post_title, 
            'url' => get_permalink( $post->ID ), 
            'fields' => get_fields($post->ID), 
        ];
    } ,get_posts([
        'post_type' => 'calendar',
        'numberposts' => '10'
    ]));

@endphp


<section id="{{ $block['id'] }}">
    {{-- <pre class="text-xs">{{ print_r( $evento ) }}</pre> --}}
    <div class="glide" data-glide='{
        "loop": true,
        "perView": 4
    }'>
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            @foreach ($eventos as $evento)
            
            <li class="flex flex-col rounded-xl bg-gray-100 glide__slide">
                <div class="rounded-l-xl text-left p-5 flex flex-col justify-center">
                    <div class="flex flex-row items-center justify-between">
                        @if (isset($evento['fields']['date_time']['start_date']))
                        <div class="h-16 w-24 text-base uppercase rounded-lg border border-blue/20 bg-blue/5 flex flex-col items-center justify-center">
                            <p class="{{ isset($evento['fields']['date_time']['start_hour']) ? 'border-b border-blue/40' : '' }}">
                                {{ $evento['fields']['date_time']['start_date'] }}
                            </p>
                            @if ($evento['fields']['date_time']['start_hour'])
                                <p>
                                    {{ $evento['fields']['date_time']['start_hour'] }}
                                </p>
                            @endif
                        </div>
                        @endif
                        
                        @if (isset($evento['fields']['date_time']['end_date']))
                            <img src="{{ get_template_directory_uri() }}/public/images/svg/icon/caret.svg" class="w-3 h-3 stroke-blue -rotate-90" />
                            <div class="h-16 w-24 text-base uppercase rounded-lg border border-blue/20 bg-blue/5 flex flex-col items-center justify-center">
                                <span class="{{ isset($evento['fields']['date_time']['end_hour']) ? 'border-b border-blue/40' : '' }}">
                                    {{ $evento['fields']['date_time']['end_date'] }}
                                </span>
                                @if ($evento['fields']['date_time']['end_hour'])
                                    <p>
                                        {{ $evento['fields']['date_time']['end_hour'] }}
                                    </p>
                                @endif
                            </div>
                        @endif
                    </div>
                    
                    <div>
                        <h4 class="text-blue text-left pt-5">{{ $evento['title'] }}</h4>
                        @if(isset($evento['fields']['info']))
                        <p class="text-sm text-left pt-3">
                            {{ $evento['fields']['info'] }}
                        </p>
                        @endif
                    </div>
                </li>
            @endforeach
        </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"></button>
    </div>
</section>

<style type="text/css">
  p#{{ $block['id'] }} {
    {{ $style }}
  }
</style> 
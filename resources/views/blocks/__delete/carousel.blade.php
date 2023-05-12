{{--
  Title: Header Carousel
  Description: Homepage Header Carousel
  Category: Components
  Icon: admin-comments
  Keywords: Homepage Header Carousel
  Mode: preview
  Align: right
  PostTypes: page post
  SupportsAlign: false
  SupportsMode: true
  SupportsMultiple: true
  SupportsInnerBlocks: false
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
@endphp

<section id="{{ $block['id'] }}">
@if (have_rows('slide'))
<div class="glide" data-glide='{
  "loop": true,
  "autoplay": 3000
}'>
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            @while ( have_rows('slide') ) 
                @php(the_row())
                <li class="flex flex-row rounded-xl bg-{{ get_sub_field('bg_color_color') }} glide__slide">
                    <div class="w-1/2 rounded-l-xl text-left p-10 flex flex-col gap-8 justify-center">
                        <h2 class="heading-1 text-ecc-blue">{{ get_sub_field('title') }}</h2>
                        <p>{{ get_sub_field('content') }} </p>
                        @if (get_sub_field('link'))
                            <span>
                                <a
                                href="{{ get_sub_field('link')['url'] }}"
                                class="btn btn-white"
                                >{{ get_sub_field('link')['title'] }}</a>
                            </span>
                        @endif
                    </div>
                    
                    <img
                        src="{{ get_sub_field('image')['sizes']['medium_large'] }}"
                        alt="item.image.title"
                        class="w-1/2 aspect-4/3 object-center object-cover rounded-r-xl"
                        loading="lazy"
                    />
                </li>
            @endwhile
        </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"></button>
    </div>
</div>
@endif

</section>

<style type="text/css">
  section#{{ $block['id'] }} {
    {{ $style }}
  }
</style> 
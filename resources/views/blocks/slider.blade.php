{{--
  Title: Slider
  Description: Carousel Slider
  Category: Components
  Icon: admin-comments
  Keywords: Carousel Slider
  Mode: auto
  SupportsAlign: false
  SupportsMode: true  
  SupportsColorText: false
  SupportsInnerBlocks: true
  SupportsColorBg: false
  SupportsPadding: true
  SupportsMultiple: true
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

    $config = get_field('config');
    $slides = get_field('slide');

    if ($config['autoplay']) {
        $data_glide['autoplay'] = $config['autoplay'] * 1000;
        if ($config['loop']) 
            $data_glide['loop'] = true;
    } 
    if ($config['perview']) {
        $data_glide['perView'] = $config['perview'];
    }
@endphp

<section id="{{ $block['id'] }}" class="relative w-full">
    @if ($config['template'] === "hero")
        @if (count($slides['slide']) > 1)
            <div class="glide" data-glide='{{ json_encode($data_glide) }}'>
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        @foreach ($slides['slide'] as $k => $slide)
                            <li class="flex flex-row rounded-xl bg-{{ $slide['bg_color_color'] }} glide__slide">
                                @include('partials.slider.hero')
                            </li>
                        @endforeach
                    </ul>
                </div>
                @include('partials.slider.navigation')
            </div>
        @else
            <div class="flex flex-row rounded-xl bg-{{ $slides['slide'][0]['bg_color_color'] }}">
                @foreach ($slides['slide'] as $k => $slide)
                    @include('partials.slider.hero')
                @endforeach
            </div>
        @endif
    @elseif($config['template'] === "parceiros")
        <div class="glide" data-glide='{{ json_encode($data_glide) }}'>
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    @foreach ($slides['slide'] as $k => $slide)
                        <li class="glide__slide">
                            <div class="rounded-l-xl text-left p-5 flex flex-col justify-center">
                                <div class="flex flex-row items-center justify-center  w-full">
                                    @include('partials.slider.parceiros')
                                </div>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
            @include('partials.slider.navigation')
        </div>
    @endif

</section>
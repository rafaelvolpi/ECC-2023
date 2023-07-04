{{--
  Title: Slider
  Description: Carousel Slider
  Category: Components
  Icon: admin-comments
  Keywords: Carousel Slider
  Mode: preview
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

    $data_glide = json_encode( $data_glide );
@endphp
<div class="clear-both">
<section id="{{ $block['id'] }}" class="relative">
    <div class="glide" data-glide='{{ $data_glide }}'>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                @foreach ($slides['slide'] as $k => $slide)

                    @if ($config['template'] === "hero")
                        <li class="flex flex-row rounded-xl bg-{{ $slide['bg_color_color'] }} glide__slide">
                            <div class="w-1/2 rounded-l-xl text-left p-10 flex flex-col gap-8 justify-center">
                                <h1 class="heading-1 text-ecc-blue">{{ $slide['title'] }}</h1>
                                @if ($slide['content'])
                                    <p>{{ $slide['content'] }}</p>
                                @endif
                                @if ($slide['link'])
                                    <span>
                                        <a
                                        href="{{ $slide['link']['url'] }}"
                                        class="btn btn-white"
                                        >{{ $slide['link']['title'] }}</a>
                                    </span>
                                @endif
                            </div>
                            
                            <img
                                src="{{ $slide['image']['sizes']['medium_large'] }}"
                                alt="item.image.title"
                                class="w-1/2 aspect-video object-center object-cover rounded-r-xl"
                                loading="lazy"
                            />
                        </li>
                    @elseif ($config['template'] === "parceiros")
                        <li class="glide__slide flex flex-col gap-6 justify-between items-center h-full">
                            <img
                                src="{{ $slide['image']['sizes']['medium_large'] }}"
                                alt="item.image.title"
                                class="w-3/5 aspect-video object-contain object-center"
                                loading="lazy"
                            />
                            @if ($slide['link'])
                                    <a
                                    href="{{ $slide['link']['url'] }}"
                                    class="btn btn-white"
                                    >{{ $slide['link']['title'] }}</a>
                            @endif
                        </li>
                    @endif

                @endforeach
            </ul>
        </div>

        @if (count($slides['slide']) > 1)
            @if (($config['navegacao'] == "bullets") || ($config['navegacao'] == "both"))
            <div class="glide__bullets" data-glide-el="controls[nav]">
                @foreach ($slides['slide'] as $k => $slide)
                <button class="glide__bullet" data-glide-dir="={{ $k }}"></button>
                @endforeach
            </div>
            @endif

            @if (($config['navegacao'] == "arrows") || ($config['navegacao'] == "both"))
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"></button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"></button>
            </div>
            @endif
        @endif
    </div>
</section>
</div>
<style type="text/css">
  section#{{ $block['id'] }} {
    {{ $style }}
  }
</style>
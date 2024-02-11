{{--
  Title: Timeline Slider
  Description: Timeline Slider
  Category: Components
  Icon: clock
  Keywords: Timeline Slider
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
        foreach ($block['style']['spacing']['padding'] as $k => $v) {
            if (strpos($v, 'preset') > 0) {
                $v = 'var(' . str_replace(['|', 'var:'], ['--', '--wp--'], $v) . ')';
            }
            $style .= 'padding-' . $k . ': ' . $v . ';';
        }
    }

    $config = get_field('config');

    if ($config['autoplay']) {
        $data_glide['autoplay'] = $config['autoplay'] * 1000;
        if ($config['loop']) {
            $data_glide['loop'] = true;
        }
    }

    if ($config['perview']) {
        $data_glide['perView'] = $config['perview'];
    }

@endphp

{{-- <pre>{{ print_r(get_fields()) }}</pre> --}}

<section id="{{ $block['id'] }}" class="relative w-full py-4">

    <div class="glide" data-glide='{{ json_encode($data_glide) }}'>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                @foreach (get_field('linha') as $item)
                    <li class="relative mb-6 sm:mb-0 whitespace-normal flex flex-col gap-2">
                        <div class="flex items-center">
                            <div
                                class="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
                                <svg class="w-2.5 h-2.5 text-ecc-blue-800" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <time class="block text-sm text-gray-400">{{ $item['data'] }}</time>
                            <h3 class="text-lg font-semibold text-ecc-blue">{{ $item['titulo'] }}</h3>
                            <p class="text-base text-wrap font-normal text-gray-500">{{ $item['conteudo'] }}</p>
                        </div>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"></button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"></button>
        </div>
    </div>
</section>

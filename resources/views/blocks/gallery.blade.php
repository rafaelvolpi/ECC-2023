{{--
  Title: Gallery
  Description: Image Gallery
  Category: Components
  Icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
  Keywords: Image Gallery
  Mode: auto
  SupportsMode: true
  SupportsMultiple: true
  EnqueueScript: scripts/js/fslightbox.js
--}}

@php
    $slides['slide'] = get_field('images');

    $config['navegacao'] = "arrows";

    $data_glide['autoplay'] = 3 * 1000;        
    $data_glide['loop'] = true;
    $data_glide['perView'] = 3;

    $data_glide = json_encode( $data_glide );
@endphp

<section id="{{ $block['id'] }}" class="relative">
    <div class="glide" data-glide='{{ $data_glide }}'>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                @foreach ($slides['slide'] as $k => $slide)
                    <li class="glide__slide flex flex-col gap-6 justify-between items-center h-full">
                        <a data-fslightbox="{{ $block['id'] }}" href="{{ $slide['sizes']['large'] }}"><img src="{{ $slide['sizes']['medium'] }}" /></a>
                    </li>
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

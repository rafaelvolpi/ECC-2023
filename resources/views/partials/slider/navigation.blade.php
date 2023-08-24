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
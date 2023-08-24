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
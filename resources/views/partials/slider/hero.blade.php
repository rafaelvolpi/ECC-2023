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
@if ($slide['image'])
<img
    src="{{ $slide['image']['sizes']['medium_large'] }}"
    alt="item.image.title"
    class="w-1/2 aspect-video object-center object-cover rounded-r-xl"
    loading="lazy"
/>
@endif

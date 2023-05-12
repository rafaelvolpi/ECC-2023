{{--
  Title: Popup Modal
  Description: Popup Modal
  Category: formatting
  Icon: admin-comments
  Keywords: testimonial quote
  Mode: preview
  SupportsMode: true  
  SupportsInnerBlocks: true
  SupportsMultiple: true
  EnqueueScript: scripts/js/modal.js
--}}

@php 
    if (strpos($block['content'], 'is-type-video') !== false) {
        $classes = "w-5/6 aspect-video";
    } else {
        $classes = "bg-white p-5";
    }
@endphp

@if (get_field('trigger') === 'image')
    <img class="js-modal cursor-pointer" data-modal="{{ $block['id'] }}" src="{{ get_field('image')['sizes']['medium_large'] }}" />
@elseif (get_field('trigger') === 'text')
    <a class="js-modal cursor-pointer" data-modal="{{ $block['id'] }}">{{ get_field('text') }}</a>
@else
    <button class="js-modal btn btn-blue" data-modal="{{ $block['id'] }}">{{ get_field('text') }}</button>
@endif

<div id="{{ $block['id'] }}" class="modal">
	<div class="modal-inner rounded-xl {{ $classes }}">
		<a class="js-close-modal text-4xl opacity-50 hover:opacity-100 absolute -top-8 -right-6 text-white cursor-pointer">&times;</a>
		<div class="modal-content">
            <InnerBlocks />
        </div>
	</div>
</div>

<style lang="scss">
    div#{{ $block['id'] }} .modal-content iframe {
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
    }
</style>
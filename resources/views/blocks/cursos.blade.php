{{--
  Title: Homepage: Cursos
  Description: homepage cursos
  Category: formatting
  Icon: admin-comments
  Keywords: button
  Mode: preview
  AlignWide: true
  PostTypes: page post
  SupportsAlign: true
  SupportsMode: true
  SupportsMultiple: true
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

    $cursos = get_fields()['cursos'];

@endphp

<ul class="flex gap-x-px list-none w-full">
    @foreach ($cursos as $curso)
        <li
          class="h-80 relative hover:w-1/2 scale-y-100 hover:scale-y-110 transition-all duration-300 first-of-type:rounded-l-2xl last-of-type:rounded-r-2xl overflow-hidden bg-{{ $curso['color'] }} w-1/{{ count($cursos) }}"
        >
          <a href="{{ $curso['link'] }}">
            <img
              src="{{ $curso['image']['sizes']['medium'] }}"
              class="w-full h-full object-cover aspect-square"
            />
            <div
              class="absolute p-4 top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/20"
            >
                @if ( isset($curso['title']) )
                    <h3 class="text-white">{{ $curso['title'] }}</h3>
                @endif
                @if ( isset($curso['age']) )
                    <h4 class="text-white pt-2">{{ $curso['age'] }}</h4>
                @endif
            </div>
          </a>
        </li>
        @endforeach
      </ul>

<style type="text/css">
  p#{{ $block['id'] }} {
    {{ $style }}
  }
</style> 
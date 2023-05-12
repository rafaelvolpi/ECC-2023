{{--
  Title: Single Button
  Description: Single Button
  Category: text
  Icon: button
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

@endphp

<p class="block-{{ $block['slug'] }} {{ $block['classes'] }}" id="{{ $block['id'] }}">
    <a href="{{ get_field('url') }}" class="btn btn-blue {{ get_field('estilo') }}">{{ get_field('title') }}</a>
</p>

<style type="text/css">
  p#{{ $block['id'] }} {
    {{ $style }}
  }
</style> 
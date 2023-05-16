@extends('layouts.app')
@section('content')
  @includeFirst(['partials.floating-cta', 'partials.content'])
  @while(have_posts()) @php(the_post())
    @includeFirst(['partials.content-page', 'partials.content'])
  @endwhile
@endsection

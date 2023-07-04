
@php
    $input_line = get_the_content();
    $pos = strpos($input_line, "[vc_row");
    if ($pos !== false) {
        $input_line = '<!-- wp:its/container --><div class="wp-block-its-container its-theme-container mx-auto container border-none rounded-none" style="background-color:;border-color:none"><div>' . $input_line . '</div></div><!-- /wp:its/container -->';
        preg_match('/\[agni_gallery.*img_url=\"(.*)\"\]/', $input_line, $output_array);

        $input_line = preg_replace("/\[vc_row(.*?)\]/", "", $input_line);
        $input_line = preg_replace("/\[vc_column\]/", "", $input_line);
        $input_line = preg_replace("/\[vc_column_text\]/", "<!-- wp:paragraph -->", $input_line);
        $input_line = preg_replace("/\[\/vc_row(.*?)\]/", "", $input_line);
        $input_line = preg_replace("/\[\/vc_column\]/", "", $input_line);
        $input_line = preg_replace("/\[\/vc_column_text\]/", "<!-- /wp:paragraph -->", $input_line);
        $input_line = preg_replace("/\[agni_gallery(.*?)img_url=\"(.*?)\"\]/", '<!-- wp:acf/gallery {"name":"acf/gallery","data":{"images":[$2],"_images":"field_64a463a8f6a10"},"align":"","mode":"auto"} /-->', $input_line);
        echo '<textarea class="w-screen h-screen">';
            print_r($input_line);
        echo '</textarea>';

        if ($_GET['converter']) {
            $update['ID']=get_the_ID();
            $update['post_content']=$input_line;
            echo wp_update_post($update);
        }
    }
@endphp

@extends('layouts.app')

@section('content')
  @includeFirst(['partials.floating-cta', 'partials.content'])
  @while(have_posts()) @php(the_post())
    @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
  @endwhile
@endsection

{{--
  Title: Processo de Matrícula
  Description: Apresentação dos cursos no Processo de Matrícula
  Category: formatting
  Icon: admin-comments
  Keywords: button bullet visita
  Mode: preview
  AlignWide: true
  PostTypes: page post
  SupportsAlign: false
  SupportsMode: true
  SupportsMultiple: false
  SupportsPadding: false
--}}

{{-- <pre class="text-xs h-96 overflow-auto border p-4 my-4">
@php 
    print_r($block);
@endphp
</pre> --}}

<div class="relative">
    <div class="w-1/2 py-10 px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="grid grid-cols-2 gap-2 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a class="flex justify-start items-start rounded-2xl bg-{{ $block['data']['ei_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mt-3 hover:-ml-5"><span>{{ $block['data']['ei_title'] }}</span></a>
            <a class="flex justify-end items-start rounded-2xl bg-{{ $block['data']['f1_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mt-3 hover:-mr-5"><span>{{ $block['data']['f1_title'] }}</span></a>
            <a class="flex justify-start items-end rounded-2xl bg-{{ $block['data']['em_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mb-3 hover:-ml-5"><span>{{ $block['data']['em_title'] }}</span></a>
            <a class="flex justify-end items-end rounded-2xl bg-{{ $block['data']['f2_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mb-3 hover:-mr-5"><span>{{ $block['data']['f2_title'] }}</span></a>
        </div>
        <div class="bg-white rounded-2xl h-full p-4 relative">
            <div class="text-center uppercase text-ecc-blue font-bold pt-2 pb-4">{{ $block['data']['le_title'] }}</div>
            <div>{{ $block['data']['le_content'] }}</div>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['ei_imagem'], 'medium_large')[0] }}"></div>
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['f1_imagem'], 'medium_large')[0] }}"></div>
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['em_imagem'], 'medium_large')[0] }}"></div>
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['f2_imagem'], 'medium_large')[0] }}"></div>
    </div>
</div>

<style>
    div.block-processo-matricula {
        @apply relative;
    }
</style>
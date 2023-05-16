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
  EnqueueScript: scripts/js/modal.js
  EnqueueStyle: css/modal.css
--}}

<div class="block-processo-matricula">
    <div class="w-1/2 py-10 px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="grid grid-cols-2 gap-2 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a data-modal="modal-block-processo-matricula-ei" class="js-modal flex justify-start items-start rounded-2xl bg-{{ $block['data']['ei_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mt-3 hover:-ml-5 cursor-pointer"><span>{{ $block['data']['ei_title'] }}</span></a>
            <a data-modal="modal-block-processo-matricula-f1" class="js-modal flex justify-end items-start rounded-2xl bg-{{ $block['data']['f1_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mt-3 hover:-mr-5 cursor-pointer"><span>{{ $block['data']['f1_title'] }}</span></a>
            <a data-modal="modal-block-processo-matricula-em" class="js-modal flex justify-start items-end rounded-2xl bg-{{ $block['data']['em_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mb-3 hover:-ml-5 cursor-pointer"><span>{{ $block['data']['em_title'] }}</span></a>
            <a data-modal="modal-block-processo-matricula-f2" class="js-modal flex justify-end items-end rounded-2xl bg-{{ $block['data']['f2_color']['slug'] }} uppercase py-2 px-4 text-ecc-blue font-bold transition-all mt-0 ml-0 hover:-mb-3 hover:-mr-5 cursor-pointer"><span>{{ $block['data']['f2_title'] }}</span></a>
        </div>
        <div class="bg-white rounded-2xl h-full p-6 relative">
            <h3 class="text-center uppercase text-ecc-blue font-bold pb-4">{{ $block['data']['le_title'] }}</h3>
            <div>{!! $block['data']['le_content'] !!}</div>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['ei_imagem'], 'medium_large')[0] }}"></div>
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['f1_imagem'], 'medium_large')[0] }}"></div>
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['em_imagem'], 'medium_large')[0] }}"></div>
        <div><img class="rounded-2xl aspect-video object-cover object-center" src="{{ wp_get_attachment_image_src($block['data']['f2_imagem'], 'medium_large')[0] }}"></div>
    </div>
</div>

<div id="modal-block-processo-matricula-ei" class="modal">
	<div class="modal-inner rounded-xl bg-white p-6">
		<a class="js-close-modal text-4xl opacity-50 hover:opacity-100 absolute -top-8 -right-6 text-white cursor-pointer">&times;</a>
		<div class="modal-content aspect-16/9">
            <h3 class="uppercase text-ecc-blue font-bold">{{ $block['data']['ei_title'] }}</h3>
            <div>{!! $block['data']['ei_content'] !!}</div>
        </div>
	</div>
</div>

<div id="modal-block-processo-matricula-f1" class="modal">
	<div class="modal-inner rounded-xl bg-white p-6">
		<a class="js-close-modal text-4xl opacity-50 hover:opacity-100 absolute -top-8 -right-6 text-white cursor-pointer">&times;</a>
		<div class="modal-content aspect-16/9">
            <h3 class="uppercase text-ecc-blue font-bold">{{ $block['data']['f1_title'] }}</h3>
            <div>{!! $block['data']['f1_content'] !!}</div>
        </div>
	</div>
</div>

<div id="modal-block-processo-matricula-em" class="modal">
	<div class="modal-inner rounded-xl bg-white p-6">
		<a class="js-close-modal text-4xl opacity-50 hover:opacity-100 absolute -top-8 -right-6 text-white cursor-pointer">&times;</a>
		<div class="modal-content aspect-16/9">
            <h3 class="uppercase text-ecc-blue font-bold">{{ $block['data']['em_title'] }}</h3>
            <div>{!! $block['data']['em_content'] !!}</div>
        </div>
	</div>
</div>

<div id="modal-block-processo-matricula-f2" class="modal">
	<div class="modal-inner rounded-xl bg-white p-6">
		<a class="js-close-modal text-4xl opacity-50 hover:opacity-100 absolute -top-8 -right-6 text-white cursor-pointer">&times;</a>
		<div class="modal-content aspect-16/9">
            <h3 class="uppercase text-ecc-blue font-bold">{{ $block['data']['f2_title'] }}</h3>
            <div>{!! $block['data']['f2_content'] !!}</div>
        </div>
	</div>
</div>
@php

$footer = array(
    'address' => get_field('footer_address', "option"), 
    'logo' => get_field('logo_light', "option"),
    'social' => array(
        'facebook' => get_field('facebook', "option"),
        'instagram' => get_field('instagram', "option"),
        'twitter' => get_field('youtube', "option"),
    ) 
);

@endphp

<footer class="footer bg-gray-700 text-white">
    <div class="container grid lg:grid-cols-12 gap-10 pt-16 pb-8 font-secondary">
        <div class="col-span-3">
        <img src="{{ $footer['logo']['url'] }}" class="w-32" />
      </div>
      <div class="col-span-5">
        <p class="font-bold">Endereço</p>
        {!! $footer['address'] !!}
      </div>
      <div class="col-span-4">
        <p class="font-bold">Social</p>
        <ul class="flex gap-5 pt-4">
          <li>
            <a
              href="props.social.facebook"
              target="_blank"
              class="w-8 h-8 flex items-center justify-center bg-blue-500 p-2 rounded"
            >
                <img src="{{ get_template_directory_uri() }}/public/images/svg/social/facebook-alt.svg" class="w-5 h-5" />
            </a>
          </li>
          <li class=" ">
            <a
              href="props.social.instagram"
              target="_blank"
              class="block w-8 h-8 flex items-center justify-center bg-purple-500 p-2 rounded"
            >
            <img src="{{ get_template_directory_uri() }}/public/images/svg/social/instagram.svg" class="w-5 h-5" />
        </a>
          </li>
          <li>
            <a
              href="props.social.youtube"
              target="_blank"
              class="w-8 h-8 flex items-center justify-center bg-red-500 p-2 rounded"
            >
            <img src="{{ get_template_directory_uri() }}/public/images/svg/social/youtube.svg" class="w-5 h-5" />
        </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-b border-white/10">
    <div class="container">
        @if (has_nav_menu('footer_navigation'))
            <nav class="footer-navigation" aria-label="{{ wp_get_nav_menu_name('footer_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
            </nav>
        @endif
    </div>
    <hr class="border-b border-white/10">
    <div class="copyright container flex items-center justify-between gap-10 pt-8 pb-16 text-sm">
      <div>
        ©2023 - Escola Comunitária de Campinas - Todos os direitos reservados.
        <a href="#">Políticas de privacidade</a>
      </div>
      <a href="https://rafaelvolpi.com.br" class="text-white/50"
        >Desenvolvido por IAMRAFAEL.DEV</a
      >
    </div>
  </footer>
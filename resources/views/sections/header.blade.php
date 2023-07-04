@php

$header = array(
    'logo' => get_field('logo_dark', "option"),
);

@endphp

<header class="z-50">
    <div class="bg-ecc-yellow">
        <div class="container flex justify-end items-center relative">
            @if (has_nav_menu('quick_navigation'))
                <nav class="quick-navigation" aria-label="{{ wp_get_nav_menu_name('quick_navigation') }}">
                    <p>Acesso Rápido</p>
                    {!! wp_nav_menu([
                        'theme_location' => 'quick_navigation', 
                        'menu_class' => 'nav', 
                        'echo' => false
                    ]) !!}
                </nav>
            @endif
        </div>
    </div>
    <div class="container relative flex justify-between items-center">
        <a href="{{ home_url('/') }}">
            <img src="{{ $header['logo']['url'] }}" class="w-60" alt="{!! $siteName !!}" />
        </a>
        <div class="hidden lg:block">
            @if (has_nav_menu('primary_navigation'))
                <nav class="primary-navigation" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
                    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'walker' => new AWP_Menu_Walker()]) !!}
                </nav>
            @endif
        </div>
      {{-- <div class="block lg:hidden">
        <button id="mobileMenuBtn" class="hamburger" @click="navToggle()">
          <span class="hamburger__top-bun"></span>
          <span class="hamburger__center-bun"></span>
          <span class="hamburger__bottom-bun"></span>
        </button>
      </div>
      <div
        class="container bg-white w-full overflow-y-hidden transition-all h-0 lg:hidden"
        ref="mobileMenu"
      >
        <Navigation
          class="header-navigation-mobile transition-all"
          :menu="this.$page.props.primary_menu"
        />
      </div>
    </div> --}}
  </header>
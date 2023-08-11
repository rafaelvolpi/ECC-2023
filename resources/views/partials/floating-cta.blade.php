@if (get_field('floating_cta') == "social")
<div class="fixed top-1/2 -translate-y-1/2 -right-16 uppercase -rotate-90 z-50">
    <ul class="flex gap-3 items-center text-gray-400 hover:text-gray-600 transition-all">
        <li class="">siga-nos</li>
        <li>
            <a
                href="#"
                target="_blank"
                class="w-8 h-8 flex items-center justify-center hover:bg-blue-500 bg-blue-500/50 p-2 rounded transition-all"
            >
                <img src="{{ get_template_directory_uri() }}/resources/images/svg/social/facebook-alt.svg" class="w-5 h-5 rotate-90" />
            </a>
        </li>
        <li>
            <a
                href="props.social.instagram"
                target="_blank"
                class="block w-8 h-8 flex items-center justify-center hover:bg-purple-500 bg-purple-500/50 p-2 rounded transition-all"
            >
                <img src="{{ get_template_directory_uri() }}/resources/images/svg/social/instagram.svg" class="w-5 h-5 rotate-90" />
            </a>
        </li>
        <li>
            <a
                href="props.social.youtube"
                target="_blank"
                class="w-8 h-8 flex items-center justify-center hover:bg-red-500 bg-red-500/50 p-2 rounded transition-all"
            >
                <img src="{{ get_template_directory_uri() }}/resources/images/svg/social/youtube.svg" class="w-5 h-5 rotate-90" />
            </a>
        </li>
    </ul>
</div>

@elseif (get_field('floating_cta') == "visita")

<div class="fixed top-1/2 -translate-y-1/2 right-4 z-50">
    <a href="#link-whatsapp" class="flex w-24 h-24 text-xs items-center justify-center text-center text-white rounded-full bg-gradient-to-b from-indigo-400 to-violet-800">
        <span class="uppercase leading-tight">Agende<br/> uma<br/> visita</span>
    </a>
</div>
@endif
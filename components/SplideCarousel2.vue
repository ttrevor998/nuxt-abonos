<template>
    <section>
        <section id="main-carousel" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide"><img src="public/images/1.jpg" alt=""></li>
                    <li class="splide__slide"><img src="public/images/2.jpg" alt=""></li>
                    <li class="splide__slide"><img src="public/images/3.jpg" alt=""></li>
                    <li class="splide__slide"><img src="public/images/4.jpg" alt=""></li>
                </ul>
            </div>
        </section>
        <section id="thumbnail-carousel" class="splide"
            aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <img src="public/images/1.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="public/images/2.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="public/images/3.jpg" alt="">
                    </li>
                </ul>
            </div>
        </section>

    </section>

</template>

<script setup>

import { onMounted } from 'vue';

import Splide from '@splidejs/splide';

//import ('~/assets/main.css')
//import ('~/assets/splide/dist/css/splide.min.css')

useHead({
    link: {
        rel: 'stylesheet',
        href: 'splide.min.css'
        //href:'~/assets/main.css'
    }
})

onMounted(() => {
    const script = document.createElement("script");
    script.src = "splide.min.js";
    document.body.appendChild(script);
    /*new Splide('.splide').mount();*/

    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
    });

    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
})



</script>

<style>
.splide__slide img {
    width: 100%;
    max-height: 60vh !important;
    object-fit: cover;
}
</style>
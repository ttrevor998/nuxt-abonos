<template>

    <section id="main-carousel" class="splide">
        <div class="splide__track">
            <ul class="splide__list">
                <li class="splide__slide" v-for="imgSrc in imgArray" :key="imgSrc">
                    <div class="container">
                        <img :src="imgSrc" style="max-width: 40vw; height: 100%; border-radius: 10px !important;">
                    </div>
                    
                </li>
                <!--
                <li class="splide__slide"><img src="public/images/2.jpg" alt=""></li>
                <li class="splide__slide"><img src="public/images/3.jpg" alt=""></li>
                <li class="splide__slide"><img src="public/images/4.jpg" alt=""></li>
                -->
            </ul>
        </div>
    </section>

</template>

<script setup>

import { onMounted } from 'vue';

import Splide from '@splidejs/splide';

const{imgArray}=defineProps(['imgArray'])

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
        type: 'loop',
        perPage: 4,
        perMove: 1,
        breakpoints: {
            640: {
                perPage: 1,
            },
        }
    });

    main.mount();
})

</script>

<style>
.splide__slide img {
    width: 100%;
    max-height: 60vh !important;
    object-fit: cover;
}
</style>
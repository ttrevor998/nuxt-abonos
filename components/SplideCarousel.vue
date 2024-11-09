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


const { imgArray } = defineProps(['imgArray'])


</script>

<style>
.splide__slide img {
    width: 100%;
    max-height: 60vh !important;
    object-fit: cover;
}
</style>
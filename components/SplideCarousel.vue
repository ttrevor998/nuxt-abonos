<template>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
            <div class="d-flex g-2">
                <img src="public/images/1.jpg" alt="Sample 1">
                <img src="public/images/2.jpg" alt="Sample 2">
            </div>
        </SplideSlide>
        <SplideSlide>
            <img src="public/images/2.jpg" alt="Sample 2">
        </SplideSlide>
    </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/vue-splide/css';

//import '@splidejs/vue-splide/css/skyblue';

export default defineComponent({
    components: {
        Splide,
        SplideSlide,
    },
});
</script>

<style scoped>

img{
    max-height: 60vh !important;
}
/*
.splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}*/
</style>
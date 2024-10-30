<template>
    <div class="container-fluid" style="height: auto;">
        <header class="hero text-white text-center d-flex align-items-center justify-content-center" >
            
            <video class="position-absolute w-100 h-100" style="object-fit: cover;" autoplay muted loop>
                <source src="/public/videos/2.mp4" type="video/mp4">
            </video>
            <div class="hero-content position-relative" id="banner-title">
                <h1 class="display-4 fw-bold">Cuida tu Suelo, Protege el Planeta</h1>
                <p class="lead">Compost orgánico de alta calidad para enriquecer tu jardín y proteger el medio ambiente.
                </p>
                <div class="cta-buttons mt-4">
                    <a href="#productos" class="btn btn-lg btn-success me-2">Comenzar</a>
                    <a href="#conocenos" class="btn btn-lg btn-outline-light">Saber Más</a>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>

//import { onMounted, onUpdated } from 'vue';

//const { vidSrc } = defineProps(['vidSrc'])

/*
onMounted(()=>{
    //window.location.reload()
})

onUpdated(()=>{
    //window.location.reload()
})
*/
</script>

<style scoped>

#banner-title {
    top: -10vh;
}

h1,p,a{
    color:azure !important
}

@media only screen and (max-width: 600px) {

#banner-title {
    top: -10vw;
}
}

</style>
<template>
    <div id="main-container" class="container-fluid">
        <section class="container-fluid pb-2">
            <SingleVideoBanner />
        </section>
        <section class="container-fluid position-relative" style="background: white; z-index: 100;border-radius: 20px">
            <ProductAccordion />
        </section>
        <section>
            <ProductCategories3/>
        </section>
        <!--
        <section>
            <SplideCarousel2 />
        </section>
        -->
        <section class="container-fluid mt-2">
            <AboutSection2 />
        </section>
        <section class="container-fluid">
            <TeamMembers2 />
        </section>

        <section class="container-fluid justify-content-center align-items-center p-xl-5 p-0" id="locate">

            <div class="container-fluid justify-content-center align-content-center p-xl-5 p-0 shadow-lg"
                style="width:auto; border-radius: 20px;">
                <h2 class="text-center mb-xl-5 my-2">Ubicación &amp; Horario de Atención</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.003676711243!2d-73.4964588213678!3d5.492363771142053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e402ab44e99a80b%3A0xc7a030668ee44cea!2zU2FtYWPDoSwgQm95YWPDoQ!5e0!3m2!1ses!2sco!4v1703717306363!5m2!1ses!2sco"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br>
                <p class=" lead text-center">Agende una visita</p>
            </div>
        </section>
        <section class="p-3">
            <ContactForm />
        </section>

    </div>
</template>

<script>
//import SplideCarousel from '~/components/SplideCarousel.vue';

//import { SingleVideoBanner } from '#build/components';


console.log('hit homepage')
/*
export default {
    setup () {
        

        return {}
    }
}*/
</script>

<style scoped>
/*
.main {
    display: flex !important;
    flex-direction: column !important;
}*/

#main-container {
    padding: 5vw;
}

section {
    padding: 0 !important;
    margin-top: 5vh !important;

}

p {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600 !important;
    font-style: normal;
}

@media only screen and (max-width: 600px) {

    #main-container {
        padding: 1vw;
    }


}
</style>
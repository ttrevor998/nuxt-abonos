<template>
    <section class="about-us-section bg-light py-5">
        <div class="container-fluid">
            <div class="text-center mb-5 ">
                <h1 class="display-4 fw-bold pt-3">Sobre Nosotros</h1>
                <p class="lead text-muted">Productores de humus orgánico de alta calidad</p>
                <SplideCarousel :imgArray="imgArray" />
            </div>
            <div class="row justify-content-center">
                <!-- Company Story Section -->
                <div class="col-md-8 col-lg-6 mb-4 text-center text-md-start px-4">
                    <h2 class="fw-bold">Nuestra Historia</h2>
                    <p class="text-muted">
                        Desde nuestros inicios, nos hemos comprometido a producir humus y abonos orgánicos de alta
                        calidad. Nuestro proceso de compostaje, que dura 3 meses, utiliza hojas y residuos orgánicos
                        seleccionados manualmente para asegurar que cada lote sea óptimo para el crecimiento saludable
                        de plantas.
                    </p>
                </div>
                <!-- Company Values Section -->
                <div class="col-md-8 col-lg-6 mb-4 text-center text-md-start px-4">
                    <h2 class="fw-bold">Nuestros Valores</h2>
                    <p class="text-muted">
                        Creemos en la sostenibilidad, la calidad y el respeto por el medio ambiente. Cada paso de
                        nuestro proceso está diseñado para reducir residuos y mejorar la fertilidad del suelo, brindando
                        a nuestros clientes productos que alimenten y fortalezcan sus plantas de manera natural.
                    </p>
                </div>
            </div>
            <div class="row text-center mt-5">
                <div class="col-md-3">
                    <i class="fas fa-hourglass-half fa-3x text-success mb-2"></i>
                    <h3 class="display-6 fw-bold text-success">+3 Meses</h3>
                    <p class="text-muted">Proceso de Compostaje</p>
                </div>
                <div class="col-md-3">
                    <i class="fas fa-leaf fa-3x text-success mb-2"></i>
                    <h3 class="display-6 fw-bold text-success">100% Orgánico</h3>
                    <p class="text-muted">Materiales Seleccionados</p>
                </div>
                <div class="col-md-3">
                    <i class="fas fa-recycle fa-3x text-success mb-2"></i>
                    <h3 class="display-6 fw-bold text-success">Sostenible</h3>
                    <p class="text-muted">Compromiso con el Medio Ambiente</p>
                </div>
                <div class="col-md-3">
                    <i class="fas fa-award fa-3x text-success mb-2"></i>
                    <h3 class="display-6 fw-bold text-success">Alta Calidad</h3>
                    <p class="text-muted">Resultados Comprobados</p>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

const imgArray=['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg']


</script>

<style scoped></style>
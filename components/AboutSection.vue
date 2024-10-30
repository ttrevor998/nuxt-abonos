<template>
    <div>
        <section class="container my-5">
            <div class="row">
                <!-- Texto de la izquierda -->
                <div class="col-md-4">
                    <h3>Evalúa el rendimiento de sitios competitivos</h3>
                    <ul class="list-unstyled">
                        <li class="py-2">
                            <i class="bi bi-check-circle"></i> Volumen de tráfico
                        </li>
                        <li class="py-2">
                            <i class="bi bi-check-circle"></i> Fuentes de tráfico
                        </li>
                        <li class="py-2">
                            <i class="bi bi-check-circle"></i> Tráfico en Desktop vs Móvil
                        </li>
                        <li class="py-2">
                            <i class="bi bi-check-circle"></i> Distribución geográfica
                        </li>
                        <li class="py-2">
                            <i class="bi bi-check-circle"></i> Subdominios
                        </li>
                        <li class="py-2">
                            <i class="bi bi-check-circle"></i> Principales páginas de destino
                        </li>
                    </ul>
                </div>

                <!-- Gráficos de la derecha -->
                <div class="col-md-8">

                    <NuxtImg src="/images/23.jpg" class="img-fluid mb-3" />

                    <!--
                    <div class="row" style="max-height: 50vh; overflow: hidden !important;">
                        <div class="col-6">
                            <NuxtImg src="/images/1.jpg" class="img-tes img-fluid mb-3" />
                        </div>
                        <div class="col-6">
                            <NuxtImg src="/images/2.jpg" class="img-tes img-fluid mb-3"></NuxtImg>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <NuxtImg src="/images/3.jpg" class="img-fluid"></NuxtImg>
                        </div>
                    </div>-->
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>

.img-tes{
    /*max-height: 30vh !important;*/
}
</style>
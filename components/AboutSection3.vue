<template>
    <section class="about-us-section container-fluid py-5">
        <div class="container">
            <div class="row">
                <!-- Encabezado grande -->
                <div class="col-12 text-center mb-4">
                    <h1 class="display-4 fw-bold">SOBRE NOSOTROS</h1>
                </div>

                <!-- Historia y valores -->
                <div class="col-12 col-lg-6 mb-4">
                    <h2 class="h3 fw-bold mb-3">Nuestra Historia</h2>
                    <p>Somos una empresa dedicada a la producción de humus orgánico de alta calidad. Nuestro proceso de
                        producción dura 3 meses y emplea hojas y residuos orgánicos seleccionados manualmente para
                        asegurar un producto enriquecido y beneficioso para el suelo.</p>
                </div>

                <div class="col-12 col-lg-6">
                    <h2 class="h3 fw-bold mb-3">Nuestros Valores</h2>
                    <ul>
                        <li><strong>Calidad:</strong> Nos esforzamos por producir el mejor humus orgánico, cuidando cada
                            etapa del proceso.</li>
                        <li><strong>Sostenibilidad:</strong> Utilizamos residuos orgánicos y métodos sostenibles para
                            minimizar nuestro impacto ambiental.</li>
                        <li><strong>Compromiso:</strong> Valoramos la relación con nuestros clientes y trabajamos para
                            ofrecerles un producto de excelencia.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.about-us-section {
    background-color: #f7f7f7;
    color: #333;
}

.about-us-section h1,
.about-us-section h2 {
    color: #27ae60;
    /* Ajusta a un tono verde según tu paleta */
}

.about-us-section p,
.about-us-section ul {
    font-size: 1.1rem;
    line-height: 1.6;
}

.about-us-section ul {
    list-style-type: none;
    padding: 0;
}

.about-us-section ul li {
    padding: 0.5rem 0;
}
</style>
<template>
    <div>
        <section class="container-fluid">
            <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <!-- First Carousel Item -->
                    <div class="carousel-item active text-center">
                        <img src="/public/images/21.jpg" class="img-fluid-alt" alt="Image 1">
                        <!-- Second Carousel Item -->
                    </div>
                    <div class="carousel-item text-center">
                        <img src="public/images/22.jpg" class="img-fluid-alt" alt="Image 6">
                    </div>
                    <div class="carousel-item text-center">
                        <img src="public/images/23.jpg" class="img-fluid-alt" alt="Image 6">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
</script>

<style scoped>
.img-fluid-alt {
    width:100% !important;
    /*width: 500px !important*/
}
</style>
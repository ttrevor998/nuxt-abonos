<template>
    <div id="heroCarousel" class="carousel slide hero-banner position-absolute w-100 h-100"
        style="height: auto !important; top: 0px;left: 0px;" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
            <div class="carousel-item active" style="background-image: url('/store-banner/1.jpg'); object-fit: cover">
                <div class="carousel-caption text-start">
                    <h2 class="display-3 mb-4 mb-md-5 text-light">Transforma tu Hogar con Naturaleza</h2>
                    <p class="h3 mb-4 mb-md-5 text-light">Soluciones orgánicas de compost y humus que revitalizan tus
                        plantas y cuidan el ambiente</p>
                    <div class="d-flex">
                        <div class="me-3 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                                class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>
                        <div>
                            <p class="fs-5 m-0 text-light">Fomenta el crecimiento saludable de tus plantas</p>
                        </div>
                    </div>
                    <div class="d-flex mt-2">
                        <div class="me-3 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                                class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>
                        <div>
                            <p class="fs-5 m-0 text-light">Fomenta el crecimiento saludable de tus plantas</p>
                        </div>
                    </div>

                    <!--<p><i class="fas fa-leaf me-3" style="font-size: 1.5rem;"></i> Fomenta el crecimiento saludable de tus plantas</p>-->
                    <!--<a href="#" class="btn btn-primary">Shop Now</a> -->
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('/store-banner/2.jpg');">
                <div class="carousel-caption text-start">
                    <h2 class="display-3 mb-4 mb-md-5 text-light">Title for Image 2</h2>
                    <p class="h3 mb-4 mb-md-5 text-light">Description for image 2 goes here.</p>
                    <!--<a href="#" class="btn btn-primary">Shop Now</a> -->
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('/store-banner/3.jpg');">
                <div class="carousel-caption text-start">
                    <h2 class="display-3 mb-4 mb-md-5 text-light">Title for Image 3</h2>
                    <p class="h3 mb-4 mb-md-5 text-light">Description for image 3 goes here.</p>
                    <!--<a href="#" class="btn btn-primary">Shop Now</a> -->
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-banner {
    position: relative;
    overflow: hidden;
}

.carousel-item {
    height: 90vh;
    /* Full viewport height */
    background-size: cover;
    background-position: center;
}

.carousel-caption {
    height: fit-content;
    width: 60vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: rgba(140, 202, 47, 0.514) !important;
    padding: 5vw;
    border-radius: 5px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: rgba(97, 104, 87, 0.514) !important;
    padding: 2vw;
    /*visibility: hidden;*/
    border-radius: 100%;
    /**make it round */
}

h2 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 800;
    font-style: normal;
    color: rgba(238, 255, 0, 0.849) !important;
}

@media only screen and (max-width: 600px) {

    h2 {
        font-size: 20px !important;
    }

    p {
        font-size: 16px !important;
    }

    svg{
        width: 10 !important;
    }

    #heroCarousel{
        top: 50px !important;
    }


}
</style>
<template>
    <div id="heroCarousel" class="carousel slide hero-banner w-100" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
            <div class="carousel-item active" style="background-image: url('/store-banner/1.jpg');">
                <div class="carousel-caption text-start">
                    <h2 class="display-3 mb-4 mb-md-5 text-light">Title for Image 1</h2>
                    <p class="h3 mb-4 mb-md-5 text-light">Description for image 1 goes here.</p>
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
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    
    background: rgba(140, 202, 47, 0.514) !important;
    padding: 5vw;
    border-radius: 5px;
}

.carousel-control-prev-icon,.carousel-control-next-icon{
    background-color: rgba(97, 104, 87, 0.514) !important;
    padding: 2vw;
    /*visibility: hidden;*/
    border-radius: 100%; /**make it round */
}

h2 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 800;
    font-style: normal;
    color: rgba(238, 255, 0, 0.849) !important;
}
</style>
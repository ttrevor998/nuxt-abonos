<template>

    <div class="container-fluid mt-5">
        <div class="row g-3">
            <h2 class=" lead-1 my-3">Nuestros Productos</h2>
            <div class="col-md-3">
                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head position-relative">
                        <img src="/public/images/categories/bocashi.jpg" class="card-img-top rounded-top"
                            alt="Product 1">
                        <div class="card-title-overlay">
                            <h3 class="text-white">Humus Sólido</h3>
                            <p class="description">This is a short description of Product 1.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head position-relative">
                        <img src="/public/images/categories/compost.jpg" class="card-img-top rounded-top"
                            alt="Product 2">
                        <div class="card-title-overlay">
                            <h3 class="text-white">Humus Líquido</h3>
                            <p class="description">This is a short description of Product 2.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head position-relative">
                        <img src="/public/images/categories/humus.png" class="card-img-top rounded-top" alt="Product 3">
                        <div class="card-title-overlay">
                            <h3 class="text-white">Kits de Abono</h3>
                            <p class="description">This is a short description of Product 3.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head position-relative">
                        <img src="/public/images/categories/supermagro.png" class="card-img-top rounded-top"
                            alt="Product 4">
                        <div class="card-title-overlay">
                            <h3 class="text-white">Biofábrica</h3>
                            <p class="description">This is a short description of Product 4.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    height: 300px;
    /* Set a fixed height for the card */
    overflow: hidden;
    /* Hide overflow for any content outside the card */
}

h3 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    font-style: normal;
}

.card-head {
    position: relative;
    height: 100%;
    /* Make the card head take full height */
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Ensure the image covers the card */
}

.card-title-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    /* Optional: dark background for readability */
    opacity: 0;
    /* Initially hide the overlay */
    transition: opacity 0.3s ease;
    /* Smooth transition */
}

.card:hover .card-title-overlay {
    opacity: 1;
    /* Show overlay on hover */
}

.description {
    margin-top: 10px;
    /* Space between title and description */
    color: white !important;
    /* Set description text color to white */
    display: none;
    /* Initially hide description */
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    font-style: normal;

}

.card:hover .description {
    display: block;
    /* Show description on hover */
}

@media only screen and (max-width: 600px) {

    .card-title-overlay {
        opacity: 1 !important;
        /* Show overlay on hover */
    }

    .description {
        display: block !important;
        /* Show description on hover */
    }

}
</style>
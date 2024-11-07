<template>
    <section id="team" class="container-fluid my-4 p-xl-5">
        <div id="team-container" class="container my-5 p-1 p-xl-4">
            <h2 class="text-center my-4">Nuestro Equipo</h2>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4 text-center">
                    <div class="container text-center justify-content-center d-flex">
                        <div class="card text-center p-4">
                            <img src="/public/images/team/2.jpg" class="card-img-top rounded-circle mx-auto"
                                alt="Nombre 1" style="width: 150px; height: 150px;">
                            <div class="card-body">
                                <h4 class="card-title">Claudia</h4>
                                <h5 class="card-text">Cofundadora</h5>
                                <p class="card-text">Cofundadora</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="container justify-content-center d-flex">
                        <div class="card text-center p-4">
                            <img src="/public/images/team/2.jpg" class="card-img-top rounded-circle mx-auto"
                                alt="Nombre 2" style="width: 150px; height: 150px;">
                            <div class="card-body">
                                <h4 class="card-title">Nicolás</h4>
                                <h5 class="card-text">Administrador</h5>
                                <p class="card-text">Administrador</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="container justify-content-center d-flex">
                        <div class="card text-center p-4">
                            <img src="/public/images/team/3.jpg" class="card-img-top rounded-circle mx-auto"
                                alt="Nombre 3" style="width: 150px; height: 150px;">
                            <div class="card-body">
                                <h4 class="card-title">Yudy</h4>
                                <h5 class="card-text">Trabajadora Planta</h5>
                                <p class="card-text">Trabajadora Planta</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="container justify-content-center d-flex">
                        <div class="card text-center p-4">
                            <img src="/public/images/team/2.jpg" class="card-img-top rounded-circle mx-auto"
                                alt="Nombre 4" style="width: 150px; height: 150px;">
                            <div class="card-body">
                                <h4 class="card-title">Alba</h4>
                                <h5 class="card-text">Trabajadora Planta</h5>
                                <p class="card-text">Trabajadora Planta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
#team {
    /*background-color: #f9f9f9;*/
    background: rgba(140, 202, 47, 0.89);
    border-radius: 20px;
    /* Light background color for contrast */
    padding: 40px 0;
}

#team-container {
    background: transparent !important;
}

.card {
    border: none;
    /* Remove card borders */
    transition: transform 0.2s;
    /* background: rgba(140, 202, 47, 0.89)*/
    /* Smooth hover effect */
    width: 300px ;
}

.card:hover {
    transform: scale(1.05);
    /* Slightly enlarge on hover */
}

@media only screen and (max-width: 600px) {

    #team {
        border-radius: 0px !important;
    }

    .card {
        width: 250px !important;
    }

}
</style>
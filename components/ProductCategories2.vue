<template>
    <div class="container-fluid mt-5">
        <div class="row g-3">
            <div class="col-md-3">

                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head">
                        <img src="/public/images/categories/bocashi.jpg" class="card-img-top rounded-top"
                            alt="Product 1">
                    </div>
                    <div class="card-body">
                        <h3 class="lead-4 card-title">Product 1</h3>
                        <p class="card-text">This is a short description of Product 11.</p>
                    </div>
                    <div class="card-footer border-0">
                        <NuxtLink to="/store" class="btn btn-xl border p-2">Comprar</NuxtLink>
                    </div>
                </div>


            </div>
            <div class="col-md-3">

                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head">
                        <img src="/public/images/categories/compost.jpg" class="card-img-top rounded-top"
                            alt="Product 2">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Product 2</h3>
                        <p class="card-text">This is a short description of Product 2.</p>
                    </div>
                    <div class="card-footer border-0">
                        <NuxtLink to="/store" class="btn btn-xl border p-2">Comprar</NuxtLink>
                    </div>
                </div>

            </div>
            <div class="col-md-3">

                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head">
                        <img src="/public/images/categories/humus.png" class="card-img-top rounded-top" alt="Product 3">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Product 3</h3>
                        <p class="card-text">This is a short description of Product 3.</p>
                    </div>
                    <div class="card-footer border-0">
                        <NuxtLink to="/store" class="btn btn-xl border p-2">Comprar</NuxtLink>
                    </div>
                </div>

            </div>
            <div class="col-md-3">

                <div class="card my-sm-2 my-0 border border-1">
                    <div class="card-head" style="background: url('/images/categories/supermagro.png'); background-size: cover">
                        <div class="d-none w-100 h-100">
                            <h1 class="text-light">Title</h1>
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

    transition: transform 0.3s, box-shadow 0.3s;
    height: 500px !important;
    /*border: none !important;*/
    /*
    border-left: 1px solid black !important;
    border-right: none !important;
    border-top: none !important;
    border-bottom: none !important;
    */
    /*min-height: 50vh !important;*/

}

.card-title{
    background: greenyellow ;
    width: fit-content;
    padding: 10px;
    margin-top: 5px;
}

h3{
    /*color: rgb(167, 255, 34) !important;*/
}

h3,a {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    font-style: normal;
}
p{
    /*color: white !important;*/
    font-weight: 600;
    font-style: normal;
}

.card:hover {
    border-radius: 15px;
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-left: none !important;
}

.card-footer{
    /*background: greenyellow;*/
    background: rgb(140, 202, 47) !important;
}

.card-body{
   /* background:rgb(87, 133, 20) !important; */
}


.btn {
    padding: 1vh 2vh 1vh 2vh !important;
    background: white;
}

.btn:hover {
    background: greenyellow !important;
}

.card-head {
    position: relative !important;
    overflow: hidden;
    /*height: 60% !important;*/
    height: 100% !important;
}
</style>
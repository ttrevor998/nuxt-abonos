<template>
    <div class="container-fluid my-5 shadow-lg" style="border-radius: 20px; min-height: 60vh;">
        <div class="row justify-content-between px-xl-5 py-xl-2 px-1 py-1" >

            <!-- Accordion Section -->
            <div class="col-lg-5">
                <div class="accordion" id="productAccordion">
                    <h2 class=" lead-1 my-3">Nuestros Productos</h2>
                    <p class="lead fs-4 mb-3 mb-xl-5">Nos especializamos en la producción de tres tipos de abonos orgánicos, 
                        Humus Sólido, Humus Líquido y Leonardita
                    </p>
                    <!-- Humus Sólido -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                @click="handleClick" id="1.PNG">
                                Humus Sólido
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#productAccordion">
                            <div class="accordion-body">
                                <p>Descripción de Humus Sólido...</p>
                            </div>
                        </div>
                    </div>
                    <!-- Humus Líquido -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                                @click="handleClick" id="2.PNG">
                                Humus Líquido
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#productAccordion">
                            <div class="accordion-body">
                                <p>Descripción de Humus Líquido...</p>
                            </div>
                        </div>
                    </div>
                    <!-- Leonardita -->
                    <div class="accordion-item" >
                        <h2 class="accordion-header" id="headingThree">
                            <button @click="handleClick" id="3.PNG" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Leonardita
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#productAccordion">
                            <div class="accordion-body">
                                <p>Descripción de Leonardita...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Image Section -->
            <div class="text-center container col-lg-5 align-items-center justify-content" style="border-radius: 20px;">
                <!--<NuxtImg :src="imgSrc" /> -->
                <div class="text-center" style="height: 100% ; overflow:hidden">
                    <NuxtImg :src="imgSrc" alt="Product Image" height="90%"  class="w-100"/>

                   <!-- <img id="productImage" :src="imgSrc" alt="Product Image" 
                    style="border-radius: 10px; height: 90%;"> -->
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>

export default {

    data() {
        return {
            imgSrc: "images/products/1.PNG"
        }
    }, methods: {
        handleClick(e) {
            console.log(e.target.id)
            this.imgSrc = 'images/products/' + e.target.id
        }
    }

    /*
    mounted() {
        document.getElementById('productAccordion').addEventListener('show.bs.collapse', function (event) {
            const imageMap = {
                'collapseOne': 'public/images/1.jpg',  // Humus Sólido
                'collapseTwo': 'public/images/2.jpg',  // Humus Líquido
                'collapseThree': 'public/images/3.jpg' // Leonardita
            };

            const targetId = event.target.id;
            const newImageSrc = imageMap[targetId] || '/assets/galleries/1.jpg';
            document.getElementById('productImage').src = newImageSrc;
        });

    }
        */
}


</script>

<style scoped>



</style>

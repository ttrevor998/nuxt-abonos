<template>
    <div>
        <div class="flex justify-center">
            <section>
                <HeroCarousel />
            </section>
            <section>
                <h2 class="ms-5" id="featured-title">Productos Destacados</h2>
                <FeaturedProductsCarousel v-if='featuredProducts' />
            </section>

            <div class="container-fluid overflow-hidden p-xl-5 p-sm-1">
                <div class="row gy-4 gy-lg-0 col-sm-12 mb-sm-2">
                    <div class="col-lg-3">
                        <h2 id="featured-title">Categorías</h2>
                        <ul id="button-list" class="text-decoration-none">
                            <li class="category-item"><button class="btn btn-light btn-md border active-filter" @click="handleFilter"
                                    id="Todo">
                                    Todo</button></li>
                            <li class="category-item"><button class="btn btn-light btn-md border" @click="handleFilter" id="Humus Solido">
                                    Humus Sólido</button></li>
                            <li class="category-item"><button class="btn btn-light btn-md border" @click="handleFilter" id="Humus Liquido">
                                    Humus Líquido</button></li>
                            <li class="category-item"><button class="btn btn-light btn-md border" @click="handleFilter" id="Leonardita">
                                    Leonardita</button></li>
                            <li class="category-item"><button class="btn btn-light btn-md border" @click="handleFilter" id="Biofabrica">
                                    Biofábrica</button></li>
                        </ul>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                        <div class="row">
                            <div v-for="product in products" :key="product.title" class="col-sm-12 col-lg-4">
                                <ProductCard :imgSrc="product.image" :productTitle="product.title"
                                    :productDescription="product.description"
                                    :prodPath="'/' + product.productSlug"
                                    :productCategory="product.category"
                                    :productPrice="product.price"
                                    :productDiscount="product.discount" />
                                <!--{{ product.image }}-->
                            </div>
                        </div>

                        <div class="d-flex" v-if="mainFilter === 'Todo'">
                            <div class="p-2" v-if="currentPage && parseInt(currentPage)!==0">
                                <NuxtLink class="btn btn-light border mt-5" :to="'/tienda/?page=' + previousPage" @click="handlePreviousPage">
                                    Anterior
                                </NuxtLink>
                            </div>

                            <div class="p-2" v-if="productsFetched" >
                                <NuxtLink class="btn btn-light border mt-5" :to="'/tienda/?page=' + nextPage" @click="handleNextPage">
                                    Siguiente
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
</template>

<script setup>

import { ref, computed, onUpdated, onMounted, onUnmounted, onBeforeMount } from 'vue'

useHead({
    title:'Abonera Tienda',
    link: [{
        rel: "stylesheet",
        href: "https://unpkg.com/bs-brain@2.0.4/components/blogs/blog-3/assets/css/blog-3.css"
    }, {
        rel: 'stylesheet',
        href: '/splide.min.css'
    }]
})

const products = useState('products')
const productsFetched=useState('productsFetched', ()=>false)
const mainFilter = useState('mainFilter', () => 'Todo')
const productLimit = useState('productLimit', () => 6)
const currentPage = ref(useRoute().query.page ? parseInt(useRoute().query.page) : 0)
const nextPage = computed(() => { return (parseInt(currentPage.value ?? 0) + 1) })
const previousPage = computed(() => { return (parseInt(currentPage.value) - 1) })
const featuredProducts = useState('featuredProducts', () => null)

async function handleFilter(e) {
    let category = (e.target.id).toString();
    let btn = document.getElementById(category)

    function clearBackground() {
        let buttonList = document.querySelector('#button-list')
        let nodes = Array.from(buttonList.childNodes)

        for (let i = 0; i < nodes.length; i++) {
            nodes[i].childNodes[0].className = "btn btn-light btn-md border"

        }
    }

    function assignColor(e) {
        clearBackground()
        btn.className = 'btn btn-light btn-md border active-filter'

    }

    if (category === "Todo") {
        await navigateTo('/tienda')
        window.location.reload(true)

    } else {
        assignColor()
        mainFilter.value = category
        products.value = await queryContent('products').where({ category: category }).find()
    }

}

async function handleNextPage() {
    window.scrollTo(10, 0)
    products.value = await queryContent('products').skip(parseInt(nextPage.value) * productLimit.value).limit(productLimit.value).find()
    

}

async function handlePreviousPage() {
    window.scrollTo(0, 0)
    products.value = await queryContent('products').skip(parseInt(previousPage.value) * productLimit.value).limit(productLimit.value).find()

}

onUpdated(async () => {
    window.scrollTo(0, 0)
    currentPage.value = useRoute().query.page
    productsFetched.value=products.value.length===productLimit.value
})

onBeforeMount(async()=>{
    
})


onMounted(async () => {
    window.scrollTo(0, 0)
    products.value = await queryContent('products').limit(productLimit.value).find()
    featuredProducts.value = await queryContent('products').where({ featured: true }).find()
    mainFilter.value = 'Todo'

})

onUnmounted(() => {
})

</script>

<style>
a {
    color: azure
}

.active-filter {
    background: greenyellow;
    border: 3px solid green !important;
}

#button-list{
    list-style: none;
    padding-left: 0px;
}

.category-item{
    margin-top: 5px !important;
}

#featured-title {
    background: greenyellow;
    width: fit-content;
    padding: 10px;
    margin-top: 5px;
}

@media only screen and (max-width: 600px) {

    #main-container {
        padding: 1vw;
    }

}
</style>
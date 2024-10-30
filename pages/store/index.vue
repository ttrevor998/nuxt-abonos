<template>
    <div>
        <div class="flex justify-center">

            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-12">
                        <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">Our News</h3>
                        <h2 class="display-5 mb-4 mb-md-5 text-center">Here is our blog's latest company news about
                            regularly publishing fresh content.</h2>
                        <!--<hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">-->
                        <!--VideoBanner2 /-->
                    </div>
                </div>
            </div>

            <div class="container-fluid overflow-hidden p-xl-5 p-sm-1">
                <div class="row gy-4 gy-lg-0 col-sm-12 mb-sm-2">
                    <div class="col-lg-3">
                        <ul class="border text-decoration-none">
                            <li>Humus Orgánicos</li>
                            <li>Humus Líquido</li>
                            <li>Humus Sólido</li>
                            <li>Bocacci</li>
                            <li>Leonardita</li>

                        </ul>
                    </div>
                    <div class="col-lg-9 col-sm-12">
                        <div class="row">
                            <div v-for="product in products" :key="product.title" class="col-sm-12 col-lg-4">
                                <ProductCard :imgSrc="product.image" :productTitle="product.title"
                                    :productDescription="product.description"
                                    :prodPath="'/' + product._stem.split('/')[1]" />
                                <!--{{ product.image }}-->
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="p-2" v-if="currentPage !== 0">
                                <NuxtLink :to="'/store/?page=' + previousPage" @click="handlePreviousPage">
                                    Previous
                                </NuxtLink>
                            </div>

                            <div class="p-2">
                                <NuxtLink :to="'/store/?page=' + nextPage" @click="handleNextPage">
                                    Next
                                </NuxtLink>
                            </div>
                            <button @click="handleClick">skip</button>
                        </div>


                    </div>

                </div>

                <!-- {{ article.image }} <ArticleCard  :key="article.title" v-for="article in articles" :imgSrc="article.image" /> -->


            </div>
        </div>



    </div>
    <!--<ArticleList :articles="paginatedArticles" :total="allArticles.length" />-->
    <!-- <ContentRenderer :value="data" />-->
</template>

<script setup>

import { ref, computed, onUpdated, onMounted } from 'vue'

useHead({
    link: {
        rel: "stylesheet",
        href: "https://unpkg.com/bs-brain@2.0.4/components/blogs/blog-3/assets/css/blog-3.css"
    }
})

const products = useState('products')
const limit = useState('limit', () => 6)
const currentPage = ref(useRoute().query.page ? parseInt(useRoute().query.page) : 0)
const nextPage = computed(() => { return (parseInt(currentPage.value ?? 0) + 1) })
const previousPage = computed(() => { return (parseInt(currentPage.value) - 1) })
//const skip=computed(()=>{return limit * currentPage})
/*
const skip = (page) => {
    return computed((page) => {
        if (page === 'next') {
            return limit * nextPage
        } else {
            return limit * previousPage
        }

    })
}*/

//const vidSrc=useState('vidSrc', ()=>{return  'videos/2.mp4' } )
const vidSrc = ref('videos/2.mp4')
async function handleNextPage() {
    products.value = await queryContent('products').skip(parseInt(nextPage.value) * limit.value).limit(limit.value).find()
    //articles.value = await queryContent('articles').skip(parseInt(nextPage.value)).limit(limit.value).find()
    //articles.value = await queryContent('articles').skip(skip('next')).limit(limit.value).find()
    //console.log(articles, "next-page: "+ nextPage.value)
    window.scrollTo(0, 0)

}

async function handlePreviousPage() {
    products.value = await queryContent('products').skip(parseInt(previousPage.value) * limit.value).limit(limit.value).find()
    //articles.value = await queryContent('articles').skip(skip('previous')).limit(limit.value).find()
    //articles.value = await queryContent('articles').skip(parseInt(previousPage.value)).limit(limit.value).find()
    //console.log(articles, "previous-page: "+ previousPage.value)
    window.scrollTo(0, 0)
}

onUpdated(() => {
    currentPage.value = useRoute().query.page
    window.scrollTo(0, 0)

})

onMounted(async () => {
    products.value = await queryContent('products').limit(limit.value).find()
    console.log('productsmm', products)
    console.log("currentpage-", currentPage.value)
    console.log('mounteddd')
    window.scrollTo(0, 0)

})

</script>

<style>
a {
    color: azure
}

@media only screen and (max-width: 600px) {

    #main-container {
        padding: 1vw;
    }

}
</style>
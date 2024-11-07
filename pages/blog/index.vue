<template>
    <div>
        <div class="flex justify-center mt-5">

            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-12">
                        <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">Our News</h3>
                        <h2 class="display-5 mb-4 mb-md-5 text-center">Here is our blog's latest company news about
                            regularly publishing fresh content.</h2>
                        <!--<hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">-->
                        <VideoBanner2 />
                    </div>
                </div>
            </div>

            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0">
                    <div v-for="article in articles" :key="article.title" class="col-sm-12 col-lg-4">
                        <ArticleCard :imgSrc="article.image" :articleDescription="article.description"
                            :artPath="'/' + article._stem.split('/')[1]" :toc="article.body.toc.links" />
                        <!--{{ /*Object.keys(article)*/ article.body.toc.links }}-->

                    </div>
                    <!-- {{ article.image }} <ArticleCard  :key="article.title" v-for="article in articles" :imgSrc="article.image" /> -->


                </div>

                <div class="d-flex">
                    <div class="p-2" v-if="currentPage && parseInt(currentPage) !== 0">
                        <NuxtLink class="btn btn-light border mt-5" :to="'/blog/?page=' + previousPage" @click="handlePreviousPage">
                            Anterior
                        </NuxtLink>
                    </div>

                    <div class="p-2" v-if="articlesFetched">
                        <NuxtLink class="btn btn-light border mt-5" :to="'/blog/?page=' + nextPage" @click="handleNextPage">
                            Siguiente
                        </NuxtLink>
                    </div>
                </div>
            </div>



        </div>

    </div>

</template>

<script setup>

import { ref, computed, onUpdated, onMounted } from 'vue'

useHead({
    link: {
        rel: "stylesheet",
        href: "https://unpkg.com/bs-brain@2.0.4/components/blogs/blog-3/assets/css/blog-3.css"
    }
})

const articles = useState('articles')
const articlesFetched = useState('articlesFetched', () => false)
const limit = useState('limit', () => 3)
const currentPage = ref(useRoute().query.page ? parseInt(useRoute().query.page) : 0)
const nextPage = computed(() => { return (parseInt(currentPage.value ?? 0) + 1) })
const previousPage = computed(() => { return (parseInt(currentPage.value) - 1) })

async function handleNextPage() {
    articles.value = await queryContent('articles').skip(parseInt(nextPage.value) * limit.value).limit(limit.value).find()
    //console.log(articles, "next-page: "+ nextPage.value)

}

async function handlePreviousPage() {
    articles.value = await queryContent('articles').skip(parseInt(previousPage.value) * limit.value).limit(limit.value).find()
    //console.log(articles, "previous-page: "+ previousPage.value)
}

onUpdated(async () => {
    currentPage.value = useRoute().query.page
    articlesFetched.value = articles.value.length === limit.value
    //articles.value = await queryContent('articles').limit(limit.value).find()
    window.scrollTo(0, 0)
    
})

onMounted(async () => {
    articles.value = await queryContent('articles').limit(limit.value).find()
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
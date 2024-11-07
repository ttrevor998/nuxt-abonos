<template>
    <div id="main-product-container" >
        <ContentRenderer v-if="data" :value="data">

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <!--<img :src="data.image"  class="product-img"> -->
                        <!--<NuxtImg :src="data.image" :alt="data.title" class="img-fluid product-img" /> -->
                        <SplideCarousel2 />
                    </div>
                    <div class="col-md-6">
                        <h2 class="mt-4">{{ data.title }}</h2>
                        <ul class="d-flex ps-0">
                            <li class="category" v-for="tag in data.tags" :key="tag"> {{ tag }} </li>
                            <!-- <li>{{ data.tags[1] }}</li>-->
                        </ul>
                        <p>{{ data.description }}</p>
                        <div class="rating mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <span>(4.0)</span>
                        </div>
                        <button class="btn btn-primary buy-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </ContentRenderer>

        <div v-else class="mt-5">
            <p>Content Not Found</p>
            <p>Content Not Found</p>
            <p>Content Not Found</p>
            <p>Content Not Found</p>
        </div>
    </div>
</template>

<script setup>

//console.log("slug", useRoute().params.slug[0])
const slug = (useRoute().params.slug[0]).toString()

const { data } = await useAsyncData('page-data', () => queryContent('products/' + slug).findOne())

console.log('TITTTLLEE', data.value.title)

useHead({
    link: [{
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
        integrity: 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==',
        crossorigin: 'anonymous',
        referrerpolicy: "no-referrer"
    } , {
        rel: 'stylesheet',
        href: '/splide.min.css'
        //href:'~/assets/main.css'
    }]
})

useSeoMeta({
    title: 'Abonera | ' + data.value.title,
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})



//console.log('data', data)
</script>

<style scoped>

.splide__slide img {
    width: 100%;
    max-height: 60vh !important;
    object-fit: cover;
}

.product-img {
    border-radius: 15px;
    max-width: 100%;
    height: auto;
}

.rating i {
    color: #ffcc00;
}

.buy-button {
    margin-top: 20px;
}

.category {
    text-decoration: dotted;
    width: fit-content !important;
    background: rgb(140, 202, 47) !important;
    color: white !important;
    padding: 10px !important;
    border-radius: 20px;
    margin: 10px;
}

#main-product-container {
    margin-top: 100px !important;
}
</style>
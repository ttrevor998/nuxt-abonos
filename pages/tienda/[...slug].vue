<template>
    <div id="main-product-container">
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
                        <div>
                            <PaymentButton :title="data.title" :productSlug="data.productSlug" :description="data.description" :price="data.price" />
                        </div>
                        <div class="container">
                            <!--<Comment :productSlug="data.productSlug" />-->
                            <CommentCaptcha />
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                   <Comments :pSlug="slug" />
                    <!--<CommentCaptcha />-->
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

import { onMounted } from 'vue';

//console.log("slug", useRoute().params.slug[0])
const slug = (useRoute().params.slug[0]).toString()

const { data } = await useAsyncData('page-data', () => queryContent('products/' + slug).findOne())

//console.log('TITTTLLEE', data.value.title)

useHead({
    link: [
        {
        rel: 'stylesheet',
        href: '/splide.min.css'
        //href:'~/assets/main.css'
    }],
    script:[{
        src:'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js'
    }]
})

useSeoMeta({
    title: 'Abonera | ' + data.value.title ?? 'new_title',
    ogTitle: 'Abonera',
    description: data.value.description,
    ogDescription: data.value.description,
    ogImage: '/public/images/products/1.png',
    twitterCard: 'summary_large_image',
})

onMounted(async() => {

    //const example  = await $fetch(`https://comments.temacs92.workers.dev/api/getComments?product=${slug}`)

    /*
    const response = await fetch(`https://comments.temacs92.workers.dev/api/getComments?product=${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    ).then(res=>res.json())
    */
   
    /*.then(res=>console.log(res))*/


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
<template>
    <div>
        <ContentRenderer v-if="data" :value="data">

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <!--<img :src="data.image"  class="product-img"> -->
                        <NuxtImg :src="data.image" :alt="data.title" class="img-fluid product-img" />
                    </div>
                    <div class="col-md-6">
                        <h2 class="mt-4">{{data.title}}</h2>
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

console.log("slug", useRoute().params.slug[0])
const slug = (useRoute().params.slug[0]).toString()

const { data } = await useAsyncData('page-data', () => queryContent('products/' + slug).findOne())

useHead({
    link:{
        rel:'stylesheet',
        href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
        integrity:'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==',
        crossorigin:'anonymous',
        referrerpolicy:"no-referrer"
    }
})

console.log('data', data)
</script>

<style scoped>
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
</style>
<template>
    <div>
        <ContentRenderer v-if="data" :value="data">
            <div class="container">

                <div class="row d-xl-flex d-sm-block">
                    <div class="col-xl-6 col-sm-12">
                        <NuxtImg :src="data.image" class="img-fluid" />
                        {{ data.image }}
                    </div>
                    <ContentRendererMarkdown  style="color:brown" :value="data" class="col-xl-6 col-sm-12 text-start text-decoration-none" />
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

console.log('data', data)
</script>

<style scoped >



</style>
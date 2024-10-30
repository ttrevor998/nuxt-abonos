<template>
    <div>
        <ContentRenderer v-if="data" :value="data">
            <div class="container">

                <div class="row d-xl-flex d-sm-block">
                    <div class="col-xl-4 col-sm-12">
                        <div class="container w-100" id="link-container">
                            <ul class="border border-1">
                                <li :key="link.id" v-for="link in data.body.toc.links">
                                    <a class="text-decoration-none" :href="`#${link.id}`"> {{ link.id }} </a>
                                </li>
                            </ul>
                            <!--{{ data.body.toc.links }} -->
                        </div>

                    </div>
                    <ContentRendererMarkdown  style="color:brown" :value="data" class="col-xl-8 col-sm-12 text-start text-decoration-none" />
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

console.log(useRoute().params.slug[0])
const slug = (useRoute().params.slug[0]).toString()

const { data } = await useAsyncData('page-data', () => queryContent('articles/' + slug).findOne())
</script>

<style scoped >

#link-container {
    position: sticky  !important;
    top: 70px !important;
}

body{
    color:red;
}

a{
    color: green;
    text-decoration: none;

}

</style>
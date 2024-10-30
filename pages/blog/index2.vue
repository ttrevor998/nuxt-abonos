<template>
    <div>
        <div class="flex justify-center">
            <h2 class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2">
                article
            </h2>
        </div>
        <!--<ArticleList :articles="paginatedArticles" :total="allArticles.length" />-->
    </div>
    <!-- <ContentRenderer :value="data" />-->
</template>

<script setup>
import { ref , onUpdated} from 'vue'
import getContent from '/utils/getContent';
const currentPage=useRoute().query.page
const content=await queryContent('articles')
//console.log(content.length)

//const articles=await getContent(content, currentPage)

const articles = await useAsyncData('articles', () => getContent(content, currentPage))

console.log(articles)


//const route=
/*
const currentPage=ref(useRoute().query.page)
const perPage=ref(2)
const skip=ref()*/


//console.log($route.path)
//const { data } = await useAsyncData('about', () => queryContent('/about').findOne())

//import ArticleList from '/components/ArticleList';
//const allArticles = await $content('articles').fetch();
//const { data } = await useAsyncData('article', () => queryContent('articles').find())

/*
const paginatedArticles= await queryContent('articles')
    .only(['title', 'description', 'image', 'slug', 'published'])
    //.sortBy('published', 'desc')
    .limit(2)
    .skip(1)
    .find()

console.log(route)
*/

/*
const { data } = await useAsyncData('article', () =>{
    queryContent('articles').find()
    
} )*/


//console.log(data)

/*

const paginatedArticles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'published'])
      .sortBy('published', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch();
*/


/*
export default {
  name: 'ArticleListPage',
  components: {
    ArticleList,
  },
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error);
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    };
  },
  head() {
    return {
      title: `Articles Page ${this.$route.params.page} - Learning Laravel and VueJS`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/page/${this.$route.params.page}`,
        },
      ],
    };
  },
};
*/

</script>

<style scoped></style>
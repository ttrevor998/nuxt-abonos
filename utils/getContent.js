export default async (/*$content,*/content, params) => {
    //const currentPage = parseInt(params.page);

    const currentPage = parseInt(params)

    //return content.find()
    /*
    return {
        value: currentPage
    }*/

    //const params=params
    // Set how many articles to show per page
    const perPage = 2;

    //const allArticles = await $content('articles').fetch();
    //const allArticles = await queryContent('articles').find()
    const allArticles = await content.find()

    /*
    const allArticles=await content.limit(2)
        .skip(1)
        .find()
    */

    //return allArticles

    //const totalArticles = allArticles.length;
    const totalArticles = allArticles.length


    const paginatedArticles = await content.limit(2)
        .skip(1)
        .find()
        
    return paginatedArticles

    //return [allArticles, totalArticles]

    /*
    return {
        'allArticles' :allArticles,
        'totalArticles' :totalArticles
    }*/

    // use Math.ceil to round up to the nearest whole number
    const lastPage = Math.ceil(totalArticles / perPage);

    // use the % (modulus) operator to get a whole remainder
    const lastPageCount = totalArticles % perPage === 0 ? perPage : totalArticles % perPage;

    const skipNumber = () => {
        if (currentPage === 1) {
            return 0;
        }
        if (currentPage === lastPage) {
            return totalArticles - lastPageCount;
        }
        return (currentPage - 1) * perPage;
    };

    

    /*
    const paginatedArticles = //await queryContent('articles')
        await content/*.only(['title', 'description', 'image', 'slug', 'published'])
        //.sortBy('published', 'desc')
        .limit(2)
        .skip(1)
        .find()
    */

    //return paginatedArticles

    /*
  
    const paginatedArticles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'published'])
      .sortBy('published', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch();
      */

    if (currentPage === 0 || !paginatedArticles.length) {
        //return error({ statusCode: 404, message: 'No articles found!' });
        return 'error , no articles found'
    }

    return {
        allArticles,
        paginatedArticles,
    };
};
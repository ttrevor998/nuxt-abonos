export default defineEventHandler(async(event)=>{


    //const {data}= await $fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_2pKeseEcqo2cwocTy6l1hfLfku8LV3D8YmZf9T9P")

    //we can get the query params from the api endpoint like a name param

    //const {name}=getQuery(event)

    //we can handle post requests and get the body of a post request

    //const {age}=await readBody(event)

    //get data from an api using $fetch instead of useFetch 
    //use fetch is a wrapper for $fetch 

    const {comments}= await $fetch("/api/test.json")

    return comments

    /*
    return {
        message: `hello from backend `+ name +` you are ${age} years old`
    }*/


})
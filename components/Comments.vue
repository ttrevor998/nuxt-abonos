<template>
    <div class="container mt-4">
        <h2 class="mb-4">Customer Comments</h2>

        <!-- Loading and error handling -->
        <div v-if="error" class="alert alert-danger">Failed to load comments.</div>
        <div v-else-if="!comments.length" class="text-muted">No comments available for this product.</div>

        <!-- Display comments -->
        <div v-else class="row row-cols-1 g-4">
            <div v-for="(comment, index) in comments" :key="index" class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">{{ comment.customerName }}</h5>
                        <p class="card-text">{{ comment.comment }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted,onBeforeMount, defineProps } from 'vue'

const {pSlug}= defineProps(['pSlug'])

// Define reactive properties for comments and error
const comments = ref([])
const error = ref(null)

async function fetchComments(slug) {
    try {
        const response = await fetch(`https://comments.temacs92.workers.dev/api/getComments?product=${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        let parsed= await response.json()
        comments.value=parsed.data.results

        /*
        .then(res=>res.json())
        .then(res=>comments.value=Array.from(res.data.results))
        */

        console.log("comments",comments.value)

        // Check if response is okay, then parse JSON
        if (!response.ok) {
            throw new Error('Failed to fetch comments')
        }

        // Update comments array with the response
        //
        //console.log(pSlug, comments.value)
    } catch (err) {
        // Set error if the API call fails
        error.value = err.message
    }
}

// Get product slug and fetch comments when component mounts

onBeforeMount(() => {
    fetchComments(pSlug)
})
</script>

<style scoped>
.card {
    border-radius: 8px;
    transition: box-shadow 0.2s;
}

.card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-weight: bold;
}

.card-text {
    color: #555;
}
</style>
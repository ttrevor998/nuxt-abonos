<template>
    <form @submit.prevent="submitComment" class="container my-4">
        <div class="row mb-3">
            <div class="col-12">
                <label for="customerName" class="form-label">Nombre</label>
                <input type="text" v-model="customerName" id="customerName" class="form-control"
                    placeholder="Enter the title" required />
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <label for="comment" class="form-label">Comment</label>
                <textarea v-model="comment" id="comment" class="form-control" placeholder="Enter your comment" required
                    rows="3"></textarea>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <NuxtTurnstile :key="selectedLanguage" v-model="token"
                    :options="{ action: 'vue', language: selectedLanguage }" />
            </div>
        </div>

        <div class="row">
            <div class="col-12 d-flex">
                <!--<input type="submit">-->
                <button type="submit" class="btn btn-primary w-100">Submit Comment</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center mt-2">
                <p v-if="message" class="mt-2">{{ message }}</p>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const customerName = ref('')
const comment = ref('')
const message = ref('')
const selectedLanguage = ref('es')
const token = ref()

const { productSlug } = defineProps(['productSlug'])

async function submitComment() {
    try {

        let validate = await $fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                token: token.value,
            },
        })

        console.log('validate', validate)
        
        if (validate.success) {
            const response = await fetch('https://comments.temacs92.workers.dev/api/addComment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customerName: customerName.value,
                    comment: comment.value,
                    productSlug: productSlug
                })
            });

            const result = await response.json();
            message.value = result.data;

        } else {
            console.error("Error submitting comment:", error);
            message.value = 'There was an error submitting your comment.';
        }

    } catch (error) {
        console.error("Error submitting comment:", error);
        message.value = 'There was an error submitting your comment.';
    }
}


</script>

<style scoped>
/* Optional styling */
</style>
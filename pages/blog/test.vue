<template>
    <div>
        <h1>{{ data.title }}</h1>
    </div>
</template>

<script setup>
    const { data } = await useAsyncData('page-data', () => queryContent('articles').findOne())
</script>

<style lang="scss" scoped>

</style>
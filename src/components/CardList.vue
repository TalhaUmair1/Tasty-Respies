<template>
    <div class="flex flex-wrap justify-center gap-4">
        <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script setup>
const { posts } = defineProps({
    posts: Array
})
</script>

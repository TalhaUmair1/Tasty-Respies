<template>
    <div class="flex flex-wrap gap-8 justify-center mt-4 mb-4">
        <CategoriesCard v-for="category in categories" :key="category.id" :category="category" />
    </div>
</template>

<script setup>

const { categories } = defineProps({
    categories: Array
})
</script>

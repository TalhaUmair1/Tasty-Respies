<template>
    <div class="flex flex-wrap gap-8 justify-center mt-4 mb-4">
        <CategoriesCard v-for="category in categories" :key="category.id" :category="category" />
    </div>
</template>

<script setup>
const categories = [
    {
        id: 1,
        image: '/public/breakfast.jpeg',
        title: 'Breakfast'
    },
    {
        id: 2,
        image: '/public/breakfast.jpeg',
        title: 'Lunch'
    },
    {
        id: 3,
        image: '/public/breakfast.jpeg',
        title: 'Dinner'
    },
    {
        id: 4,
        image: '/public/breakfast.jpeg',
        title: 'Snacks'
    },

]
</script>

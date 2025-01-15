<template>
    <div class="bg-pink-500 text-white text-center py-20">
        <h1 class="text-3xl font-bold">Easy Recipes</h1>
    </div>
    <div>
        <CategoriesCardList :categories="categories.items" />
    </div>
</template>

<script setup>

import pb from '../utils/pocketClient';
const categories = ref({})
const getCategories = async () => {
    const data = await pb.collection('categories').getList(1, 10)
    console.log(data)
    categories.value = data
}

onMounted(async () => {
    await getCategories()
})


</script>

<template>
    <div>
        <div class="bg-pink-500 text-white text-center py-20">
            <h1 class="text-3xl font-bold"> Recipes</h1>
        </div>
    </div>
    <div class="flex">
        <Sidebar :categories="categories" @filterCategory="getPosts(category = $event, search = '')"
            v-if="categories.length" @searchMeal="getPosts('', search = $event)" />
        <CardList :posts="posts.items"></CardList>
    </div>
</template>

<script setup>
import pb from '../utils/pocketClient';
const posts = ref({})
const categories = ref([])
const getPosts = async (category = "", search = "") => {
    const data = await pb.collection('recipeList').getList(1, 10, {
        expand: 'category',
        filter: category && `category.id="${category}"` || search && `title~"${search}"`
    })
    console.log(data)
    posts.value = data
}
const getCategories = async () => {
    const data = await pb.collection('categories').getFullList()
    console.log(data)
    categories.value = data
}

onMounted(async () => {
    await getPosts()
    await getCategories()
})


</script>

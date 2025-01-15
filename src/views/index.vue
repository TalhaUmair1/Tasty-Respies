<template>
    <div>
        <hero-section />
        <CardList :posts="posts.items" />
    </div>
</template>

<script setup>
import pb from '../utils/pocketClient';
const posts = ref([])
const getPosts = async () => {
    const data = await pb.collection('recipeList').getList(1, 10, {
        expand: 'category',
    })
    console.log(data)
    posts.value = data
}

onMounted(async () => {
    await getPosts()
})

</script>

<template>
    <div class="pt-36 flex flex-col items-center bg-purple-50">
        <img class=" w-full
       md:w-1/2  object-cover" :src="getImage(recipe.id, recipe.image)" alt="" />
        <div class="text-start mb-24">
            <h1 class="text-4xl text-black font-semibold my-9">{{ recipe.title }}</h1>
        </div>
    </div>
    <div class="flex justify-center items-center  text-center  bg-pink-100  my-10">
        <div class="p-4 rounded-lg h-auto">
            <h2 class="font-bold text-xl mb-2">{{ recipe.title }}</h2>
            <p class="text-gray-700 text-base mb-4">{{ recipe.description }}</p>
            <div class="flex justify-between text-sm text-green-500">
                <!-- <span>{{ recipe.expand.category.name }}</span> -->
                <span class="text-gray-500 mx-5 ">{{ recipe.likes }}</span>
            </div>
        </div>
    </div>


</template>

<script setup>
import pb from "../../utils/pocketClient"


const route = useRoute()

const id = route.params.id

const recipe = ref({})


const recipeDetail = async () => {
    const data = await pb.collection('recipes').getOne(id)
    console.log(data)
    recipe.value = data
}


const getImage = (id, imageId) => {
    return `${import.meta.env.VITE_API_URL}/api/files/recipes/${id}/${imageId}`
}

onMounted(async () => {
    await recipeDetail()
})

</script>

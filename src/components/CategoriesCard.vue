<template>
    <div>
        <div class="mb-10 ">
            <img :src="getImage(category.id, category.image)" alt="Breakfast"
                class=" w-[320px] h-60 rounded-lg object-cover">
            <div class="-mt-12 ml-4 ">
                <span class="bg-pink-500 text-white font-bold py-2  px-4 rounded">{{ category.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { category } = defineProps({
    category: Object
})

const getImage = (id, imageId) => {
    return `${import.meta.env.VITE_API_URL}/api/files/categories/${id}/${imageId}?thumb=300x300`

}
</script>

<template>
    <div>
        <div class="mb-10 ">
            <img :src="category.image" alt="Breakfast" class=" w-[320px] h-60 rounded-lg object-cover">
            <div class="-mt-20 ml-4 ">
                <button class="bg-pink-500 text-white font-bold py-2 px-4 rounded">{{ category.title }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { category } = defineProps({
    category: Object
})
</script>

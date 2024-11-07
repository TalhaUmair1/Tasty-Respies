<template>
    <div class=" rounded-lg  overflow-hidden w-80 p-4">
        <img :src="post.image" alt="Pizza Pepperoni" class="w-full h-40 rounded-lg object-cover mb-4">
        <div class="p-4 rounded-lg bg-slate-200">
            <h2 class="font-bold text-xl mb-2">{{ post.title }}</h2>
            <p class="text-gray-700 text-base mb-4">{{ post.description }}</p>
            <div class="flex justify-between text-sm text-green-500">
                <span>{{ post.category }}</span>
                <span class="text-gray-500">{{ post.price }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { post } = defineProps({
    post: Object
})
const categories = [
    "Recipes",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
    "Christmas",
    "Snacks",
    "Cakes",
    "Cookies",
    "Scones",
    "Condiments",
    "Bread",
    "Soups",
    "Dinner Ideas",
    "Air Fryer",
    "Slow Cooker",
    "Meal Ideas",
    "Pasta Recipes",
    "One Pot Meals",
    "Chicken",
    "Beef",
    "Lamb",
    "Pork",
    "Seafood",
    "Vegetables",
    "Recipes",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
    "Christmas",
    "Snacks",
    "Cakes",
    "Cookies",
    "Scones",
    "Condiments",
    "Bread",
    "Soups",
    "Dinner Ideas",
    "Air Fryer",
    "Slow Cooker",
    "Meal Ideas",
    "Pasta Recipes",
    "One Pot Meals",
    "Chicken",
    "Beef",
    "Lamb",
    "Pork",
    "Seafood",
    "Vegetables",
    "Recipes",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
    "Christmas",
    "Snacks",
    "Cakes",
    "Cookies",
    "Scones",
    "Condiments",
    "Bread",
    "Soups",
    "Dinner Ideas",
    "Air Fryer",
    "Slow Cooker",
    "Meal Ideas",
    "Pasta Recipes",
    "One Pot Meals",
    "Chicken",
    "Beef",
    "Lamb",
    "Pork",
    "Seafood",
    "Vegetables",
    "Recipes",
    "Recipes"
]
</script>

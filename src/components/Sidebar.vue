<template>
    <div class="w-64 p-4 bg-white rounded-lg shadow-md h-screen">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Meals</h2>
            <a href="#" class="text-blue-600">Advanced</a>
        </div>


        <div>
            <label class="text-sm font-semibold mb-2 block" for="search">Search Meal</label>
            <div class="relative mb-4">
                <input type="text" id="search" placeholder="Search meal..." @input="searchMeal($event)"
                    class="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 20l-6-6 6-6m4 12l6-6-6-6" />
                </svg>
            </div>


            <ul class="space-y-2">

                <li class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                    v-for="category in filteredCategory" :key="category.id">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-egg-fried w-5 h-5 mr-3 text-yellow-500"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M8 1.12a4.746 4.746 0 0 1 3.191 1.305c1.333.946 2.96 1.532 4.376 2.225a.528.528 0 0 1 .266.7c-1.295 2.748-3.696 4.904-6.578 5.468-2.883.564-5.882-.234-7.946-2.176a.527.527 0 0 1-.128-.566c.928-1.955 2.43-3.625 4.128-5.053A4.754 4.754 0 0 1 8 1.12zM8 0C3.582 0 0 3.582 0 8c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8s-3.582-8-8-8zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                        </svg>
                        <a href="#" @click.prevent="selectCategory(category.id)" class="text-sm font-medium">{{
                            category.name
                        }}</a>
                    </div>
                    <span class="text-gray-500 text-xs">12</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
const { categories } = defineProps({
    categories: Array
})
const filteredCategory = ref(categories)
const emit = defineEmits(['filterCategory', 'searchMeal'])
const selectCategory = (category) => {
    console.log(category)
    emit('filterCategory', category)
}
const searchMeal = (e) => {
    setTimeout(() => {
        emit('searchMeal', e.target.value)

    }, 1000)
}
</script>

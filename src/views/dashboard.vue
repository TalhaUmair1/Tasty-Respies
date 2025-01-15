<template>
    <div class="flex justify-around pt-10 mb-5">
        <h1 class="text-4xl font-bold text-pink-700 ">Posts</h1>
        <div>
            <button class="py-2 px-8 bg-pink-300 text-purple-950 rounded " @click.prevent="showModal">
                +Add Recipe
            </button>
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-white bg-pink-400">
        <table class="w-full text-sm text-left rtl:text-right text-pink-700">
            <thead class="text-xs text-gray-700 uppercase ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Created Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b" v-for=" recipe in recipes.items" :key="recipe.id">
                    <td class="px-6 py-4 font-medium  max-w-32 truncate">
                        {{ recipe.title }}
                    </td>
                    <td class="px-6 py-4 max-w-32 truncate">
                        {{ recipe.description }}
                    </td>
                    <td class="px-6 py-4">
                        <img class="w-8 h-8" :src="getImage(recipe.id, recipe.image, 'recipes')" alt="">
                    </td>

                    <td class="px-6 py-4">
                        {{ recipe.created }}
                    </td>

                    <td><button @click="update(recipe.id)">Update</button></td>
                    <td><button @click="remove(recipe.id)">Delete</button></td>
                </tr>

            </tbody>
        </table>
    </div>


    <div class="fixed inset-0 z-50 flex justify-center items-center w-full h-full  bg-opacity-60"
        :class="{ 'block': modal, 'hidden': !modal }">
        <div class="relative p-4 w-full max-w-sm md:max-w-md">

            <div class="relative  rounded-lg shadow-lg bg-pink-400">

                <div class="flex items-center justify-between p-4 border-b border-pink-300 rounded-t bg-pink-300">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        Add a new Recipe
                    </h3>
                    <button type="button" @click="showModal"
                        class="text-gray-500 hover:bg-pink-400 hover:text-red-500 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>

                <form class="p-4 space-y-4" @submit.prevent="addOrUpdateRecipe">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">

                            Title</label>
                        <input type="text" name="name" id="name" v-model="form.title"
                            class="bg-white border border-pink-300 text-white-800 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 "
                            placeholder="Enter recipe title">
                    </div>
                    <span class="text-white" v-if="errors && errors.find((x) => x.path == 'title')">
                        {{ errors.find((x) => x.path === 'title').message }}
                    </span>
                    <div>
                        <div class="flex">
                            <div>
                                <input type="file" id="image" @change="fileChange">
                            </div>
                        </div>
                        <div>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select a
                                Category</label>
                            <select id="countries" v-model="form.category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 ">
                                <option disabled selected>Choose a category</option>
                                <option v-for="category in categories" :value="category.id" :key="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="description"
                            class="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Description</label>
                        <textarea id="description" rows="4" v-model="form.description"
                            class="block p-2.5 w-full text-sm text-gray-800 bg-white rounded-lg border border-pink-300 focus:ring-pink-500 focus:border-pink-500 "
                            placeholder="Write Recipe description here"></textarea>
                    </div>
                    <span class="text-white" v-if="errors && errors.find((x) => x.path == 'description')">
                        {{ errors.find((x) => x.path === 'description').message }}
                    </span>
                    <button type="submit"
                        class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-3">
                        <svg class="inline w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    </div>

</template>





<script setup>
import { computed, ref } from 'vue';
import pb, { user } from '../utils/pocketClient';
const recipes = ref({})
const categories = ref([])
const errors = ref([])
const modal = ref(false)
let initialForm = {
    title: '',
    description: '',
    image: '',
    author: ''
}

const authUser = computed(() => user.value)

const form = ref(initialForm)
const showModal = () => {
    form.value = { ...initialForm }
    modal.value = !modal.value
}

onMounted(async () => {
    const data = await pb.collection('recipes').getList(1, 25, {
        expand: "author",
        filter: `author.id="${authUser.value.id}"`
    })

    recipes.value = data
    console.log(recipes.value);

    const catData = await pb.collection('categories').getFullList()
    categories.value = catData
    console.log(categories.value);


})

const validate = () => {
    errors.value = []
    if (form.value.title === '') {
        errors.value.push({ path: 'title', message: 'title is required' })
    }
    if (form.value.description === '') {
        errors.value.push({ path: 'description', message: 'description  is required' })
    }
}

const addOrUpdateRecipe = async () => {
    validate()

    if (errors.value.length === 0) {
        const recipeId = form.value.id
        const recipeData = { ...form.value } // create a copy to avoid modifying the original form state

        if (recipeId) {
            await pb.collection('recipes').update(recipeId, recipeData)
        } else {
            const newRecipe = await pb.collection('recipes').create(recipeData)
            if (newRecipe) {
                recipes.value.items.unshift(newRecipe)
            }
        }

        form.value = { ...initialForm } // reset form state
        modal.value = false // close the modal
    }
}

const getImage = (id, imageId, type) => {
    return `${import.meta.env.VITE_API_URL}/api/files/${type}/${id}/${imageId}?thumb=300x300`
}
const fileChange = (event) => {
    console.log(event.target.files);
    form.value.image = event.target.files[0]

}

const update = (id) => {
    const recipe = recipes.value.items.find(recipe => recipe.id === id)
    form.value = recipe
    modal.value = true
}


const remove = async (id) => {
    const data = await pb.collection('recipes').delete(id)
    console.log(data);
    if (data) {

        const p = recipes.value.items.filter(recipe => recipe.id !== id)
        recipes.value.items = p
        console.log(p);
    }

}
</script>

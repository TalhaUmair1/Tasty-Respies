<template>
    <div class="bg-[3f1f9fc]">
        <form class="max-w-md mx-2 md:mx-28">
            <label for="default-search" class="mb-2 text-sm font-medium  dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-yellow-500 dark:text-white-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" v-model="search" @change="searchDish"
                    class="block w-full p-4 ps-10 text-sm text-white-900 border border-white-300 rounded-lg  "
                    placeholder="Search by Recipe Ingredients or KeyWords..." required />
                <button type="submit"
                    class=" absolute end-2.5 bottom-2.5  bg-[#e1f0ee]  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>

    </div>

</template>

<script setup>
const search = ref('')
const emit = defineEmits(['search'])
const searchDish = () => {
    emit('search', search.value)
}
</script>

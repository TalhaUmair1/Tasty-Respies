<template>
    <div class="flex gap-7 justify-center md:flex-row flex-wrap items-center ">
        <div class="flex flex-col w-36 items-center bg-gray-100 rounded-lg p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1v-10M9 5a1 1 0 00-1 1v4a1 1 0 011 1h6a1 1 0 011-1v-4a1 1 0 00-1-1h-6M15 15v-1a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-4a1 1 0 01-1-1z" />
            </svg>
            <p class="text-sm text-gray-700 mt-2">Best Dishes</p>
        </div>

        <div class="flex flex-col w-36 items-center bg-gray-100 rounded-lg p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 20h10a1 1 0 001-1V4a1 1 0 00-1-1H7a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
            <p class="text-sm text-gray-700 mt-2">Chicken Burger</p>
        </div>

        <div class="flex flex-col w-36 items-center bg-gray-100 rounded-lg p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm text-gray-700 mt-2">Pan Pizza</p>
        </div>

        <div class="flex flex-col w-36 items-center bg-gray-100 rounded-lg p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 11.5V3m0 10v4m0-4h.01M4.98 8c0 .44.29.81.68.97l4 1c.39.16.77.3.97.43l1 1a2 2 0 002 0l1-1a2 2 0 002 0l1 1c.2.13.58.27.97.43l4 1c.39.16.68.53.68.97v3.5a2 2 0 01-2 2h-14a2 2 0 01-2-2v-3.5z" />
            </svg>
            <p class="text-sm text-gray-700 mt-2">Fish</p>
        </div>

        <div class="flex flex-col w-36 items-center bg-gray-100 rounded-lg p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1v-10M9 5a1 1 0 00-1 1v4a1 1 0 011 1h6a1 1 0 011-1v-4a1 1 0 00-1-1h-6" />
            </svg>
            <p class="text-sm text-gray-700 mt-2">Drinks & Bar</p>
        </div>
    </div>
</template>

<script setup>

const data = await pb.collection('pages').getOne('j2er6fh38byp6rh')
    console.log(data)
    about.value = data
</script>

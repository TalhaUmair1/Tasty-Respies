<template>
    <div class="w-64 p-4 bg-white rounded-lg shadow-md h-screen">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Meals</h2>
            <a href="#" class="text-blue-600">Advanced</a>
        </div>


        <div>
            <label class="text-sm font-semibold mb-2 block" for="search">Search Meal</label>
            <div class="relative mb-4">
                <input type="text" id="search" placeholder="Search meal..."
                    class="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 20l-6-6 6-6m4 12l6-6-6-6" />
                </svg>
            </div>


            <ul class="space-y-2">

                <li class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-egg-fried w-5 h-5 mr-3 text-yellow-500"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M8 1.12a4.746 4.746 0 0 1 3.191 1.305c1.333.946 2.96 1.532 4.376 2.225a.528.528 0 0 1 .266.7c-1.295 2.748-3.696 4.904-6.578 5.468-2.883.564-5.882-.234-7.946-2.176a.527.527 0 0 1-.128-.566c.928-1.955 2.43-3.625 4.128-5.053A4.754 4.754 0 0 1 8 1.12zM8 0C3.582 0 0 3.582 0 8c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8s-3.582-8-8-8zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                        </svg>
                        <span class="text-sm font-medium">Breakfast</span>
                    </div>
                    <span class="text-gray-500 text-xs">12</span>
                </li>


                <li class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-basket3-fill w-5 h-5 mr-3 text-red-500"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-.01.176l-1.562 9.188A1 1 0 0 1 13.44 16H2.56a1 1 0 0 1-.988-1.636L1 6.176A1 1 0 0 1 1 6V4a1 1 0 0 1 1-1h2V1zm2 4V2h8v3H4z" />
                        </svg>
                        <span class="text-sm font-medium">Lunch</span>
                    </div>
                    <span class="text-gray-500 text-xs">8</span>
                </li>

                <li class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-moon-stars-fill w-5 h-5 mr-3 text-blue-500"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M9.598 1.04a.5.5 0 0 1 .652-.33 6.5 6.5 0 0 1 3.33 9.032.5.5 0 0 1-.73.546 5.508 5.508 0 0 1-.968-.607 5.508 5.508 0 0 1-.607-.968.5.5 0 0 1 .546-.73A5.5 5.5 0 0 0 14.038 2a5.5 5.5 0 0 0-8.648-1.268A6.525 6.525 0 0 1 9.598 1.04zM12.715 4.5a.5.5 0 0 1 0 1 .5.5 0 0 1 0-1zm-4.86 6.306a6.467 6.467 0 0 1-.852-.51A6.518 6.518 0 0 1 3.5 4.5a6.5 6.5 0 0 1 4.086 8.306c-.248-.087-.49-.18-.732-.288zM10 4.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z" />
                        </svg>
                        <span class="text-sm font-medium">Dinner</span>
                    </div>
                    <span class="text-gray-500 text-xs">10</span>
                </li>

                <li class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-cone-striped w-5 h-5 mr-3 text-green-500"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M8 0C7.263 0 6.61.402 6.269.989l-.902 1.632a2 2 0 0 0-.181 1.442L5.8 5H2.5a1.5 1.5 0 0 0 0 3H5l-.55 1.35A.5.5 0 0 0 5 10h1.9a.5.5 0 0 0 .482-.352l.466-1.188H13.5a1.5 1.5 0 0 0 0-3H9.016L9.72 2.582a2 2 0 0 0-.1-1.671L8.731.988A1.5 1.5 0 0 0 8 0z" />
                        </svg>
                        <span class="text-sm font-medium">Snacks</span>
                    </div>
                    <span class="text-gray-500 text-xs">5</span>
                </li>
                <li class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-egg-fried w-5 h-5 mr-3 text-yellow-500"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M8 1.12a4.746 4.746 0 0 1 3.191 1.305c1.333.946 2.96 1.532 4.376 2.225a.528.528 0 0 1 .266.7c-1.295 2.748-3.696 4.904-6.578 5.468-2.883.564-5.882-.234-7.946-2.176a.527.527 0 0 1-.128-.566c.928-1.955 2.43-3.625 4.128-5.053A4.754 4.754 0 0 1 8 1.12zM8 0C3.582 0 0 3.582 0 8c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8s-3.582-8-8-8zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                        </svg>
                        <span class="text-sm font-medium">Desert Meal</span>
                    </div>
                    <span class="text-gray-500 text-xs">5</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>


</script>

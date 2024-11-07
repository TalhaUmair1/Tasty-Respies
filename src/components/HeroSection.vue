<template>
    <div class="bg-gray-50 pb-12">
        <div class="flex md:flex-row md:justify-around flex-col ">
            <div class="md:w-1/2 flex justify-center items-center">
                <div class="md:px-32 px-8 text-start">
                    <h1 class="text-4xl leading-snug font-semibold text-wrap mb-2">Green Veggies With Flavoured Butter
                    </h1>
                    <p class="text-wrap ">
                        Leaf vegetables, also called leafy greens, pot herbs, vegetable greens, or simply greens, are
                        plant
                        leaves eaten as a vegetable, sometimes accompanied by tender petioles and shoots. Leaf
                        vegetables
                        eaten
                        raw in a salad can be called salad greens. Nearly one thousand species of plants with edible
                        leaves
                        are
                        known
                    </p>
                </div>
            </div>
            <div class=" md:w-1/2 md:mx-0 mx-8">
                <img class="" src="/public/bg-respi-ezgif.com-webp-to-jpg-converter-removebg-preview.png" alt="">
            </div>
        </div>
        <div class="mb-6">
            <SearchDishes></SearchDishes>
        </div>
        <div>
            <categories />
        </div>

    </div>



</template>

<script setup>
import SearchDishes from "./SearchDishes.vue";

</script>

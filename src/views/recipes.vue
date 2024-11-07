<template>
    <div>
        <div class="bg-pink-500 text-white text-center py-20">
            <h1 class="text-3xl font-bold">Easy Recipes</h1>
        </div>
    </div>
    <div class="flex">
        <Sidebar></Sidebar>
        <CardList :posts="posts"></CardList>
    </div>
</template>

<script setup>
const posts = [
    {
        id: 1,
        image: '/pizza.jpg',
        title: 'Pizza Pepperoni',
        description:
            'Pepperoni is an American variety of salami, made from cured pork and beef seasoned with paprika or other chili pepper.',
        category: 'Main Dish',
        price: '21',
    },
    {
        id: 2,
        image: '/sweet.jpg',
        title: 'Sweet Sandwich',
        description:
            'Enjoy these toasted egg and cress club sandwiches as part of a summer family picnic.',
        category: 'Sweet',
        price: '17',
    },
    {
        id: 3,
        image: '/steak.jpg',
        title: 'Steak Dinner',
        description:
            'A steak is a meat generally sliced across the muscle fibers.',
        category: 'Main Dish',
        price: '321',
    },
]
</script>

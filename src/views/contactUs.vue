<template>
    <div style="background-image: url('/public/contactbg2.webp');" class="bg-cover bg-no-repeat w-full">
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <div class="flex justify-between items-center relative">
                    <h2 class="text-xl font-semibold">GET IN TOUCH</h2>
                    <button class="text-gray-400 text-2xl hover:text-gray-600 absolute -top-4 right-0">&times;</button>
                </div>
                <p class="text-gray-400 text-sm mb-6">24/7 We will answer your questions and problems</p>

                <form class="space-y-4">
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label class="block text-gray-600 text-sm">First Name</label>
                            <div class="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                                <svg class="w-4 h-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5.121 13.875A5 5 0 1012 7.5v.125M16 17h.01" />
                                </svg>
                                <input type="text" placeholder="First Name" class="w-full focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex-1">
                            <label class="block text-gray-600 text-sm">Last Name</label>
                            <div class="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                                <svg class="w-4 h-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5.121 13.875A5 5 0 1012 7.5v.125M16 17h.01" />
                                </svg>
                                <input type="text" placeholder="Last Name" class="w-full focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="block text-gray-600 text-sm">Email</label>
                        <div class="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                            <svg class="w-4 h-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7H8c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z" />
                            </svg>
                            <input type="email" placeholder="Email" class="w-full focus:outline-none" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-gray-600 text-sm">Phone</label>
                        <div class="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                            <svg class="w-4 h-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l4-4m0 0l4 4m-4-4v12" />
                            </svg>
                            <input type="tel" placeholder="Phone" class="w-full focus:outline-none" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-gray-600 text-sm">Describe your issue</label>
                        <textarea placeholder="Describe your issue"
                            class="w-full border border-yellow-400 rounded-md px-3 py-2 focus:outline-none"></textarea>
                    </div>

                    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

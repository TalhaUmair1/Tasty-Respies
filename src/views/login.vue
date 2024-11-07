<template>
    <div style="background-image: url('/bg-login.webp');" class="bg-cover bg-no-repeat w-full">
        <div class="flex items-center justify-center min-h-screen">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 class="mb-4 text-3xl font-semibold text-center text-gray-900">
                    Log In or Sign Up
                </h2>
                <p class="mb-6 text-center text-gray-700">
                    Sign in to comment on articles, save recipes, and participate in our
                    coolest features.
                </p>

                <button
                    class="flex items-center gap-3 justify-center w-full p-3 mb-4 text-gray-700 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-google" viewBox="0 0 16 16">
                        <path
                            d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                    </svg>
                    Continue with Google
                </button>

                <div class="flex items-center mb-4">
                    <hr class="flex-grow border-gray-300" />
                    <span class="px-2 text-gray-500">or</span>
                    <hr class="flex-grow border-gray-300" />
                </div>

                <input type="email" placeholder="example@email.com"
                    class="w-full p-3 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-500" />

                <button class="w-full p-3 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700">
                    Continue with email
                </button>

                <p class="mt-4 text-xs text-center text-gray-500">
                    By signing up, signing in, or continuing, I agree to Apartment Therapy
                    Media’s
                    <a href="#" class="underline">Terms of Use</a>
                    and
                    <a href="#" class="underline">Privacy Policy</a>.
                </p>
            </div>
        </div>
    </div>

</template>

<script setup></script>

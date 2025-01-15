<template>
    <form @submit.prevent="login">
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

                    <button @click.prevent="loginWithGoogle"
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

                    <input type="email" placeholder="example@email.com" v-model="form.email"
                        class="w-full p-3 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-500" />

                    <input type="password" placeholder="password ..." v-if="emailHasChanged" v-model="form.password"
                        class="w-full p-3 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-500" />


                    <button type="submit"
                        class="block w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Continue Login</button>
                    <div class="text-sm font-medium  text-black">
                        Don’t have an account yet? <router-link to="/signUp"
                            class="font-semibold text-primary-600 hover:underline dark:text-primary-500 ml-2">Sign
                            up</router-link>
                    </div>

                    <p class="mt-4 text-xs text-center text-gray-500">
                        if not a member then <a></a>, or continuing, I agree to Apartment Therapy
                        Media’s
                        <a href="#" class="underline">Terms of Use</a>
                        and
                        <a href="#" class="underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    </form>


</template>

<script setup>

import pb from '../utils/pocketClient';


const form = ref({
    email: '',
    password: ''
})

const emailHasChanged = computed(() => {
    return form.value.email != '' ? true : false
})

const validate = () => {
    console.log(form.value)
}
const router = useRouter()
const login = async () => {
    const data = await pb.collection('users').authWithPassword(form.value.email, form.value.password)
    console.log(data);
    if (data) {
        router.push('/dashboard')
    }
}

const loginWithGoogle = async () => {
    const data = await pb.collection('users').authWithOAuth2({ provider: 'google' })
    console.log(data);
}

</script>

import PocketBase from 'pocketbase'
import { ref } from 'vue'

const pb = new PocketBase(import.meta.env.VITE_API_URL)

const isLogin = ref(pb.authStore.isValid)
const user = ref(pb.authStore.model)
pb.authStore.onChange((token, model) => {
  isLogin.value = token ? true : false
  user.value = model
})

export { isLogin, user }
export default pb

import vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3Toastify, {
    position: 'bottom-left',
    theme: 'dark',
    autoClose: 3000,
    clearOnUrlChange: false,
  })
})

import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. Import createPinia
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const pinia = createPinia() // 2. Buat instance pinia

app.use(pinia)  // 3. Gunakan pinia
app.use(router)
app.mount('#app')
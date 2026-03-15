import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import folder router kamu
import './style.css' // Pastikan tailwind ter-import di sini

const app = createApp(App)

app.use(router) // PENTING: Baris ini harus ada sebelum mount
app.mount('#app')
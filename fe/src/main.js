import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import './assets/main.css'
import App from './App.vue'
// Pastikan huruf kecil sesuai nama folder kamu di sidebar
import router from './router' 
import "@fortawesome/fontawesome-free/css/all.min.css"
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia() 

app.use(pinia) 
app.use(router) // Router harus di-use sebelum mount
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3dLoader from "vue-3d-loader";
import './index.css'

createApp(App)
.use(router)
.use(vue3dLoader)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'animate.css/animate.min.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

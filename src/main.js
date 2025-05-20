import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
import './assets/main.css'
// import './assets/main.css'

const app = createApp(App)
// app.use(router)
app.mount('#app')

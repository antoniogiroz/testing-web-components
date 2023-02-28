import { createApp } from 'vue'
import '@shoelace-style/shoelace/dist/themes/light.css'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
import App from './App.vue'
import router from './router'
import './assets/main.css'

setBasePath('@shoelace-style/shoelace/dist')

const app = createApp(App)
app.use(router)
app.mount('#app')

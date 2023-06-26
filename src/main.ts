import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseButtonLink from '@/components/BaseButtonLink.vue'

import App from './App.vue'
import router from './router'

import '@/assets/normalize.css'
import '@/assets/milligram.css'
import '@/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BaseButtonLink', BaseButtonLink)

app.mount('#app')

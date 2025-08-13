// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'  // Change this line
import i18n, { setLocale, getSavedLocale } from './i18n'

const app = createApp(App)
const head = createHead()

// Set initial locale based on saved preference or browser
const initialLocale = getSavedLocale()
setLocale(initialLocale)

app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')
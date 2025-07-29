// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { setLocale, getSavedLocale } from './i18n'

const app = createApp(App)

// Set initial locale based on saved preference or browser
const initialLocale = getSavedLocale()
setLocale(initialLocale)

app.use(router)
app.use(i18n)

app.mount('#app')
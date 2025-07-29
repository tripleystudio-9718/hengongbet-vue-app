// src/i18n/index.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'
import ms from './locales/ms.json'

const messages = {
  en,
  zh,
  ms
}

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // Default locale
  fallbackLocale: 'en',
  messages,
  globalInjection: true // Enable global $t
})

export default i18n

// Helper function to get browser language
export const getBrowserLocale = () => {
  const browserLocale = navigator.language || navigator.languages[0]
  const locale = browserLocale.split('-')[0]
  return ['en', 'zh', 'ms'].includes(locale) ? locale : 'en'
}

// Helper function to set locale
export const setLocale = (locale) => {
  i18n.global.locale.value = locale
  document.documentElement.lang = locale
  localStorage.setItem('locale', locale)
}

// Helper function to get saved locale
export const getSavedLocale = () => {
  return localStorage.getItem('locale') || getBrowserLocale()
}
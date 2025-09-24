<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-900 text-white">
    <Header @login="handleLogin" @register="handleRegister" />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    handleLogin() {
      console.log('Login clicked')
    },
    handleRegister() {
      console.log('Register clicked')
    }
  }
}
</script>

<style>
/* Only import if you have Tailwind installed, otherwise remove these imports */
/* @import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities'; */
@import url('https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

* {
  font-family: 'Afacad', sans-serif;
}

body {
  margin: 0;
  font-family: 'Afacad', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Basic Tailwind-like utility classes */
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-1 { flex: 1; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.text-center { text-align: center; }
.hidden { display: none; }

/* Colors */
.bg-gray-800 { background-color: #1f2937; }
.bg-gray-900 { background-color: #27272A; }
.bg-gray-600 { background-color: #4b5563; }
.bg-gray-700 { background-color: #374151; }
.bg-yellow-500 { background-color: #eab308; }
.bg-yellow-600 { background-color: #ca8a04; }
.text-white { color: white; }
.text-black { color: black; }
.text-yellow-500 { color: #eab308; }
.text-gray-400 { color: #9ca3af; }
.text-gray-300 { color: #d1d5db; }
.border-yellow-500 { border-color: #eab308; }
.border-gray-700 { border-color: #374151; }

/* Spacing */
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-4 > * + * { margin-left: 1rem; }
.space-x-6 > * + * { margin-left: 1.5rem; }
.space-x-8 > * + * { margin-left: 2rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }

/* Sizing */
.w-8 { width: 2rem; }
.h-8 { height: 2rem; }
.w-12 { width: 3rem; }
.h-12 { height: 3rem; }
.w-16 { width: 4rem; }
.h-16 { height: 4rem; }

/* Padding */
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.p-6 { padding: 1.5rem; }

/* Margins */
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Layout */
.max-w-3xl { max-width: 48rem; margin-left: auto; margin-right: auto; }
.max-w-4xl { max-width: 56rem; margin-left: auto; margin-right: auto; }
.max-w-7xl { max-width: 80rem; margin-left: auto; margin-right: auto; }

/* Grid */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

/* Typography */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-5xl { font-size: 3rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }

/* Borders */
.border { border-width: 1px; }
.border-2 { border-width: 2px; }
.border-t { border-top-width: 1px; }
.rounded { border-radius: 0.25rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-full { border-radius: 9999px; }

/* Effects */
.transition-colors { transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }
.hover\:bg-yellow-500:hover { background-color: #eab308; }
.hover\:bg-yellow-600:hover { background-color: #ca8a04; }
.hover\:text-black:hover { color: black; }
.hover\:text-yellow-500:hover { color: #eab308; }

/* Gradients */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #1f2937, #111827);
}

.from-gray-800 { /* handled by bg-gradient-to-br */ }
.to-gray-900 { /* handled by bg-gradient-to-br */ }

/* Responsive */
@media (min-width: 640px) {
  .sm\:flex-row { flex-direction: row; }
}

@media (min-width: 768px) {
  .md\:flex { display: flex; }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* Button styles */
button {
  cursor: pointer;
  border: none;
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

.pt-8 { padding-top: 2rem; }
</style>
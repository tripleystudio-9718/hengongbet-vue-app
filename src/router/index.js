import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GamePage from '@/components/GamePage.vue';
import PromotionPage from '@/components/PromotionPage.vue';
import FAQ from '@/components/FAQ.vue';
import FourDResult from '@/components/FourDResult.vue';
import DownloadPage from '@/components/DownloadPage.vue';
import Register from '@/components/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - HengOngBet'
    }
  },
  {
    path: '/games',
    name: 'GamePage',
    component: GamePage,
  },
   {
    path: '/promotion',
    name: 'PromotionPage',
    component: PromotionPage,
  },
  {
    path: '/faqs',
    name: 'FAQ',
    component: FAQ,
  },
    {
    path: '/4d-results',
    name: 'FourDResult',
    component: FourDResult,
  },
      {
    path: '/download',
    name: 'DownloadPage',
    component: DownloadPage,
  },
    {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = createRouter({
  history: createWebHistory(), // Remove the process.env.BASE_URL
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'HengOngBet'
  next()
})

export default router
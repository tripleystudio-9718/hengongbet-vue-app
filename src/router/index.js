// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { setLocale } from '@/i18n'
import Home from '../views/Home.vue'
import Affiliate from '@/components/Affiliate.vue';
import Login from '@/components/Login.vue';
import GamePage from '@/components/GamePage.vue';
import PromotionPage from '@/components/PromotionPage.vue';
import FAQ from '@/components/FAQ.vue';
import FourDResult from '@/components/FourDResult.vue';
import DownloadPage from '@/components/DownloadPage.vue';
import Register from '@/components/Register.vue';
import TutorialGuide from '@/components/TutorialGuide.vue';
import TutorialTopUpWithDraw from '@/components/TopWithTutorial.vue';

// Supported languages
const supportedLocales = ['en', 'zh', 'ms'];
const defaultLocale = 'en';

// Helper function to create localized routes
const createLocalizedRoute = (path, name, component, meta = {}) => {
  const routes = [];
  
  supportedLocales.forEach(locale => {
    const localizedPath = locale === defaultLocale ? path : `/${locale}${path}`;
    const localizedName = locale === defaultLocale ? name : `${name}-${locale}`;
    
    routes.push({
      path: localizedPath,
      name: localizedName,
      component,
      meta: {
        ...meta,
        locale,
        title: meta.title || 'HengOngBet'
      }
    });
  });
  
  return routes;
};

const routes = [
  // Home routes
  ...createLocalizedRoute('/', 'Home', Home, {
    title: 'Home - HengOngBet'
  }),
  
  // Affiliate routes
  ...createLocalizedRoute('/affiliate', 'Affiliate', Affiliate),
  
  // Login routes
  ...createLocalizedRoute('/login', 'Login', Login),
  
  // Games routes
  ...createLocalizedRoute('/games', 'GamePage', GamePage),
  
  // Promotion routes
  ...createLocalizedRoute('/promotion', 'PromotionPage', PromotionPage),
  
  // FAQ routes
  ...createLocalizedRoute('/faqs', 'FAQ', FAQ),
  
  // 4D Results routes
  ...createLocalizedRoute('/4d-results', 'FourDResult', FourDResult),
  
  // Download routes
  ...createLocalizedRoute('/download', 'DownloadPage', DownloadPage),
  
  // Register routes
  ...createLocalizedRoute('/register', 'Register', Register),
  
  // Tutorial Guide routes
  ...createLocalizedRoute('/tutorial-guide', 'TutorialGuide', TutorialGuide),
  
  // Top-up Withdraw Tutorial routes
  ...createLocalizedRoute('/topup-withdraw-tutorial', 'TutorialTopUpWithDraw', TutorialTopUpWithDraw),
  
  // Redirect root locale paths to default paths
  {
    path: '/en',
    redirect: '/'
  },
  {
    path: '/en/:pathMatch(.*)*',
    redirect: to => `/${to.params.pathMatch}`
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Navigation guard for locale handling and title setting
router.beforeEach((to, from, next) => {
  // Extract locale from route
  const locale = to.meta.locale || defaultLocale;
  
  // Set i18n locale
  setLocale(locale);
  
  // Set document title
  document.title = to.meta.title || 'HengOngBet';
  
  next();
});

// Helper function to get current locale
export const getCurrentLocale = (route) => {
  return route.meta?.locale || defaultLocale;
};

// Helper function to generate localized path
export const localePath = (path, locale = null) => {
  const currentLocale = locale || defaultLocale;
  
  if (currentLocale === defaultLocale) {
    return path;
  }
  
  return `/${currentLocale}${path}`;
};

// Helper function to switch locale while maintaining current route
export const switchLocale = (router, newLocale) => {
  const currentRoute = router.currentRoute.value;
  const currentLocale = getCurrentLocale(currentRoute);
  
  if (currentLocale === newLocale) return;
  
  let newPath = currentRoute.path;
  
  // Remove current locale prefix if it exists
  if (currentLocale !== defaultLocale) {
    newPath = newPath.replace(new RegExp(`^/${currentLocale}`), '');
  }
  
  // Add new locale prefix if it's not the default
  if (newLocale !== defaultLocale) {
    newPath = `/${newLocale}${newPath}`;
  }
  
  // Handle root path
  if (newPath === '') {
    newPath = '/';
  }
  
  router.push(newPath);
};

export { supportedLocales, defaultLocale };
export default router;
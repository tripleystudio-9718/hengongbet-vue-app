// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { setLocale } from '@/i18n'
import Home from '../views/Home.vue'
import Affiliate from '@/components/Affiliate.vue'
import Login from '@/components/Login.vue'
import GamePage from '@/components/GamePage.vue'
import PromotionPage from '@/components/PromotionPage.vue'
import FAQ from '@/components/FAQ.vue'
import FourDResult from '@/components/FourDResult.vue'
import DownloadPage from '@/components/DownloadPage.vue'
import Register from '@/components/Register.vue'
import TutorialGuide from '@/components/TutorialGuide.vue'
import TutorialTopUpWithDraw from '@/components/TopWithTutorial.vue'

// Supported languages
const supportedLocales = ['en', 'zh', 'ms']
const defaultLocale = 'en'

// Meta titles and descriptions for all locales
const metaContent = {
  Home: {
    en: { title: 'Home - HengOngBet', description: 'Welcome to Heng Ong Bet – your gateway to exciting slots, casino games, and exclusive bonuses.' },
    zh: { title: '首页 - HengOngBet', description: '欢迎来到 Heng Ong Bet，尽享精彩老虎机、真人娱乐场和独家优惠。' },
    ms: { title: 'Laman Utama - HengOngBet', description: 'Selamat datang ke Heng Ong Bet – tempat terbaik untuk slot menarik, permainan kasino, dan bonus eksklusif.' }
  },
  Affiliate: {
    en: { title: 'Affiliate Program - HengOngBet', description: 'Join the Heng Ong Bet Affiliate Program and earn commission by referring new players to our platform.' },
    zh: { title: '联盟计划 - HengOngBet', description: '加入 Heng Ong Bet 联盟计划，通过推荐新玩家赚取佣金。' },
    ms: { title: 'Program Afiliasi - HengOngBet', description: 'Sertai Program Afiliasi Heng Ong Bet dan jana komisen dengan merujuk pemain baharu.' }
  },
  Login: {
    en: { title: 'Login - HengOngBet', description: 'Access your Heng Ong Bet account securely and enjoy uninterrupted gaming anytime, anywhere.' },
    zh: { title: '登录 - HengOngBet', description: '安全访问您的 Heng Ong Bet 帐户，畅享不间断游戏体验。' },
    ms: { title: 'Log Masuk - HengOngBet', description: 'Log masuk ke akaun Heng Ong Bet anda dengan selamat dan nikmati permainan tanpa gangguan.' }
  },
  GamePage: {
    en: { title: 'Games - HengOngBet', description: 'Explore a variety of thrilling games including slots, live casino, and sports betting on Heng Ong Bet.' },
    zh: { title: '游戏 - HengOngBet', description: '探索各种刺激游戏，包括老虎机、真人赌场和体育博彩。' },
    ms: { title: 'Permainan - HengOngBet', description: 'Terokai pelbagai permainan menarik termasuk slot, kasino langsung, dan pertaruhan sukan di Heng Ong Bet.' }
  },
  PromotionPage: {
    en: { title: 'Promotions - HengOngBet', description: 'Grab our latest promotions and exclusive bonuses at Heng Ong Bet. Play more, win more!' },
    zh: { title: '优惠活动 - HengOngBet', description: '获取 Heng Ong Bet 最新优惠和独家奖金。玩得越多，赢得越多！' },
    ms: { title: 'Promosi - HengOngBet', description: 'Dapatkan promosi terkini dan bonus eksklusif di Heng Ong Bet. Main lebih, menang lebih!' }
  },
  FAQ: {
    en: { title: 'FAQs - HengOngBet', description: 'Get answers to common questions about Heng Ong Bet games, accounts, and promotions.' },
    zh: { title: '常见问题 - HengOngBet', description: '获取有关 Heng Ong Bet 游戏、账户和优惠的常见问题解答。' },
    ms: { title: 'Soalan Lazim - HengOngBet', description: 'Dapatkan jawapan kepada soalan lazim tentang permainan, akaun, dan promosi Heng Ong Bet.' }
  },
  FourDResult: {
    en: { title: '4D Results - HengOngBet', description: 'Check the latest 4D lottery results instantly on Heng Ong Bet.' },
    zh: { title: '4D 结果 - HengOngBet', description: '立即查看最新的 4D 彩票结果。' },
    ms: { title: 'Keputusan 4D - HengOngBet', description: 'Semak keputusan loteri 4D terkini di Heng Ong Bet.' }
  },
  DownloadPage: {
    en: { title: 'Download - HengOngBet', description: 'Download the Heng Ong Bet mobile app for seamless gaming on your Android or iOS device.' },
    zh: { title: '下载 - HengOngBet', description: '下载 Heng Ong Bet 手机应用，畅玩安卓或 iOS 游戏。' },
    ms: { title: 'Muat Turun - HengOngBet', description: 'Muat turun aplikasi mudah alih Heng Ong Bet untuk pengalaman permainan lancar di Android atau iOS.' }
  },
  Register: {
    en: { title: 'Register - HengOngBet', description: 'Create your free account at Heng Ong Bet and start playing top casino games with great rewards.' },
    zh: { title: '注册 - HengOngBet', description: '免费注册 Heng Ong Bet 帐户，开启精彩赌场游戏之旅并赢取丰厚奖励。' },
    ms: { title: 'Daftar - HengOngBet', description: 'Daftar akaun percuma anda di Heng Ong Bet dan mula bermain permainan kasino terbaik dengan ganjaran hebat.' }
  },
  TutorialGuide: {
    en: { title: 'Tutorial Guide - HengOngBet', description: 'New to Heng Ong Bet? Follow our step-by-step guides to get started and play confidently.' },
    zh: { title: '新手指南 - HengOngBet', description: '首次使用 Heng Ong Bet？请按照我们的分步指南开始您的游戏之旅。' },
    ms: { title: 'Panduan Tutorial - HengOngBet', description: 'Baru di Heng Ong Bet? Ikuti panduan langkah demi langkah kami untuk mula bermain dengan yakin.' }
  },
  TutorialTopUpWithDraw: {
    en: { title: 'Top-up & Withdraw Tutorial - HengOngBet', description: 'Learn how to top up your wallet and withdraw winnings from Heng Ong Bet easily and securely.' },
    zh: { title: '充值与提现教程 - HengOngBet', description: '了解如何轻松安全地在 Heng Ong Bet 充值和提现。' },
    ms: { title: 'Tutorial Tambah Nilai & Pengeluaran - HengOngBet', description: 'Pelajari cara tambah nilai dan keluarkan kemenangan dari Heng Ong Bet dengan mudah dan selamat.' }
  }
};

// Helper function to create localized routes
const createLocalizedRoute = (path, name, component) => {
  return supportedLocales.map(locale => ({
    path: locale === defaultLocale ? path : `/${locale}${path}`,
    name: locale === defaultLocale ? name : `${name}-${locale}`,
    component,
    meta: {
      locale,
      title: metaContent[name]?.[locale]?.title || 'HengOngBet',
      description: metaContent[name]?.[locale]?.description || 'Play top online casino games at Heng Ong Bet with 100% security and thrilling bonuses.'
    }
  }));
};

const routes = [
  ...createLocalizedRoute('/', 'Home', Home),
  ...createLocalizedRoute('/affiliate', 'Affiliate', Affiliate),
  ...createLocalizedRoute('/login', 'Login', Login),
  ...createLocalizedRoute('/games', 'GamePage', GamePage),
  ...createLocalizedRoute('/promotion', 'PromotionPage', PromotionPage),
  ...createLocalizedRoute('/faqs', 'FAQ', FAQ),
  ...createLocalizedRoute('/4d-results', 'FourDResult', FourDResult),
  ...createLocalizedRoute('/download', 'DownloadPage', DownloadPage),
  ...createLocalizedRoute('/register', 'Register', Register),
  ...createLocalizedRoute('/tutorial-guide', 'TutorialGuide', TutorialGuide),
  ...createLocalizedRoute('/topup-withdraw-tutorial', 'TutorialTopUpWithDraw', TutorialTopUpWithDraw),
  { path: '/en', redirect: '/' },
  { path: '/en/:pathMatch(.*)*', redirect: to => `/${to.params.pathMatch}` }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const locale = to.meta.locale || defaultLocale;
  setLocale(locale);
  document.title = to.meta.title || 'HengOngBet';
  next();
});

export const getCurrentLocale = route => route.meta?.locale || defaultLocale;

export const localePath = (path, locale = null) => {
  const currentLocale = locale || defaultLocale;
  return currentLocale === defaultLocale ? path : `/${currentLocale}${path}`;
};

export const switchLocale = (router, newLocale) => {
  const currentRoute = router.currentRoute.value;
  const currentLocale = getCurrentLocale(currentRoute);
  if (currentLocale === newLocale) return;

  let newPath = currentRoute.path.replace(new RegExp(`^/${currentLocale}`), '');
  if (newLocale !== defaultLocale) newPath = `/${newLocale}${newPath}`;
  if (newPath === '') newPath = '/';
  router.push(newPath);
};

export { supportedLocales, defaultLocale };
export default router;

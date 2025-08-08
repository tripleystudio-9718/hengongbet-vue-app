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

// Base URL for your website
const BASE_URL = 'https://www.hengongbet88.com'

// Supported languages
const supportedLocales = ['en', 'zh', 'ms']
const defaultLocale = 'en'

// Updated Meta titles and descriptions for all locales based on your spreadsheet
const metaContent = {
  Home: {
    en: { 
      title: 'HengOngBet88 - Malaysia\'s Trusted Online Casino Site', 
      description: 'Play at HengOngBet88, Malaysia\'s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere.' 
    },
    zh: { 
      title: 'HengOngBet88 - 马来西亚值得信赖的在线赌博网站', 
      description: '在 HengOngBet88 玩吧，马来西亚值得信赖的在线赌场。随时随地畅玩老虎机，真人发牌，体育博彩，享受快速出款与安全游戏体验。' 
    },
    ms: { 
      title: 'HengOngBet88 - Laman Kasino Dalam Talian yang Dipercayai di Malaysia', 
      description: 'Main di HengOngBet88, kasino dalam talian yang dipercayai di Malaysia. Nikmati slot, permainan dealer langsung, pertaruhan sukan, pembayaran pantas dan permainan selamat bila-bila masa, di mana jua.' 
    }
  },
  Affiliate: {
    en: { 
      title: 'Become a HengOngBet88 Agent, Shareholder, or Member', 
      description: 'Join HengOngBet88 as an agent, shareholder, or member. Earn commissions, access exclusive perks, and grow with Malaysia\'s trusted online casino platform.' 
    },
    zh: { 
      title: '成为 HengOngBet88 的代理商、股东或会员', 
      description: '成为 HengOngBet88 的代理商、股东或会员。赚取佣金，获得独家特权，与马来西亚值得信赖的在线赌场平台一起成长。Ask ChatGPT' 
    },
    ms: { 
      title: 'Jadi Ejen, Pemegang Saham atau Ahli HengOngBet88', 
      description: 'Sertai HengOngBet88 sebagai ejen, pemegang saham atau ahli. Dapatkan komisen, nikmati keistimewaan eksklusif dan berkembang bersama platform kasino dalam talian yang dipercayai di Malaysia.' 
    }
  },
  Login: {
    en: { 
      title: 'HengOngBet88 Login: Secure Access on Mobile & PC', 
      description: 'HengOngBet88 Login made easy. Secure access on mobile & PC with 2FA, encryption, and quick troubleshooting for smooth, safe gaming.' 
    },
    zh: { 
      title: 'HengOngBet88 登录：手机与电脑的安全访问', 
      description: 'HengOngBet88 登录变得简单。在手机与电脑上安全访问，拥有双重验证、加密技术，特备安全畅顺的游戏体验。' 
    },
    ms: { 
      title: 'HengOngBet88 Log Masuk: Akses Selamat di Telefon & PC', 
      description: 'HengOngBet88 Log Masuk kini lebih mudah. Akses selamat di telefon & PC dengan 2FA, penyulitan data, dan penyelesaian masalah pantas untuk pengalaman permainan yang lancar dan selamat.' 
    }
  },
  GamePage: {
    en: { 
      title: 'Online Casino Games - slots, live casino, sport bets & more', 
      description: 'Play top-rated online casino games, slots, live casino, and 4D betting at HengOngBet88. Fast payouts, smooth gameplay, trusted by Malaysians.' 
    },
    zh: { 
      title: '在线赌场游戏 - 老虎机、真人娱乐场、体育博彩等', 
      description: '在HengOngBet88 玩备受好评的在线赌场游戏、老虎机、真人娱乐场和 4D 投注。快速付款、流畅游戏，深受马来西亚人信赖。' 
    },
    ms: { 
      title: 'Permainan Kasino Dalam Talian - slot, kasino langsung, pertaruhan sukan & banyak lagi', 
      description: 'Main permainan kasino dalam talian berkaraf tinggi, slot, kasino langsung dan pertaruhan 4D di Heng Ong Bet. Pembayaran pantas, permainan lancar, dipercayai rakyat Malaysia.' 
    }
  },
  PromotionPage: {
    en: { 
      title: 'Heng Ong Bet Promotions & Bonuses', 
      description: 'Discover daily bonuses, cashback deals, referral rewards, and exclusive offers at Heng Ong Bet. Claim your casino promo and boost your play today.' 
    },
    zh: { 
      title: 'Heng Ong Bet 优惠与奖金', 
      description: '探索每日奖金、现金返还、推荐奖励和 Heng Ong Bet 独家优惠。立即领取您的赌场促销活动，提升您的游戏体验。' 
    },
    ms: { 
      title: 'Promosi & bonus Heng Ong Bet', 
      description: 'Temui bonus harian, tawaran pulangan tunai, ganjaran rujukan dan promosi eksklusif di Heng Ong Bet. Tuntut promosi kasino anda dan tingkatkan permainan anda hari ini.' 
    }
  },
  FAQ: {
    en: { 
      title: 'FAQ & Common Questions Answered', 
      description: 'Find answers to the most frequently asked questions about HengOngBet88 accounts, games, deposits, withdrawals, login issues, and more.' 
    },
    zh: { 
      title: '常见问题与答案', 
      description: '去找关于 HengOngBet88 账户、游戏、存款、提款、登录问题等最常见问题的答案。' 
    },
    ms: { 
      title: 'Soalan Lazim & Jawapan FAQ', 
      description: 'Dapatkan jawapan kepada soalan yang paling kerap ditanya tentang akaun HengOngBet88, permainan, deposit, pengeluaran, masalah log masuk dan banyak lagi.' 
    }
  },
  FourDResult: {
    en: { 
      title: 'Latest 4D Results and Online Betting in Malaysia', 
      description: 'Check real-time 4D results for Magnum, Toto, Da Ma Cai, and more at HengOngBet88. Updated daily with past draw history and betting options.' 
    },
    zh: { 
      title: '马来西亚最新 4D 开奖结果与在线投注', 
      description: '在 HengOngBet88 查看 Magnum、Toto、大马彩等 4D 开奖结果。每日更新，提供历史开奖记录与投注选择。' 
    },
    ms: { 
      title: 'Keputusan 4D Terkini dan Pertaruhan Dalam Talian di Malaysia', 
      description: 'Semak keputusan 4D masa nyata untuk Magnum, Toto, Da Ma Cai dan banyak lagi di HengOngBet88. Dikemas kini setiap hari dengan sejarah cabutan lepas dan pilihan pertaruhan.' 
    }
  },
  DownloadPage: {
    en: { 
      title: 'Download HengOngBet88 App for Android & iOS', 
      description: 'Get the official HengOngBet88 app for secure mobile access. Download for Android or iOS and enjoy real-time games, exclusive bonuses and more.' 
    },
    zh: { 
      title: '下载 HengOngBet88 应用，适用于 Android 和 iOS', 
      description: '获取官方 HengOngBet88 应用程序，安全移动访问。下载适用于 Android 或 iOS，享受实时游戏、独家奖金等更多内容。' 
    },
    ms: { 
      title: 'Muat Turun Aplikasi HengOngBet88 untuk Android & iOS', 
      description: 'Dapatkan aplikasi rasmi HengOngBet88 untuk akses mudah melalui telefon. Muat turun untuk Android atau iOS dan nikmati permainan masa nyata, bonus eksklusif dan banyak lagi.' 
    }
  },
  Register: {
    en: { 
      title: 'HengOngBet88 Register: Quick Sign-Up', 
      description: 'HengOngBet88 Register made easy. Quick sign-up to access top slots, live casino games, daily bonuses, and secure transactions.' 
    },
    zh: { 
      title: 'HengOngBet88 注册：快速注册', 
      description: 'HengOngBet88 注册轻松便捷。快速注册即可访问顶级老虎机、真人娱乐游戏、每日奖金，享受每日更安全的交易。' 
    },
    ms: { 
      title: 'HengOngBet88 Daftar: Pendaftaran Pantas', 
      description: 'HengOngBet88 Daftar kini lebih mudah. Pendaftaran pantas untuk mengakses slot terbaik, permainan kasino langsung, bonus harian, dan transaksi yang selamat.' 
    }
  },
  TutorialGuide: {
    en: { 
      title: 'HengOngBet88 Tutorial Guide for New Users', 
      description: 'New to HengOngBet88? Follow our step-by-step tutorial guide to learn how to register, play games, check results, and manage your account easily.' 
    },
    zh: { 
      title: 'HengOngBet88 新手教程指南', 
      description: '初次使用 HengOngBet88？请按照我们的分步教程指南，轻松学习如何注册、玩游戏、查看开奖结果及管理您的账户。' 
    },
    ms: { 
      title: 'Panduan Tutorial HengOngBet88 untuk Pengguna Baru', 
      description: 'Baru di HengOngBet88? Ikuti panduan langkah demi langkah kami untuk belajar cara mendaftar, bermain, semak keputusan dan urus akaun anda dengan mudah.' 
    }
  },
  TutorialTopUpWithDraw: {
    en: { 
      title: 'How to Top Up & Withdraw', 
      description: 'Learn how to top-up your wallet and withdraw winnings from HengOngBet88 safely. Follow our easy tutorial to fund your account or cash out fast.' 
    },
    zh: { 
      title: '如何充值与提款', 
      description: '了解如何安全地为您的 HengOngBet88 钱包充值并提款。按照我们的简易教程，轻松为账户充值或快速提现。' 
    },
    ms: { 
      title: 'Cara Tambah Nilai & Keluarkan Wang', 
      description: 'Pelajari cara tambah nilai dompet anda atau keluarkan kemenangan daripada HengOngBet88 dengan selamat. Ikuti tutorial mudah kami untuk tambah dana atau keluar wang dengan pantas.' 
    }
  }
};

// Helper function to remove existing hreflang and canonical links
const removeExistingLinks = () => {
  const existingLinks = document.querySelectorAll('link[rel="alternate"], link[rel="canonical"]');
  existingLinks.forEach(link => link.remove());
};

// Helper function to add canonical link
const addCanonicalLink = (basePath) => {
  const canonicalUrl = `${BASE_URL}${basePath}`;
  const canonicalLink = document.createElement('link');
  canonicalLink.rel = 'canonical';
  canonicalLink.href = canonicalUrl;
  document.head.appendChild(canonicalLink);
};

// Helper function to add hreflang links
const addHreflangLinks = (basePath) => {
  supportedLocales.forEach(locale => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = locale;
    
    // Generate the correct URL for each locale
    if (locale === defaultLocale) {
      link.href = `${BASE_URL}${basePath}`;
    } else {
      link.href = `${BASE_URL}/${locale}${basePath}`;
    }
    
    document.head.appendChild(link);
  });

  // Add x-default hreflang pointing to the default language version
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `${BASE_URL}${basePath}`;
  document.head.appendChild(defaultLink);
};

// Helper function to add all SEO links (canonical + hreflang)
const addSEOLinks = (basePath) => {
  removeExistingLinks();
  addCanonicalLink(basePath);
  addHreflangLinks(basePath);
};

// Helper function to get base path from localized route
const getBasePath = (path, locale) => {
  if (locale === defaultLocale) {
    return path;
  }
  // Remove locale prefix to get base path
  return path.replace(new RegExp(`^/${locale}`), '') || '/';
};

// Helper function to create localized routes
const createLocalizedRoute = (path, name, component) => {
  return supportedLocales.map(locale => ({
    path: locale === defaultLocale ? path : `/${locale}${path}`,
    name: locale === defaultLocale ? name : `${name}-${locale}`,
    component,
    meta: {
      locale,
      basePath: path, // Store the base path for SEO link generation
      title: metaContent[name]?.[locale]?.title || 'HengOngBet88',
      description: metaContent[name]?.[locale]?.description || 'Play at HengOngBet88, Malaysia\'s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere.'
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
  ...createLocalizedRoute('/beginner-tutorial', 'TutorialGuide', TutorialGuide),
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
  
  // Set page title
  document.title = to.meta.title || 'HengOngBet88';
  
  // Add or update meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.name = 'description';
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.content = to.meta.description || 'Play at HengOngBet88, Malaysia\'s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere.';
  
  // Add canonical and hreflang links
  const basePath = to.meta.basePath || getBasePath(to.path, locale);
  addSEOLinks(basePath);
  
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
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

// Updated Meta titles and descriptions for all locales
const metaContent = {
  Home: {
    en: { 
      title: 'HengOngbet | HengOngbet88 - Welcome Bonus Up to 200%', 
      description: 'Play at HengOngBet88, Malaysia\'s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere.' 
    },
    zh: { 
      title: 'HengOngbet | HengOngbet88 - 欢迎奖金高达200%', 
      description: '在 HengOngBet88 玩吧，马来西亚值得信赖的在线赌场。随时随地畅玩老虎机，真人发牌，体育博彩，享受快速出款与安全游戏体验。' 
    },
    ms: { 
      title: 'HengOngbet | HengOngbet88 - Bonus Selamat Datang Sehingga 200%', 
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
      description: '成为 HengOngBet88 的代理商、股东或会员。赚取佣金，获得独家特权，与马来西亚值得信赖的在线赌场平台一起成长。' 
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

// Improved helper function to update or create meta tags
const updateMetaTag = (property, content, useProperty = false) => {
  try {
    const selector = useProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
    
    // Remove all existing meta tags with this property/name to avoid duplicates
    const existingMetas = document.querySelectorAll(selector);
    existingMetas.forEach(meta => meta.remove());
    
    // Create new meta tag
    const meta = document.createElement('meta');
    if (useProperty) {
      meta.setAttribute('property', property);
    } else {
      meta.setAttribute('name', property);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  } catch (error) {
    console.warn(`Failed to update meta tag ${property}:`, error);
  }
};

// Helper function to get page-specific image based on route
const getPageImage = (routeName) => {
  const images = {
    'Home': 'https://www.hengongbet88.com/assets/home-banner.jpg',
    'Affiliate': 'https://www.hengongbet88.com/assets/affiliate-banner.jpg',
    'Login': 'https://www.hengongbet88.com/assets/login-banner.jpg',
    'GamePage': 'https://www.hengongbet88.com/assets/games-banner.jpg',
    'PromotionPage': 'https://www.hengongbet88.com/assets/promotion-banner.jpg',
    'FAQ': 'https://www.hengongbet88.com/assets/faq-banner.jpg',
    'FourDResult': 'https://www.hengongbet88.com/assets/4d-banner.jpg',
    'DownloadPage': 'https://www.hengongbet88.com/assets/download-banner.jpg',
    'Register': 'https://www.hengongbet88.com/assets/register-banner.jpg',
    'TutorialGuide': 'https://www.hengongbet88.com/assets/tutorial-banner.jpg',
    'TutorialTopUpWithDraw': 'https://www.hengongbet88.com/assets/topup-banner.jpg'
  };
  
  // Extract base route name (remove locale suffix)
  const baseName = routeName.replace(/-[a-z]{2}$/, '');
  return images[baseName] || 'https://www.hengongbet88.com/assets/default-og-image.jpg';
};

// Function to update social media meta tags
const updateSocialMetaTags = (to) => {
  const title = to.meta.title || 'HengOngBet88';
  const description = to.meta.description || 'Play at HengOngBet88, Malaysia\'s trusted online casino.';
  const image = getPageImage(to.name);
  const url = `${BASE_URL}${to.path}`;
  
  // Open Graph Meta Tags
  updateMetaTag('og:title', title, true);
  updateMetaTag('og:description', description, true);
  updateMetaTag('og:image', image, true);
  updateMetaTag('og:url', url, true);
  updateMetaTag('og:type', 'website', true);
  updateMetaTag('og:site_name', 'HENGONGBET88', true);
  
  // Twitter Card Meta Tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', image);
  updateMetaTag('twitter:site', '@hengongbet88');
};

// Improved function to update page title and meta description
const updateBasicMetaTags = (to) => {
  try {
    const title = to.meta.title || 'HengOngBet88';
    const description = to.meta.description || 'Play at HengOngBet88, Malaysia\'s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere.';
    
    // Update page title
    document.title = title;
    
    // Remove existing description meta tags and create new one
    const existingDescriptions = document.querySelectorAll('meta[name="description"]');
    existingDescriptions.forEach(meta => meta.remove());
    
    const descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    descriptionMeta.setAttribute('content', description);
    document.head.appendChild(descriptionMeta);
    
    // Update viewport meta tag if not exists
    if (!document.querySelector('meta[name="viewport"]')) {
      updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    }
    
    // Update charset if not exists
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }
    
  } catch (error) {
    console.warn('Failed to update basic meta tags:', error);
  }
};

// Helper function to create and update JSON-LD schema
const updateSchemaOrg = (to) => {
  try {
    // Remove existing schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const title = to.meta.title || 'HengOngBet88';
    const description = to.meta.description || 'Play at HengOngBet88, Malaysia\'s trusted online casino.';
    const url = `${BASE_URL}${to.path}`;
    const locale = to.meta.locale || defaultLocale;
    
    // Get base route name for schema type determination
    const baseName = to.name.replace(/-[a-z]{2}$/, '');
    
    let schema = {};

    // Page-specific schema based on route
    switch (baseName) {
      case 'Home':
        schema = {
          "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.hengongbet88.com/#website",
      "url": "https://www.hengongbet88.com/",
      "name": "Hengongbet88",
      "alternateName": "Hengongbet",
      "publisher": { "@id": "https://www.hengongbet88.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.hengongbet88.com/#organization",
      "name": "Hengongbet88",
      "url": "https://www.hengongbet88.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hengongbet88.com/assets/hengongbet-CbOFDCLB.png"
      }
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.hengongbet88.com/#localbusiness",
      "name": "Hengongbet88",
      "image": "https://www.hengongbet88.com/assets/hengongbet-CbOFDCLB.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MY"
      },
      "url": "https://www.hengongbet88.com/",
      "openingHours": "Mo-Su 00:00-23:59",
      "paymentAccepted": ["WireTransfer", "CreditCard", "DebitCard", "Cryptocurrency"],
      "description": "Play at HengOngBet88, Malaysia’s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.hengongbet88.com/#webpage",
      "url": "https://www.hengongbet88.com/",
      "name": "HengOngbet | HengOngbet88 - Welcome Bonus Up to 200%",
      "description": "Play at HengOngBet88, Malaysia’s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere",
      "isPartOf": { "@id": "https://www.hengongbet88.com/#website" },
      "breadcrumb": { "@id": "https://www.hengongbet88.com/#breadcrumb" },
      "mainEntity": { "@id": "https://www.hengongbet88.com/#faq" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.hengongbet88.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.hengongbet88.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hengongbet Login",
          "item": "https://www.hengongbet88.com/login"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hengongbet Register",
          "item": "https://www.hengongbet88.com/register"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Hengongbet Download",
          "item": "https://www.hengongbet88.com/download"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.hengongbet88.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is HengOngBet88 legal in Malaysia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HengOngBet88 operates under a valid Curacao Gaming License (GCB) with strict player safety and responsible gaming measures. It is up to players to decide the legal boundaries."
          }
        },
        {
          "@type": "Question",
          "name": "What games can I play on HengOngBet88?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can enjoy 1000+ slots, live casino games, sports betting, and 4D lottery all on one platform."
          }
        },
        {
          "@type": "Question",
          "name": "How do I deposit and withdraw money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deposit via FPX or e-wallets for instant top-ups, and withdraw in-app with fast approval times."
          }
        },
        {
          "@type": "Question",
          "name": "Is HengOngBet88 safe for online transactions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all transactions are SSL-encrypted and games are RNG-certified for fair play."
          }
        },
        {
          "@type": "Question",
          "name": "How do I register on HengOngBet88?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Click “Register,” fill in your mobile number and password, verify your account, and you’re ready to play."
                  }
                }
              ]
            }
          ]
        };
        break;

      case 'Login':
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          "url": url,
          "name": title,
          "description": description,
          "inLanguage": locale,
          "isPartOf": { "@id": "https://www.hengongbet88.com/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.hengongbet88.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Hengongbet Login",
                "item": url
              }
            ]
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I reset my HengOngBet88 password?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Click 'Forgot Password' on the login page, enter your registered email or number, and follow the reset instructions."
                }
              },
              {
                "@type": "Question",
                "name": "How does 2FA work on HengOngBet88?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It sends a verification code to your registered email/SMS, which you must enter after your password."
                }
              },
              {
                "@type": "Question",
                "name": "Why is my HengOngBet88 account locked?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Multiple failed login attempts trigger a temporary lock. Wait 15 minutes or contact support."
                }
              },
              {
                "@type": "Question",
                "name": "Can I Log In From Multiple Devices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but avoid logging in from multiple devices at the same time to prevent security flags."
                }
              },
              {
                "@type": "Question",
                "name": "Is the HengOngBet88 login site safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, the site uses SSL encryption, certified random number testing, and real-time monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "What Should I Do If My Login Still Fails After Trying These Steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact HengOngBet88 customer service via live chat or official channels for assistance."
                }
              }
            ]
          }
        };
        break;

      case 'Register':
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          "url": url,
          "name": title,
          "description": description,
          "inLanguage": locale,
          "isPartOf": { "@id": "https://www.hengongbet88.com/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.hengongbet88.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Hengongbet Register",
                "item": url
              }
            ]
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I register on HengOngBet88?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Click 'Register' on the official HengOngBet88 website or app, fill in your details, verify with the OTP, and your account will be activated instantly."
                }
              },
              {
                "@type": "Question",
                "name": "What Details Do I Need To Create A HengongBet88 Account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll need a username, password, phone number, and optionally a referral code for registration."
                }
              },
              {
                "@type": "Question",
                "name": "How do I verify my HengOngBet88 account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Enter the One-Time Password (OTP) sent to your phone or email after registration to complete activation."
                }
              },
              {
                "@type": "Question",
                "name": "What games can I play after registering?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Registration unlocks slots, live casino, sports betting, and 4D lottery from providers like JILI, Askmebet, and Sexy Baccarat."
                }
              },
              {
                "@type": "Question",
                "name": "Is my account secure on HengOngBet88?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the platform uses encryption, 2FA, and real-time monitoring to protect player accounts."
                }
              }
            ]
          }
        };
        break;

      case 'DownloadPage':
        schema = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              "url": url,
              "name": title,
              "description": description,
              "inLanguage": locale,
              "isPartOf": { "@id": "https://www.hengongbet88.com/#website" },
              "publisher": { "@id": "https://www.hengongbet88.com/#organization" },
              "breadcrumb": { "@id": `${url}#breadcrumb` },
              "primaryImageOfPage": { "@id": `${url}#primaryimage` },
              "mainEntity": { "@id": `${url}#faq` }
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.hengongbet88.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Download",
                  "item": url
                }
              ]
            },
            {
              "@type": "ImageObject",
              "@id": `${url}#primaryimage`,
              "url": "https://www.hengongbet88.com/assets/hengongbet-CbOFDCLB.png"
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${url}#app`,
              "name": "HengOngBet88",
              "operatingSystem": ["Android", "iOS"],
              "applicationCategory": ["MobileApplication", "GameApplication"],
              "description": description,
              "softwareVersion": "2024.1015.001",
              "fileSize": "33.68 MB",
              "datePublished": "2024-10-15",
              "publisher": { "@id": "https://www.hengongbet88.com/#organization" },
              "downloadUrl": url,
              "image": "https://www.hengongbet88.com/assets/hengongbet-CbOFDCLB.png"
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the HengOngBet app safe to download?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Always use the official download links provided by HengOngBet88 to ensure your APK or iOS file is secure and malware-free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I install HengOngBet on both Android and iPhone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the app supports both Android (APK) and iOS devices with a smooth, mobile-first experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where do I get the latest APK version for HengOngBet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can download the latest 2025 APK from the official Android or iOS download buttons or the QR code on this page."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to allow special permissions to install the app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For Android, you may need to enable \"Install from Unknown Sources\" in your settings; on iOS, tap Install and follow the prompts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What games can I access on the app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Slots, sportsbook, live casino, cockfighting, and 4D results are available, with all features optimised for the app."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there app-only promotions or bonuses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes—app users get exclusive free credit offers, rebate alerts, and faster agent tools not available on the website."
                  }
                }
              ]
            }
          ]
        };
        break;

      default:
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          "url": url,
          "name": title,
          "description": description,
          "inLanguage": locale,
          "isPartOf": { "@id": "https://www.hengongbet88.com/#website" }
        };
    }

    // Create and append the schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  } catch (error) {
    console.warn('Failed to update schema.org:', error);
  }
};

// Helper function to remove existing hreflang and canonical links
const removeExistingLinks = () => {
  try {
    const existingLinks = document.querySelectorAll('link[rel="alternate"], link[rel="canonical"]');
    existingLinks.forEach(link => link.remove());
  } catch (error) {
    console.warn('Failed to remove existing links:', error);
  }
};

// Helper function to add canonical link
const addCanonicalLink = (basePath) => {
  try {
    const canonicalUrl = `${BASE_URL}${basePath}`;
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    document.head.appendChild(canonicalLink);
  } catch (error) {
    console.warn('Failed to add canonical link:', error);
  }
};

// Helper function to add hreflang links
const addHreflangLinks = (basePath) => {
  try {
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
  } catch (error) {
    console.warn('Failed to add hreflang links:', error);
  }
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
  return supportedLocales.map(locale => {
    const routeMeta = metaContent[name]?.[locale];
    return {
      path: locale === defaultLocale ? path : `/${locale}${path}`,
      name: locale === defaultLocale ? name : `${name}-${locale}`,
      component,
      meta: {
        locale,
        basePath: path, // Store the base path for SEO link generation
        title: routeMeta?.title || 'HengOngBet88',
        description: routeMeta?.description || 'Play at HengOngBet88, Malaysia\'s trusted online casino. Enjoy slots, live dealers, sports betting, fast payouts, and secure gaming, anytime, anywhere.'
      }
    };
  });
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

// Improved router beforeEach with better error handling
router.beforeEach((to, from, next) => {
  try {
    const locale = to.meta.locale || defaultLocale;
    
    // Set locale for i18n
    setLocale(locale);
    
    // Use nextTick to ensure DOM is ready
    setTimeout(() => {
      // Update basic meta tags (title and description)
      updateBasicMetaTags(to);
      
      // Add Open Graph and Twitter Card meta tags
      updateSocialMetaTags(to);
      
      // Add Schema.org structured data
      updateSchemaOrg(to);
      
      // Add canonical and hreflang links
      const basePath = to.meta.basePath || getBasePath(to.path, locale);
      addSEOLinks(basePath);
    }, 0);
    
  } catch (error) {
    console.warn('Router beforeEach error:', error);
  }
  
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
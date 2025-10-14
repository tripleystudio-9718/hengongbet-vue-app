// scripts/prerender-enhanced.js
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
  Maxbet: {
    en: { 
      title: 'Maxbet Sports Betting | Hengongbet',
      description: 'Join Maxbet sports betting on Hengongbet. Bet on football, basketball, and more with a trusted platform that keeps your play secure and payouts fast.'
    },
    zh: { 
      title: 'Maxbet体育博彩 | Hengongbet',
      description: '在Hengongbet加入Maxbet体育博彩。投注足球、篮球等项目，值得信赖的平台保障您的游戏安全并快速支付奖金。'
    },
    ms: { 
      title: 'Pertaruhan Sukan Maxbet | Hengongbet',
      description: 'Sertai pertaruhan sukan Maxbet di Hengongbet. Pertaruhan bola sepak, bola keranjang dan banyak lagi di platform dipercayai dengan keselamatan terjamin dan pembayaran pantas.'
    }
  },
  Rcb988: {
    en: { 
      title: 'RCB988 Live Betting | Hengongbet',
      description: 'Enjoy RCB988 live betting with Hengongbet. Play your favorite matches, enjoy smooth gameplay, and experience quick withdrawals every time you win.'
    },
    zh: { 
      title: 'RCB988 现场投注 | Hengongbet',
      description: '通过亨公博彩享受RCB988的现场投注。玩您喜欢的比赛，享受流畅的游戏体验，每次获胜都能快速取款。'
    },
    ms: { 
      title: 'Pertaruhan Live RCB988 | Hengongbet',
      description: 'Nikmati pertaruhan langsung RCB988 dengan Hengongbet. Mainkan perlawanan kegemaran anda, nikmati permainan yang lancar, dan alami pengeluaran cepat setiap kali anda menang.'
    }
  },
  Sv388: {
    en: { 
      title: 'SV388 Cockfight Betting | Hengongbet',
      description: 'Bet on live SV388 cockfighting matches at Hengongbet. Simple signup, fast payouts, and a safe place to play your favorite cockfight bets online.'
    },
    zh: { 
      title: 'SV388 斗鸡投注 | Hengongbet',
      description: '在亨公博彩下注SV388现场斗鸡比赛。简单注册，快速提款，让您在安全的平台上畅玩最喜欢的斗鸡投注。'
    },
    ms: { 
      title: 'Pertaruhan Sabung Ayam SV388 | Hengongbet',
      description: 'Bertaruh pada perlawanan sabung ayam SV388 secara langsung di Hengongbet. Daftar mudah, pembayaran pantas, dan tempat selamat untuk bermain pertaruhan sabung ayam kegemaran anda secara online.'
    }
  },
  MonkeyKing: {
    en: { 
      title: 'Monkey King Slots | Hengongbet',
      description: 'Play Monkey King slots on Hengongbet. Smooth spins, fun features, and rewarding wins made for mobile and desktop players.'
    },
    zh: { 
      title: '猴王老虎机 | Hengongbet',
      description: '在亨公博彩玩猴王老虎机。流畅的旋转、有趣的功能和丰厚的奖励，适合移动端和桌面玩家。'
    },
    ms: { 
      title: 'Slot Monkey King | Hengongbet',
      description: 'Main slot Monkey King di Hengongbet. Putaran lancar, ciri menyeronokkan, dan kemenangan lumayan untuk pemain mudah alih dan desktop.'
    }
  },
  Microslot: {
    en: { 
      title: 'Microslot Games | Hengongbet',
      description: 'Hengongbet has established itself as a preferred platform for Microslot enthusiasts, combining a wide game library with reliability.'
    },
    zh: { 
      title: 'Microslot 游戏 | Hengongbet',
      description: '亨公博彩已成为Microslot爱好者的首选平台，结合了丰富的游戏库和可靠性。'
    },
    ms: { 
      title: 'Permainan Microslot | Hengongbet',
      description: 'Hengongbet telah menjadi platform pilihan untuk peminat Microslot, menggabungkan perpustakaan permainan yang luas dengan kebolehpercayaan.'
    }
  },
  Lucky365: {
    en: { 
      title: 'Hengongbet | Lucky365 Demo',
      description: 'The Lucky365 demo on Hengongbet makes this possible, offering a way to explore gameplay features, payout styles, and bonus structures.'
    },
    zh: { 
      title: 'Hengongbet | Lucky365 演示',
      description: '在亨公博彩的Lucky365演示让这一切成为可能，提供了一种探索游戏功能、支付方式和奖励结构的方式。'
    },
    ms: { 
      title: 'Hengongbet | Demo Lucky365',
      description: 'Demo Lucky365 di Hengongbet menjadikannya mungkin, menawarkan cara untuk meneroka ciri permainan, gaya pembayaran, dan struktur bonus.'
    }
  },
  Jili: {
    en: { 
      title: 'Jili Slots | Hengongbet',
      description: 'Enjoy Jili slots on Hengongbet. Easy gameplay, exciting rewards, and smooth spins ready for you anytime, anywhere.'
    },
    zh: { 
      title: 'Jili 老虎机 | Hengongbet',
      description: '在亨公博彩畅玩Jili老虎机。简单的游戏方式、刺激的奖励和流畅的旋转，随时随地为您准备。'
    },
    ms: { 
      title: 'Slot Jili | Hengongbet',
      description: 'Nikmati slot Jili di Hengongbet. Permainan mudah, ganjaran menarik, dan putaran lancar tersedia untuk anda bila-bila masa, di mana sahaja.'
    }
  },
  Jdb: {
    en: { 
      title: 'JDB Slots | Hengongbet',
      description: 'Spin JDB slots with Hengongbet. Simple play, bonus rewards, and smooth designs created for both new and experienced players.'
    },
    zh: { 
      title: 'JDB 老虎机 | Hengongbet',
      description: '在亨公博彩畅玩JDB老虎机。简单的玩法、丰厚的奖励以及流畅的设计，适合新手和有经验的玩家。'
    },
    ms: { 
      title: 'Slot JDB | Hengongbet',
      description: 'Putar slot JDB di Hengongbet. Permainan mudah, ganjaran bonus, dan reka bentuk lancar dicipta untuk pemain baru dan berpengalaman.'
    }
  },
  Askmeslot: {
    en: {
      title: "Askmeslot Games | Hengongbet",
      description: "Play Askmeslot games with Hengongbet. Smooth spins, fun features, and rewarding wins designed for both new and experienced players."
    },
    zh: {
      title: "Askmeslot 游戏 | Hengongbet",
      description: "在 Hengongbet 畅玩 Askmeslot 游戏。流畅旋转、趣味功能与丰厚奖励，适合新手与资深玩家。"
    },
    ms: {
      title: "Permainan Askmeslot | Hengongbet",
      description: "Main permainan Askmeslot di Hengongbet. Putaran lancar, ciri menyeronokkan, dan ganjaran lumayan direka untuk pemain baharu dan berpengalaman."
    }
  },
  PragmaticPlay: {
    en: { 
      title: 'Pragmatic Play Casino - Hengongbet',
      description: 'Explore Pragmatic Play live casino at Hengongbet. Simple sign-up, exciting games, and easy play across all devices.'
    },
    zh: { 
      title: 'Pragmatic Play 赌场 - Hengongbet',
      description: '在亨公博彩体验Pragmatic Play真人赌场。简单注册、刺激游戏，以及跨所有设备的轻松畅玩体验。'
    },
    ms: { 
      title: 'Pragmatic Play Casino - Hengongbet',
      description: 'Terokai kasino langsung Pragmatic Play di Hengongbet. Daftar mudah, permainan menarik, dan pengalaman bermain lancar di semua peranti.'
    }
  },
  AeSexy: {
    en: { 
      title: 'Sexy Live Casino - Hengongbet',
      description: 'Enjoy Sexy Casino live games at Hengongbet. Play with real hosts and smooth action every session.'
    },
    zh: { 
      title: 'Sexy 真人赌场 - Hengongbet',
      description: '在亨公博彩畅玩Sexy真人赌场游戏。与真人荷官互动，每一局都流畅刺激。'
    },
    ms: { 
      title: 'Sexy Live Casino - Hengongbet',
      description: 'Nikmati permainan kasino langsung Sexy di Hengongbet. Bermain dengan hos sebenar dan aksi lancar setiap sesi.'
    }
  },
  HotRoad: {
    en: { 
      title: 'Hotroad Live Casino - Hengongbet',
      description: 'Play Hotroad games at Hengongbet. Enjoy real dealers, secure betting, and 24/7 entertainment with seamless streaming.'
    },
    zh: { 
      title: 'Hotroad 真人赌场 - Hengongbet',
      description: '在亨公博彩畅玩 Hotroad 游戏。体验真人荷官、安全投注和 24/7 不间断的流媒体娱乐。'
    },
    ms: { 
      title: 'Hotroad Live Casino - Hengongbet',
      description: 'Main permainan Hotroad di Hengongbet. Nikmati dealer sebenar, pertaruhan selamat, dan hiburan 24/7 dengan penstriman lancar.'
    }
  },
  Evolution: {
    en: { 
      title: 'Evolution Live Games - Hengongbet',
      description: 'Try Evolution live games at Hengongbet. Trusted providers, top tables, and smooth play online.'
    },
    zh: { 
      title: 'Evolution 真人游戏 - Hengongbet',
      description: '在亨公博彩体验 Evolution 真人游戏。值得信赖的提供商、顶级桌台以及流畅的线上体验。'
    },
    ms: { 
      title: 'Permainan Langsung Evolution - Hengongbet',
      description: 'Cuba permainan langsung Evolution di Hengongbet. Penyedia dipercayai, meja teratas, dan pengalaman permainan lancar dalam talian.'
    }
  },
  BigGaming: {
    en: { 
      title: 'Big Gaming Live Games - Hengongbet',
      description: 'Play Big Gaming live casino games at Hengongbet. Fun choices, fair odds, and easy access 24/7.'
    },
    zh: { 
      title: 'Big Gaming 真人游戏 - Hengongbet',
      description: '在亨公博彩畅玩 Big Gaming 真人娱乐场游戏。丰富选择、公平赔率，全天候 24/7 轻松畅玩。'
    },
    ms: { 
      title: 'Permainan Langsung Big Gaming - Hengongbet',
      description: 'Main permainan kasino langsung Big Gaming di Hengongbet. Pilihan menyeronokkan, peluang adil, dan akses mudah 24/7.'
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
  },
  Blog: {
    en: { 
      title: 'HengOngBet88 Blog - Latest Casino News, Tips & Guides', 
      description: 'Stay updated with the latest casino news, gaming tips, strategies, and expert guides at HengOngBet88 blog. Learn how to maximize your winning potential.' 
    },
    zh: { 
      title: 'HengOngBet88 博客 - 最新赌场新闻、技巧与指南', 
      description: '在 HengOngBet88 博客中了解最新的赌场新闻、游戏技巧、策略和专家指南。学习如何最大化您的获胜潜力。' 
    },
    ms: { 
      title: 'Blog HengOngBet88 - Berita Kasino Terkini, Tips & Panduan', 
      description: 'Kekal terkini dengan berita kasino terbaru, tip permainan, strategi dan panduan pakar di blog HengOngBet88. Pelajari cara memaksimumkan potensi kemenangan anda.' 
    }
  }
}

const routes = [
  // English routes
  { path: '/', name: 'Home', locale: 'en' },
  { path: '/affiliate', name: 'Affiliate', locale: 'en' },
  { path: '/login', name: 'Login', locale: 'en' },
  { path: '/games', name: 'GamePage', locale: 'en' },
  { path: '/games/maxbet', name: 'Maxbet', locale: 'en' },
  { path: '/games/rcb988', name: 'Rcb988', locale: 'en' },
  { path: '/games/sv388', name: 'Sv388', locale: 'en' },
  { path: '/games/monkey-king', name: 'MonkeyKing', locale: 'en' },
  { path: '/games/microslot', name: 'Microslot', locale: 'en' },
  { path: '/games/lucky365', name: 'Lucky365', locale: 'en' },
  { path: '/games/jili', name: 'Jili', locale: 'en' },
  { path: '/games/jdb', name: 'Jdb', locale: 'en' },
  { path: '/games/askmeslot', name: 'Askmeslot', locale: 'en' },
  { path: '/games/pragmatic-play', name: 'PragmaticPlay', locale: 'en' },
  { path: '/games/sexy', name: 'AeSexy', locale: 'en' },
  { path: '/games/hotroad', name: 'HotRoad', locale: 'en' },
  { path: '/games/evolution', name: 'Evolution', locale: 'en' },
  { path: '/games/big-gaming', name: 'BigGaming', locale: 'en' },
  { path: '/promotion', name: 'PromotionPage', locale: 'en' },
  { path: '/faqs', name: 'FAQ', locale: 'en' },
  { path: '/4d-results', name: 'FourDResult', locale: 'en' },
  { path: '/download', name: 'DownloadPage', locale: 'en' },
  { path: '/register', name: 'Register', locale: 'en' },
  { path: '/beginner-tutorial', name: 'TutorialGuide', locale: 'en' },
  { path: '/topup-withdraw-tutorial', name: 'TutorialTopUpWithDraw', locale: 'en' },
  { path: '/blog', name: 'Blog', locale: 'en' },
  
  // Chinese routes
  { path: '/zh', name: 'Home', locale: 'zh' },
  { path: '/zh/affiliate', name: 'Affiliate', locale: 'zh' },
  { path: '/zh/login', name: 'Login', locale: 'zh' },
  { path: '/zh/games', name: 'GamePage', locale: 'zh' },
  { path: '/zh/games/maxbet', name: 'Maxbet', locale: 'zh' },
  { path: '/zh/games/rcb988', name: 'Rcb988', locale: 'zh' },
  { path: '/zh/games/sv388', name: 'Sv388', locale: 'zh' },
  { path: '/zh/games/monkey-king', name: 'MonkeyKing', locale: 'zh' },
  { path: '/zh/games/microslot', name: 'Microslot', locale: 'zh' },
  { path: '/zh/games/lucky365', name: 'Lucky365', locale: 'zh' },
  { path: '/zh/games/jili', name: 'Jili', locale: 'zh' },
  { path: '/zh/games/jdb', name: 'Jdb', locale: 'zh' },
  { path: '/zh/games/askmeslot', name: 'Askmeslot', locale: 'zh' },
  { path: '/zh/games/pragmatic-play', name: 'PragmaticPlay', locale: 'zh' },
  { path: '/zh/games/sexy', name: 'AeSexy', locale: 'zh' },
  { path: '/zh/games/hotroad', name: 'HotRoad', locale: 'zh' },
  { path: '/zh/games/evolution', name: 'Evolution', locale: 'zh' },
  { path: '/zh/games/big-gaming', name: 'BigGaming', locale: 'zh' },
  { path: '/zh/promotion', name: 'PromotionPage', locale: 'zh' },
  { path: '/zh/faqs', name: 'FAQ', locale: 'zh' },
  { path: '/zh/4d-results', name: 'FourDResult', locale: 'zh' },
  { path: '/zh/download', name: 'DownloadPage', locale: 'zh' },
  { path: '/zh/register', name: 'Register', locale: 'zh' },
  { path: '/zh/beginner-tutorial', name: 'TutorialGuide', locale: 'zh' },
  { path: '/zh/topup-withdraw-tutorial', name: 'TutorialTopUpWithDraw', locale: 'zh' },
  { path: '/zh/blog', name: 'Blog', locale: 'zh' },
  
  // Malay routes
  { path: '/ms', name: 'Home', locale: 'ms' },
  { path: '/ms/affiliate', name: 'Affiliate', locale: 'ms' },
  { path: '/ms/login', name: 'Login', locale: 'ms' },
  { path: '/ms/games', name: 'GamePage', locale: 'ms' },
  { path: '/ms/games/maxbet', name: 'Maxbet', locale: 'ms' },
  { path: '/ms/games/rcb988', name: 'Rcb988', locale: 'ms' },
  { path: '/ms/games/sv388', name: 'Sv388', locale: 'ms' },
  { path: '/ms/games/monkey-king', name: 'MonkeyKing', locale: 'ms' },
  { path: '/ms/games/microslot', name: 'Microslot', locale: 'ms' },
  { path: '/ms/games/lucky365', name: 'Lucky365', locale: 'ms' },
  { path: '/ms/games/jili', name: 'Jili', locale: 'ms' },
  { path: '/ms/games/jdb', name: 'Jdb', locale: 'ms' },
  { path: '/ms/games/askmeslot', name: 'Askmeslot', locale: 'ms' },
  { path: '/ms/games/pragmatic-play', name: 'PragmaticPlay', locale: 'ms' },
  { path: '/ms/games/sexy', name: 'AeSexy', locale: 'ms' },
  { path: '/ms/games/hotroad', name: 'HotRoad', locale: 'ms' },
  { path: '/ms/games/evolution', name: 'Evolution', locale: 'ms' },
  { path: '/ms/games/big-gaming', name: 'BigGaming', locale: 'ms' },
  { path: '/ms/promotion', name: 'PromotionPage', locale: 'ms' },
  { path: '/ms/faqs', name: 'FAQ', locale: 'ms' },
  { path: '/ms/4d-results', name: 'FourDResult', locale: 'ms' },
  { path: '/ms/download', name: 'DownloadPage', locale: 'ms' },
  { path: '/ms/register', name: 'Register', locale: 'ms' },
  { path: '/ms/beginner-tutorial', name: 'TutorialGuide', locale: 'ms' },
  { path: '/ms/topup-withdraw-tutorial', name: 'TutorialTopUpWithDraw', locale: 'ms' },
  { path: '/ms/blog', name: 'Blog', locale: 'ms' },
]

const baseUrl = 'http://localhost:4173'
const distPath = path.resolve(__dirname, '../dist')
const BASE_URL = 'https://www.hengongbet88.com'

// Pages that consistently timeout - skip them
const skipPages = [
  '/games/microslot',
  '/games/jdb',
  '/4d-results',
  '/zh/games/microslot',
  '/zh/4d-results',
  '/ms/games/microslot',
  '/ms/4d-results'
]

async function prerender() {
  console.log('🚀 Starting enhanced pre-rendering...')
  console.log(`📊 Total routes: ${routes.length}`)
  
  // Filter out skip pages
  const routesToRender = routes.filter(route => !skipPages.includes(route.path))
  const skippedCount = routes.length - routesToRender.length
  
  if (skippedCount > 0) {
    console.log(`⏭️  Skipping ${skippedCount} problematic pages`)
  }
  console.log(`✅ Will render ${routesToRender.length} pages\n`)
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  let completed = 0
  const failedRoutes = []

  for (const route of routesToRender) {
    try {
      completed++
      console.log(`\n[${completed}/${routesToRender.length}] 📄 Pre-rendering: ${route.path}`)
      
      const page = await browser.newPage()
      
      await page.goto(`${baseUrl}${route.path}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
      })

      // Wait for Vue to mount and render content
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Wait for actual content to appear (look for common elements)
      try {
        await page.waitForSelector('h1, h2, .game-card, .promo-card, main, article', {
          timeout: 5000
        })
      } catch (e) {
        console.log('   ⚠️  No main content selectors found, but continuing...')
      }
      
      // Additional wait to ensure everything is rendered
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Get the rendered HTML
      let html = await page.content()

      // Get meta information
      const meta = metaContent[route.name]?.[route.locale] || {
        title: 'HengOngBet88',
        description: 'Play at HengOngBet88, Malaysia\'s trusted online casino.'
      }

      // Inject proper meta tags if they're missing
      html = injectMetaTags(html, route, meta)

      // Determine the output path
      let outputPath
      if (route.path === '/') {
        outputPath = path.join(distPath, 'index.html')
      } else {
        const routePath = route.path.endsWith('/') ? route.path.slice(0, -1) : route.path
        outputPath = path.join(distPath, routePath, 'index.html')
      }

      // Create directory if it doesn't exist
      const dir = path.dirname(outputPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      // Write the HTML file
      fs.writeFileSync(outputPath, html)
      console.log(`✅ Saved: ${outputPath.replace(distPath, '')}`)

      await page.close()
      
      // Add delay between pages to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500))
      
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route.path}:`, error.message)
      failedRoutes.push(route)
    }
  }

  await browser.close()
  console.log('\n🎉 Pre-rendering complete!')
  console.log(`✅ Successfully rendered ${completed - failedRoutes.length} pages`)
  
  if (skippedCount > 0) {
    console.log(`\n⏭️  Skipped pages (${skippedCount}):`)
    skipPages.forEach(page => console.log(`   - ${page}`))
  }
  
  if (failedRoutes.length > 0) {
    console.log(`\n⚠️  Failed routes (${failedRoutes.length}):`)
    failedRoutes.forEach(route => {
      console.log(`   - ${route.path} (${route.locale})`)
    })
    console.log('\n💡 To retry failed pages, run:')
    failedRoutes.forEach(route => {
      console.log(`   node scripts/prerender-single.js "${route.path}" ${route.name} ${route.locale}`)
    })
  }
  
  console.log(`\n📊 Summary: ${completed - failedRoutes.length}/${routes.length} pages successfully pre-rendered`)
}

function injectMetaTags(html, route, meta) {
  const url = `${BASE_URL}${route.path}`
  const image = `${BASE_URL}/assets/home-banner.jpg`

  // Replace the comment about no title tag
  html = html.replace(
    /<!-- NO title tag here - Vue Router will create it dynamically -->/,
    `<title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="HENGONGBET88" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:site" content="@hengongbet88" />`
  )

  return html
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

prerender().catch(console.error)
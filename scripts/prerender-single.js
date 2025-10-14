// scripts/prerender-single.js
// Usage: node scripts/prerender-single.js "/path" "PageName" "locale"
// Example: node scripts/prerender-single.js "/games/microslot" "Microslot" "en"
// Example: node scripts/prerender-single.js "/zh/4d-results" "FourDResult" "zh"

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get arguments from command line
const routePath = process.argv[2]
const pageName = process.argv[3]
const locale = process.argv[4] || 'en'

if (!routePath || !pageName) {
  console.error('❌ Usage: node scripts/prerender-single.js "/path" "PageName" "locale"')
  console.error('Example: node scripts/prerender-single.js "/games/microslot" "Microslot" "en"')
  process.exit(1)
}

const metaContent = {
  Home: {
    en: { title: 'HengOngbet | HengOngbet88 - Welcome Bonus Up to 200%', description: 'Play at HengOngBet88, Malaysia\'s trusted online casino.' },
    zh: { title: 'HengOngbet | HengOngbet88 - 欢迎奖金高达200%', description: '在 HengOngBet88 玩吧，马来西亚值得信赖的在线赌场。' },
    ms: { title: 'HengOngbet | HengOngbet88 - Bonus Selamat Datang Sehingga 200%', description: 'Main di HengOngBet88, kasino dalam talian yang dipercayai di Malaysia.' }
  },
  Microslot: {
    en: { title: 'Microslot Games | Hengongbet', description: 'Hengongbet has established itself as a preferred platform for Microslot enthusiasts.' },
    zh: { title: 'Microslot 游戏 | Hengongbet', description: '亨公博彩已成为Microslot爱好者的首选平台。' },
    ms: { title: 'Permainan Microslot | Hengongbet', description: 'Hengongbet telah menjadi platform pilihan untuk peminat Microslot.' }
  },
  Jdb: {
    en: { title: 'JDB Slots | Hengongbet', description: 'Spin JDB slots with Hengongbet.' },
    zh: { title: 'JDB 老虎机 | Hengongbet', description: '在亨公博彩畅玩JDB老虎机。' },
    ms: { title: 'Slot JDB | Hengongbet', description: 'Putar slot JDB di Hengongbet.' }
  },
  FourDResult: {
    en: { title: 'Latest 4D Results and Online Betting in Malaysia', description: 'Check real-time 4D results for Magnum, Toto, Da Ma Cai, and more at HengOngBet88.' },
    zh: { title: '马来西亚最新 4D 开奖结果与在线投注', description: '在 HengOngBet88 查看 Magnum、Toto、大马彩等 4D 开奖结果。' },
    ms: { title: 'Keputusan 4D Terkini dan Pertaruhan Dalam Talian di Malaysia', description: 'Semak keputusan 4D masa nyata untuk Magnum, Toto, Da Ma Cai dan banyak lagi di HengOngBet88.' }
  },
  Affiliate: {
    en: { title: 'Become a HengOngBet88 Agent', description: 'Join HengOngBet88 as an agent.' },
    zh: { title: '成为 HengOngBet88 的代理商', description: '成为 HengOngBet88 的代理商。' },
    ms: { title: 'Jadi Ejen HengOngBet88', description: 'Sertai HengOngBet88 sebagai ejen.' }
  }
}

const baseUrl = 'http://localhost:5173'  // Dev server port
const distPath = path.resolve(__dirname, '../dist')
const BASE_URL = 'https://www.hengongbet88.com'

async function prerenderSingle() {
  console.log(`🚀 Pre-rendering single page: ${routePath}`)
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security'
    ]
  })

  try {
    const page = await browser.newPage()
    
    // Set very long timeout for problematic pages
    page.setDefaultNavigationTimeout(180000) // 3 minutes
    page.setDefaultTimeout(180000)
    
    console.log(`📄 Loading: ${baseUrl}${routePath}`)
    console.log(`⏳ This may take up to 3 minutes for slow pages...`)
    
    let pageLoaded = false
    
    // Try to load the page, but don't fail if it times out
    try {
      await page.goto(`${baseUrl}${routePath}`, {
        waitUntil: 'load',  // Just wait for basic load, not network idle
        timeout: 180000
      })
      pageLoaded = true
      console.log('✅ Page loaded successfully')
    } catch (navError) {
      console.log('⚠️  Navigation timeout, but continuing anyway...')
      console.log('   (The page might still have rendered)')
    }

    // Wait extra time for rendering
    console.log('⏳ Waiting 10 seconds for page to fully render...')
    await new Promise(resolve => setTimeout(resolve, 10000))

    // Get the rendered HTML
    let html = await page.content()
    
    // Check if we got meaningful content
    if (!html || html.length < 1000) {
      throw new Error('Page content is too short - page may not have loaded properly')
    }

    // Get meta information
    const meta = metaContent[pageName]?.[locale] || {
      title: 'HengOngBet88',
      description: 'Play at HengOngBet88, Malaysia\'s trusted online casino.'
    }

    // Inject proper meta tags
    html = injectMetaTags(html, routePath, meta)

    // Determine the output path
    let outputPath
    if (routePath === '/') {
      outputPath = path.join(distPath, 'index.html')
    } else {
      const cleanPath = routePath.endsWith('/') ? routePath.slice(0, -1) : routePath
      outputPath = path.join(distPath, cleanPath, 'index.html')
    }

    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Write the HTML file
    fs.writeFileSync(outputPath, html)
    console.log(`✅ Successfully saved: ${outputPath.replace(distPath, '')}`)
    console.log(`📄 File size: ${(html.length / 1024).toFixed(2)} KB`)

    await page.close()
  } catch (error) {
    console.error(`❌ Error:`, error.message)
    console.error('\n💡 Troubleshooting:')
    console.error('   1. Make sure your dev server is running: npm run dev')
    console.error('   2. Try visiting the page manually in browser: ' + baseUrl + routePath)
    console.error('   3. This page might have issues - you can skip it for now')
    process.exit(1)
  }

  await browser.close()
  console.log('🎉 Done!')
}

function injectMetaTags(html, routePath, meta) {
  const url = `${BASE_URL}${routePath}`
  const image = `${BASE_URL}/assets/home-banner.jpg`

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

prerenderSingle().catch(console.error)
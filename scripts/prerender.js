// scripts/prerender.js
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routes = [
  // English routes
  '/', '/affiliate', '/login', '/games', '/promotion', '/faqs',
  '/4d-results', '/download', '/register', '/beginner-tutorial',
  '/topup-withdraw-tutorial', '/blog',
  '/games/maxbet', '/games/rcb988', '/games/sv388', '/games/monkey-king',
  '/games/microslot', '/games/lucky365', '/games/jili', '/games/jdb',
  '/games/askmeslot', '/games/pragmatic-play', '/games/sexy',
  '/games/hotroad', '/games/evolution', '/games/big-gaming',
  
  // Chinese routes
  '/zh', '/zh/affiliate', '/zh/login', '/zh/games', '/zh/promotion',
  '/zh/faqs', '/zh/4d-results', '/zh/download', '/zh/register',
  '/zh/beginner-tutorial', '/zh/topup-withdraw-tutorial', '/zh/blog',
  '/zh/games/maxbet', '/zh/games/rcb988', '/zh/games/sv388',
  '/zh/games/monkey-king', '/zh/games/microslot', '/zh/games/lucky365',
  '/zh/games/jili', '/zh/games/jdb', '/zh/games/askmeslot',
  '/zh/games/pragmatic-play', '/zh/games/sexy', '/zh/games/hotroad',
  '/zh/games/evolution', '/zh/games/big-gaming',
  
  // Malay routes
  '/ms', '/ms/affiliate', '/ms/login', '/ms/games', '/ms/promotion',
  '/ms/faqs', '/ms/4d-results', '/ms/download', '/ms/register',
  '/ms/beginner-tutorial', '/ms/topup-withdraw-tutorial', '/ms/blog',
  '/ms/games/maxbet', '/ms/games/rcb988', '/ms/games/sv388',
  '/ms/games/monkey-king', '/ms/games/microslot', '/ms/games/lucky365',
  '/ms/games/jili', '/ms/games/jdb', '/ms/games/askmeslot',
  '/ms/games/pragmatic-play', '/ms/games/sexy', '/ms/games/hotroad',
  '/ms/games/evolution', '/ms/games/big-gaming',
]

const baseUrl = 'http://localhost:4173' // Vite preview server
const distPath = path.resolve(__dirname, '../dist')

async function prerender() {
  console.log('🚀 Starting pre-rendering...')
  console.log(`📊 Total routes: ${routes.length}`)
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  let completed = 0

  for (const route of routes) {
    try {
      completed++
      console.log(`\n[${completed}/${routes.length}] 📄 Pre-rendering: ${route}`)
      
      const page = await browser.newPage()
      
      // Navigate to the page
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      })

      // Wait for the title to be updated (this means router has finished)
      await page.waitForFunction(() => {
        return document.title && document.title !== '' && !document.title.includes('Vite')
      }, { timeout: 10000 })

      // Wait an additional 2 seconds to ensure all meta tags are updated
      await page.waitForTimeout(2000)

      // Get the rendered HTML
      const html = await page.content()

      // Determine the output path
      let outputPath
      if (route === '/') {
        outputPath = path.join(distPath, 'index.html')
      } else {
        const routePath = route.endsWith('/') ? route.slice(0, -1) : route
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
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message)
    }
  }

  await browser.close()
  console.log('\n🎉 Pre-rendering complete!')
  console.log(`✅ Successfully rendered ${completed} pages`)
}

prerender().catch(console.error)
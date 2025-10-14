// scripts/build-prerender.js
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

async function buildAndPrerender() {
  try {
    console.log('📦 Building project...')
    await execAsync('npm run build')
    
    console.log('🌐 Starting preview server...')
    const previewProcess = exec('vite preview --port 4173')
    
    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    console.log('🎨 Pre-rendering pages...')
    await execAsync('node scripts/prerender.js')
    
    console.log('🛑 Stopping preview server...')
    previewProcess.kill()
    
    console.log('✅ Build complete!')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

buildAndPrerender()
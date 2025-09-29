// scripts/sitemap-generator.js
// Enhanced version with debug output

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Debug: Script starting...');
console.log('📍 Current directory:', __dirname);

// Configuration
const BASE_URL = 'https://www.hengongbet88.com';
const supportedLocales = ['en', 'zh', 'ms'];
const defaultLocale = 'en';

// Define all routes
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily', name: 'Homepage' },
  { path: '/affiliate', priority: '0.8', changefreq: 'weekly', name: 'Affiliate Program' },
  { path: '/login', priority: '0.7', changefreq: 'monthly', name: 'Login' },
  { path: '/games', priority: '0.9', changefreq: 'daily', name: 'Games' },
  { path: '/promotion', priority: '0.9', changefreq: 'daily', name: 'Promotions' },
  { path: '/faqs', priority: '0.6', changefreq: 'monthly', name: 'FAQs' },
  { path: '/4d-results', priority: '0.8', changefreq: 'daily', name: '4D Results' },
  { path: '/download', priority: '0.7', changefreq: 'weekly', name: 'Download' },
  { path: '/register', priority: '0.8', changefreq: 'monthly', name: 'Register' },
  { path: '/tutorial-guide', priority: '0.6', changefreq: 'monthly', name: 'Tutorial Guide' },
  { path: '/topup-withdraw-tutorial', priority: '0.6', changefreq: 'monthly', name: 'Top-up & Withdraw Tutorial' },
  { path: '/beginner-tutorial', priority: '0.6', changefreq: 'monthly', name: 'Beginner Tutorial' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly', name: 'Blog' },
  
  // Individual Game Pages
  { path: '/games/lucky365', priority: '0.8', changefreq: 'weekly', name: 'Lucky365 Games' },
  { path: '/games/microslot', priority: '0.8', changefreq: 'weekly', name: 'Microslot Games' },
  { path: '/games/monkey-king', priority: '0.8', changefreq: 'weekly', name: 'Monkey King Games' },
  { path: '/games/jili', priority: '0.8', changefreq: 'weekly', name: 'Jili Games' },
  { path: '/games/jdb', priority: '0.8', changefreq: 'weekly', name: 'JDB Games' },
  { path: '/games/askmeslot', priority: '0.8', changefreq: 'weekly', name: 'Askmeslot Games' },
  { path: '/games/maxbet', priority: '0.8', changefreq: 'weekly', name: 'Maxbet Games' },
  { path: '/games/rcb988', priority: '0.8', changefreq: 'weekly', name: 'RCB988 Games' },
  { path: '/games/sv388', priority: '0.8', changefreq: 'weekly', name: 'SV388 Games' },
  { path: '/games/pragmatic-play', priority: '0.8', changefreq: 'weekly', name: 'Pragmatic Play Games' },
  { path: '/games/sexy', priority: '0.8', changefreq: 'weekly', name: 'Sexy Live Casino' },
  { path: '/games/hotroad', priority: '0.8', changefreq: 'weekly', name: 'Hotroad Live Casino' },
  { path: '/games/evolution', priority: '0.8', changefreq: 'weekly', name: 'Evolution Live Games' },
  { path: '/games/big-gaming', priority: '0.8', changefreq: 'weekly', name: 'Big Gaming Live Games' }
];

console.log(`📋 Found ${routes.length} routes to process`);

const generateUrl = (basePath, locale) => {
  if (locale === defaultLocale) {
    return `${BASE_URL}${basePath}`;
  }
  return `${BASE_URL}/${locale}${basePath}`;
};

const generateHreflangLinks = (basePath) => {
  const links = supportedLocales.map(locale => {
    const url = generateUrl(basePath, locale);
    return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}"/>`;
  });
  
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${generateUrl(basePath, defaultLocale)}"/>`);
  return links.join('\n');
};

const generateSitemap = () => {
  console.log('🔄 Generating sitemap XML...');
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  let urlCount = 0;
  routes.forEach(route => {
    supportedLocales.forEach(locale => {
      const url = generateUrl(route.path, locale);
      const hreflangLinks = generateHreflangLinks(route.path);
      const localeComment = locale === 'en' ? 'English' : locale === 'zh' ? 'Chinese' : 'Malay';
      
      sitemap += `  <!-- ${route.name} - ${localeComment} -->
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${hreflangLinks}
  </url>
  
`;
      urlCount++;
    });
  });

  sitemap += `</urlset>`;
  console.log(`✅ Generated ${urlCount} URLs in sitemap`);
  return sitemap;
};

const saveSitemap = () => {
  try {
    console.log('💾 Saving sitemap...');
    const sitemapXML = generateSitemap();
    
    const publicDir = join(__dirname, '..', 'public');
    console.log('📂 Public directory path:', publicDir);
    
    if (!existsSync(publicDir)) {
      console.log('📁 Creating public directory...');
      mkdirSync(publicDir, { recursive: true });
    } else {
      console.log('✅ Public directory exists');
    }
    
    const outputPath = join(publicDir, 'sitemap.xml');
    console.log('💾 Writing sitemap to:', outputPath);
    writeFileSync(outputPath, sitemapXML, 'utf8');
    
    console.log('\n🎉 SITEMAP GENERATED SUCCESSFULLY!');
    console.log('📍 Location:', outputPath);
    console.log('📊 Total URLs:', routes.length * supportedLocales.length);
    console.log('🌐 Languages:', supportedLocales.join(', '));
    console.log('🔗 Will be accessible at:', `${BASE_URL}/sitemap.xml`);
    
    return true;
  } catch (error) {
    console.error('\n❌ ERROR GENERATING SITEMAP:');
    console.error(error);
    return false;
  }
};

const generateRobotsTxt = () => {
  try {
    console.log('\n🤖 Generating robots.txt...');
    const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin paths (if any)
# Disallow: /admin/
# Disallow: /api/private/
`;

    const publicDir = join(__dirname, '..', 'public');
    const robotsPath = join(publicDir, 'robots.txt');
    console.log('💾 Writing robots.txt to:', robotsPath);
    writeFileSync(robotsPath, robotsContent, 'utf8');
    
    console.log('✅ ROBOTS.TXT GENERATED SUCCESSFULLY!');
    console.log('📍 Location:', robotsPath);
    return true;
  } catch (error) {
    console.error('\n❌ ERROR GENERATING ROBOTS.TXT:');
    console.error(error);
    return false;
  }
};

const main = () => {
  console.log('\n🚀 STARTING HENGONGBET SITEMAP GENERATION...\n');
  
  const sitemapSuccess = saveSitemap();
  const robotsSuccess = generateRobotsTxt();
  
  if (sitemapSuccess && robotsSuccess) {
    console.log('\n🎉 ALL SEO FILES GENERATED SUCCESSFULLY!');
    console.log('\n📋 NEXT STEPS:');
    console.log('1. ✅ Files are ready in your public/ folder');
    console.log('2. 🚀 Deploy your site');
    console.log('3. 📈 Submit to Google Search Console');
    console.log('4. 🔍 Submit to Bing Webmaster Tools');
    console.log('5. ✅ Verify at:', `${BASE_URL}/sitemap.xml`);
  } else {
    console.log('\n❌ SOME FILES FAILED TO GENERATE');
    process.exit(1);
  }
};

// Execute
main();
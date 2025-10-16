// scripts/prerender-single.js
// Usage: node scripts/prerender-single.js "/path" "PageName" "locale"
// Example: node scripts/prerender-single.js "/zh/games/jdb" "Jdb" "zh"

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routePath = process.argv[2];
const pageName = process.argv[3];
const locale = process.argv[4] || "en";

if (!routePath || !pageName) {
  console.error("❌ Usage: node scripts/prerender-single.js \"/path\" \"PageName\" \"locale\"");
  process.exit(1);
}

const metaContent = {
  Home: {
    en: {
      title: "HengOngbet | HengOngbet88 - Welcome Bonus Up to 200%",
      description: "Play at HengOngBet88, Malaysia's trusted online casino.",
    },
    zh: {
      title: "HengOngbet | HengOngbet88 - 欢迎奖金高达200%",
      description: "在 HengOngBet88 玩吧，马来西亚值得信赖的在线赌场。",
    },
    ms: {
      title: "HengOngbet | HengOngbet88 - Bonus Selamat Datang Sehingga 200%",
      description: "Main di HengOngBet88, kasino dalam talian yang dipercayai di Malaysia.",
    },
  },
  Jdb: {
    en: { title: "JDB Slots | Hengongbet", description: "Spin JDB slots with Hengongbet." },
    zh: { title: "JDB 老虎机 | Hengongbet", description: "在亨公博彩畅玩JDB老虎机。" },
    ms: { title: "Slot JDB | Hengongbet", description: "Putar slot JDB di Hengongbet." },
  },
  Microslot: {
    en: {
      title: "Microslot Games | Hengongbet",
      description:
        "Hengongbet has established itself as a preferred platform for Microslot enthusiasts.",
    },
    zh: {
      title: "Microslot 游戏 | Hengongbet",
      description: "亨公博彩已成为Microslot爱好者的首选平台。",
    },
    ms: {
      title: "Permainan Microslot | Hengongbet",
      description: "Hengongbet telah menjadi platform pilihan untuk peminat Microslot.",
    },
  },
  FourDResult: {
    en: {
      title: "Latest 4D Results and Online Betting in Malaysia",
      description:
        "Check real-time 4D results for Magnum, Toto, Da Ma Cai, and more at HengOngBet88.",
    },
    zh: {
      title: "马来西亚最新 4D 开奖结果与在线投注",
      description: "在 HengOngBet88 查看 Magnum、Toto、大马彩等 4D 开奖结果。",
    },
    ms: {
      title: "Keputusan 4D Terkini dan Pertaruhan Dalam Talian di Malaysia",
      description:
        "Semak keputusan 4D masa nyata untuk Magnum, Toto, Da Ma Cai dan banyak lagi di HengOngBet88.",
    },
  },
};

const baseUrl = "http://localhost:4173"; // vite preview port
const distPath = path.resolve(__dirname, "../dist");
const BASE_URL = "https://www.hengongbet88.com";

async function prerenderSingle() {
  console.log(`📝 Pre-rendering: ${routePath} (${pageName} - ${locale})`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(180000);
  page.setDefaultTimeout(180000);

  const targetUrl = `${baseUrl}${routePath}`;

  // Try multiple strategies to load stubborn pages
  const strategies = [
    { label: "networkidle0", waitUntil: "networkidle0", timeout: 60000 },
    { label: "domcontentloaded", waitUntil: "domcontentloaded", timeout: 60000 },
    { label: "load", waitUntil: "load", timeout: 60000 },
  ];

  let success = false;

  for (const [i, strat] of strategies.entries()) {
    console.log(`⏳ Attempt ${i + 1}: waiting for '${strat.label}'...`);
    try {
      await page.goto(targetUrl, {
        waitUntil: strat.waitUntil,
        timeout: strat.timeout,
      });
      success = true;
      console.log(`✅ Loaded successfully using '${strat.label}'`);
      break;
    } catch (err) {
      console.warn(`⚠️ Attempt ${i + 1} (${strat.label}) failed: ${err.message}`);
      await new Promise((r) => setTimeout(r, 5000 * (i + 1))); // wait before retry
    }
  }

  if (!success) {
    console.warn(`⚠️ All loading strategies failed, proceeding with partial render...`);
  }

  // Wait for Vue to finish rendering meta tags
  try {
    await page.waitForFunction(() => {
      const title = document.title?.trim();
      const desc = document.querySelector('meta[name="description"]');
      return title && desc && desc.content.trim().length > 0;
    }, { timeout: 15000 });
  } catch {
    console.warn("⚠️ Meta tags not fully ready, continuing...");
  }

  // Extra wait for hydration
  await new Promise((r) => setTimeout(r, 2000));

  // Capture rendered HTML
  let html = await page.content();

  // Extract final meta values from DOM (these are what Vue Router set)
  const finalTitle = await page.title();
  const finalDesc = await page.$eval('meta[name="description"]', el => el.content).catch(() => '');

  console.log(`📄 Extracted title: ${finalTitle}`);
  console.log(`📄 Extracted desc: ${finalDesc.substring(0, 80)}...`);

  // Get the correct meta from our config
  const meta = metaContent[pageName]?.[locale] || {
    title: finalTitle || 'HengOngBet88',
    description: finalDesc || "Play at HengOngBet88, Malaysia's trusted online casino.",
  };

  // Clean HTML and inject proper meta tags
  html = injectMetaTags(html, meta, routePath);

  // Save file
  const outputPath =
    routePath === "/"
      ? path.join(distPath, "index.html")
      : path.join(distPath, routePath.replace(/\/$/, ""), "index.html");

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);

  console.log(`✅ Saved: ${outputPath.replace(distPath, "")}`);
  console.log(`📄 Final title: ${meta.title}`);
  console.log(`📄 Final desc: ${meta.description.substring(0, 80)}...`);

  await browser.close();
  console.log("🎉 Done!");
}

// ===== UTILITIES =====
function injectMetaTags(html, meta, routePath) {
  const url = `${BASE_URL}${routePath}`;
  const image = `${BASE_URL}/assets/home-banner.jpg`;

  // ✅ CRITICAL: Remove ALL existing meta tags more aggressively
  html = html
    // Remove title
    .replace(/<title>.*?<\/title>/gis, "")
    
    // Remove ALL description metas (any format)
    .replace(/<meta[^>]*name\s*=\s*["']description["'][^>]*>/gi, "")
    .replace(/<meta[^>]*content\s*=\s*["'][^"']*["'][^>]*name\s*=\s*["']description["'][^>]*>/gi, "")
    
    // Remove ALL og: metas
    .replace(/<meta[^>]*property\s*=\s*["']og:title["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property\s*=\s*["']og:description["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property\s*=\s*["']og:image["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property\s*=\s*["']og:url["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property\s*=\s*["']og:type["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property\s*=\s*["']og:site_name["'][^>]*>/gi, "")
    
    // Remove ALL twitter: metas
    .replace(/<meta[^>]*name\s*=\s*["']twitter:title["'][^>]*>/gi, "")
    .replace(/<meta[^>]*name\s*=\s*["']twitter:description["'][^>]*>/gi, "")
    .replace(/<meta[^>]*name\s*=\s*["']twitter:image["'][^>]*>/gi, "")
    .replace(/<meta[^>]*name\s*=\s*["']twitter:card["'][^>]*>/gi, "")
    .replace(/<meta[^>]*name\s*=\s*["']twitter:site["'][^>]*>/gi, "");

  // ✅ Insert clean, single set of meta tags
  const metaBlock = `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${escapeHtml(meta.title)}">
    <meta property="og:description" content="${escapeHtml(meta.description)}">
    <meta property="og:image" content="${image}">
    <meta property="og:site_name" content="HENGONGBET88">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(meta.title)}">
    <meta name="twitter:description" content="${escapeHtml(meta.description)}">
    <meta name="twitter:image" content="${image}">
    <meta name="twitter:site" content="@hengongbet88">
  `;

  return html.replace(/<\/head>/i, `${metaBlock}\n</head>`);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

prerenderSingle().catch(console.error);
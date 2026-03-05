import pptxgen from 'pptxgenjs';
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { mkdirSync, rmSync, existsSync } from 'fs';
import { setTimeout as sleep } from 'timers/promises';

const SCREENSHOT_DIR = '/tmp/pose-slides';
const OUTPUT_FILE = new URL('./PolicyEngine_POSE_Presentation.pptx', import.meta.url).pathname;
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 };

// Section IDs matching page.tsx order
const SECTIONS = [
  'who-we-are', 'problem', 'fourth-option', 'cold-open', 'how-we-operate',
  'what-we-do', 'journey-begins', 'tension-week4', 'tension-week5',
  'stack-reprise', 'three-org-stack', 'meet-the-three',
  'aha-moment',  // ecosystem — will capture 3 steps separately
  'road-ahead', 'the-close',
  'voices', 'impact-goals', 'partners', 'canvas', 'canvas-detail',
  'governance', 'gov-detail', 'competitive', 'highlights', 'market',
];

// Port: use existing dev server or start one
const DEV_PORT = process.env.PORT || '5174';
const DEV_URL = `http://localhost:${DEV_PORT}`;

function startDevServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('bunx', ['next', 'dev', '--port', DEV_PORT], {
      cwd: new URL('.', import.meta.url).pathname,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let started = false;
    const onData = (chunk) => {
      const text = chunk.toString();
      if (!started && (text.includes('Local:') || text.includes('Ready'))) {
        started = true;
        resolve(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('error', reject);
    setTimeout(() => { if (!started) reject(new Error('Dev server timeout')); }, 30000);
  });
}

async function checkServer(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return res.ok;
  } catch { return false; }
}

// ── Screenshot logic ──
async function captureSlides() {
  // Prep
  if (existsSync(SCREENSHOT_DIR)) rmSync(SCREENSHOT_DIR, { recursive: true });
  mkdirSync(SCREENSHOT_DIR, { recursive: true });

  let server = null;
  const alreadyRunning = await checkServer(DEV_URL);
  if (alreadyRunning) {
    console.log(`Using existing dev server at ${DEV_URL}`);
  } else {
    console.log('Starting dev server...');
    server = await startDevServer();
    console.log('Dev server ready.');
  }

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.goto(DEV_URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Force all sections visible (bypass scroll-reveal animations)
  await page.evaluate(() => {
    document.querySelectorAll('section').forEach(s => s.classList.add('section-visible'));
    // Also force all scroll-reveal elements visible
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-scale').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  });
  await sleep(500);

  const screenshots = [];
  let slideNum = 0;

  for (const sectionId of SECTIONS) {
    if (sectionId === 'aha-moment') {
      // Ecosystem: capture 3 scroll steps
      for (let step = 1; step <= 3; step++) {
        slideNum++;
        const fileName = `${SCREENSHOT_DIR}/slide-${String(slideNum).padStart(2, '0')}.png`;

        await page.evaluate((id, stepNum) => {
          const section = document.getElementById(id);
          if (!section) return;
          const sectionRect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + sectionRect.top;
          const sectionHeight = section.scrollHeight;
          // Scroll to appropriate fraction of the 300vh container
          const scrollTarget = sectionTop + (sectionHeight * (stepNum - 1)) / 3 + 10;
          window.scrollTo(0, scrollTarget);
        }, sectionId, step);

        await sleep(800); // Let sticky + transitions settle

        // Force visibility again after scroll
        await page.evaluate(() => {
          document.querySelectorAll('section').forEach(s => s.classList.add('section-visible'));
          document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-scale').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
        });
        await sleep(300);

        await page.screenshot({ path: fileName, fullPage: false });
        screenshots.push(fileName);
        console.log(`  [${slideNum}] ${sectionId} step ${step}`);
      }
    } else {
      slideNum++;
      const fileName = `${SCREENSHOT_DIR}/slide-${String(slideNum).padStart(2, '0')}.png`;

      await page.evaluate((id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, sectionId);

      await sleep(500);

      // Force visibility after scroll
      await page.evaluate(() => {
        document.querySelectorAll('section').forEach(s => s.classList.add('section-visible'));
        document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-scale').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      });
      await sleep(300);

      await page.screenshot({ path: fileName, fullPage: false });
      screenshots.push(fileName);
      console.log(`  [${slideNum}] ${sectionId}`);
    }
  }

  await browser.close();
  if (server) server.kill();
  return screenshots;
}

// ── Build PPTX from screenshots ──
async function buildPptx(screenshots) {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'PolicyEngine POSE Presentation';
  pptx.author = 'PolicyEngine';

  for (const imgPath of screenshots) {
    const slide = pptx.addSlide();
    slide.background = { color: '0A0F1C' };
    slide.addImage({
      path: imgPath,
      x: 0,
      y: 0,
      w: '100%',
      h: '100%',
    });
  }

  await pptx.writeFile({ fileName: OUTPUT_FILE });
  console.log(`\nCreated: ${OUTPUT_FILE}`);
}

// ── Main ──
const screenshots = await captureSlides();
console.log(`\nCaptured ${screenshots.length} screenshots.`);
await buildPptx(screenshots);

// Cleanup
rmSync(SCREENSHOT_DIR, { recursive: true });

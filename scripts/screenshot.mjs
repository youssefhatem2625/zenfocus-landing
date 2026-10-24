import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'screenshots');
mkdirSync(outputDir, { recursive: true });

const URL = 'http://localhost:5173';

const shots = [
  {
    name: '01-hero',
    label: 'Hero Section - Full Page View',
    clip: null, // full viewport
    scrollY: 0,
  },
  {
    name: '02-widget',
    label: 'Interactive Focus Widget',
    scrollY: 620,
    clip: null,
  },
  {
    name: '03-features',
    label: 'Features Section',
    scrollY: 1300,
    clip: null,
  },
  {
    name: '04-philosophy',
    label: 'Philosophy Dark Section',
    scrollY: 2100,
    clip: null,
  },
  {
    name: '05-testimonials',
    label: 'Testimonials Section',
    scrollY: 2700,
    clip: null,
  },
  {
    name: '06-cta-footer',
    label: 'CTA and Footer',
    scrollY: 3400,
    clip: null,
  },
  {
    name: '07-mobile-hero',
    label: 'Mobile View - Hero',
    scrollY: 0,
    mobile: true,
  },
  {
    name: '08-fullpage',
    label: 'Full Page Screenshot',
    fullPage: true,
  },
];

(async () => {
  console.log('🚀 Starting ZenFocus screenshots...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const shot of shots) {
    const page = await browser.newPage();

    if (shot.mobile) {
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    } else {
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
    }

    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 15000 });

    // Wait for fonts & animations to settle
    await new Promise((r) => setTimeout(r, 1200));

    if (shot.scrollY) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), shot.scrollY);
      await new Promise((r) => setTimeout(r, 500));
    }

    const filePath = join(outputDir, `${shot.name}.png`);

    await page.screenshot({
      path: filePath,
      fullPage: shot.fullPage || false,
    });

    console.log(`✅ ${shot.label} → ${shot.name}.png`);
    await page.close();
  }

  await browser.close();
  console.log(`\n🎉 All screenshots saved to: public/screenshots/`);
})();

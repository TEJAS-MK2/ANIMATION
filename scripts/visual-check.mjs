import { chromium } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://127.0.0.1:4173';
const pages = [
  '/',
  '/docs/',
  '/registry/',
  '/templates/',
  '/component.html?component=magnetic-button'
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const failures = [];

try {
  for (const path of pages) {
    await page.goto(`${baseURL}${path}`, { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => {
      const root = document.documentElement;
      const body = document.body;
      const text = body?.innerText?.trim() || '';
      const visible = [...document.querySelectorAll('body *')].filter((el) => {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
      }).length;
      return {
        title: document.title,
        width: root.scrollWidth,
        viewport: root.clientWidth,
        height: body?.scrollHeight || 0,
        textLength: text.length,
        visibleElements: visible
      };
    });

    if (!result.title) failures.push(`${path}: missing document title`);
    if (result.textLength < 20) failures.push(`${path}: page appears empty`);
    if (result.visibleElements < 5) failures.push(`${path}: too few visible elements`);
    if (result.width > result.viewport + 2) failures.push(`${path}: unexpected horizontal overflow (${result.width}px > ${result.viewport}px)`);
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error('Visual regression guard failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Visual regression guard passed for ${pages.length} representative pages.`);

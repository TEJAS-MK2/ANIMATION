import { test, expect } from '@playwright/test';

const components = [
  'magnetic-button','tilt-card','text-reveal','spotlight-card','aurora-background',
  'scramble-text','glow-button','animated-underline','depth-card','flip-card',
  'typewriter','gradient-text','letter-wave','grid-pulse','particle-field',
  'mesh-gradient','ripple-button','border-beam','elastic-card','count-up',
  'modal','toast','dropdown','tooltip','tabs','accordion','loading','scroll-reveal','cursor-highlight'
];

const pages = ['', 'docs/', 'docs/components/', 'registry/', 'downloads/', 'templates/'];

test('core pages load without HTTP errors', async ({ page }) => {
  for (const path of pages) {
    const response = await page.goto(`http://127.0.0.1:4173/${path}`);
    expect(response?.ok(), path).toBeTruthy();
    await expect(page.locator('body')).toBeVisible();
  }
});

test('all component source pages load', async ({ page }) => {
  for (const component of components) {
    const response = await page.goto(`http://127.0.0.1:4173/components/${component}.html`);
    expect(response?.status(), component).toBe(200);
    await expect(page.locator('body')).toBeVisible();
  }
});

test('documentation links back to the library', async ({ page }) => {
  await page.goto('http://127.0.0.1:4173/docs/');
  await expect(page.getByRole('link', { name: /animation library/i }).first()).toBeVisible();
});

test('component reference exposes all components', async ({ page }) => {
  await page.goto('http://127.0.0.1:4173/docs/components/');
  await expect(page.getByRole('heading', { name: /20 components, documented/i })).toBeVisible();
});

test('mobile page remains usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:4173/');
  await expect(page.locator('body')).toBeVisible();
});

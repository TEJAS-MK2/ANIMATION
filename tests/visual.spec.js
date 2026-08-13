import { test, expect } from '@playwright/test';

const pages = [
  { name: 'home', path: '/' },
  { name: 'docs', path: '/docs/' },
  { name: 'registry', path: '/registry/' },
  { name: 'templates', path: '/templates/' },
  { name: 'advanced-dock', path: '/components/dock.html' },
  { name: 'github-activity', path: '/components/github-activity.html' },
  { name: 'contribution-graph', path: '/components/contribution-graph.html' },
  { name: 'sidebar', path: '/components/sidebar.html' },
  { name: 'media-timeline', path: '/components/media-timeline.html' },
  { name: 'motion-navbar', path: '/components/motion-navbar.html' },
];

test.describe('pixel baseline snapshots', () => {
  for (const { name, path } of pages) {
    test(name, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(path, { waitUntil: 'networkidle' });
      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        animations: 'disabled',
        caret: 'hide',
        scale: 'css',
        maxDiffPixels: 80,
      });
    });
  }
});

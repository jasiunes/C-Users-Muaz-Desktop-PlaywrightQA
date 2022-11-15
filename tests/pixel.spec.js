// example.spec.ts
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
});

await expect(page).toHaveScreenshot('landing.png');

//npx playwright test --update-snapshots


// example.spec.js Playwright Test uses the pixelmatch library.
//You can pass various options to modify its behavior:
const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});


module.exports = { expect: { toHaveScreenshot: { maxDiffPixels: 100 }, }, };
// example.spec.js
const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});
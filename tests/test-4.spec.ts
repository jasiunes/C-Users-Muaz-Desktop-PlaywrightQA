import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');

  // Click [placeholder="Type to search"]
  await page.locator('[placeholder="Type to search"]').click();

  // Fill [placeholder="Type to search"]
  await page.locator('[placeholder="Type to search"]').fill('eloquent');

  // Press Enter
  await page.locator('[placeholder="Type to search"]').press('Enter');

  // Press Enter
  await page.locator('[placeholder="Type to search"]').press('Enter');

  // Click img[alt="image"]
  await page.locator('img[alt="image"]').click();

});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://example.com/
  await page.goto('https://example.com/');

  // Click text=Example Domain
  await page.locator('text=Example Domain').click();
  await expect(page).toHaveURL('Example Domain');
  await expect(page).toHaveTitle('Example Domain');

  const element = await page.locator('h1')
  await expect(page).toBeVisible();
  await expect(page).toHaveText('Example Domain');
  await expect(page).toHaveCount(1);
  //this assertion is opposite of to be visible so you
  const nonExistingElement = await page.locator('h5')
  await expect(page).not.toBeVisible();
});
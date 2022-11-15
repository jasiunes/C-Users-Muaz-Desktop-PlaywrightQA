import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://test.hypnotes.net/
  await page.goto('https://test.hypnotes.net/');

  // Click button:has-text("Sign In")
  await page.locator('button:has-text("Sign In")').click();
  await expect(page).toHaveURL('https://test.hypnotes.net/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('myln@mailsac.com');

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('1288Lisa!');

  // Press Enter
  await page.locator('[placeholder="Password"]').press('Enter');
  await expect(page).toHaveURL('https://test.hypnotes.net/verify-email?email=myln@mailsac.com');

  // Click text=Send again!
  await page.locator('text=Send again!').click();


});
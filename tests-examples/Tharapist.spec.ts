import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://test.hypnotes.net/login
  await page.goto('https://test.hypnotes.net/login');
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill('qa_therapist_standard@mailsac.com');
  await page.locator('[placeholder="Password"]').click();
  await page.locator('[placeholder="Password"]').fill('asdASDw24324.');
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://test.hypnotes.net/dashboard/calendar');
  // Click text=Login Successful
  await page.locator('text=Login Successful').click();

});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://test.hypnotes.net/
  await page.goto('https://test.hypnotes.net/');

  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://test.hypnotes.net/login');

  // Click text=Register
  await page.locator('text=Register').click();
  await expect(page).toHaveURL('https://test.hypnotes.net/register');

});
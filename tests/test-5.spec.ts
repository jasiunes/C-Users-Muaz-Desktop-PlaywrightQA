import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://rahulshettyacademy.com/loginpagePractise/
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Click input[name="password"]
  await page.locator('input[name="password"]').click();

  // Click text=I Agree to the terms and conditions Sign In >> span >> nth=0
  await page.locator('text=I Agree to the terms and conditions Sign In >> span').first().click();

  // Click text=Sign In
  await page.locator('text=Sign In').click();

});
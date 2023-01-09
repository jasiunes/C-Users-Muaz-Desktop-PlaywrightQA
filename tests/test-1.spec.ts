import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.urbanicfarm.com/account/home');
  await page.goto('https://test.urbanicfarm.com/auth/login?route=/account/home');
  await page.locator('#navbarElement').getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('myln@mailsac.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('1288Lisa!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Lisa' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').click();
});
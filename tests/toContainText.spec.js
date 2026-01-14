 import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Go to https://test.urbanicfarm.com/
    await page.goto('https://test.urbanicfarm.com/');
  
    // Click #navbarElement >> text=Login
    await page.locator('#navbarElement >> text=Login').click();
    await expect(page).toHaveURL('https://test.urbanicfarm.com/auth/login');

    await page.locator('[placeholder="Email"]').fill('myln@mailsac.com');
    await page.locator('[placeholder="Password"]').fill('1288Lisa!');
  

    await page.locator('#navbarElement >> text=Logout').click();
    await expect(page).toHaveURL('https://test.urbanicfarm.com/');
  
  });
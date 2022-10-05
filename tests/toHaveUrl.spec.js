import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://test.urbanicfarm.com/
  await page.goto('https://test.urbanicfarm.com/');

  // Click #navbarElement >> text=Login
  await page.locator('#navbarElement >> text=Login').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/auth/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('myln@mailsac.com');

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('1288Lisa!');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/?south=51.23068265201922&west=7.173473759179676&north=51.794745629376706&east=7.757122440820301&query=&inMile=&category=&isOrganic=false&price=&delivery=&unit=');

 
  // Click #navbarElement >> text=Logout
  await page.locator('#navbarElement >> text=Logout').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/');

  // Click #navbarElement >> text=Login
  await page.locator('#navbarElement >> text=Login').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/auth/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('myln@mailsac.com');

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  await expect(page).toContain('password')

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('1288Lisa!');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/?south=51.23068265201922&west=7.173473759179676&north=51.794745629376706&east=7.757122440820301&query=&inMile=&category=&isOrganic=false&price=&delivery=&unit=');

  // Click #navbarElement >> text=Lisa
  await page.locator('#navbarElement >> text=Lisa').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/account/home');

  // Click #navbarElement >> text=Logout
  await page.locator('#navbarElement >> text=Logout').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/');

});
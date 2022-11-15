import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://test.hypnotes.net/register
  await page.goto('https://test.hypnotes.net/register');

  // Click [placeholder="Full name"]
  await page.locator('[placeholder="Full name"]').click();

  // Fill [placeholder="Full name"]
  await page.locator('[placeholder="Full name"]').fill('M');

  // Press CapsLock
  await page.locator('[placeholder="Full name"]').press('CapsLock');

  // Fill [placeholder="Full name"]
  await page.locator('[placeholder="Full name"]').fill('Mina');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('myln@mailsac.com');

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('12345');

  // Press CapsLock
  await page.locator('[placeholder="Password"]').press('CapsLock');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('12345M');

  // Press CapsLock
  await page.locator('[placeholder="Password"]').press('CapsLock');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('12345Mina');

  // Press CapsLock
  await page.locator('[placeholder="Password"]').press('CapsLock');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('12345Mina!');

  // Click button:has-text("Sign Up")
  await page.locator('button:has-text("Sign Up")').click();

  // Click text=The email address you entered is already in use on another account. Please try a
  await page.locator('text=The email address you entered is already in use on another account. Please try a').click();

  // Click div:has-text("Therapist RegisterorPassword must contain the following: ✔ 8-50 characters ✔ A l") >> nth=2
  await page.locator('div:has-text("Therapist RegisterorPassword must contain the following: ✔ 8-50 characters ✔ A l")').nth(2).click();

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

});
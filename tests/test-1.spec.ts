import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.google.com/search?q=urbanicfarmtest&oq=urbanicfarmtest&aqs=chrome..69i57.15876j0j2&sourceid=chrome&ie=UTF-8
  await page.goto('https://www.google.com/search?q=urbanicfarmtest&oq=urbanicfarmtest&aqs=chrome..69i57.15876j0j2&sourceid=chrome&ie=UTF-8');

  // Click button:has-text("Reject all")
  await page.locator('button:has-text("Reject all")').click();
  await expect(page).toHaveURL('https://www.google.com/search?q=urbanicfarmtest&oq=urbanicfarmtest&aqs=chrome..69i57.15876j0j2&sourceid=chrome&ie=UTF-8');

  // Go to https://www.google.com/search?q=urbanicfarmtest&oq=urbanicfarmtest&aqs=chrome..69i57.15876j0j2&sourceid=chrome&ie=UTF-8
  await page.goto('https://www.google.com/search?q=urbanicfarmtest&oq=urbanicfarmtest&aqs=chrome..69i57.15876j0j2&sourceid=chrome&ie=UTF-8');

  // Go to chrome-error://chromewebdata/
  await page.goto('chrome-error://chromewebdata/');

  // Go to https://test.urbanicfarm.com/
  await page.goto('https://test.urbanicfarm.com/');

  // Click #navbarElement >> text=About Us
  await page.locator('#navbarElement >> text=About Us').click();
  await expect(page).toHaveURL('https://test.urbanicfarm.com/about');

  // Click text=View larger map
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=View larger map').click()
  ]);

  // Go to https://www.google.com/maps/place/Sunnyvale,+CA/@37.3888282,-122.0266748,13.96z/data=!4m5!3m4!1s0x808fb645a9d05d3b:0x768dfb26dd7cc3a2!8m2!3d37.36883!4d-122.0363496?hl=en
  await page1.goto('https://www.google.com/maps/place/Sunnyvale,+CA/@37.3888282,-122.0266748,13.96z/data=!4m5!3m4!1s0x808fb645a9d05d3b:0x768dfb26dd7cc3a2!8m2!3d37.36883!4d-122.0363496?hl=en');

});
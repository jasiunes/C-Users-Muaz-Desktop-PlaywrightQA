const { test, expect } = require('@playwright/test');

test ("Popup validations", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");  
    await page.goto("https://google.com");
    await page.goBack();
    await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on("close");
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("mousehover").hover();
})
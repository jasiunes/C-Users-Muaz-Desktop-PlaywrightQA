const { test, expect } = require('@playwright/test');

test(' DropDown Test', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName =page.locator('input[name="username"]');
    const signIn =page.locator('text=SignIn');
    const documentLink = page.locator("href*='[documents-request]'")
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click(); //first();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms").toBeChecked());
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked).toBeFalsy();
    await expect(documentLink).toHaveAttribute("claass","blinkingTexts");

    await page.pause();


});
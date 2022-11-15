const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test ('Client App Login' , async({page}) => {
    const productName = 'Zara Coat 4';
    const products = page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i =0; i< count; ++i)
    {
    if ( await products.nth(i).locator("b").allTextContent() === productName);
    {
        //add to card
        await products.nth(i).locator("text=Add To Cart").click();
        break;
    }
    }
    await page.locator().click();
    await page.pause();
})
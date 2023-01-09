const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test ('Client App Login' , async({page}) => {
    const email = "anshika@gmail.com";
    const productName = 'Zara Coat 4';
    const products = page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
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
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('Zara Coat 4')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();  
    await page.locator("placeholder*='Country']").type("ind",{delay:100});
    const dropdown =page.locator("button").count();
    await dropdown.waitFor();
    optionsCount  = await dropdown.locator("button").count();
    for(let i =0; i< optionsCount; ++i)
    {
        text = await dropdown.locator("button").nth(i).allTextContent();
        if (text ==="India") {
            await dropdown.locator("button").nth(i).click();
            break;  
        }
    }
   await expect(page.locator(".user-name[type='text']")).toHaveText(email);
   page.locator(".action-submit").click();

   
   await expect(page.locator(".hero-primary")).toHaveText(email);
   const orderId = await page.locator(".em-spacer-1 .").textContent();
   console.log(orderId);
   await page.locator
    await page.pause();
})
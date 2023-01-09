const { test, expect } = require('@playwright/test');


test('First Playwright Test', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
const userName =page.locator('input[name="username"]');
const signIn =page.locator('text=Sign In');
const cardTitles = page.locator('.card-body a');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title())
//css
await page.locator('input[name="username"]').type("rahulshetty");
await page.locator('input[name="password"]').type("learning");
await page.locator('text=Sign In').click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//type-fill
await userName.fill("rahulshettyacademy")
await signIn.click();
//console.log(await cardTitles.first().textContent());
//console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);

});

   /* test('First Hypnotes  Test', async ({browser})=>{

        await page.goto("https://test.hypnotes.net/");
        console.log(await page.title());
        await expect(page).toHaveTitle("HYPNOTES");
    
        
        });*/
        
            
test.only(' DropDown Test', async ({page})=>{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName =page.locator('input[name="username"]');
   const signIn =page.locator('text=Sign In');
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption("consult");
   await page.locator(".radiotextsty").last().click(); //first();
   await page.locator("#okayBtn").click();
   console.log(await page.locator(".radiotextsty").last().isChecked());
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   await page.locator("#terms").click();
   //await expect(page.locator("#terms").toBeChecked());
   await page.locator("#terms").uncheck();
   expect (await page.locator("#terms").isChecked).toBeFalsy();

   await page.pause();


});
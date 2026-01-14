
const { test, expect } = require('@playwright/test');
const { AllElements } = require('../../pages/AllElementsPage');
const { BrowserUtilities } = require("../../utilities/BrowserUtilities");
const dataset = JSON.parse(JSON.stringify(require("../../ENUMS/USERSINFO.json")));
/*Description
Log in as a user on the page I am therapist? 
https://test.hypnotes.net/login
I should be able to see that the button is functional
Acceptance Criteria	
I am a therapist? button must be selected*/
/*
The home page must be accessible when the URL is entered

When Sign Up is clicked, Client and Therapist options should appear.
Therapist should be selected
*/

test('@Therapist Login Test test', async({page})=>{

    const browserUtilities= new BrowserUtilities(page)
;
    const allElement= new AllElements(page)
;
    await allElement.loginPage.goToLogin();
   await allelement.loginpage.validlogin("qa_therapist_standard@mailsac.com","asdASDw24324.");
    // Sign Up button should be clickable
    await allElement.signUpPage.signupbutton.click();
    await allElement.signUpPage.thrapistSignUp.click();
    await expect(allElement.signUpPage.thrapistSignUp).toHaveText('Therapist');
    await allElement.signUpPage.therapistFullName.fill("abcd");
    await allElement.signUpPage.therapistEmail.type(await browserUtilities.randomEmail());
    await allElement.signUpPage.therapistPassword.fill("asdASDw24324.");
    await allElement.signUpPage.submitButton.click();

    await browserUtilities.goToLogin();
    await allelement.loginpage.validlogin("qa_therapist_standard@mailsac.com","asdASDw24324.");
});


test('@smoke login test', async({page})=>{

  const allElement= new AllElements(page)
;
  
  await allElement.loginPage.goToLogin();
  await allelement.loginpage.validlogin("qa_therapist_standard@mailsac.com","asdASDw24324.");
  await expect(allElement.signUpPage.thrapistSignUp).toHaveText('Therapist');

});


test('login',async ({page}) =>{

  await page.goto("https://test.hypnotes.net/login");
  await page.locator('[type="email"]').type('qa_therapist_standard@mailsac.com');
  await page.locator('[type="password"]').type('asdASDw24324.');
  
  await page.locator('[type="submit"]').click();
  await expect.locator('[type="Login Successfull"]');
  await expect(page.locator('[type="refer a friend"]')).toHaveText('refer a friend');
  });

  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://test.hypnotes.net/login
  await page.goto('https://test.hypnotes.net/login');
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill('qa_therapist_standard@mailsac.com');
  await page.locator('[placeholder="Password"]').click();
  await page.locator('[placeholder="Password"]').fill('asdASDw24324.');
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://test.hypnotes.net/dashboard/calendar');
  await page.locator('text=Login Successful').click();
  await expect(page).toHaveText('Login Successful');

});
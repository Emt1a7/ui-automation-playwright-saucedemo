// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from '../pageObject/loginPage';

let userName = "locked_out_user";
const password = "secret_sauce";

test.describe("SauceDemo", ()=>{

test.beforeEach( async ({ page }) => {
    const loginpage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
  });

test('Test and verify message of locked out user', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.enterDataInInputField("Username", userName);
    await loginpage.enterDataInInputField("Password", password);
    await loginpage.clickOnButton("Login");
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
    await  page.pause();
});
})



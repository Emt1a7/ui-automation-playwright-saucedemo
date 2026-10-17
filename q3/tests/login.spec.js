// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from '../pageObject/loginPage';
import SideBarPage from '../pageObject/sidebarpage';
import InventoryPage from '../pageObject/invetorypage';
import CartPage from '../pageObject/cartPage';
import { faker, Faker } from '@faker-js/faker';
import CheckoutOnePage from '../pageObject/checkoutOnePage';

let userName = "performance_glitch_user";
const password = "secret_sauce";
const fname = "Emtiaz";
const lname = "mohammed";
const zip = "1235";

test.describe("SauceDemo", ()=>{

  test.beforeEach( async ({ page }) => {
      const loginpage = new LoginPage(page);
      await page.goto("https://www.saucedemo.com/");
    });


  test('Login and reset App State', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const sidebarpage = new SideBarPage(page);
    const inventorypage = new InventoryPage(page);
    const cartpage = new CartPage(page);
    const checkoutOne = new CheckoutOnePage(page);
    const firstProduct = page.locator('.inventory_item').first();
    await loginpage.enterDataInInputField("Username", userName);
    await loginpage.enterDataInInputField("Password", password);
    await loginpage.clickOnButton("Login");   
    await sidebarpage.clickOnButton("Open Menu");
    await sidebarpage.clickOnButton("Reset App State");
    await page.selectOption('select[data-test="product-sort-container"]', 'za');
    await firstProduct.locator('button:has-text("Add to cart")').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();
    await cartpage.clickOnButton("Checkout");
    await checkoutOne.enterDataInInputField("First Name", fname);
    await checkoutOne.enterDataInInputField("Last Name", lname);
    await checkoutOne.enterDataInInputField("Zip/Postal Code", zip);
    await checkoutOne.clickOnButton("Continue");
    await expect(page.locator('[data-test="item-3-title-link"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
    await expect(page.locator('[data-test="total-label"]')).toContainText('17.27');
    await checkoutOne.clickOnButton("Finish");
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');   
    await sidebarpage.clickOnButton("Open Menu");
    await sidebarpage.clickOnButton("Reset App State");
    await sidebarpage.clickOnButton("Logout");
    await  page.pause()
  });

})



import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LogoutPage } from '../pages/logout-page';
import { MyAccountPage } from '../pages/my-account-page';

test.use({ storageState: { cookies: [], origins: [] } });

let loginPage: LoginPage;
let logoutPage: LogoutPage;
let myAccountPage: MyAccountPage;

test.beforeEach(async ({ page }) => {
    // Initalise page objects
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    myAccountPage = new MyAccountPage(page);

    await page.goto('');
});

test('Login and logout with valid credentials', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    //Login steps
    const email = process.env.EMAIL || '';
    const password = process.env.PASSWORD || '';

    await loginPage.clickMyAccount();
    await loginPage.clickLogin();
    await loginPage.performLogin(email, password)

    //Verify succesful login by checking My Account presence
    await expect(myAccountPage.myAccountHeading).toBeVisible();

    //Logout steps
    await logoutPage.clickMyAccount();
    await logoutPage.clickLogout();

    // Verify logout
    await expect(logoutPage.logoutHeading).toBeVisible();
    await logoutPage.clickContinue();
    await expect(page).toHaveTitle(/your store/i);
})

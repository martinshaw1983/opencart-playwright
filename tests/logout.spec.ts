import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LogoutPage } from '../pages/logout-page'

let loginPage: LoginPage
let logoutPage: LogoutPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);

    await page.goto('');
});

test('User Logout', { tag: ['@regression'] }, async ({ page }) => {
    // loging can be set once using storage state to start each test logged in
    const email = process.env.EMAIL || '';
    const password = process.env.PASSWORD || ''

    await loginPage.clickMyAccount();
    await loginPage.clickLogin();
    await loginPage.performLogin(email, password);

    // Logout steps
    await logoutPage.clickMyAccount();
    await logoutPage.clickLogout();

    // Verify logout
    await expect(logoutPage.logoutHeading).toBeVisible();
    await logoutPage.clickContinue();
    await expect(page).toHaveTitle(/your store/i);
});

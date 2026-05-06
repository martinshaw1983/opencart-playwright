import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LogoutPage } from '../pages/logout-page'
import { TestConfig } from '../test.config';

let config: TestConfig
let loginPage: LoginPage
let logoutPage: LogoutPage

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); // Load config (URL, credentials)

    // Initalise page objects
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);

    await page.goto(config.appUrl); // Navigate to base URL
});

test('User Logout', { tag: ['@master', '@regression'] }, async ({ page }) => {
    // loging can be set once using storage state to start each test logged in
    await loginPage.clickMyAccount();
    await loginPage.clickLogin();
    await loginPage.performLogin(config.email, config.password);

    // Logout steps
    await logoutPage.clickMyAccount();
    await logoutPage.clickLogout();

    // Verify logout
    await expect(logoutPage.logoutHeading).toBeVisible();
    await logoutPage.clickContinue();
    await expect(page).toHaveTitle(/your store/i);
});

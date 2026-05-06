import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { MyAccountPage } from '../pages/my-account-page';
import { TestConfig } from '../test.config';

let config: TestConfig
let loginPage: LoginPage
let myAccountPage: MyAccountPage

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); // Load config (URL, credentials)

    // Initalise page objects
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)

    await page.goto(config.appUrl); // Navigate to base URL
});

test('Login with valid credentials', {
    tag: ['@master', '@sanity', '@regression']
}, async () => {
    await loginPage.clickMyAccount();
    await loginPage.clickLogin();
    await loginPage.performLogin(config.email, config.password)

    //Verify succesful login by checking My Account presence
    await expect(myAccountPage.myAccountHeading).toBeVisible();
})

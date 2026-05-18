import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { MyAccountPage } from '../pages/my-account-page';

let loginPage: LoginPage
let myAccountPage: MyAccountPage

test.beforeEach(async ({ page }) => {
    // Initalise page objects
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)

    await page.goto('');
});

test('Login with valid credentials', { tag: ['@smoke', '@regression'] }, async () => {
    const email = process.env.EMAIL || '';
    const password = process.env.PASSWORD || '';

    await loginPage.clickMyAccount();
    await loginPage.clickLogin();
    await loginPage.performLogin(email, password)

    //Verify succesful login by checking My Account presence
    await expect(myAccountPage.myAccountHeading).toBeVisible();
})

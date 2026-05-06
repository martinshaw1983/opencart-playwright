import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { MyAccountPage } from '../pages/my-account-page';
import { DataProvider } from '../utils/data-provider';
import { TestConfig } from '../test.config';
import jsonloginData from '../testdata/login-data.json';

let config: TestConfig
let loginPage: LoginPage
let myAccountPage: MyAccountPage

const csvLoginData = DataProvider.getTestDataFromCsv('../testdata/login-data.csv')

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); // Load config (URL, credentials)

    // Initalise page objects
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)

    await page.goto(config.appUrl); // Navigate to base URL
});

for (const data of csvLoginData) {
    test(`Login with CSV date ${data.testName}`, { tag: ['@datadriven'] }, async () => {
       await loginPage.clickMyAccount();
        await loginPage.clickLogin();
        await loginPage.performLogin(data.email, data.password)

        if (data.expected === 'success') {
            await expect(myAccountPage.myAccountHeading).toBeVisible();
        } else {
            await expect(loginPage.errMessage).toBeVisible();
        }
    });
}

for (const { testName, email, password, expected } of jsonloginData) {

    test(`Login with JSON date ${testName}`, { tag: ['@datadriven'] }, async () => {
        await loginPage.clickMyAccount();
        await loginPage.clickLogin();
        await loginPage.performLogin(email, password)

        if (expected === 'success') {
            await expect(myAccountPage.myAccountHeading).toBeVisible();
        } else {
            await expect(loginPage.errMessage).toBeVisible();
        }
    });
}
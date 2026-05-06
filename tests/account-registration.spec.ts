import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/registration-page';
import { TestConfig } from '../test.config';
import { RandomUserGenerator } from '../utils/random-user-generator'

let registrationPage: RegistrationPage;
let config: TestConfig

test.beforeEach(async ({ page }) => {
    config = new TestConfig()
    await page.goto(config.appUrl); //Navigate to the application URL
    registrationPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {

})

test('Register a new user', {
    tag: ['@master', '@sanity', '@regression']
}, async () => {
    await registrationPage.clickMyAccount();
    await registrationPage.clickRegister();

    // Fill in registraion details with random data
    const newUser = RandomUserGenerator.getRandomUserData();
    await registrationPage.completeRegistrationForm(newUser);

    // Validate confimation message
    await expect(registrationPage.msgConfirmation).toContainText('Your Account Has Been Created!')
});
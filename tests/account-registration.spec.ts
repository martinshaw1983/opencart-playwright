import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/registration-page';
import { RandomUserGenerator } from '../utils/random-user-generator'

let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);

    await page.goto('');
});

test.afterEach(async ({ page }) => {

})

test('Register a new user', { tag: ['@regression'] }, async () => {
    await registrationPage.clickMyAccount();
    await registrationPage.clickRegister();

    // Fill in registraion details with random data
    const newUser = RandomUserGenerator.getRandomUserData();
    await registrationPage.completeRegistrationForm(newUser);

    // Validate confimation message
    await expect(registrationPage.msgConfirmation).toContainText('Your Account Has Been Created!')
});
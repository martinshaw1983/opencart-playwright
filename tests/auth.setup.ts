import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

let loginPage: LoginPage;
const authFile = 'playwright/.auth/user.json';

setup('global authentication', async ({ page }) => {
    loginPage = new LoginPage(page)
    const email = process.env.EMAIL || '';
    const password = process.env.PASSWORD || '';

    await page.goto('index.php?route=account/login');
    await loginPage.performLogin(email, password)
    await page.waitForURL('index.php?route=account/account');
    await page.context().storageState({ path: authFile });
});
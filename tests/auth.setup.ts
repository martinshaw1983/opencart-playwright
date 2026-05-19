import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import path from 'path';

let loginPage: LoginPage;
const authFile = 'playwright/.auth/user.json';


const userPool = [
    {
        email: process.env.USER_ONE_EMAIL || '',
        password: process.env.USER_ONE_PASSWORD || ''
    },
    {
        email: process.env.USER_TWO_EMAIL || '',
        password: process.env.USER_TWO_PASSWORD || ''
    },
    {
        email: process.env.USER_THREE_EMAIL || '',
        password: process.env.USER_THREE_PASSWORD || ''
    }
];

userPool.forEach((user, index) => {
    setup(`global authentication for worker user ${index}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.goto('index.php?route=account/login');
        await loginPage.performLogin(user.email, user.password);
        await page.waitForURL('index.php?route=account/account');

       
        const authFile = path.join(__dirname, `../playwright/.auth/user${index}.json`);
        await page.context().storageState({ path: authFile });
    });
});
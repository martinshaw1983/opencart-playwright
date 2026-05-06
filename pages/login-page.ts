import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {

    readonly txtEmailAddress: Locator;
    readonly txtPassword: Locator
    readonly btnLogin: Locator
    readonly errMessage: Locator

    constructor(public readonly page: Page) {
        super(page);

        this.txtEmailAddress = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.txtPassword = page.getByRole('textbox', { name: 'Password' });
        this.btnLogin = page.locator('#content').getByRole('button', { name: 'Login' });
        this.errMessage = page.locator('.alert-danger');

    }

    async performLogin(email: string, password: string) {
        await this.txtEmailAddress.fill(email);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }
}
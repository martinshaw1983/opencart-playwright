import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base-page';


interface UserRegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    password: string;
    confirmPassword: string;
}

export class RegistrationPage extends BasePage {

    // Locators
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtEmail: Locator;
    readonly txtTelephone: Locator;
    readonly txtPassword: Locator;
    readonly txtConfirmPassword: Locator;
    readonly chkdPolicy: Locator;
    readonly btnContinue: Locator;
    readonly msgConfirmation: Locator;

    constructor(public readonly page: Page) {
        super(page)

        // Initialize locators
        this.txtFirstName = page.getByRole('textbox', { name: 'First Name' });
        this.txtLastName = page.getByRole('textbox', { name: 'Last Name' })
        this.txtEmail = page.getByRole('textbox', { name: 'E-Mail' });
        this.txtTelephone = page.getByRole('textbox', { name: 'Telephone' });
        this.txtPassword = page.getByLabel('Password', { exact: true });
        this.txtConfirmPassword = page.getByRole('textbox', { name: 'Password Confirm' });
        this.chkdPolicy = page.getByRole('checkbox');
        this.btnContinue = page.locator('.buttons').getByRole('button');
        this.msgConfirmation = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
    }

    async completeRegistrationForm(userData: UserRegistrationData) {
        await this.txtFirstName.fill(userData.firstName);
        await this.txtLastName.fill(userData.lastName);
        await this.txtEmail.fill(userData.email);
        await this.txtTelephone.fill(userData.telephone);
        await this.txtPassword.fill(userData.password);
        await this.txtConfirmPassword.fill(userData.confirmPassword);
        await this.chkdPolicy.check();
        await this.btnContinue.click();
    }
}
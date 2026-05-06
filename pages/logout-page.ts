import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class LogoutPage extends BasePage {
    
    readonly logoutHeading: Locator
    readonly btnContinue: Locator

    constructor(public readonly page: Page){
        super(page);

        this.logoutHeading = page.getByRole('heading', { name: 'Account Logout' });
        this.btnContinue = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinue(){
        await this.btnContinue.click();
    }
}
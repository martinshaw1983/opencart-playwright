import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class MyAccountPage extends BasePage {
    readonly myAccountHeading: Locator;

    constructor(public readonly page: Page){
        super(page);
        this.myAccountHeading = page.locator('#content').getByRole('heading', { name: 'My Account' });
    }
}
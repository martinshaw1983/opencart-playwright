import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base-page'

export class ShoppingCartPage extends BasePage {

    readonly lblTotalPrice: Locator;
    readonly btnCheckout: Locator;

    constructor(public readonly page: Page) {
        super(page)

        this.lblTotalPrice = page.locator('table.table-bordered').locator('tr', { hasText: 'Total:' }).locator('td').last();
        this.btnCheckout = page.locator("a[class='btn btn-primary']");
    }

    async getTotalPrice() {
        return await this.lblTotalPrice.textContent();
    }

    async clickOnCheckout() {
        await this.btnCheckout.click();
    }
}
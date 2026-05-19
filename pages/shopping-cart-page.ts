import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base-page'

export class ShoppingCartPage extends BasePage {

    readonly lblTotalPrice: Locator;
    readonly btnCheckout: Locator;
    readonly cartItemsRows: Locator

    constructor(public readonly page: Page) {
        super(page)

        this.lblTotalPrice = page.locator('table.table-bordered').locator('tr', { hasText: 'Total:' }).locator('td').last();
        this.btnCheckout = page.locator("a[class='btn btn-primary']");
        this.cartItemsRows = page.locator('.table-responsive tbody tr');
    }

    async getTotalPrice() {
        return await this.lblTotalPrice.textContent();
    }

    async clickOnCheckout() {
        await this.btnCheckout.click();
    }

    async removeProductFromCart(productName: string) {
        const productRow = this.cartItemsRows.filter({ hasText: productName })
        await productRow.locator('button[data-original-title="Remove"]').click();
    }

    async clearCartIfNotEmpty() {
        if (await this.cartItemsRows.count() > 0) {
            await this.cartItemsRows.first().locator('button[data-original-title="Remove"]').click();
        }
    }
}
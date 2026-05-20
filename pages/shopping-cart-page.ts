import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base-page'

export class ShoppingCartPage extends BasePage {

    readonly btnCheckout: Locator;
    readonly cartItemsRows: Locator
    readonly cartTable: Locator;
    readonly cartTotal: Locator;
    readonly hdShoppingCart: Locator;

    constructor(public readonly page: Page) {
        super(page)

        this.btnCheckout = page.locator("a[class='btn btn-primary']");
        this.cartItemsRows = page.locator('.table-responsive tbody tr');
           this.cartTable = page.locator('.table-responsive');
        this.cartTotal = page.locator('#cart-total');
        this.hdShoppingCart = page.getByRole('heading', { name: /Shopping Cart/i });
    }

    async getCartColumnIndexByHeader(headerName: string): Promise<number> {
        const allHeaders = await this.page.locator('.table-responsive table thead tr td').allTextContents();
        const trimHeaders = allHeaders.map(text => text.trim());
        return trimHeaders.indexOf(headerName);
    }

    async filterCartProducts(productName: string) {
        return this.cartItemsRows.filter({ hasText: productName });
    }

    async getPriceFromText(locator: Locator): Promise<number> {
        const price = await locator.textContent();
        const totalPrice = price?.replace(/[^0-9.]/g, '') || '0';
        return parseFloat(totalPrice);
    }

    async getPrice(productName: string, header: string): Promise<number> {
        const columnHeaderIndex = await this.getCartColumnIndexByHeader(header);
        const row = await this.filterCartProducts(productName);
        return await this.getPriceFromText(row.locator('> td').nth(columnHeaderIndex));
    }

    async calcProductTotalPrice(productName: string, quantity: number) {
        const unitPrice = await this.getPrice(productName, 'Unit Price');
        return unitPrice * quantity
    }

    async clickOnCheckout() {
        await this.btnCheckout.click();
    }

    async removeProductFromCart(productName: string) {
        const productRow = await this.filterCartProducts(productName);
        await productRow.locator('button[data-original-title="Remove"]').click();
    }

    async clearCartIfNotEmpty() {
        while (await this.cartItemsRows.count() > 0) {
            await this.cartItemsRows.first().locator('button[data-original-title="Remove"]').click();
            await this.page.waitForLoadState('networkidle');
        }
    }
}
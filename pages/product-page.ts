import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../pages/base-page'

export class ProductPage extends BasePage {

    readonly txtQuantity: Locator;
    readonly btnAddToCart: Locator;

    constructor(public readonly page: Page) {
        super(page);

        this.txtQuantity = page.getByRole('textbox', { name: 'Qty' });
        this.btnAddToCart = page.locator('#product').getByRole('button', { name: 'Add to Cart' });
    }

    async addProductToCart(quantity: string) {
        await this.txtQuantity.fill(quantity);
        await this.btnAddToCart.click();
    }

    async getProductTitle(productName: string) {
        return this.page.getByRole('heading', { name: productName, exact: true });
    }
}
import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from '../pages/base-page'

export class ProductPage extends BasePage {
    
    readonly txtQuantity: Locator;
    readonly btnAddToCart: Locator;
    readonly btnRemoveFromCart: Locator
  
    constructor(public readonly page: Page) {
        super(page);
        
        this.txtQuantity = page.getByRole('textbox', { name: 'Qty' });
        this.btnAddToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.btnRemoveFromCart = page.locator('button[data-original-title="Remove"]');
    }

    async addProductToCart(quantity: string) {
        await this.txtQuantity.fill(quantity);
        await this.btnAddToCart.click();
    }

       async removeProductFromCart() {
        await this.btnRemoveFromCart.click();
    }
}
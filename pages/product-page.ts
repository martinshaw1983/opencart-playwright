import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from '../pages/base-page'

export class ProductPage extends BasePage {
    
    readonly txtQuantity: Locator;
    readonly btnAddToCart: Locator;
    readonly msgAddedToCart: Locator;
    // readonly cnfMsg: Locator;
    

    constructor(public readonly page: Page) {
        super(page);
        
        this.txtQuantity = page.getByRole('textbox', { name: 'Qty' });
        this.btnAddToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.msgAddedToCart = page.getByText('Success: You have added');
    }

    async addProductToCart(quantity: string) {
        await this.txtQuantity.fill(quantity);
        this.btnAddToCart.click();
    }
}
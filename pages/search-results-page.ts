import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base-page';

export class SearchResultsPage extends BasePage {

    readonly searchPageHeader: Locator;
    readonly searchResults: Locator;
    readonly noProductsFound: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.searchPageHeader = page.locator('#content > h1')
        this.searchResults = page.locator('h4>a');
        this.noProductsFound = page.getByText('There is no product that');
    }

    async selectProduct(productName: string) {
        // This finds the specific link that has your product name
        const product = this.searchResults.filter({ has: this.page.getByText(productName, {exact: true}) });
        // Playwright waits for it to be ready and clicks it
        await product.click();
    }

    async getProductCount(): Promise<number> {
        return this.searchResults.count();
    }
}
import { test, expect } from '@playwright/test';
import { SearchResultsPage } from '../pages/search-results-page'
import { ProductPage } from '../pages/product-page'
import { TestConfig } from '../test.config';

let config: TestConfig;
let searchResultsPage: SearchResultsPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); // Load config (URL, credentials)

    // Initalise page objects
    searchResultsPage = new SearchResultsPage(page);

    await page.goto(config.appUrl); // Navigate to base URL
});

test('Search for product and select product', { tag: ['@master', '@regression'] }, async ({ page }) => {
    const productName = config.productName
    await searchResultsPage.enterSearchTerm(productName);
    await searchResultsPage.clickSearch();
    await expect(searchResultsPage.searchResults.first()).toContainText(productName, { ignoreCase: true });
    await searchResultsPage.selectProduct(productName);
    await expect(page).toHaveTitle(productName);
});

test('Search for product that does not exist', { tag: ['@master', '@regression'] }, async ({ page }) => {
    let product = 'Eggs'
    await searchResultsPage.enterSearchTerm(product);
    await searchResultsPage.clickSearch();
    await expect(searchResultsPage.noProductsFound).toBeVisible();
    const count = await searchResultsPage.getProductCount();
    expect(count).toBe(0);
});
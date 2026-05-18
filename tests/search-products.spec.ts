import { test, expect } from '@playwright/test';
import { SearchResultsPage } from '../pages/search-results-page'

let searchResultsPage: SearchResultsPage;

test.beforeEach(async ({ page }) => {
    searchResultsPage = new SearchResultsPage(page);

    await page.goto('');
});

test('Search for product and select product', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    const productName = 'MacBook';
    await searchResultsPage.enterSearchTerm(productName);
    await searchResultsPage.clickSearch();
    await expect(searchResultsPage.searchResults.first()).toContainText(productName, { ignoreCase: true });
    await searchResultsPage.selectProduct(productName);
    await expect(page).toHaveTitle(productName);
});

test('Search for product that does not exist', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    let product = 'Eggs'
    await searchResultsPage.enterSearchTerm(product);
    await searchResultsPage.clickSearch();
    await expect(searchResultsPage.noProductsFound).toBeVisible();
    const count = await searchResultsPage.getProductCount();
    expect(count).toBe(0);
});
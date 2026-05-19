import { test, expect } from '../fixtures/page-object-fixture';
import { SearchResultsPage } from '../pages/search-results-page'
import { RandomProductGenerator } from '../utils/random-product-generator'
import productData from '../data/product-data.json'

let searchResultsPage: SearchResultsPage;

test.beforeEach(async ({ page }) => {
    searchResultsPage = new SearchResultsPage(page);

    await page.goto('');
});

test.describe('Search Products - Positive', () => {

    test('Search and select product', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
        const randomProduct = RandomProductGenerator.getRandomProduct(productData);

        console.log(`Searching for ${randomProduct.name}`);
        await searchResultsPage.enterSearchTerm(randomProduct.name);
        await searchResultsPage.clickSearch();
        await expect(searchResultsPage.searchResults.first()).toContainText(randomProduct.name, { ignoreCase: true });
        await searchResultsPage.selectProduct(randomProduct.name);
        await expect(page).toHaveTitle(randomProduct.name);
    });
});

test.describe('Search Products - Negative', () => {

    test('Search for product that does not exist', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
        const negativeSearchProducts: string[] = ['Eggs', 'Bananas', 'Bread'];
        const randomNegativeSearchProduct = RandomProductGenerator.getRandomProduct(negativeSearchProducts)

        console.log(`Searching for ${randomNegativeSearchProduct}`);
        await searchResultsPage.enterSearchTerm(randomNegativeSearchProduct);
        await searchResultsPage.clickSearch();
        await expect(searchResultsPage.noProductsFound).toBeVisible();
        const count = await searchResultsPage.getProductCount();
        expect(count).toBe(0);
    });
});
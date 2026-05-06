# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search-products.spec.ts >> Search for product that does not exist
- Location: tests/search-products.spec.ts:27:6

# Error details

```
Error: locator.innerText: Test ended.
Call log:
  - waiting for getByText('There is no product that')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { SearchResultsPage } from '../pages/search-results-page'
  3  | import { ProductPage } from '../pages/product-page'
  4  | import { TestConfig } from '../test.config';
  5  | 
  6  | let config: TestConfig;
  7  | let searchResultsPage: SearchResultsPage;
  8  | 
  9  | test.beforeEach(async ({ page }) => {
  10 |     config = new TestConfig(); // Load config (URL, credentials)
  11 | 
  12 |     // Initalise page objects
  13 |     searchResultsPage = new SearchResultsPage(page);
  14 | 
  15 |     await page.goto(config.appUrl); // Navigate to base URL
  16 | });
  17 | 
  18 | test('Search for product and select product', async ({ page }) => {
  19 |     let product = 'MacBook'
  20 |     await searchResultsPage.enterSearchTerm(product);
  21 |     await searchResultsPage.getProductCount()
  22 |     await expect(searchResultsPage.searchResults.first()).toContainText(product, { ignoreCase: true });
  23 |     await searchResultsPage.selectProduct(product);
  24 |     await expect(page).toHaveTitle(product);
  25 | });
  26 | 
  27 | test.only('Search for product that does not exist', async ({ page }) => {
  28 |     let product = 'Eggs'
  29 |     await searchResultsPage.enterSearchTerm(product);
> 30 |     console.log(searchResultsPage.noProductsFound.innerText());
     |                                                   ^ Error: locator.innerText: Test ended.
  31 |     // await expect(searchResultsPage.noProductsFound).toBeVisible();
  32 |     //const count = searchResultsPage.getProductCount();
  33 |     //expect(count).toBe(0);
  34 | });
```
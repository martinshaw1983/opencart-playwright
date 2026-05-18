# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search-products.spec.ts >> Search for product that does not exist
- Location: tests/search-products.spec.ts:21:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Invalid url: ""
Call log:
  - navigating to "", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { SearchResultsPage } from '../pages/search-results-page'
  3  | 
  4  | let searchResultsPage: SearchResultsPage;
  5  | 
  6  | test.beforeEach(async ({ page }) => {
  7  |     searchResultsPage = new SearchResultsPage(page);
  8  | 
> 9  |     await page.goto('');
     |                ^ Error: page.goto: Protocol error (Page.navigate): Invalid url: ""
  10 | });
  11 | 
  12 | test('Search for product and select product', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  13 |     const productName = 'MacBook';
  14 |     await searchResultsPage.enterSearchTerm(productName);
  15 |     await searchResultsPage.clickSearch();
  16 |     await expect(searchResultsPage.searchResults.first()).toContainText(productName, { ignoreCase: true });
  17 |     await searchResultsPage.selectProduct(productName);
  18 |     await expect(page).toHaveTitle(productName);
  19 | });
  20 | 
  21 | test('Search for product that does not exist', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  22 |     let product = 'Eggs'
  23 |     await searchResultsPage.enterSearchTerm(product);
  24 |     await searchResultsPage.clickSearch();
  25 |     await expect(searchResultsPage.noProductsFound).toBeVisible();
  26 |     const count = await searchResultsPage.getProductCount();
  27 |     expect(count).toBe(0);
  28 | });
```
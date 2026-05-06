# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search-products.spec.ts >> Search for product that does not exist
- Location: tests/search-products.spec.ts:27:6

# Error details

```
ReferenceError: getByText is not defined
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from '../pages/base-page';
  3  | 
  4  | export class SearchResultsPage extends BasePage {
  5  | 
  6  |     readonly searchPageHeader: Locator;
  7  |     readonly searchResults: Locator;
  8  |     readonly noProductsFound: Locator;
  9  | 
  10 |     constructor(public readonly page: Page) {
  11 |         super(page);
  12 |         this.searchPageHeader = page.locator('#content > h1')
  13 |         this.searchResults = page.locator('h4>a');
> 14 |         this.noProductsFound = getByText('There is no product that');
     |         ^ ReferenceError: getByText is not defined
  15 |     }
  16 | 
  17 |     async selectProduct(productName: string) {
  18 |         // This finds the specific link that has your product name
  19 |         const product = this.searchResults.filter({ has: this.page.getByText(productName, {exact: true}) });
  20 |         // Playwright waits for it to be ready and clicks it
  21 |         await product.click();
  22 |     }
  23 | 
  24 |     async getProductCount(): Promise<number> {
  25 |         return this.searchResults.count();
  26 |     }
  27 | }
```
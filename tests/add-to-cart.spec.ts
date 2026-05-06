import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product-page'
import { TestConfig } from '../test.config';
import { ShoppingCartPage } from '../pages/shopping-cart-page'

let config: TestConfig;
let productPage: ProductPage;
let shoppingCartPage: ShoppingCartPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); // Load config (URL, credentials)

    // Initalise page objects
    productPage = new ProductPage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    await await page.goto(`${config.appUrl}/index.php?route=product/product&product_id=43`);; // Navigate to base URL
});

test('Add product to cart', { tag: ['@master', '@regression'] }, async ({ page }) => {
    const productName = config.productName;
    const productQuantity = config.productQuantity
    const totalPrice = config.totalPrice;
    await productPage.addProductToCart(productQuantity);
    await expect(productPage.msgAddedToCart).toBeVisible();
    await productPage.openCart();
    await expect(productPage.cartTable.getByText(productName)).toBeVisible();
    expect (await shoppingCartPage.getTotalPrice()).toBe(totalPrice);
});
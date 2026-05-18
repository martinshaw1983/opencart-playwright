import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product-page'
import { ShoppingCartPage } from '../pages/shopping-cart-page'
import productData from '../data/product-data.json';

let productPage: ProductPage;
let shoppingCartPage: ShoppingCartPage;

test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    await page.goto('')
});

test('Add product to cart', { tag: ['@smoke', '@regression'] }, async ({page}) => {
    const { productName, productQuantity, totalPrice } = productData.macbookPurchase;

    await productPage.openProduct();
    await productPage.addProductToCart(productQuantity);
    await productPage.openCart();
    await expect(productPage.cartTable.getByText(productName)).toBeVisible();
    expect(await shoppingCartPage.getTotalPrice()).toBe(totalPrice);
});
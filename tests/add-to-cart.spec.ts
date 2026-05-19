import { test, expect } from '../fixtures/page-object-fixture';
import { ProductPage } from '../pages/product-page'
import { ShoppingCartPage } from '../pages/shopping-cart-page'
import { RandomProductGenerator } from '../utils/random-product-generator'
import productData from '../data/product-data.json'

let productPage: ProductPage;
let shoppingCartPage: ShoppingCartPage;


test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    await page.goto('')
});

test.afterEach(async ({ page }) => {
    await shoppingCartPage.clearCartIfNotEmpty()
});

test('Cart - add and remove to product', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    const randomProduct = RandomProductGenerator.getRandomProduct(productData);
    const randomQuantity = RandomProductGenerator.getRandomQuantity();

    console.log(`Adding ${randomProduct.name} x ${randomQuantity} to cart`);
    await productPage.openProduct(randomProduct.name);
    await productPage.addProductToCart(randomQuantity.toString());
    await productPage.openCart();
    await expect(productPage.cartTable.getByText(randomProduct.name)).toBeVisible();

    const exptectProductTotal: number = await shoppingCartPage.calcProductTotalPrice(randomProduct.name, randomQuantity);
    const actualTotal: number = await shoppingCartPage.getPrice(randomProduct.name, 'Total');
    expect(exptectProductTotal).toEqual(actualTotal);

    await shoppingCartPage.removeProductFromCart(randomProduct.name);
    await expect(productPage.cartTable.getByText(randomProduct.name)).not.toBeVisible();
});
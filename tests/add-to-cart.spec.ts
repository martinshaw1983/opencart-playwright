import { test, expect } from '../fixtures/page-object-fixture';
import { ProductPage } from '../pages/product-page'
import { ShoppingCartPage } from '../pages/shopping-cart-page'
import productData from '../data/product-data.json';

let productPage: ProductPage;
let shoppingCartPage: ShoppingCartPage;

test.describe.configure({ mode: 'serial' });


test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    await page.goto('')
});

test.afterEach(async ({ page }) => {
    await shoppingCartPage.clearCartIfNotEmpty()
});

test('Cart - add and remove to product', { tag: ['@smoke', '@regression'] }, async () => {
    const randomProduct = productData[Math.floor(Math.random() * productData.length)];
    const randomQuantity = Math.floor((Math.random() * 3) + 1).toString();
    
    console.log(`Adding ${randomQuantity} ${randomProduct.name} to cart`);
    await productPage.openProduct(randomProduct.name);
    await productPage.addProductToCart(randomQuantity);
    await productPage.openCart();
    await expect(productPage.cartTable.getByText(randomProduct.name)).toBeVisible();
    //expect(await shoppingCartPage.getTotalPrice()).toBe(totalPrice);

   // await shoppingCartPage.removeProductFromCart(randomProduct.name);
    //await expect(productPage.cartTable.getByText(productName)).not.toBeVisible();
});
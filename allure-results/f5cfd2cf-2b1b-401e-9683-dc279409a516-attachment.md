# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: add-to-cart.spec.ts >> Add product to cart
- Location: tests/add-to-cart.spec.ts:20:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Success: You have added')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Success: You have added')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - generic [ref=e42]:
        - button " 2 item(s) - $1,204.00" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]:
            - generic [ref=e45]: 
            - text: 2 item(s) - $1,204.00
        - text:   
  - navigation [ref=e47]:
    - generic: 
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Desktops" [ref=e51] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e52]:
        - link "Laptops & Notebooks" [ref=e53] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e54]:
        - link "Components" [ref=e55] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e56]:
        - link "Tablets" [ref=e57] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e58]:
        - link "Software" [ref=e59] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e60]:
        - link "Phones & PDAs" [ref=e61] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e62]:
        - link "Cameras" [ref=e63] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e64]:
        - link "MP3 Players" [ref=e65] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e66]:
    - list [ref=e67]:
      - listitem [ref=e68]:
        - link "" [ref=e69] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e70]: 
      - listitem [ref=e71]:
        - link "MacBook" [ref=e72] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
    - generic [ref=e75]:
      - generic [ref=e76]:
        - list [ref=e77]:
          - listitem [ref=e78]:
            - link "MacBook" [ref=e79] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/macbook_1-500x500.jpg
              - img "MacBook" [ref=e80]
          - listitem [ref=e81]:
            - link "MacBook" [ref=e82] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/macbook_5-500x500.jpg
              - img "MacBook" [ref=e83]
          - listitem [ref=e84]:
            - link "MacBook" [ref=e85] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/macbook_4-500x500.jpg
              - img "MacBook" [ref=e86]
          - listitem [ref=e87]:
            - link "MacBook" [ref=e88] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/macbook_2-500x500.jpg
              - img "MacBook" [ref=e89]
          - listitem [ref=e90]:
            - link "MacBook" [ref=e91] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/macbook_3-500x500.jpg
              - img "MacBook" [ref=e92]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "Description" [ref=e95]:
              - /url: "#tab-description"
          - listitem [ref=e96]:
            - link "Specification" [ref=e97] [cursor=pointer]:
              - /url: "#tab-specification"
          - listitem [ref=e98]:
            - link "Reviews (0)" [ref=e99] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=e100]:
          - generic [ref=e102]:
            - paragraph [ref=e103]: Intel Core 2 Duo processor
            - paragraph [ref=e104]: Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.
            - paragraph [ref=e105]: 1GB memory, larger hard drives
            - paragraph [ref=e106]: The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.
            - paragraph [ref=e107]: Sleek, 1.08-inch-thin design
            - paragraph [ref=e108]: MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.
            - paragraph [ref=e109]: Built-in iSight camera
            - paragraph [ref=e110]: Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth
          - text: "* * *"
      - generic [ref=e111]:
        - generic [ref=e112]:
          - button "" [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: 
          - button "" [ref=e115] [cursor=pointer]:
            - generic [ref=e116]: 
        - heading "MacBook" [level=1] [ref=e117]
        - list [ref=e118]:
          - listitem [ref=e119]:
            - text: "Brand:"
            - link "Apple" [ref=e120] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=e121]: Product Code:Product 16
          - listitem [ref=e122]: Reward Points:600
          - listitem [ref=e123]: Availability:Out Of Stock
        - list [ref=e124]:
          - listitem [ref=e125]:
            - heading "$602.00" [level=2] [ref=e126]
          - listitem [ref=e127]: Ex Tax:$500.00
        - generic [ref=e129]:
          - generic [ref=e130]: Qty
          - textbox "Qty" [ref=e131]: "2"
          - button "Add to Cart" [ref=e132] [cursor=pointer]
        - generic [ref=e133]:
          - paragraph [ref=e134]:
            - generic [ref=e136]: 
            - generic [ref=e138]: 
            - generic [ref=e140]: 
            - generic [ref=e142]: 
            - generic [ref=e144]: 
            - link "0 reviews" [ref=e145] [cursor=pointer]:
              - /url: ""
            - text: /
            - link "Write a review" [ref=e146] [cursor=pointer]:
              - /url: ""
          - separator [ref=e147]
  - contentinfo [ref=e148]:
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "Information" [level=5] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "About Us" [ref=e155] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e156]:
              - link "Delivery Information" [ref=e157] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e158]:
              - link "Privacy Policy" [ref=e159] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e160]:
              - link "Terms & Conditions" [ref=e161] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e162]:
          - heading "Customer Service" [level=5] [ref=e163]
          - list [ref=e164]:
            - listitem [ref=e165]:
              - link "Contact Us" [ref=e166] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e167]:
              - link "Returns" [ref=e168] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e169]:
              - link "Site Map" [ref=e170] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e171]:
          - heading "Extras" [level=5] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "Brands" [ref=e175] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e176]:
              - link "Gift Certificates" [ref=e177] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e178]:
              - link "Affiliate" [ref=e179] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e180]:
              - link "Specials" [ref=e181] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e182]:
          - heading "My Account" [level=5] [ref=e183]
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link "My Account" [ref=e186] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e187]:
              - link "Order History" [ref=e188] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e189]:
              - link "Wish List" [ref=e190] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e191]:
              - link "Newsletter" [ref=e192] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e193]
      - paragraph [ref=e194]:
        - text: Powered By
        - link "OpenCart" [ref=e195] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ProductPage } from '../pages/product-page'
  3  | import { TestConfig } from '../test.config';
  4  | import { ShoppingCartPage } from '../pages/shopping-cart-page'
  5  | 
  6  | let config: TestConfig;
  7  | let productPage: ProductPage;
  8  | let shoppingCartPage: ShoppingCartPage;
  9  | 
  10 | test.beforeEach(async ({ page }) => {
  11 |     config = new TestConfig(); // Load config (URL, credentials)
  12 | 
  13 |     // Initalise page objects
  14 |     productPage = new ProductPage(page);
  15 |     shoppingCartPage = new ShoppingCartPage(page);
  16 | 
  17 |     await await page.goto(`${config.appUrl}/index.php?route=product/product&product_id=43`);; // Navigate to base URL
  18 | });
  19 | 
  20 | test('Add product to cart', { tag: ['@master', '@regression'] }, async ({ page }) => {
  21 |     const productName = config.productName;
  22 |     const productQuantity = config.productQuantity
  23 |     const totalPrice = config.totalPrice;
  24 |     await productPage.addProductToCart(productQuantity);
> 25 |     await expect(productPage.msgAddedToCart).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  26 |     await productPage.openCart();
  27 |     await expect(productPage.cartTable.getByText(productName)).toBeVisible();
  28 |     expect (await shoppingCartPage.getTotalPrice()).toBe(totalPrice);
  29 | });
```
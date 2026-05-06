# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: add-to-cart.spec.ts >> Add product to cart
- Location: tests/add-to-cart.spec.ts:17:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('View Cart', { exact: true })
    - locator resolved to <strong>…</strong>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    56 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

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
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - generic [ref=e42]:
        - button " 1 item(s) - $602.00" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]:
            - generic [ref=e45]: 
            - text: 1 item(s) - $602.00
        - text:   
  - navigation [ref=e47]:
    - generic: 
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Desktops" [ref=e51] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e52]:
        - link "Laptops & Notebooks" [ref=e53] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e54]:
        - link "Components" [ref=e55] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e56]:
        - link "Tablets" [ref=e57] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e58]:
        - link "Software" [ref=e59] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e60]:
        - link "Phones & PDAs" [ref=e61] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e62]:
        - link "Cameras" [ref=e63] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e64]:
        - link "MP3 Players" [ref=e65] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e66]:
    - list [ref=e67]:
      - listitem [ref=e68]:
        - link "" [ref=e69] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
          - generic [ref=e70]: 
      - listitem [ref=e71]:
        - link "MacBook" [ref=e72] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
    - generic [ref=e73]:
      - text: "Success: You have added"
      - link "MacBook" [ref=e74] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
      - text: to your
      - link "shopping cart" [ref=e75] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
      - text: "!"
      - button "×" [ref=e76] [cursor=pointer]
    - generic [ref=e79]:
      - generic [ref=e80]:
        - list [ref=e81]:
          - listitem [ref=e82]:
            - link "MacBook" [ref=e83] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/image/cache/catalog/demo/macbook_1-500x500.jpg
              - img "MacBook" [ref=e84]
          - listitem [ref=e85]:
            - link "MacBook" [ref=e86] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/image/cache/catalog/demo/macbook_5-500x500.jpg
              - img "MacBook" [ref=e87]
          - listitem [ref=e88]:
            - link "MacBook" [ref=e89] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/image/cache/catalog/demo/macbook_4-500x500.jpg
              - img "MacBook" [ref=e90]
          - listitem [ref=e91]:
            - link "MacBook" [ref=e92] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/image/cache/catalog/demo/macbook_2-500x500.jpg
              - img "MacBook" [ref=e93]
          - listitem [ref=e94]:
            - link "MacBook" [ref=e95] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/image/cache/catalog/demo/macbook_3-500x500.jpg
              - img "MacBook" [ref=e96]
        - list [ref=e97]:
          - listitem [ref=e98]:
            - link "Description" [ref=e99]:
              - /url: "#tab-description"
          - listitem [ref=e100]:
            - link "Specification" [ref=e101] [cursor=pointer]:
              - /url: "#tab-specification"
          - listitem [ref=e102]:
            - link "Reviews (0)" [ref=e103] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=e104]:
          - generic [ref=e106]:
            - paragraph [ref=e107]: Intel Core 2 Duo processor
            - paragraph [ref=e108]: Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.
            - paragraph [ref=e109]: 1GB memory, larger hard drives
            - paragraph [ref=e110]: The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.
            - paragraph [ref=e111]: Sleek, 1.08-inch-thin design
            - paragraph [ref=e112]: MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.
            - paragraph [ref=e113]: Built-in iSight camera
            - paragraph [ref=e114]: Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth
          - text: "* * *"
      - generic [ref=e115]:
        - generic [ref=e116]:
          - button "" [ref=e117] [cursor=pointer]:
            - generic [ref=e118]: 
          - button "" [ref=e119] [cursor=pointer]:
            - generic [ref=e120]: 
        - heading "MacBook" [level=1] [ref=e121]
        - list [ref=e122]:
          - listitem [ref=e123]:
            - text: "Brand:"
            - link "Apple" [ref=e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=e125]: "Product Code: Product 16"
          - listitem [ref=e126]: "Reward Points: 600"
          - listitem [ref=e127]: "Availability: In Stock"
        - list [ref=e128]:
          - listitem [ref=e129]:
            - heading "$602.00" [level=2] [ref=e130]
          - listitem [ref=e131]: "Ex Tax: $500.00"
        - generic [ref=e133]:
          - generic [ref=e134]: Qty
          - textbox "Qty" [ref=e135]: "1"
          - button "Add to Cart" [ref=e136] [cursor=pointer]
        - paragraph [ref=e138]:
          - generic [ref=e140]: 
          - generic [ref=e142]: 
          - generic [ref=e144]: 
          - generic [ref=e146]: 
          - generic [ref=e148]: 
          - link "0 reviews" [ref=e149] [cursor=pointer]:
            - /url: ""
          - text: /
          - link "Write a review" [ref=e150] [cursor=pointer]:
            - /url: ""
  - contentinfo [ref=e151]:
    - generic [ref=e152]:
      - generic [ref=e153]:
        - generic [ref=e154]:
          - heading "Information" [level=5] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "About Us" [ref=e158] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e159]:
              - link "Delivery Information" [ref=e160] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e161]:
              - link "Privacy Policy" [ref=e162] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e163]:
              - link "Terms & Conditions" [ref=e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e165]:
          - heading "Customer Service" [level=5] [ref=e166]
          - list [ref=e167]:
            - listitem [ref=e168]:
              - link "Contact Us" [ref=e169] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e170]:
              - link "Returns" [ref=e171] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e172]:
              - link "Site Map" [ref=e173] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e174]:
          - heading "Extras" [level=5] [ref=e175]
          - list [ref=e176]:
            - listitem [ref=e177]:
              - link "Brands" [ref=e178] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e179]:
              - link "Gift Certificates" [ref=e180] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e181]:
              - link "Affiliate" [ref=e182] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e183]:
              - link "Specials" [ref=e184] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e185]:
          - heading "My Account" [level=5] [ref=e186]
          - list [ref=e187]:
            - listitem [ref=e188]:
              - link "My Account" [ref=e189] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e190]:
              - link "Order History" [ref=e191] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e192]:
              - link "Wish List" [ref=e193] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e194]:
              - link "Newsletter" [ref=e195] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e196]
      - paragraph [ref=e197]:
        - text: Powered By
        - link "OpenCart" [ref=e198] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  | 
  5  |     // locators
  6  |     readonly lnkMyAccount: Locator
  7  |     readonly lnkRegister: Locator
  8  |     readonly lnkLogin: Locator
  9  |     readonly lnkLogout: Locator
  10 |     readonly txtSeachBox: Locator
  11 |     readonly btnSearch: Locator
  12 |     readonly btnItems: Locator;
  13 |     readonly lnkViewCart: Locator;
  14 |     readonly cartTable: Locator;
  15 | 
  16 |     // constructor
  17 |     constructor(public readonly page: Page) {
  18 |         this.lnkMyAccount = page.locator('#top').getByRole('link', { name: 'My Account' });
  19 |         this.lnkRegister = page.getByRole('link', { name: 'Register' });
  20 |         this.lnkLogin = page.getByRole('link', { name: 'Login' });
  21 |         this.lnkLogout = page.locator('#top-links').getByRole('link', { name: 'Logout' })
  22 |         this.txtSeachBox = page.getByRole('textbox', { name: 'Search' });
  23 |         this.btnSearch = page.locator('#search').getByRole('button');
  24 |         this.btnItems = page.locator('#cart');
  25 |         this.lnkViewCart = page.getByText('View Cart', { exact: true });
  26 |         this.cartTable= page.locator('.table-responsive');
  27 | 
  28 |     }
  29 | 
  30 |     // action methods
  31 | 
  32 |     // Click my account link
  33 | 
  34 |     async clickMyAccount() {
  35 |             await this.lnkMyAccount.click();
  36 |     }
  37 | 
  38 |     // Click login
  39 | 
  40 |     async clickLogin() {
  41 |         await this.lnkLogin.click();
  42 |     }
  43 | 
  44 |        // Click logout
  45 | 
  46 |     async clickLogout() {
  47 |         await this.lnkLogout.click();
  48 |     }
  49 | 
  50 |     // Click Register
  51 | 
  52 |     async clickRegister() {
  53 |         await this.lnkRegister.click();
  54 |     }
  55 | 
  56 |     // Enter search term
  57 | 
  58 |     async enterSearchTerm(searchTerm: string) {
  59 |         await this.txtSeachBox.fill(searchTerm);
  60 |     }
  61 |     // Click Search
  62 | 
  63 |     async clickSearch() {
  64 |         await this.btnSearch.click();
  65 |     }
  66 |     // click view cart
  67 | 
  68 |     async openCart() {
> 69 |         await this.lnkViewCart.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  70 |         await this.btnItems.click();
  71 |     }
  72 | }
```
import { Page, expect, Locator } from '@playwright/test';

export class BasePage {

    // locators
    readonly lnkMyAccount: Locator
    readonly lnkRegister: Locator
    readonly lnkLogin: Locator
    readonly lnkLogout: Locator
    readonly txtSeachBox: Locator
    readonly btnSearch: Locator
    readonly btnItems: Locator;
    readonly btnProduct: Locator;
    readonly lnkViewCart: Locator;
    readonly cartTable: Locator;

    // constructor
    constructor(public readonly page: Page) {
        this.lnkMyAccount = page.locator('#top').getByRole('link', { name: 'My Account' });
        this.lnkRegister = page.getByRole('link', { name: 'Register' });
        this.lnkLogin = page.getByRole('link', { name: 'Login' });
        this.lnkLogout = page.locator('#top-links').getByRole('link', { name: 'Logout' })
        this.txtSeachBox = page.getByRole('textbox', { name: 'Search' });
        this.btnSearch = page.locator('#search').getByRole('button');
        this.btnItems = page.locator('#cart');
        this.btnProduct = page.locator('#content').getByText('MacBook');
        this.lnkViewCart = page.getByText('View Cart', { exact: true });
        this.cartTable = page.locator('.table-responsive');

    }

    // action methods

    // Click my account link
    async clickMyAccount() {
        await this.lnkMyAccount.click();
    }

    // Click login
    async clickLogin() {
        await this.lnkLogin.click();
    }

    // Click logout
    async clickLogout() {
        await this.lnkLogout.click();
    }

    // Click Register
    async clickRegister() {
        await this.lnkRegister.click();
    }

    // Enter search term
    async enterSearchTerm(searchTerm: string) {
        await this.txtSeachBox.fill(searchTerm);
    }

    // Click Search
    async clickSearch() {
        await this.btnSearch.click();
    }

    // open product
    async openProduct() {
        await this.btnProduct.click();
    }

    // click view cart
    async openCart() {
        await this.btnItems.click();
        await this.lnkViewCart.click();
    }
}
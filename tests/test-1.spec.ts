import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
  await page.getByRole('link', { name: 'Software' }).click();
  await page.getByRole('link', { name: 'Components', exact: true }).click();
  await page.getByRole('link', { name: 'Monitors (2)' }).click();
  await page.getByRole('link', { name: 'Apple Cinema 30"' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page.getByRole('link', { name: 'Mac (1)' }).click();
  await page.getByRole('link', { name: 'iMac' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('button').nth(5).click();
  await page.getByRole('button').nth(5).click();
});
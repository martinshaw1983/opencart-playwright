# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: account-registration.spec.ts >> Should register a new user
- Location: tests/account-registration.spec.ts:19:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { RegistrationPage } from '../pages/registration-page';
  3  | import { TestConfig } from '../test.config';
  4  | import { RandomUserGenerator } from '../utils/random-user-generator'
  5  | 
  6  | let registrationPage: RegistrationPage;
  7  | let config: TestConfig
  8  | 
  9  | test.beforeEach(async({page})=>{
  10 |     config = new TestConfig()
> 11 |     await page.goto(config.appUrl); //Navigate to the application URL
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  12 |     registrationPage = new RegistrationPage(page);
  13 | });
  14 | 
  15 | test.afterEach(async({page})=>{
  16 |     
  17 | })
  18 | 
  19 | test('Should register a new user', async () => {
  20 |     await registrationPage.clickMyAccount();
  21 |     await registrationPage.clickRegister();
  22 | 
  23 |     // Fill in registraion details with random data
  24 |     const newUser = RandomUserGenerator.getRandomUserData();
  25 |     await registrationPage.completeRegistrationForm(newUser);
  26 |     
  27 |     // Validate confimation message
  28 |     expect(registrationPage.msgConfirmation).toContainText('Your Account Has Been Created!')
  29 | });
```
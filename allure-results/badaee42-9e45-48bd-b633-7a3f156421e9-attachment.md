# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Regression/TC02-CreatePolicy-LiabCov.spec.js >> TC02 Create Policy with liability coverage
- Location: tests/Regression/TC02-CreatePolicy-LiabCov.spec.js:14:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('First Name *')

```

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/MyInsurance/00-LoginPage';
  3  | 
  4  | export const test = base.extend({
  5  | 
  6  |     loggedInPage: async ({ page }, testInfo, use) => {
  7  | 
  8  |         const loginPage = new LoginPage(page);
  9  | 
  10 |         await loginPage.openapplication();
  11 |         await loginPage.login('TestUser', 'TestPassword',testInfo);
  12 | 
  13 |         await use(page);
  14 |     }
  15 | 
  16 | }); // <-- base.extend closes here
  17 | 
  18 | 
  19 | test.beforeEach(async ({}, testInfo) => {
  20 |     console.log(`STARTING: ${testInfo.title}`);
  21 | });
  22 | 
  23 | 
  24 | test.afterEach(async ({ page }, testInfo) => {
  25 | 
  26 |     console.log(`COMPLETED: ${testInfo.title}`);
  27 |     console.log(`STATUS: ${testInfo.status}`);
  28 | 
  29 |     if (testInfo.status !== testInfo.expectedStatus) {
  30 | 
  31 |         await testInfo.attach(
  32 |             'Failure Full Page Screenshot',
  33 |             {
> 34 |                 body: await page.screenshot({ fullPage: true }),
     |                                  ^ Error: page.screenshot: Target page, context or browser has been closed
  35 |                 contentType: 'image/png'
  36 |             }
  37 |         );
  38 |     }
  39 | });
  40 | 
  41 | export { expect };
```
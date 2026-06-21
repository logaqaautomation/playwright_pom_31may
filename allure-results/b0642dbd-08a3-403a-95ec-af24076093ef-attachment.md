# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Regression/TC04-CreatePolicy-DataDriven-excel.spec.js >> TC04 Create Policy Data Driven - Excel
- Location: tests/Regression/TC04-CreatePolicy-DataDriven-excel.spec.js:10:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/MyInsurance/00-LoginPage';
  3  | import { PageManager } from '../pages/MyInsurance/PageManager';
  4  | import { ENV } from '../config/env';
  5  | 
  6  | export const test = base.extend({
  7  | 
  8  |     pages: async ({ page }, use, testInfo) => {
  9  | 
  10 |         const loginPage = new LoginPage(page);
  11 | 
  12 |         await loginPage.openapplication();
  13 |         await loginPage.login(ENV.username,
  14 |                               ENV.password,
  15 |                               testInfo);
  16 | 
  17 |         const pages = new PageManager(page);
  18 |         await use(pages);
  19 |     }
  20 | 
  21 | }); // <-- base.extend closes here
  22 | 
  23 | 
  24 | test.beforeEach(async ({}, testInfo) => {
  25 |     console.log(`STARTING: ${testInfo.title}`);
  26 | });
  27 | 
  28 | 
  29 | test.afterEach(async ({ page }, testInfo) => {
  30 | 
  31 |     console.log(`COMPLETED: ${testInfo.title}`);
  32 |     console.log(`STATUS: ${testInfo.status}`);
  33 | 
  34 |     if (testInfo.status !== testInfo.expectedStatus) {
  35 | 
  36 |         await testInfo.attach(
  37 |             'Failure Full Page Screenshot',
  38 |             {
> 39 |                 body: await page.screenshot({ fullPage: true }),
     |                                  ^ Error: page.screenshot: Target page, context or browser has been closed
  40 |                 contentType: 'image/png'
  41 |             }
  42 |         );
  43 |     }
  44 | });
  45 | 
  46 | export { expect };
```
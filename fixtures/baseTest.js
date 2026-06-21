import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/MyInsurance/00-LoginPage';
import { PageManager } from '../pages/MyInsurance/PageManager';
import { ENV } from '../config/env';

export const test = base.extend({

    pages: async ({ page }, use, testInfo) => {

        const loginPage = new LoginPage(page);

        await loginPage.openapplication();
        await loginPage.login(ENV.username,
                              ENV.password,
                              testInfo);

        const pages = new PageManager(page);
        await use(pages);
    }

}); // <-- base.extend closes here


test.beforeEach(async ({}, testInfo) => {
    console.log(`STARTING: ${testInfo.title}`);
});


test.afterEach(async ({ page }, testInfo) => {

    console.log(`COMPLETED: ${testInfo.title}`);
    console.log(`STATUS: ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus) {

        await testInfo.attach(
            'Failure Full Page Screenshot',
            {
                body: await page.screenshot({ fullPage: true }),
                contentType: 'image/png'
            }
        );
    }
});

export { expect };
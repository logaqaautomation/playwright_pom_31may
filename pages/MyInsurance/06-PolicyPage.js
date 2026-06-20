import { expect } from '@playwright/test';

exports.PolicyPage = class PolicyPage {

  constructor(page) {
    this.page = page;
    // ============ Navigation Locators ============
    this.policyIssuedMessage = this.page.locator('div.callout-success');
    this.policyDocFrame = this.page.frameLocator('iframe#policyDocFrame');
    this.policyNumber = this.policyDocFrame.locator('div.policy-num');
    //this.policyNumber = this.page.locator('div.policy-num');

    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });
  }


  // ============ Actions ============

  async verifyPolicyPageAndLogut(testInfo) {
   
    // 1. Verify that the success banner is displayed on screen
    await expect(this.policyIssuedMessage).toBeVisible({ timeout: 5000 });

    // 2. Extract and log the complete confirmation message text
    const messageText = await this.policyIssuedMessage.textContent();
    console.log(`[CONFIRMATION BANNER]: ${messageText?.trim()}`);

    // 3. Extract and log the newly generated Guidewire core-bound Policy Number
    const policyNumText = await this.policyNumber.textContent();
    console.log(`[ISSUED POLICY NUMBER]: ${policyNumText?.trim()}`);

    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Policy Review Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // Logout
    await this.logoutButton.click();

  }

}
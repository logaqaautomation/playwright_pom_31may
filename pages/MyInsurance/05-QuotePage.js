import { expect } from '@playwright/test';

exports.QuotePage = class QuotePage {

  constructor(page) {
    this.page = page;
    // ============ Navigation Locators ============
    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });

    // ============ Payment Plan Radio Buttons ============
    this.annualRadio = this.page.getByLabel('Annual (0% finance charge)',{exact: false});
    this.semiAnnualRadio = this.page.getByLabel('Semi-Annual (2 payments)',{exact: false});
    this.quarterlyRadio = this.page.getByLabel('Quarterly (4 payments)',{exact: false});
    this.monthlyRadio = this.page.locator('#payment-monthly');

    // ============ Main Form Fields & Interactive Elements ============
    this.specialInstructionsNotesInput = this.page.getByLabel('Special Instructions / Notes');
    this.downloadQuotePdfLink = this.page.getByRole('link', { name: 'Download Quote PDF' });
    this.printQuoteLink = this.page.getByRole('link', { name: 'Print Quote' });
    
    // Target the confirmation checkbox precisely by type
    this.confirmInformationCheckbox = this.page.locator('input#agreeToTerms');
    this.termsConditionsInlineLink = this.page.getByRole('link', { name: 'Terms & Conditions' });
    this.privacyPolicyInlineLink = this.page.getByRole('link', { name: /Privacy Policy/i });

    // ============ Action Buttons & Footers ============
    this.backButton = this.page.getByRole('button', { name: /← Back/i });
    this.issuePolicyButton = this.page.getByRole('button', { name: /Issue Policy →/i });
}


  // ============ Actions ============

  async fillQuotePageAndContinue(quoteData, testInfo) {
   if (!quoteData) {
      throw new Error("Automation Error: 'quoteData' payload object must be provided.");
    }

    // 1. Select the requested Payment Plan Option
    if (quoteData.paymentPlan) {
      const plan = quoteData.paymentPlan.toLowerCase();
      if (plan === 'annual') await this.annualRadio.check();
      else if (plan === 'semi-annual') await this.semiAnnualRadio.check();
      else if (plan === 'quarterly') await this.quarterlyRadio.check();
      else if (plan === 'monthly') await this.monthlyRadio.check();
    }

    // 2. Fill out any custom binding instructions or notes
    if (quoteData.specialInstructions) {
      await this.specialInstructionsNotesInput.fill(quoteData.specialInstructions);
    }

    // 3. Handle confirmation checkbox binding step
    if (quoteData.confirmAccuracy !== undefined) {
      await this.confirmInformationCheckbox.setChecked(quoteData.confirmAccuracy);
    }

    // 4. Capture visual context prior to workflow confirmation execution
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Quote Review Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // 5. Commit application to downstream core system
    await this.issuePolicyButton.click();

  }

}
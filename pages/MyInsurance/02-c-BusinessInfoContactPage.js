import { expect } from '@playwright/test';

exports.BusinessInfoContactPage = class BusinessInfoContactPage {

  constructor(page) {
    this.page = page;

    // ============ Navigation Locators ============
    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });

    // ============ Tab Headers ============
    this.generalTab = this.page.getByRole('tab', { name: 'General' });
    this.operationsTab = this.page.getByRole('tab', { name: 'Operations' });
    this.contactTab = this.page.getByRole('tab', { name: 'Contact' });
    this.documentsTab = this.page.getByRole('tab', { name: 'Documents' });

    // ============ Error & Alert Message Elements ============
    this.pleaseFixFollowingErrorAlert = this.page.getByRole('alert');
    // Error block fields share class names, using chained sub-locators for pinpoint accuracy
    this.businessPhoneRequiredMessage = this.page.locator('.field-group:has-text("Business Phone")').locator('.field-error');
    this.businessEmailRequiredMessage = this.page.locator('.field-group:has-text("Business Email")').locator('.field-error');
    this.primaryContactRequiredMessage = this.page.locator('.field-group:has-text("Primary Contact Name")').locator('.field-error');

    // ============ Main Form Input Elements ============
    this.businessPhoneInput = this.page.getByLabel('Business Phone *');
    this.faxNumberInput = this.page.getByLabel('Fax Number');
    this.businessEmailInput = this.page.getByLabel('Business Email *');
    this.businessWebsiteInput = this.page.getByLabel('Business Website');
    this.primaryContactNameInput = this.page.getByLabel('Primary Contact Name *');

    // ============ Action Buttons & Footers ============
    this.backButton = this.page.getByRole('button', { name: /← Back/i });
    this.continueButton = this.page.getByRole('button', { name: /Continue →/i });
 }

  // ============ Actions ============

  async fillBusInfoContactDetailsAndContinue(formData, testInfo) {
    // Fail-fast safety validation to protect from running assertions on 'undefined' references
    if (!formData) {
      throw new Error("Automation Error: 'formData' payload object must be provided.");
    }

    // Fill contact inputs conditionally based on payload definition
    if (formData.businessPhone) {
      await this.businessPhoneInput.fill(formData.businessPhone.toString());
    }
    
    if (formData.faxNumber) {
      await this.faxNumberInput.fill(formData.faxNumber.toString());
    }

    if (formData.businessEmail) {
      await this.businessEmailInput.fill(formData.businessEmail);
    }

    if (formData.businessWebsite) {
      await this.businessWebsiteInput.fill(formData.businessWebsite);
    }

    if (formData.primaryContactName) {
      await this.primaryContactNameInput.fill(formData.primaryContactName);
    }

    // Capture visual context prior to workflow continuation
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Contact Info Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // Proceed to next step
    await this.documentsTab.click();

    
  }
}
import { expect } from '@playwright/test';
import path from 'path';

exports.BusinessInfoDocumentPage = class BusinessInfoDocumentPage {

  constructor(page) {
    this.page = page;

    // ============ Tab Headers ============
    this.documentsTab = this.page.getByRole('tab', { name: 'Documents' });

    // ============ File Upload Locators ============
    // Best Practice: Target the hidden file input precisely using its unique CSS ID selector (#id)
    this.businessLicenseInput = this.page.locator('input#businessLicense');
    
    // ============ Action Buttons ============
    this.continueButton = this.page.getByRole('button', { name: /Continue →/i });
 }

  // ============ Actions ============

  async uploadBusInfoLicense(relativeFilePath, testInfo) {
    if (!relativeFilePath) {
      throw new Error("Automation Error: 'relativeFilePath' must be provided to perform upload.");
    }

    // Resolve absolute path safely for any execution environment
    const absolutePath = path.resolve(process.cwd(), relativeFilePath);

    // Playwright natively handles the upload even when style="display: none;" is set on the input
    await this.businessLicenseInput.setInputFiles(absolutePath);

    // Attach runtime execution context evidence
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Documents Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // Capture visual context prior to workflow continuation
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Document upload Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // Proceed to next step
    await this.continueButton.click();

  }
}
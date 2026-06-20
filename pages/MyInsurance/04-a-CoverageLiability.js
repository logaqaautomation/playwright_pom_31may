import { expect } from '@playwright/test';

exports.LiabilityCoveragePage = class LiabilityCoveragePage {

  constructor(page) {
    this.page = page;
    // ============ Navigation Locators ============
    // ============ Navigation Locators ============
    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });

    // ============ Tab Panel Selection Controls ============
    this.liabilityTab = this.page.getByRole('tab', { name: 'Liability' });
    this.physicalDamageTab = this.page.getByRole('tab', { name: 'Physical Damage' });
    this.additionalCoveragesTab = this.page.getByRole('tab', { name: 'Additional Coverages' });

    // ============ Main Form Fields & Selection Inputs ============
    this.liabilityLimitsDropdown = this.page.getByLabel('Liability Limits *');
    this.medPayLimitDropdown = this.page.getByLabel('MedPay Limit');
    this.yesIncludeUmUimRadio = this.page.getByLabel('Yes – Include UM/UIM');
    this.noWaiveUmUimRadio = this.page.getByLabel('No – Waive UM/UIM');

    // ============ Action Buttons & Footers ============
    this.backButton = this.page.getByRole('button', { name: /← Back/i });
    this.continueButton = this.page.getByRole('button', { name: /Continue →/i });
    
  }


  // ============ Actions ============

  async fillLiabilityCoverageAndContinue(coverageData, testInfo) {
    if (!coverageData) {
      throw new Error("Automation Error: 'coverageData' payload object must be provided.");
    }

    // 1. Interact with selection dropdown fields
    if (coverageData.liabilityLimits) {
      await this.liabilityLimitsDropdown.selectOption({ label: coverageData.liabilityLimits });
    }
    if (coverageData.medPayLimit) {
      await this.medPayLimitDropdown.selectOption({ label: coverageData.medPayLimit });
    }

    // 2. Select UM/UIM configuration via Radio button options
    if (coverageData.includeUmUim !== undefined) {
      if (coverageData.includeUmUim) {
        await this.yesIncludeUmUimRadio.check();
      } else {
        await this.noWaiveUmUimRadio.check();
      }
    }

    // 3. Capture visual step context snapshot for pipeline test logs
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Liability Coverages Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // 4. Progress past the coverages workspace block
    await this.continueButton.click();


  }

}
import { expect } from '@playwright/test';

exports.BusinessInfoGeneral = class BusinessInfoGeneral {

  constructor(page) {
    this.page = page;

    // ============ Navigation Locators ============
    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });

    // ============ Main Form Elements ============
    this.generalTab = this.page.getByRole('tab', { name: 'General' });
    this.operationsTab = this.page.getByRole('tab', { name: 'Operations' });
    this.contactTab = this.page.getByRole('tab', { name: 'Contact' });
    this.documentsTab = this.page.getByRole('tab', { name: 'Documents' });

    this.businessLegalNameInput = this.page.getByLabel('Business Legal Name *');
    this.dbaTradeNameInput = this.page.getByLabel('DBA / Trade Name');
    this.tspccpDropdown = this.page.getByLabel('Business Entity Type *');
    this.feinEinInput = this.page.getByLabel('FEIN / EIN *');
    this.yearsInBusinessInput = this.page.getByLabel('Years in Business *');
    this.numberOfEmployeesInput = this.page.getByLabel('Number of Employees *');
    this.annualGrossRevenueInput = this.page.getByLabel('Annual Gross Revenue ($)');

    // ============ Buttons & Footer Links ============
    this.backButton = this.page.getByRole('button', { name: /← Back/i });
    this.continueButton = this.page.getByRole('button', { name: /Continue →/i });
  }

  // ============ Actions ============

  /**
   * Complex workflow interaction to fill out the Commercial Auto Business Info step
   */
  async fillBusinessInfoGeneralDetailsAndContinue(formData, testInfo) {
    // Fill text fields
    await this.businessLegalNameInput.fill(formData.businessLegalName);
    
    if (formData.dbaTradeName) {
      await this.dbaTradeNameInput.fill(formData.dbaTradeName);
    }

    // Handle Dropdown Selection
    await this.tspccpDropdown.selectOption({ label: formData.businessEntityType });

    await this.feinEinInput.fill(formData.feinEin);
    await this.yearsInBusinessInput.fill(formData.yearsInBusiness.toString());
    await this.numberOfEmployeesInput.fill(formData.numberOfEmployees.toString());

    if (formData.annualGrossRevenue) {
      await this.annualGrossRevenueInput.fill(formData.annualGrossRevenue.toString());
    }

    // Optional Screenshot capture attaching 
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Business Info General Page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // move to operations Tab
    await this.operationsTab.click();

  }
}
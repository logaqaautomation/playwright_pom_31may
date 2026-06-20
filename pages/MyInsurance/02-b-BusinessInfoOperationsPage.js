import { expect } from '@playwright/test';

exports.BusinessInfoOperation = class BusinessInfoOperation {

  constructor(page) {
    this.page = page;

    // ============ Navigation Locators ============
    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });

    // ============ Tab Headers ============
    this.generalTab = this.page.getByRole('tab', { name: 'General' });
    this.operationsTab = this.page.getByRole('tab', { name: 'Operations' });
    this.contactTab = this.page.getByRole('tab', { name: 'Contact' });
    this.documentsTab = this.page.getByRole('tab', { name: 'Documents' });

    // ============ Main Form Elements ============
    //this.selectOperationsDropdown = this.page.getByRole('combobox', { name: /Select operations/i});

    this.selectOperationsDropdown = this.page.locator('#primaryOperations');
    
    // Radius of Operation Radios
    this.localZeroFiftyMilesRadio = this.page.getByLabel('Local (0–50 miles)');
    this.ftmRadio = this.page.getByLabel('Regional (51–200 miles)');
    this.longHaulTwohundredMilesRadio = this.page.getByLabel('Long Haul (200+ miles)');
    this.nationalRadio = this.page.getByLabel('National');

    // Operational Risk Checkboxes
    this.vehiclesAreOperatedCheckbox = this.page.getByLabel('Vehicles are operated overnight (11 PM – 6 AM)');
    this.mhCheckbox = this.page.getByLabel('Hazardous materials (HAZMAT) are transported');
    this.vehiclesArePartCheckbox = this.page.getByRole('checkbox', { name: 'Vehicles are part of a fleet' });

    // ============ Action Buttons & Footers ============
    this.backButton = this.page.getByRole('button', { name: /← Back/i });
    this.continueButton = this.page.getByRole('button', { name: /Continue →/i });
 }

  // ============ Actions ============

  /**
   * Complex workflow interaction to fill out the Commercial Auto Operations step details completely
   */
  async fillBusinessInfoOperationsAndContinue(formData, testInfo) {
    // Fail-fast safety validation to protect against 'undefined' runner crashes
    if (!formData) {
      throw new Error("Automation Error: 'formData' payload object must be provided.");
    }

    // Handle Operation Classification Dropdown
    if (formData.operationType) {
      //await this.selectOperationsDropdown.selectOption({ label: formData.operationType });
      await this.selectOperationsDropdown.click({force:true});
      await this.page.getByLabel(formData.operationType).click();
      await this.operationsTab.click();
      
    }

    // Handle Radius Selection via exact text matching or dynamic matching labels
    if (formData.radiusOfOperation) {
      await this.page.getByText(formData.radiusOfOperation).click({force:true});
    }

    // Handle Risk Management Checkboxes explicitly
    if (formData.operatesOvernight !== undefined) {
      if (formData.operatesOvernight) await this.vehiclesAreOperatedCheckbox.check();
      else await this.vehiclesAreOperatedCheckbox.uncheck();
    }

    if (formData.transportsHazmat !== undefined) {
      if (formData.transportsHazmat) await this.mhCheckbox.check();
      else await this.mhCheckbox.uncheck();
    }

    if (formData.isFleetPool !== undefined) {
      if (formData.isFleetPool) 
        {
            await this.vehiclesArePartCheckbox.check();
        } 
      else 
        { 
            await this.vehiclesArePartCheckbox.uncheck();
        }
    }

    // Optional Attachments Capture handling
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Operations Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // Advance to next step
    await this.contactTab.click();

    
    
  }
}
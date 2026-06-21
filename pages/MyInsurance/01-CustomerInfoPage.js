import { expect } from '@playwright/test';
const SmartActions = require('../../utils/SmartActions');
const SmartLocator = require('../../utils/SmartLocator');

exports.CustomerInfoPage = class CustomerInfoPage {

  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.getByLabel('First Name *');
    this.lastNameInput = this.page.getByLabel('Last Name *');
    this.dateOfBirthInput = this.page.getByLabel('Date of Birth *');
    this.ssnLastFourInput = this.page.getByLabel('SSN (Last 4) *');
    this.genderDropdown = this.page.locator('.field-select');
    this.maleRadio = this.page.getByLabel('Male');
    this.femaleRadio = this.page.getByLabel('Female');
    this.nonBinaryRadio = this.page.getByLabel('Non-Binary');
    this.preferNotToSayRadio = this.page.getByLabel('Prefer not to say');
    this.emailAddressInput = this.page.getByLabel('Email Address *');
    this.phoneNumberInput = this.page.getByLabel('Phone Number *');
    this.streetAddressInput = this.page.getByLabel('Street Address *');
    this.addressLineTwoInput = this.page.getByLabel('Address Line 2');
    this.cityInput = this.page.getByLabel('City *');
    this.stateDropdown = this.page.locator('select#state');
    this.zipCodeInput = this.page.getByLabel('ZIP Code *');
    this.licenseNumberInput = this.page.getByLabel('License Number *');
    this.issuingStateDropdown = this.page.getByLabel('Issuing State *');
    this.yearsLicensedInput = this.page.getByLabel('Years Licensed *');
    this.continueButton = SmartLocator.create(
                                page,
                                'CustomerPage.continueButton',
                                "getByRole('button',{name:'Continue123'})",
                                page.getByRole('button', { name: 'Continue123' })
                                );

  }
  // ============ Actions ============

  async fillApplicationAndContinue(formData, testInfo) {

    // Fill text inputs
    await this.firstNameInput.fill(formData.firstName);
    await this.lastNameInput.fill(formData.lastName);
    await this.dateOfBirthInput.type(formData.dob); // Note: .fill() is generally preferred over deprecated .type() for dates
    await this.ssnLastFourInput.fill(formData.ssnLastFour);
    
    // Select Gender Radio Button dynamically based on the input string
    // e.g., 'Male', 'Female', 'Non-Binary', 'Prefer not to say'
    await this.page.getByLabel(formData.gender, { exact: true }).check();

    // Fill Contact & Address Info
    await this.emailAddressInput.fill(formData.email);
    await this.phoneNumberInput.fill(formData.phone);
    await this.streetAddressInput.fill(formData.streetAddress);
    
    if (formData.addressLine2) {
      await this.addressLineTwoInput.fill(formData.addressLine2);
    }
    
    await this.cityInput.fill(formData.city);
    
    // Handle Dropdowns
    await this.stateDropdown.selectOption({ label: formData.state });
    await this.zipCodeInput.fill(formData.zipCode);
    
    // Driver Details
    await this.licenseNumberInput.fill(formData.licenseNumber);
    await this.issuingStateDropdown.selectOption({ label: formData.issuingState });
    await this.yearsLicensedInput.fill(formData.yearsLicensed.toString());

    const screenshot = await this.page.screenshot({
            fullPage: true
            });

   // Optional Screenshot capture attaching 
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Commercial Info Page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // Submit Form
    await this.continueButton.click(testInfo);

  }

}
import { expect } from '@playwright/test';

exports.VehicleInfoPage = class VehicleInfoPage {

  constructor(page) {
    this.page = page;
    // ============ Navigation Locators ============
    this.logoutButton = this.page.locator('nav').getByRole('button', { name: /Logout/i });

    // ============ Main Form Dropdowns & Inputs ============
    this.yearDropdown = this.page.getByLabel('Year *');
    this.makeDropdown = this.page.getByLabel('Make *');
    this.modelInput = this.page.getByLabel('Model');
    this.vinInput = this.page.getByLabel('VIN *');

    // ============ Vehicle Type Radio Buttons ============
    this.pickupTruckRadio = this.page.getByLabel('Pickup Truck');
    this.cargoVanRadio = this.page.getByLabel('Cargo Van');
    this.boxTruckRadio = this.page.getByLabel('Box Truck');
    this.flatbedRadio = this.page.getByLabel('Flatbed');
    this.semiTractorRadio = this.page.getByLabel('Semi / Tractor');
    this.suvCrossoverRadio = this.page.getByLabel('SUV / Crossover');
    this.sedanCarRadio = this.page.getByLabel('Sedan / Car');
    this.specialtyOtherRadio = this.page.getByLabel('Specialty / Other');

    // ============ Vehicle Primary Use Radio Buttons ============
    this.commercialGeneralRadio = this.page.getByLabel('Commercial – General');
    this.serviceRadio = this.page.getByLabel('Service');
    this.deliveryRadio = this.page.getByLabel('Delivery');
    this.rideshareTransportationRadio = this.page.getByLabel('Rideshare / Transportation');
    this.towingRadio = this.page.getByLabel('Towing');
    this.specialtyRadio = this.page.getByLabel('Specialty');

    // ============ Additional Specifications ============
    this.vehicleWeightClassDropdown = this.page.getByLabel('Vehicle Weight Class');
    this.operatingRadiusDropdown = this.page.getByLabel('Operating Radius');

    // ============ Safety & Features Checkboxes ============
    this.antiTheftDeviceCheckbox = this.page.getByLabel('Anti-Theft Device');
    this.absBrakesCheckbox = this.page.getByLabel('ABS Brakes');
    this.airbagsCheckbox = this.page.getByLabel('Airbags');
    this.backupCameraCheckbox = this.page.getByLabel('Backup Camera');
    this.garagingAddressSameCheckbox = this.page.getByLabel('Garaging address is the same as business address');

    // ============ Action Buttons & Footers ============
    this.AddVehiclButton = this.page.locator('button#addVehicleBtn');
    this.cancelButton = this.page.getByRole('button', { name: /Cancel/i });
    this.backButton = this.page.getByRole('button', { name: /← Back/i });
    this.saveVehicleButton = this.page.getByRole('button', { name: /Save Vehicle/i });
    this.continueButton = this.page.getByRole('button', { name: /Continue →/i });
  }


  // ============ Actions ============

  async fillVehicleDetailsAndContinue(vehicleData, testInfo) {
    if (!vehicleData) {
      throw new Error("Automation Error: 'vehicleData' payload object must be provided.");
    }
    await this.AddVehiclButton.click();
    // 1. Select basic dropdown items & fill text specs
    if (vehicleData.year) await this.yearDropdown.selectOption({ label: vehicleData.year.toString() });
    if (vehicleData.make) await this.makeDropdown.selectOption({ label: vehicleData.make });
    if (vehicleData.model) await this.modelInput.fill(vehicleData.model);
    if (vehicleData.vin) await this.vinInput.fill(vehicleData.vin);

    // 2. Select Dynamic Radio Buttons (Vehicle Type & Primary Use)
    if (vehicleData.vehicleType) {
      await this.page.getByLabel(vehicleData.vehicleType, { exact: true }).check();
    }
    if (vehicleData.primaryUse) {
      await this.page.getByLabel(vehicleData.primaryUse, { exact: true }).check();
    }

    // 3. Handle optional classification dropdown steps
    if (vehicleData.weightClass) await this.vehicleWeightClassDropdown.selectOption({ label: vehicleData.weightClass });
    if (vehicleData.operatingRadius) await this.operatingRadiusDropdown.selectOption({ label: vehicleData.operatingRadius });

    // 4. Toggle Safety Features & Configuration Checkboxes conditionally
    if (vehicleData.features) {
      if (vehicleData.features.antiTheft !== undefined) await this.antiTheftDeviceCheckbox.setChecked(vehicleData.features.antiTheft);
      if (vehicleData.features.absBrakes !== undefined) await this.absBrakesCheckbox.setChecked(vehicleData.features.absBrakes);
      if (vehicleData.features.airbags !== undefined) await this.airbagsCheckbox.setChecked(vehicleData.features.airbags);
      if (vehicleData.features.backupCamera !== undefined) await this.backupCameraCheckbox.setChecked(vehicleData.features.backupCamera);
    }
    
    if (vehicleData.garagingAddressSame !== undefined) {
      await this.garagingAddressSameCheckbox.setChecked(vehicleData.garagingAddressSame);
    }

    // 5. Capture visual step context snapshot
    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Vehicle Info Step Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    // 6. Submit the stage details
    await this.saveVehicleButton.click();
    await this.page.waitForTimeout(1000);

    if (testInfo) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await testInfo.attach('Vehicle added Step Screenshot - after', {
        body: screenshot,
        contentType: 'image/png'
      });
    }

    await this.continueButton.click();


  }

}
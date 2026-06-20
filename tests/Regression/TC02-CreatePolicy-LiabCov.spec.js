import { test, expect } from '../../fixtures/baseTest';

//test.describe.configure({mode:"serial"});
test('TC02 Create Policy with liability coverage',async({pages},testInfo)=>{
    test.slow(); //generally Test timeout is 30 seconds - this will increase it to 90 seconds

    const CustomerInformation = {
    firstName: 'John',
    lastName: 'Doe',
    dob: '15/06/1985', // Format: DD/MM/YYYY
    ssnLastFour: '1234',
    gender: 'Male', 
    email: 'testautomation_456@example.com',
    phone: '9876543210',
    streetAddress: '123 Main Automation Lane',
    addressLine2: 'Suite 10',
    city: 'TechCity',
    state: 'California',
    zipCode: '90210',
    licenseNumber: 'DL7654321',
    issuingState: 'AL',
    yearsLicensed: '5' 
    };

  const BusinessInfoGeneralData = {
    businessLegalName: 'Loganathan Logistics LLC',
    dbaTradeName: 'Logan Fast Shipping',
    businessEntityType: 'Partnership',
    feinEin: '12-3456789',
    yearsInBusiness: 5,
    numberOfEmployees: 25,
    annualGrossRevenue: 1500000
  };

  const BusInfoOperationsData = {
    operationType: 'General Contracting',
    radiusOfOperation: 'Regional (51–200 miles)', // Matches the exact label text
    operatesOvernight: true,
    transportsHazmat: false,
    isFleetPool: true
  };  

  const BusInfoContactData = {
    businessPhone: '5551234567',
    faxNumber: '5557654321', // Optional
    businessEmail: 'operations@loganathanlogistics.com',
    businessWebsite: 'https://www.loganathanlogistics.com', // Optional
    primaryContactName: 'Sundar Loganathan'
  };    

  

  const BusInfoDocPath = "test-input/driverlicensemock.png";    

  const VehicleInfoData = {
    year: 2024,
    make: 'Ford',
    model: 'F-250 Super Duty',
    vin: '1FT7W2BT0RED00000',
    vehicleType: 'Pickup Truck',       // Matches the exact label text for the radio group
    primaryUse: 'Commercial – General', // Matches the exact label text for the radio group
    weightClass: 'Light Duty – Under 10,000 lbs (Class 1-2)', 
    operatingRadius: 'Regional (51–200 miles)',
    features: {
      antiTheft: true,
      absBrakes: true,
      airbags: true,
      backupCamera: true
    },
    garagingAddressSame: true
  };    

  const LiabCoverageData = {
    liabilityLimits: '100/300/100',
    medPayLimit: '$5,000',
    includeUmUim: true // true maps to 'Yes – Include UM/UIM', false maps to 'No – Waive UM/UIM'
  };   

  const QuoteData = {
    aymentPlan: 'quarterly', // Options: 'annual' | 'semi-annual' | 'quarterly' | 'monthly'
    specialInstructions: 'Please route this commercial auto policy down to the specialized underwriting queue for priority review.',
    confirmAccuracy: true   // true checks the mandatory binding authorization checkbox
  }; 
  
  await pages.customerPage.fillApplicationAndContinue(CustomerInformation,testInfo);
  await pages.businessGeneralPage.fillBusinessInfoGeneralDetailsAndContinue(BusinessInfoGeneralData, testInfo);
  await pages.businessOperationPage.fillBusinessInfoOperationsAndContinue(BusInfoOperationsData, testInfo);
  await pages.businessContactPage.fillBusInfoContactDetailsAndContinue(BusInfoContactData, testInfo);
  await pages.businessDocumentPage.uploadBusInfoLicense(BusInfoDocPath, testInfo);
  await pages.vehiclePage.fillVehicleDetailsAndContinue(VehicleInfoData, testInfo);
  await pages.liabilityCoveragePage.fillLiabilityCoverageAndContinue(LiabCoverageData, testInfo);
  await pages.quotePage.fillQuotePageAndContinue(QuoteData, testInfo);
  await pages.policyPage.verifyPolicyPageAndLogut(testInfo);

});


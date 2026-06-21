import {test,expect} from '@playwright/test'
import {LoginPage} from '../../pages/MyInsurance/00-LoginPage'
import {CustomerInfoPage} from '../../pages/MyInsurance/01-CustomerInfoPage'
import {BusinessInfoGeneral} from '../../pages/MyInsurance/02-a-BusinessInfoGeneralPage'
import {BusinessInfoOperation} from '../../pages/MyInsurance/02-b-BusinessInfoOperationsPage'
import {BusinessInfoContactPage} from '../../pages/MyInsurance/02-c-BusinessInfoContactPage'
import {BusinessInfoDocumentPage} from '../../pages/MyInsurance/02-d-BusinessInfoDocumentPage'
import {VehicleInfoPage} from '../../pages/MyInsurance/03-VehicleInfoPage'
import {LiabilityCoveragePage} from '../../pages/MyInsurance/04-a-CoverageLiability'
import {QuotePage} from '../../pages/MyInsurance/05-QuotePage'
import {PolicyPage} from '../../pages/MyInsurance/06-PolicyPage'

//test.describe.configure({mode:"serial"});
test('TC01 Create Policy',async({page},testInfo)=>{

    test.slow();
    const Login = new LoginPage(page);
    await Login.openapplication();
    await Login.login('TestUser','TestPassword',testInfo);

    const CustomerPage = new CustomerInfoPage(page);

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

  await CustomerPage.fillApplicationAndContinue(CustomerInformation,testInfo);


  const BusinessInfoGenPage = new BusinessInfoGeneral(page);

  // 1. Mock Data Matching the Expected Form Parameters
  const BusinessInfoGeneralData = {
    businessLegalName: 'Loganathan Logistics LLC',
    dbaTradeName: 'Logan Fast Shipping',
    businessEntityType: 'Partnership',
    feinEin: '12-3456789',
    yearsInBusiness: 5,
    numberOfEmployees: 25,
    annualGrossRevenue: 1500000
  };

  await BusinessInfoGenPage.fillBusinessInfoGeneralDetailsAndContinue(BusinessInfoGeneralData, testInfo);
    
  const BusInfoOperation = new BusinessInfoOperation(page);

  const BusInfoOperationsData = {
    operationType: 'General Contracting',
    radiusOfOperation: 'Regional (51–200 miles)', // Matches the exact label text
    operatesOvernight: true,
    transportsHazmat: false,
    isFleetPool: true
  };    


  await BusInfoOperation.fillBusinessInfoOperationsAndContinue(BusInfoOperationsData, testInfo);

  const BusInfoContactPage = new BusinessInfoContactPage(page);

  const BusInfoContactData = {
    businessPhone: '5551234567',
    faxNumber: '5557654321', // Optional
    businessEmail: 'operations@loganathanlogistics.com',
    businessWebsite: 'https://www.loganathanlogistics.com', // Optional
    primaryContactName: 'Sundar Loganathan'
  };    


  await BusInfoContactPage.fillBusInfoContactDetailsAndContinue(BusInfoContactData, testInfo);

  const BusInfoDocumentPage = new BusinessInfoDocumentPage(page);
  const BusInfoDocPath = "test-input/driverlicensemock.png";    
  await BusInfoDocumentPage.uploadBusInfoLicense(BusInfoDocPath, testInfo);


  const VehInfoPage = new VehicleInfoPage(page);

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


  await VehInfoPage.fillVehicleDetailsAndContinue(VehicleInfoData, testInfo);


  const LiabCoveragePage = new LiabilityCoveragePage(page);

  const LiabCoverageData = {
    liabilityLimits: '100/300/100',
    medPayLimit: '$5,000',
    includeUmUim: true // true maps to 'Yes – Include UM/UIM', false maps to 'No – Waive UM/UIM'
  };    


  await LiabCoveragePage.fillLiabilityCoverageAndContinue(LiabCoverageData, testInfo);


  const ReviewQuotePage = new QuotePage(page);
  const QuoteData = {
    paymentPlan: 'quarterly', // Options: 'annual' | 'semi-annual' | 'quarterly' | 'monthly'
    specialInstructions: 'Please route this commercial auto policy down to the specialized underwriting queue for priority review.',
    confirmAccuracy: true   // true checks the mandatory binding authorization checkbox
  };    
  await ReviewQuotePage.fillQuotePageAndContinue(QuoteData, testInfo);

  const ReviewPolicyPage = new PolicyPage(page);
  await ReviewPolicyPage.verifyPolicyPageAndLogut(testInfo);


});


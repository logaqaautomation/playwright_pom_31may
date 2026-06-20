import { test, expect } from '../../fixtures/baseTest';
const testData = require('../../test-input/policyData/TC03.json');

//test.describe.configure({mode:"serial"});
test('TC03 Create Policy Data Driven - JSON',async({pages},testInfo)=>{
  test.slow(); //generally Test timeout is 30 seconds - this will increase it to 90 seconds
  //login is called from baseTest
  await pages.customerPage.fillApplicationAndContinue(testData.customerInformation,testInfo);
  await pages.businessGeneralPage.fillBusinessInfoGeneralDetailsAndContinue(testData.businessInfoGeneral, testInfo);
  await pages.businessOperationPage.fillBusinessInfoOperationsAndContinue(testData.businessInfoOperations, testInfo);
  await pages.businessContactPage.fillBusInfoContactDetailsAndContinue(testData.businessInfoContact, testInfo);
  await pages.businessDocumentPage.uploadBusInfoLicense(testData.businessInfoDocument.licensePath, testInfo);
  await pages.vehiclePage.fillVehicleDetailsAndContinue(testData.vehicleInfo, testInfo);
  await pages.liabilityCoveragePage.fillLiabilityCoverageAndContinue(testData.liabilityCoverage, testInfo);
  await pages.quotePage.fillQuotePageAndContinue(testData.quote, testInfo);
  await pages.policyPage.verifyPolicyPageAndLogut(testInfo);
});


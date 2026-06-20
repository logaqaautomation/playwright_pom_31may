import { test, expect } from '../../fixtures/baseTest';
import { ExcelReader } from '../../utils/ExcelReader';

const testData = ExcelReader.load(
    'test-input/policyData/PolicyData.xlsx',
    'TC04'
);

//test.describe.configure({mode:"serial"});
test('TC04 Create Policy Data Driven - Excel',async({pages},testInfo)=>{
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


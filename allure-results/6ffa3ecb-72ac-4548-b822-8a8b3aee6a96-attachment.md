# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Regression/TC02-CreatePolicy-LiabCov.spec.js >> TC02 Create Policy with liability coverage
- Location: tests/Regression/TC02-CreatePolicy-LiabCov.spec.js:14:5

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img [ref=e6]
        - generic [ref=e10]: Loganathan-Insurance-App
      - navigation [ref=e11]:
        - link "Home" [ref=e12] [cursor=pointer]:
          - /url: "#"
        - link "Products" [ref=e13] [cursor=pointer]:
          - /url: "#"
        - link "Claims" [ref=e14] [cursor=pointer]:
          - /url: "#"
        - link "Contact" [ref=e15] [cursor=pointer]:
          - /url: "#"
        - button "Logout" [ref=e16] [cursor=pointer]
  - generic [ref=e19]:
    - generic [ref=e22]:
      - generic [ref=e23]: ✓
      - generic [ref=e24]: Customer Info
    - generic [ref=e25]:
      - generic [ref=e26]: "2"
      - generic [ref=e27]: Business Info
    - generic [ref=e28]:
      - generic [ref=e29]: "3"
      - generic [ref=e30]: Vehicle Info
    - generic [ref=e31]:
      - generic [ref=e32]: "4"
      - generic [ref=e33]: Coverages
    - generic [ref=e34]:
      - generic [ref=e35]: "5"
      - generic [ref=e36]: Quote
    - generic [ref=e37]:
      - generic [ref=e38]: "6"
      - generic [ref=e39]: Policy Issued
  - main [ref=e40]:
    - generic [ref=e41]:
      - generic [ref=e43]:
        - generic [ref=e44]:
          - heading "Business Information" [level=2] [ref=e45]
          - paragraph [ref=e46]: Provide details about your commercial operations
        - generic [ref=e47]: Step 2 of 6
      - generic [ref=e48]:
        - generic [ref=e49]:
          - tablist [ref=e50]:
            - tab "General" [ref=e51] [cursor=pointer]
            - tab "Operations" [ref=e52] [cursor=pointer]
            - tab "Contact" [active] [selected] [ref=e53] [cursor=pointer]
            - tab "Documents" [ref=e54] [cursor=pointer]
          - tabpanel "Contact Information" [ref=e55]:
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]: Business Phone *
                - textbox "Business Phone *" [ref=e59]:
                  - /placeholder: (555) 000-0000
              - generic [ref=e60]:
                - generic [ref=e61]: Fax Number
                - textbox "Fax Number" [ref=e62]:
                  - /placeholder: (555) 000-0000 (optional)
            - generic [ref=e63]:
              - generic [ref=e64]:
                - generic [ref=e65]: Business Email *
                - textbox "Business Email *" [ref=e66]:
                  - /placeholder: info@company.com
              - generic [ref=e67]:
                - generic [ref=e68]: Business Website
                - textbox "Business Website" [ref=e69]:
                  - /placeholder: https://www.company.com
            - generic [ref=e70]:
              - generic [ref=e71]: Primary Contact Name *
              - textbox "Primary Contact Name *" [ref=e72]:
                - /placeholder: Full name of main contact
        - generic [ref=e73]:
          - button "← Back" [ref=e75] [cursor=pointer]
          - button "Continue →" [ref=e77] [cursor=pointer]
      - generic [ref=e78]:
        - text: Loganathan-Insurance-App · Licensed in all 50 states · AM Best Rated A ·
        - link "Privacy Policy" [ref=e79] [cursor=pointer]:
          - /url: "#privacy"
        - text: ·
        - link "Terms of Use" [ref=e80] [cursor=pointer]:
          - /url: "#terms"
        - text: ·
        - link "Accessibility" [ref=e81] [cursor=pointer]:
          - /url: "#accessibility"
```

# Test source

```ts
  1   | import { test, expect } from '../../fixtures/baseTest';
  2   | import {LoginPage} from '../../pages/MyInsurance/00-LoginPage'
  3   | import {CustomerInfoPage} from '../../pages/MyInsurance/01-CustomerInfoPage'
  4   | import {BusinessInfoGeneral} from '../../pages/MyInsurance/02-a-BusinessInfoGeneralPage'
  5   | import {BusinessInfoOperation} from '../../pages/MyInsurance/02-b-BusinessInfoOperationsPage'
  6   | import {BusinessInfoContactPage} from '../../pages/MyInsurance/02-c-BusinessInfoContactPage'
  7   | import {BusinessInfoDocumentPage} from '../../pages/MyInsurance/02-d-BusinessInfoDocumentPage'
  8   | import {VehicleInfoPage} from '../../pages/MyInsurance/03-VehicleInfoPage'
  9   | import {LiabilityCoveragePage} from '../../pages/MyInsurance/04-a-CoverageLiability'
  10  | import {QuotePage} from '../../pages/MyInsurance/05-QuotePage'
  11  | import {PolicyPage} from '../../pages/MyInsurance/06-PolicyPage'
  12  | 
  13  | //test.describe.configure({mode:"serial"});
  14  | test('TC02 Create Policy with liability coverage',async({loggedInPage},testInfo)=>{
  15  |     test.slow(); //generally Test timeout is 30 seconds - this will increase it to 90 seconds
  16  |     
  17  | 
  18  |     const CustomerPage = new CustomerInfoPage(loggedInPage);
  19  | 
  20  |     const CustomerInformation = {
  21  |     firstName: 'John',
  22  |     lastName: 'Doe',
  23  |     dob: '15/06/1985', // Format: DD/MM/YYYY
  24  |     ssnLastFour: '1234',
  25  |     gender: 'Male', 
  26  |     email: 'testautomation_456@example.com',
  27  |     phone: '9876543210',
  28  |     streetAddress: '123 Main Automation Lane',
  29  |     addressLine2: 'Suite 10',
  30  |     city: 'TechCity',
  31  |     state: 'California',
  32  |     zipCode: '90210',
  33  |     licenseNumber: 'DL7654321',
  34  |     issuingState: 'AL',
  35  |     yearsLicensed: '5' 
  36  |     };
  37  | 
  38  |   await CustomerPage.fillApplicationAndContinue(CustomerInformation,testInfo);
  39  | 
  40  | 
  41  |   const BusinessInfoGenPage = new BusinessInfoGeneral(loggedInPage);
  42  | 
  43  |   // 1. Mock Data Matching the Expected Form Parameters
  44  |   const BusinessInfoGeneralData = {
  45  |     businessLegalName: 'Loganathan Logistics LLC',
  46  |     dbaTradeName: 'Logan Fast Shipping',
  47  |     businessEntityType: 'Partnership',
  48  |     feinEin: '12-3456789',
  49  |     yearsInBusiness: 5,
  50  |     numberOfEmployees: 25,
  51  |     annualGrossRevenue: 1500000
  52  |   };
  53  | 
  54  |   await BusinessInfoGenPage.fillBusinessInfoGeneralDetailsAndContinue(BusinessInfoGeneralData, testInfo);
  55  |     
  56  |   const BusInfoOperation = new BusinessInfoOperation(loggedInPage);
  57  | 
  58  |   const BusInfoOperationsData = {
  59  |     operationType: 'General Contracting',
  60  |     radiusOfOperation: 'Regional (51–200 miles)', // Matches the exact label text
  61  |     operatesOvernight: true,
  62  |     transportsHazmat: false,
  63  |     isFleetPool: true
  64  |   };    
  65  | 
  66  | 
  67  |   await BusInfoOperation.fillBusinessInfoOperationsAndContinue(BusInfoOperationsData, testInfo);
  68  | 
> 69  |   const BusInfoContactPage = new BusinessInfoContactPage(page);
      |                                                          ^ ReferenceError: page is not defined
  70  | 
  71  |   const BusInfoContactData = {
  72  |     businessPhone: '5551234567',
  73  |     faxNumber: '5557654321', // Optional
  74  |     businessEmail: 'operations@loganathanlogistics.com',
  75  |     businessWebsite: 'https://www.loganathanlogistics.com', // Optional
  76  |     primaryContactName: 'Sundar Loganathan'
  77  |   };    
  78  | 
  79  | 
  80  |   await BusInfoContactPage.fillBusInfoContactDetailsAndContinue(BusInfoContactData, testInfo);
  81  | 
  82  |   const BusInfoDocumentPage = new BusinessInfoDocumentPage(page);
  83  |   const BusInfoDocPath = "test-input/driverlicensemock.png";    
  84  |   await BusInfoDocumentPage.uploadBusInfoLicense(BusInfoDocPath, testInfo);
  85  | 
  86  | 
  87  |   const VehInfoPage = new VehicleInfoPage(page);
  88  | 
  89  |   const VehicleInfoData = {
  90  |     year: 2024,
  91  |     make: 'Ford',
  92  |     model: 'F-250 Super Duty',
  93  |     vin: '1FT7W2BT0RED00000',
  94  |     vehicleType: 'Pickup Truck',       // Matches the exact label text for the radio group
  95  |     primaryUse: 'Commercial – General', // Matches the exact label text for the radio group
  96  |     weightClass: 'Light Duty – Under 10,000 lbs (Class 1-2)', 
  97  |     operatingRadius: 'Regional (51–200 miles)',
  98  |     features: {
  99  |       antiTheft: true,
  100 |       absBrakes: true,
  101 |       airbags: true,
  102 |       backupCamera: true
  103 |     },
  104 |     garagingAddressSame: true
  105 |   };    
  106 | 
  107 | 
  108 |   await VehInfoPage.fillVehicleDetailsAndContinue(VehicleInfoData, testInfo);
  109 | 
  110 |   const LiabCoveragePage = new LiabilityCoveragePage(page);
  111 | 
  112 |   const LiabCoverageData = {
  113 |     liabilityLimits: '100/300/100',
  114 |     medPayLimit: '$5,000',
  115 |     includeUmUim: true // true maps to 'Yes – Include UM/UIM', false maps to 'No – Waive UM/UIM'
  116 |   };    
  117 | 
  118 | 
  119 |   await LiabCoveragePage.fillLiabilityCoverageAndContinue(LiabCoverageData, testInfo);
  120 | 
  121 | 
  122 |   const ReviewQuotePage = new QuotePage(page);
  123 |   const QuoteData = {
  124 |     aymentPlan: 'quarterly', // Options: 'annual' | 'semi-annual' | 'quarterly' | 'monthly'
  125 |     specialInstructions: 'Please route this commercial auto policy down to the specialized underwriting queue for priority review.',
  126 |     confirmAccuracy: true   // true checks the mandatory binding authorization checkbox
  127 |   };    
  128 |   await ReviewQuotePage.fillQuotePageAndContinue(QuoteData, testInfo);
  129 | 
  130 |   const ReviewPolicyPage = new PolicyPage(page);
  131 |   await ReviewPolicyPage.verifyPolicyPageAndLogut(testInfo);
  132 | 
  133 | 
  134 | });
  135 | 
  136 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Regression/TC02-CreatePolicy-LiabCov.spec.js >> TC02 Create Policy with liability coverage
- Location: tests/Regression/TC02-CreatePolicy-LiabCov.spec.js:4:5

# Error details

```
ReferenceError: BusinessInfoOperation is not defined
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
            - tab "Operations" [active] [selected] [ref=e52] [cursor=pointer]
            - tab "Contact" [ref=e53] [cursor=pointer]
            - tab "Documents" [ref=e54] [cursor=pointer]
          - tabpanel "Business Operations" [ref=e55]:
            - generic [ref=e56]:
              - generic [ref=e57]: Primary Business Operations *
              - paragraph [ref=e58]: Select all activities that describe how your fleet vehicles are used.
              - combobox [ref=e60] [cursor=pointer]:
                - generic [ref=e61]: Select operations...
                - generic [ref=e62]: ▼
            - generic [ref=e63]:
              - generic [ref=e64]: Operating Radius *
              - paragraph [ref=e65]: How far do your vehicles typically travel from your primary location?
              - generic [ref=e66]:
                - generic [ref=e67] [cursor=pointer]:
                  - radio "Local (0–50 miles)" [ref=e68]
                  - generic [ref=e69]: Local (0–50 miles)
                - generic [ref=e70] [cursor=pointer]:
                  - radio "Regional (51–200 miles)" [ref=e71]
                  - generic [ref=e72]: Regional (51–200 miles)
                - generic [ref=e73] [cursor=pointer]:
                  - radio "Long Haul (200+ miles)" [ref=e74]
                  - generic [ref=e75]: Long Haul (200+ miles)
                - generic [ref=e76] [cursor=pointer]:
                  - radio "National" [ref=e77]
                  - generic [ref=e78]: National
            - generic [ref=e79]:
              - generic [ref=e80]: Additional Operating Characteristics
              - generic [ref=e81]:
                - generic [ref=e82] [cursor=pointer]:
                  - checkbox "Vehicles are operated overnight (11 PM – 6 AM)" [ref=e83]
                  - generic [ref=e84]: Vehicles are operated overnight (11 PM – 6 AM)
                - generic [ref=e85] [cursor=pointer]:
                  - checkbox "Hazardous materials (HAZMAT) are transported" [ref=e86]
                  - generic [ref=e87]: Hazardous materials (HAZMAT) are transported
                - generic [ref=e88] [cursor=pointer]:
                  - checkbox "Vehicles are part of a fleet pool (shared by multiple drivers)" [ref=e89]
                  - generic [ref=e90]: Vehicles are part of a fleet pool (shared by multiple drivers)
        - generic [ref=e91]:
          - button "← Back" [ref=e93] [cursor=pointer]
          - button "Continue →" [ref=e95] [cursor=pointer]
      - generic [ref=e96]:
        - text: Loganathan-Insurance-App · Licensed in all 50 states · AM Best Rated A ·
        - link "Privacy Policy" [ref=e97] [cursor=pointer]:
          - /url: "#privacy"
        - text: ·
        - link "Terms of Use" [ref=e98] [cursor=pointer]:
          - /url: "#terms"
        - text: ·
        - link "Accessibility" [ref=e99] [cursor=pointer]:
          - /url: "#accessibility"
```

# Test source

```ts
  1   | import { test, expect } from '../../fixtures/baseTest';
  2   | 
  3   | //test.describe.configure({mode:"serial"});
  4   | test('TC02 Create Policy with liability coverage',async({pages},testInfo)=>{
  5   |     test.slow(); //generally Test timeout is 30 seconds - this will increase it to 90 seconds
  6   | 
  7   |     const CustomerInformation = {
  8   |     firstName: 'John',
  9   |     lastName: 'Doe',
  10  |     dob: '15/06/1985', // Format: DD/MM/YYYY
  11  |     ssnLastFour: '1234',
  12  |     gender: 'Male', 
  13  |     email: 'testautomation_456@example.com',
  14  |     phone: '9876543210',
  15  |     streetAddress: '123 Main Automation Lane',
  16  |     addressLine2: 'Suite 10',
  17  |     city: 'TechCity',
  18  |     state: 'California',
  19  |     zipCode: '90210',
  20  |     licenseNumber: 'DL7654321',
  21  |     issuingState: 'AL',
  22  |     yearsLicensed: '5' 
  23  |     };
  24  | 
  25  |   await pages.customerPage.fillApplicationAndContinue(CustomerInformation,testInfo);
  26  | 
  27  | 
  28  |   // 1. Mock Data Matching the Expected Form Parameters
  29  |   const BusinessInfoGeneralData = {
  30  |     businessLegalName: 'Loganathan Logistics LLC',
  31  |     dbaTradeName: 'Logan Fast Shipping',
  32  |     businessEntityType: 'Partnership',
  33  |     feinEin: '12-3456789',
  34  |     yearsInBusiness: 5,
  35  |     numberOfEmployees: 25,
  36  |     annualGrossRevenue: 1500000
  37  |   };
  38  | 
  39  |   await pages.businessGeneralPage.fillBusinessInfoGeneralDetailsAndContinue(BusinessInfoGeneralData, testInfo);
  40  |     
> 41  |   const BusInfoOperation = new BusinessInfoOperation(loggedInPage);
      |                            ^ ReferenceError: BusinessInfoOperation is not defined
  42  | 
  43  |   const BusInfoOperationsData = {
  44  |     operationType: 'General Contracting',
  45  |     radiusOfOperation: 'Regional (51–200 miles)', // Matches the exact label text
  46  |     operatesOvernight: true,
  47  |     transportsHazmat: false,
  48  |     isFleetPool: true
  49  |   };    
  50  | 
  51  | 
  52  |   await BusInfoOperation.fillBusinessInfoOperationsAndContinue(BusInfoOperationsData, testInfo);
  53  | 
  54  |   const BusInfoContactPage = new BusinessInfoContactPage(loggedInPage);
  55  | 
  56  |   const BusInfoContactData = {
  57  |     businessPhone: '5551234567',
  58  |     faxNumber: '5557654321', // Optional
  59  |     businessEmail: 'operations@loganathanlogistics.com',
  60  |     businessWebsite: 'https://www.loganathanlogistics.com', // Optional
  61  |     primaryContactName: 'Sundar Loganathan'
  62  |   };    
  63  | 
  64  | 
  65  |   await BusInfoContactPage.fillBusInfoContactDetailsAndContinue(BusInfoContactData, testInfo);
  66  | 
  67  |   const BusInfoDocumentPage = new BusinessInfoDocumentPage(loggedInPage);
  68  |   const BusInfoDocPath = "test-input/driverlicensemock.png";    
  69  |   await BusInfoDocumentPage.uploadBusInfoLicense(BusInfoDocPath, testInfo);
  70  | 
  71  | 
  72  |   const VehInfoPage = new VehicleInfoPage(loggedInPage);
  73  | 
  74  |   const VehicleInfoData = {
  75  |     year: 2024,
  76  |     make: 'Ford',
  77  |     model: 'F-250 Super Duty',
  78  |     vin: '1FT7W2BT0RED00000',
  79  |     vehicleType: 'Pickup Truck',       // Matches the exact label text for the radio group
  80  |     primaryUse: 'Commercial – General', // Matches the exact label text for the radio group
  81  |     weightClass: 'Light Duty – Under 10,000 lbs (Class 1-2)', 
  82  |     operatingRadius: 'Regional (51–200 miles)',
  83  |     features: {
  84  |       antiTheft: true,
  85  |       absBrakes: true,
  86  |       airbags: true,
  87  |       backupCamera: true
  88  |     },
  89  |     garagingAddressSame: true
  90  |   };    
  91  | 
  92  | 
  93  |   await VehInfoPage.fillVehicleDetailsAndContinue(VehicleInfoData, testInfo);
  94  | 
  95  |   const LiabCoveragePage = new LiabilityCoveragePage(loggedInPage);
  96  | 
  97  |   const LiabCoverageData = {
  98  |     liabilityLimits: '100/300/100',
  99  |     medPayLimit: '$5,000',
  100 |     includeUmUim: true // true maps to 'Yes – Include UM/UIM', false maps to 'No – Waive UM/UIM'
  101 |   };    
  102 | 
  103 | 
  104 |   await LiabCoveragePage.fillLiabilityCoverageAndContinue(LiabCoverageData, testInfo);
  105 | 
  106 | 
  107 |   const ReviewQuotePage = new QuotePage(loggedInPage);
  108 |   const QuoteData = {
  109 |     aymentPlan: 'quarterly', // Options: 'annual' | 'semi-annual' | 'quarterly' | 'monthly'
  110 |     specialInstructions: 'Please route this commercial auto policy down to the specialized underwriting queue for priority review.',
  111 |     confirmAccuracy: true   // true checks the mandatory binding authorization checkbox
  112 |   };    
  113 |   await ReviewQuotePage.fillQuotePageAndContinue(QuoteData, testInfo);
  114 | 
  115 |   const ReviewPolicyPage = new PolicyPage(loggedInPage);
  116 |   await ReviewPolicyPage.verifyPolicyPageAndLogut(testInfo);
  117 | 
  118 | 
  119 | });
  120 | 
  121 | 
```
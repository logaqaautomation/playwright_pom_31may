# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Regression/TC01-CreatePolicy.spec.js >> TC01 Create Policy
- Location: tests/Regression/TC01-CreatePolicy.spec.js:14:5

# Error details

```
ReferenceError: SmartLocator is not defined
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
    - generic [ref=e21]:
      - generic [ref=e22]: "1"
      - generic [ref=e23]: Customer Info
    - generic [ref=e24]:
      - generic [ref=e25]: "2"
      - generic [ref=e26]: Business Info
    - generic [ref=e27]:
      - generic [ref=e28]: "3"
      - generic [ref=e29]: Vehicle Info
    - generic [ref=e30]:
      - generic [ref=e31]: "4"
      - generic [ref=e32]: Coverages
    - generic [ref=e33]:
      - generic [ref=e34]: "5"
      - generic [ref=e35]: Quote
    - generic [ref=e36]:
      - generic [ref=e37]: "6"
      - generic [ref=e38]: Policy Issued
  - main [ref=e39]:
    - generic [ref=e40]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Customer Information" [level=2] [ref=e44]
          - paragraph [ref=e45]: Tell us about the primary policyholder
        - generic [ref=e46]: Step 1 of 6
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]:
            - heading "Personal Information" [level=3] [ref=e50]
            - paragraph [ref=e51]:
              - text: Provide the primary named insured's personal details.
              - link "View Privacy Policy" [ref=e52] [cursor=pointer]:
                - /url: "#privacy"
            - generic [ref=e53]:
              - generic [ref=e54]:
                - generic [ref=e55]: First Name *
                - textbox "First Name *" [ref=e56]:
                  - /placeholder: e.g., Marcus
              - generic [ref=e57]:
                - generic [ref=e58]: Last Name *
                - textbox "Last Name *" [ref=e59]:
                  - /placeholder: e.g., Delacroix
            - generic [ref=e60]:
              - generic [ref=e61]:
                - generic [ref=e62]: Date of Birth *
                - textbox "Date of Birth *" [ref=e63]
              - generic [ref=e64]:
                - generic [ref=e65]: SSN (Last 4) *
                - textbox "SSN (Last 4) *" [ref=e66]:
                  - /placeholder: ••••
              - generic [ref=e67]:
                - generic [ref=e68]: Gender *
                - combobox [ref=e69] [cursor=pointer]:
                  - option "Select..." [selected]
                  - option "Male"
                  - option "Female"
                  - option "Non-Binary"
                  - option "Prefer not to say"
            - generic [ref=e70]:
              - generic [ref=e71]: Gender (Radio)
              - generic [ref=e72]:
                - generic [ref=e73] [cursor=pointer]:
                  - radio "Male" [ref=e74]
                  - generic [ref=e75]: Male
                - generic [ref=e76] [cursor=pointer]:
                  - radio "Female" [ref=e77]
                  - generic [ref=e78]: Female
                - generic [ref=e79] [cursor=pointer]:
                  - radio "Non-Binary" [ref=e80]
                  - generic [ref=e81]: Non-Binary
                - generic [ref=e82] [cursor=pointer]:
                  - radio "Prefer not to say" [ref=e83]
                  - generic [ref=e84]: Prefer not to say
          - generic [ref=e85]:
            - heading "Contact Information" [level=3] [ref=e86]
            - generic [ref=e87]:
              - generic [ref=e88]:
                - generic [ref=e89]: Email Address *
                - textbox "Email Address *" [ref=e90]:
                  - /placeholder: name@company.com
              - generic [ref=e91]:
                - generic [ref=e92]: Phone Number *
                - textbox "Phone Number *" [ref=e93]:
                  - /placeholder: (555) 000-0000
          - generic [ref=e94]:
            - heading "Mailing Address" [level=3] [ref=e95]
            - generic [ref=e96]:
              - generic [ref=e97]: Street Address *
              - textbox "Street Address *" [ref=e98]:
                - /placeholder: 123 Main Street
            - generic [ref=e99]:
              - generic [ref=e100]: Address Line 2
              - textbox "Address Line 2" [ref=e101]:
                - /placeholder: Apt, Suite, Unit, etc. (optional)
            - generic [ref=e102]:
              - generic [ref=e103]:
                - generic [ref=e104]: City *
                - textbox "City *" [ref=e105]:
                  - /placeholder: City
              - generic [ref=e106]:
                - generic [ref=e107]: State *
                - combobox "State *" [ref=e108] [cursor=pointer]:
                  - option "Select State" [selected]
                  - option "Alabama"
                  - option "Alaska"
                  - option "Arizona"
                  - option "Arkansas"
                  - option "California"
                  - option "Colorado"
                  - option "Connecticut"
                  - option "Delaware"
                  - option "Florida"
                  - option "Georgia"
                  - option "Hawaii"
                  - option "Idaho"
                  - option "Illinois"
                  - option "Indiana"
                  - option "Iowa"
                  - option "Kansas"
                  - option "Kentucky"
                  - option "Louisiana"
                  - option "Maine"
                  - option "Maryland"
                  - option "Massachusetts"
                  - option "Michigan"
                  - option "Minnesota"
                  - option "Mississippi"
                  - option "Missouri"
                  - option "Montana"
                  - option "Nebraska"
                  - option "Nevada"
                  - option "New Hampshire"
                  - option "New Jersey"
                  - option "New Mexico"
                  - option "New York"
                  - option "North Carolina"
                  - option "North Dakota"
                  - option "Ohio"
                  - option "Oklahoma"
                  - option "Oregon"
                  - option "Pennsylvania"
                  - option "Rhode Island"
                  - option "South Carolina"
                  - option "South Dakota"
                  - option "Tennessee"
                  - option "Texas"
                  - option "Utah"
                  - option "Vermont"
                  - option "Virginia"
                  - option "Washington"
                  - option "West Virginia"
                  - option "Wisconsin"
                  - option "Wyoming"
                  - option "District of Columbia"
              - generic [ref=e109]:
                - generic [ref=e110]: ZIP Code *
                - textbox "ZIP Code *" [ref=e111]:
                  - /placeholder: "00000"
          - generic [ref=e112]:
            - heading "Driver's License" [level=3] [ref=e113]
            - generic [ref=e114]:
              - generic [ref=e115]:
                - generic [ref=e116]: License Number *
                - textbox "License Number *" [ref=e117]:
                  - /placeholder: DL-XXXXXXX
              - generic [ref=e118]:
                - generic [ref=e119]: Issuing State *
                - combobox "Issuing State *" [ref=e120] [cursor=pointer]:
                  - option "Select State" [selected]
                  - option "AL"
                  - option "AK"
                  - option "AZ"
                  - option "AR"
                  - option "CA"
                  - option "CO"
                  - option "CT"
                  - option "DE"
                  - option "FL"
                  - option "GA"
                  - option "HI"
                  - option "ID"
                  - option "IL"
                  - option "IN"
                  - option "IA"
                  - option "KS"
                  - option "KY"
                  - option "LA"
                  - option "ME"
                  - option "MD"
                  - option "MA"
                  - option "MI"
                  - option "MN"
                  - option "MS"
                  - option "MO"
                  - option "MT"
                  - option "NE"
                  - option "NV"
                  - option "NH"
                  - option "NJ"
                  - option "NM"
                  - option "NY"
                  - option "NC"
                  - option "ND"
                  - option "OH"
                  - option "OK"
                  - option "OR"
                  - option "PA"
                  - option "RI"
                  - option "SC"
                  - option "SD"
                  - option "TN"
                  - option "TX"
                  - option "UT"
                  - option "VT"
                  - option "VA"
                  - option "WA"
                  - option "WV"
                  - option "WI"
                  - option "WY"
                  - option "DC"
              - generic [ref=e121]:
                - generic [ref=e122]: Years Licensed *
                - spinbutton "Years Licensed *" [ref=e123]
          - generic [ref=e124]:
            - text: All information provided is protected under our
            - link "Privacy Policy" [ref=e125] [cursor=pointer]:
              - /url: "#privacy"
            - text: and will only be used for underwriting purposes. Need help?
            - link "Contact your agent" [ref=e126] [cursor=pointer]:
              - /url: "#support"
        - button "Continue →" [ref=e129] [cursor=pointer]
      - generic [ref=e130]:
        - text: Loganathan-Insurance-App · Licensed in all 50 states · AM Best Rated A ·
        - link "Privacy Policy" [ref=e131] [cursor=pointer]:
          - /url: "#privacy"
        - text: ·
        - link "Terms of Use" [ref=e132] [cursor=pointer]:
          - /url: "#terms"
        - text: ·
        - link "Accessibility" [ref=e133] [cursor=pointer]:
          - /url: "#accessibility"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | const SmartActions = require('../../utils/SmartActions');
  3  | 
  4  | exports.CustomerInfoPage = class CustomerInfoPage {
  5  | 
  6  |   constructor(page) {
  7  |     this.page = page;
  8  |     this.firstNameInput = this.page.getByLabel('First Name *');
  9  |     this.lastNameInput = this.page.getByLabel('Last Name *');
  10 |     this.dateOfBirthInput = this.page.getByLabel('Date of Birth *');
  11 |     this.ssnLastFourInput = this.page.getByLabel('SSN (Last 4) *');
  12 |     this.genderDropdown = this.page.locator('.field-select');
  13 |     this.maleRadio = this.page.getByLabel('Male');
  14 |     this.femaleRadio = this.page.getByLabel('Female');
  15 |     this.nonBinaryRadio = this.page.getByLabel('Non-Binary');
  16 |     this.preferNotToSayRadio = this.page.getByLabel('Prefer not to say');
  17 |     this.emailAddressInput = this.page.getByLabel('Email Address *');
  18 |     this.phoneNumberInput = this.page.getByLabel('Phone Number *');
  19 |     this.streetAddressInput = this.page.getByLabel('Street Address *');
  20 |     this.addressLineTwoInput = this.page.getByLabel('Address Line 2');
  21 |     this.cityInput = this.page.getByLabel('City *');
  22 |     this.stateDropdown = this.page.locator('select#state');
  23 |     this.zipCodeInput = this.page.getByLabel('ZIP Code *');
  24 |     this.licenseNumberInput = this.page.getByLabel('License Number *');
  25 |     this.issuingStateDropdown = this.page.getByLabel('Issuing State *');
  26 |     this.yearsLicensedInput = this.page.getByLabel('Years Licensed *');
> 27 |     this.continueButton = SmartLocator.create(
     |                           ^ ReferenceError: SmartLocator is not defined
  28 |                                 page,
  29 |                                 'CustomerPage.continueButton',
  30 |                                 "getByRole('button',{name:'Continue123'})",
  31 |                                 page.getByRole('button', { name: 'Continue123' })
  32 |                                 );
  33 | 
  34 |   }
  35 |   // ============ Actions ============
  36 | 
  37 |   async fillApplicationAndContinue(formData, testInfo) {
  38 | 
  39 |     // Fill text inputs
  40 |     await this.firstNameInput.fill(formData.firstName);
  41 |     await this.lastNameInput.fill(formData.lastName);
  42 |     await this.dateOfBirthInput.type(formData.dob); // Note: .fill() is generally preferred over deprecated .type() for dates
  43 |     await this.ssnLastFourInput.fill(formData.ssnLastFour);
  44 |     
  45 |     // Select Gender Radio Button dynamically based on the input string
  46 |     // e.g., 'Male', 'Female', 'Non-Binary', 'Prefer not to say'
  47 |     await this.page.getByLabel(formData.gender, { exact: true }).check();
  48 | 
  49 |     // Fill Contact & Address Info
  50 |     await this.emailAddressInput.fill(formData.email);
  51 |     await this.phoneNumberInput.fill(formData.phone);
  52 |     await this.streetAddressInput.fill(formData.streetAddress);
  53 |     
  54 |     if (formData.addressLine2) {
  55 |       await this.addressLineTwoInput.fill(formData.addressLine2);
  56 |     }
  57 |     
  58 |     await this.cityInput.fill(formData.city);
  59 |     
  60 |     // Handle Dropdowns
  61 |     await this.stateDropdown.selectOption({ label: formData.state });
  62 |     await this.zipCodeInput.fill(formData.zipCode);
  63 |     
  64 |     // Driver Details
  65 |     await this.licenseNumberInput.fill(formData.licenseNumber);
  66 |     await this.issuingStateDropdown.selectOption({ label: formData.issuingState });
  67 |     await this.yearsLicensedInput.fill(formData.yearsLicensed.toString());
  68 | 
  69 |     const screenshot = await this.page.screenshot({
  70 |             fullPage: true
  71 |             });
  72 | 
  73 |    // Optional Screenshot capture attaching 
  74 |     if (testInfo) {
  75 |       const screenshot = await this.page.screenshot({ fullPage: true });
  76 |       await testInfo.attach('Commercial Info Page Screenshot', {
  77 |         body: screenshot,
  78 |         contentType: 'image/png'
  79 |       });
  80 |     }
  81 | 
  82 |     // Submit Form
  83 |     await this.continueButton.click(testInfo);
  84 | 
  85 |   }
  86 | 
  87 | }
```
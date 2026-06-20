# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Regression/TC02-CreatePolicy-LiabCov.spec.js >> TC02 Create Policy with liability coverage
- Location: tests/Regression/TC02-CreatePolicy-LiabCov.spec.js:14:5

# Error details

```
Test timeout of 90000ms exceeded.
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
            - tab "General" [active] [selected] [ref=e51] [cursor=pointer]
            - tab "Operations" [ref=e52] [cursor=pointer]
            - tab "Contact" [ref=e53] [cursor=pointer]
            - tab "Documents" [ref=e54] [cursor=pointer]
          - tabpanel "General Information" [ref=e55]:
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]: Business Legal Name *
                - textbox "Business Legal Name *" [ref=e59]:
                  - /placeholder: Full legal name
                  - text: Loganathan Logistics LLC
              - generic [ref=e60]:
                - generic [ref=e61]: DBA / Trade Name
                - textbox "DBA / Trade Name" [ref=e62]:
                  - /placeholder: Doing Business As (optional)
                  - text: Logan Fast Shipping
            - generic [ref=e63]:
              - generic [ref=e64]:
                - generic [ref=e65]: Business Entity Type *
                - combobox "Business Entity Type *" [ref=e66] [cursor=pointer]:
                  - option "Select type..."
                  - option "Sole Proprietorship"
                  - option "Partnership" [selected]
                  - option "LLC"
                  - option "S-Corporation"
                  - option "C-Corporation"
                  - option "Non-Profit"
              - generic [ref=e67]:
                - generic [ref=e68]: FEIN / EIN *
                - textbox "FEIN / EIN *" [ref=e69]:
                  - /placeholder: XX-XXXXXXX
                  - text: 12-3456789
              - generic [ref=e70]:
                - generic [ref=e71]: Years in Business *
                - spinbutton "Years in Business *" [ref=e72]: "5"
            - generic [ref=e73]:
              - generic [ref=e74]:
                - generic [ref=e75]: Number of Employees *
                - spinbutton "Number of Employees *" [ref=e76]: "25"
              - generic [ref=e77]:
                - generic [ref=e78]: Annual Gross Revenue ($)
                - spinbutton "Annual Gross Revenue ($)" [ref=e79]: "1500000"
        - generic [ref=e80]:
          - button "← Back" [ref=e82] [cursor=pointer]
          - button "Continue →" [ref=e84] [cursor=pointer]
      - generic [ref=e85]:
        - text: Loganathan-Insurance-App · Licensed in all 50 states · AM Best Rated A ·
        - link "Privacy Policy" [ref=e86] [cursor=pointer]:
          - /url: "#privacy"
        - text: ·
        - link "Terms of Use" [ref=e87] [cursor=pointer]:
          - /url: "#terms"
        - text: ·
        - link "Accessibility" [ref=e88] [cursor=pointer]:
          - /url: "#accessibility"
```
first to get package.json // initialise node project
npm init

install playwright
npm install playwright@latest

install allure-reports
npm install -d allure-playwright

install allure-reports commandline
npm install -d allure-commandline

configure the allure report generation in playwright.config.js file
reporter:[
    ['html'],
    ['allure-playwright']
],

before test execution, to clear previous allure-reports and results
rm -rf allure-results allure-reports

after the test execution, to generate allure-reports [from allure-results]
npx allure generate allure-results --clean -o allure-reports

after allure-results generated, to open it
npx allure open allure-reports

to run a playwright test
npx playwright test [runs all the test under the tests folder]
npx playwright test -g testname [runs the particular test]
npx plauwright test 'testfilename.spec.js' [runs all the tests in the spec.js file ]
npx playwright test -g testname --headed [runs in headed more]
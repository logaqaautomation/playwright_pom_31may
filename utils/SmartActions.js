const LocatorHealer = require('./LocatorHealer');
const HealedLocatorStore = require('./HealedLocatorStore');

class SmartActions {

    static async click(
        page,
        locator,
        locatorName,
        originalLocator,
        testInfo
    ) {

        console.log('========================================');
        console.log(`SMART ACTION STARTED`);
        console.log(`Locator Name: ${locatorName}`);
        console.log('========================================');

        try {

            console.log('STEP 1 - Trying original locator');

            await locator.click({
                timeout: 3000
            });

            console.log('STEP 2 - Original locator worked');

        } catch (error) {

            console.log('STEP 3 - Original locator failed');
            console.log(`Error: ${error.message}`);

            try {

                // Check previously healed locator
                const savedLocator =
                    HealedLocatorStore.get(locatorName);

                console.log(
                    `STEP 4 - Saved locator found: ${savedLocator}`
                );

                if (savedLocator) {

                    console.log(
                        `STEP 5 - Trying saved locator`
                    );

                    await page.locator(savedLocator).click({
                        timeout: 5000
                    });

                    console.log(
                        `STEP 6 - Saved locator worked`
                    );

                    return;
                }

                console.log(
                    'STEP 7 - No saved locator found. Calling Gemini...'
                );

                // Ask Gemini
                const healedLocator =
                    await LocatorHealer.heal(
                        page,
                        locatorName,
                        originalLocator
                    );

                console.log(
                    `STEP 8 - Gemini suggested: ${healedLocator}`
                );

                // Save for future runs
                HealedLocatorStore.save(
                    locatorName,
                    healedLocator
                );

                console.log(
                    'STEP 9 - Healed locator saved'
                );

                // Attach to report
                if (testInfo) {

                    await testInfo.attach(
                        'AI Locator Healing',
                        {
                            body: Buffer.from(
                                `
Locator Name:
${locatorName}

Original Locator:
${originalLocator}

Healed Locator:
${healedLocator}
`
                            ),
                            contentType: 'text/plain'
                        }
                    );

                    console.log(
                        'STEP 10 - Healing info attached to report'
                    );
                }

                console.log(
                    `STEP 11 - Trying healed locator`
                );

                await page.locator(
                    healedLocator
                ).click({
                    timeout: 5000
                });

                console.log(
                    'STEP 12 - Healed locator worked'
                );

            } catch (healingError) {

                console.log(
                    'STEP 13 - Healing failed'
                );

                console.log(
                    healingError.message
                );

                throw healingError;
            }
        }

        console.log('SMART ACTION COMPLETED');
        console.log('========================================');
    }
}

module.exports = SmartActions;
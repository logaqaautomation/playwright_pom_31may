class SmartLocator {
    static create(page, name, originalLocator, locator) {
        return {
            page,
            name,
            originalLocator,
            locator,

            async click(testInfo) {
                const SmartActions = require('./SmartActions');

                await SmartActions.click(
                    page,
                    locator,
                    name,
                    originalLocator,
                    testInfo
                );
            }
        };
    }
}

module.exports = SmartLocator;
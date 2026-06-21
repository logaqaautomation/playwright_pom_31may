const fs = require('fs');
const path = require('path');

class HealedLocatorStore {

    static filePath =
        path.join(
            process.cwd(),
            'healedLocators.json'
        );

    static get(locatorName) {

        const data =
            JSON.parse(
                fs.readFileSync(
                    this.filePath,
                    'utf8'
                )
            );

        return data[locatorName];
    }

    static save(
        locatorName,
        locator
    ) {

        const data =
            JSON.parse(
                fs.readFileSync(
                    this.filePath,
                    'utf8'
                )
            );

        data[locatorName] =
            locator;

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(
                data,
                null,
                2
            )
        );
    }
}

module.exports =
    HealedLocatorStore;
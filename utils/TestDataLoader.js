import fs from 'fs';
import path from 'path';

export class TestDataLoader {

    static load(fileName) {

        const filePath = path.join(
            process.cwd(),
            'test-input',
            'policyData',
            fileName
        );

        console.log(`Loading Test Data: ${filePath}`);

        return JSON.parse(
            fs.readFileSync(filePath, 'utf8')
        );
    }
}
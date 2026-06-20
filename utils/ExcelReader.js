import XLSX from 'xlsx';

export class ExcelReader {

    static load(filePath, testCaseId) {

        const workbook = XLSX.readFile(filePath);

        const sheetName = workbook.SheetNames[0];

        const rows = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName],
            {
                defval: ''
            }
        );

        const row = rows.find(
            r => String(r.testCaseId).trim() === testCaseId
        );

        if (!row) {
            throw new Error(
                `Test Case '${testCaseId}' not found in ${filePath}`
            );
        }

        return this.buildNestedObject(row);
    }

    static buildNestedObject(flatObject) {

        const result = {};

        for (const key in flatObject) {

            if (key === 'testCaseId') {
                continue;
            }

            const path = key.split('.');

            let current = result;

            for (let i = 0; i < path.length; i++) {

                const part = path[i];

                if (i === path.length - 1) {

                    current[part] =
                        this.convertValue(
                            flatObject[key]
                        );

                } else {

                    if (!current[part]) {
                        current[part] = {};
                    }

                    current = current[part];
                }
            }
        }

        return result;
    }

    static convertValue(value) {

        // Excel boolean cells
        if (value === true) return true;
        if (value === false) return false;

        // String booleans
        if (typeof value === 'string') {

            const trimmed =
                value.trim().toUpperCase();

            if (trimmed === 'TRUE') {
                return true;
            }

            if (trimmed === 'FALSE') {
                return false;
            }
        }

        return value;
    }
}
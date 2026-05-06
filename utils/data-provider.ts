import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromCsv(filePath: string): any[] {
        const absolutePath = path.resolve(__dirname, filePath)
        return parse(fs.readFileSync(absolutePath, 'utf8'), { columns: true, skip_empty_lines: true });
    }
}
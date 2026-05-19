import { test as base } from '@playwright/test';
import path from 'path';

export const test = base.extend({
    storageState: async ({ }, use, testInfo) => {
        const workerNumber = testInfo.workerIndex % 3
        const authFile = path.join(__dirname, `../playwright/.auth/user${workerNumber}.json`);
        await use(authFile);
    },
});

export { expect } from '@playwright/test';
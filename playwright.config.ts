import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,   //30000 ms(30 secs)
  testDir: './tests',
  fullyParallel: true,

  workers: 2,

  reporter: [
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ['geolocation']
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
});

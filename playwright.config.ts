import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
  },
  webServer: {
    command: 'npm run start',
    port: 3000,
  },
  globalSetup: './msw/globalSetup.ts', // Added for MSW setup
  globalTeardown: './msw/globalTeardown.ts', // Added for MSW teardown
};

export default config;
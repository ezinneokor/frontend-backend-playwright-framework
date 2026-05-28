// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: 'html',
  retries: 1,

  use: {
    // default frontend base
    baseURL: 'http://example.com/',

    screenshot: 'only-on-failure',
    headless: true,
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    // 🌐 FRONTEND ONLY (browsers)
    {
      name: 'chrome',
      testMatch: /.*frontend.*\.spec\.js/,
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      testMatch: /.*frontend.*\.spec\.js/,
      use: { browserName: 'firefox' }
    },
    {
      name: 'edge',
      testMatch: /.*frontend.*\.spec\.js/,
      use: { browserName: 'chromium', channel: 'msedge' }
    },
    {
      name: 'safari',
      testMatch: /.*frontend.*\.spec\.js/,
      use: { browserName: 'webkit' }
    },

    // 🔌 API ONLY (NO browser)
    {
      name: 'api',
      testMatch: /.*api.*\.spec\.js/,
      use: {
        baseURL: 'https://dummy.restapiexample.com'
      }
    }
    
  ],
});
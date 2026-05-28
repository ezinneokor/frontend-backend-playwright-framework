# QA Analyst Playwright Test Suite

## 📌 Project Overview

This project is an automated QA testing framework built using Playwright (JavaScript).

It demonstrates both:
- Frontend UI automation testing
- Backend API automation testing

The framework is designed to show understanding of:
- Smoke Testing
- Regression Testing
- Negative Testing
- API validation
- Page Object Model (POM)
- Test organization and maintainability

##  Tools & Technologies

- Playwright Test Runner
- JavaScript (Node.js)
- Page Object Model (POM)
- Playwright APIRequest context
- npm scripts for test filtering

##  Project Structure
pages/
HomePage.js
ExampleDomainsPage.js

tests/
frontend tests (UI)
api tests (backend)

playwright.config.js
package.json

##  FRONTEND TESTS

###  Home Page Tests

####  Smoke Test
Validates that the homepage loads correctly and title is displayed.

test('@smoke Assert homepage title', async () => {
    await expect(home.heading).toHaveText('Example Domain');
});
#### Regression Test
Ensures important UI content remains correct.
test('@regression Assert paragraph', async () => {
    await expect(home.paragraph).toContainText('This domain');
});
####     Navigation Test to check the concept of Integration Testing
##### Smoke Test
Validates navigation from Example Domain page to IANA page.
test('@smoke Assert Page Loads Successfully', async ({ page }) => {
    await expect(page).toHaveURL(/iana.org\/help\/example-domains/);
});

## API TESTS (Dummy REST API)
Base URL:
https://dummy.restapiexample.com
Smoke Test

Checks API availability and validates employee endpoint response.
test('@smoke GET employees - should return 200', async ({ request }) => {
    const response = await request.get('/api/v1/employees');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.status).toBe('success');
    expect(body.data.length).toBeGreaterThan(0);
});
#### Regression Test

Validates API response structure for a single employee.
test('@regression GET single employee - should return valid schema', async ({ request }) => {
    const response = await request.get('/api/v1/employee/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data).toHaveProperty('id');
    expect(body.data).toHaveProperty('employee_name');
    expect(body.data).toHaveProperty('employee_salary');
});
#### Negative Test

Ensures API handles invalid endpoint correctly.
test('@negative Invalid endpoint should return error', async ({ request }) => {
    const response = await request.get('/api/v1/invalid');

    expect(response.status()).toBeGreaterThanOrEqual(400);
});
#### Known Issue / Limitation (IMPORTANT)
Public API Instability

This project uses a public API:
https://dummy.restapiexample.com
This API is NOT stable and has limitations:

 Rate limiting is enforced
 Requests may return 429 (Too Many Requests)
 Occasional 5xx server errors
## Impact on Tests

Some tests may fail intermittently, especially:
test('@regression GET single employee - should return valid schema', ...)
Example failure:
Expected: 200
Received: 429
### Why this happens

This is NOT a defect in the automation code.

It happens because:

The API is public and shared globally
Multiple requests trigger rate limits
No guaranteed test environment stability
### QA Interpretation

This is classified as:
Environment issue
External dependency failure
Not a test failure in logic
### Real-world Fix (Not implemented due to scope)

In real QA environments, this would be solved by:

Mocking API responses
Using staging/test environments
Adding retry/backoff logic
Contract testing
## How to Run the Project
Install dependencies
npm install
Run all tests
npx playwright test
Run Smoke tests
npm run smoke
Run Regression tests
npm run regression
### Test Coverage Summary
Type	Area	Description
Smoke	UI + API	Basic system health checks
Regression	UI + API	Ensures existing functionality works
Negative	API	Validates error handling
## Key Skills Demonstrated
Playwright automation framework
Page Object Model (POM)
API testing (GET requests, validation)
Smoke vs Regression test design
Negative testing strategy
Handling unstable external APIs
Clean test organization
## Future Improvements
Add API mocking layer
Improve retry strategy for flaky APIs
Add CI/CD pipeline (GitHub Actions)
Add performance testing
Add reporting dashboards
# Author
### Ezinne Bassey Okor

QA Automation Framework built using Playwright (JavaScript)



const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {

    //Checking if api is available
    test('@smoke GET employees - should return 200', async ({ request }) => {
        const response = await request.get('/api/v1/employees');

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.status).toBe('success');
        expect(body.data.length).toBeGreaterThan(0);
    });

    // Assert correct api schema
    test('@regression GET single employee - should return valid schema', async ({ request }) => {
        const response = await request.get('/api/v1/employee/1');

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.data).toHaveProperty('id');
        expect(body.data).toHaveProperty('employee_name');
        expect(body.data).toHaveProperty('employee_salary');
    });

        //NEGATIVE TEST -invalid endpoint handling
    test('@negative Invalid endpoint should return error', async ({ request }) => {
        const response = await request.get('/api/v1/invalid');

        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

});
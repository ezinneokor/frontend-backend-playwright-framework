const{test,expect} = require('@playwright/test');
const{HomePage}  = require('../pages/HomePage')



test.describe('positive testcases', async()=>{
    /**@type {import('../pages/HomePage').HomePage} */
    let home;

    test.beforeEach(async ({page})=>{
        home = new HomePage(page);
        await home.goto();

    })

    //Assert Page Loads
    test('@smoke Assert homepage title', async()=>{
        await expect(home.heading).toHaveText('Example Domain')
    })

    //Assert Text is visible
    test('@regression Assert paragraph', async()=>{
        await expect(home.paragraph).toContainText('This domain')
    })



})
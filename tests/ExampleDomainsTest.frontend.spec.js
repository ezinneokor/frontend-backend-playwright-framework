const{test,expect}= require('@playwright/test')
const{HomePage} = require('../pages/HomePage')
const{ExampleDomainsPage}= require('../pages/ExampleDomainsPage')

test.describe('Navigate to example domains page', async()=>{
    /**@type {import('../pages/HomePage').HomePage} */
    let home;

    /**@type {import('../pages/ExampleDomainsPage').ExampleDomainsPage} */
    let exampleDomainsPage;

    test.beforeEach(async({page})=>{
        home = new HomePage(page);
        exampleDomainsPage = new ExampleDomainsPage(page);
        home.goto()
        home.gotoExampleDomains()
    })

    //Assert page Loads 
    test('@smoke Assert Page Loads Successfully', async({page})=>{
        await expect(page).toHaveURL(/iana.org\/help\/example-domains/)

    })

})
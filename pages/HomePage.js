class HomePage{
    /**
     * @param {import('@playwright/test').Page}page
     */

    constructor (page){
        this.page=page;
        this.heading = this.page.getByRole('heading', {h1:"Example Domain"})
        this.paragraph=this.page.locator('p', {hasText:'This domain is for use in documentation examples'});
        this.learnMoreLink=this.page.getByRole('link',{name:"Learn more"})

    }
    //This will launch the application
    async goto(){
        await this.page.goto('/')
    }

    //This Navigates to Example Domain page To Test For Integration
    async gotoExampleDomains(){
        await this.learnMoreLink.click();
    }
}
module.exports= {HomePage};
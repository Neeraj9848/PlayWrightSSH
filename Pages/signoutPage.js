//const { expect } = require("allure-playwright");
const{test,expect} = require('@playwright/test')
class Signout
{
    constructor(page)
    {
        this.page = page;
        this.cart= '//button[@class="cartBtn"]'; // how to add by getBYText
        this.menu = '//img[@alt="menu"]';
        this.signout ='//button[@class="nav-menu-item"]'
    }

    async validateSignIn(){
         await this.page.waitForSelector(this.cart, { state: 'visible' });
      await expect(this.page.locator(this.cart)).toBeVisible();
    }

    async signoutfun(){
        await this.page.click(this.menu);
        await this.page.click(this.signout);
    }
}

module.exports= Signout;
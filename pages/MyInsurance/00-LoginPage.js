const { expect } = require('@playwright/test');
const { findSourceMap } = require('module');
exports.LoginPage = class LoginPage{
    
    constructor (page){
        this.page = page;
        this.username_txtbox = page.getByPlaceholder('Enter your username').last();
        this.password_txtbox = page.getByPlaceholder('Enter your password').last();
        this.loginbutton = page.getByRole('button', { name: 'Sign In' });
        this.invalidlogintext = page.getByText('Invalid credentials. Please check your username and password.');
    }

    async enterUserName(username){
        await this.page.waitForTimeout(1000);
        await this.username_txtbox.type(username);

    }

    async enterPassword(password){
        await this.page.waitForTimeout(1000);
        await this.password_txtbox.type(password);
    }

    async clickLoginButton(){
        await this.loginbutton.click({force:true});
    }

    async openapplication(){
        //https://loga-qa-automation.netlify.app/ - comes from base url
        await this.page.goto('/');
    }
    async login(username,password,testInfo){

        await this.enterUserName(username);

        await this.enterPassword(password);

        // Optional Screenshot capture attaching 
        if (testInfo) {
        const screenshot = await this.page.screenshot({ fullPage: true });
        await testInfo.attach('Login Page Screenshot', {
            body: screenshot,
            contentType: 'image/png'
        });
        }
        await this.clickLoginButton();
    }

    async validateinvalidlogin(){
        await expect(this.invalidlogintext).toBeVisible();
        await this.page.waitForTimeout(3000);
    }
}
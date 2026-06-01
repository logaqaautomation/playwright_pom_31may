const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage{
    
    constructor (page){
        this.page = page;
        this.makeappointmentbutton = page.getByText('Make Appointment');
        this.username_txtbox = page.getByPlaceholder('Username').last();
        this.password_txtbox = page.getByPlaceholder('Password').last();
        this.loginbutton = page.getByRole('button', { name: 'Login' });
        this.invalidlogintext = page.getByText('Login failed! Please ensure');
    }

    async clickMakeAppointment(){
        await this.makeappointmentbutton.click();
    }

    async enterUserName(username){
        await this.username_txtbox.fill(username);

    }

    async enterPassword(password){
        await this.password_txtbox.fill(password);
    }

    async clickLoginButton(){
        await this.loginbutton.click();
    }

    async openapplication(){
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/');
    }
    async login(username,password){
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async validateinvalidlogin(){
        await expect(this.invalidlogintext).toBeVisible();
        await this.page.waitForTimeout(3000);
    }
}
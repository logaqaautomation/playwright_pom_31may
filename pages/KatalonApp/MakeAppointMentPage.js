const { expect } = require('@playwright/test');
exports.MakeAppointmentPage = class MakeAppointmentPage{
    constructor (page){
        this.page = page;
        this.MakeAppointmentHeading = page.getByRole('heading', { name: 'Make Appointment' }); 
    }

    async verifyMakeAppointmentHeading(){
        await expect(this.MakeAppointmentHeading).toBeVisible();
        await this.page.waitForTimeout(3000);
    }
}
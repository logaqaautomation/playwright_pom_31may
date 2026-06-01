const { expect } = require('@playwright/test');
exports.MakeAppointmentPage = class MakeAppointmentPage{
    constructor (page){
        this.page = page;
        this.MakeAppointmentHeading = page.getByRole('heading', { name: 'Make Appointment' }); 
        this.facility_selectbox = page.getByLabel('Facility');
        this.hospitalReadmission_check = page.getByRole('checkbox', { name: 'Apply for hospital readmission' });
        this.visitdate_input = page.getByRole('textbox', { name: 'Visit Date (Required)' });
        this.comment_input = page.getByRole('textbox', { name: 'Comment' });
        this.bookappointment_button = page.getByRole('button', { name: 'Book Appointment' });
        this.appointmentconfirmation_heading = page.getByRole('heading', { name: 'Appointment Confirmation' });
    }

    async verifyMakeAppointmentHeading(){
        await expect(this.MakeAppointmentHeading).toBeVisible();
        await this.page.waitForTimeout(3000);
    }

    async scheduleappointment(facilty,visitdate,comment){
        await this.facility_selectbox.selectOption(facilty);
        await this.hospitalReadmission_check.check();
        await this.visitdate_input.pressSequentially(visitdate);
        await this.visitdate_input.press('Tab');
        await this.comment_input.fill(comment);
        await this.bookappointment_button.click();
        await expect(this.appointmentconfirmation_heading).toBeVisible();
        await this.page.waitForTimeout(3000);
    }

}
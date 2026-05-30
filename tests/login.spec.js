import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/KatalonApp/LoginPage'
import {MakeAppointmentPage} from '../pages/KatalonApp/MakeAppointMentPage'

test('login',async({page})=>{
    //tricentis insurance application for test - https://sampleapp.tricentis.com/101/
    //accelq application - https://qbank.accelq.com/

    const Login = new LoginPage(page);
    await Login.openapplication();
    await Login.clickMakeAppointment();
    await Login.login('John Doe','ThisIsNotAPassword');

    const MakeAppointment = new MakeAppointmentPage(page);
    await MakeAppointment.verifyMakeAppointmentHeading();
});
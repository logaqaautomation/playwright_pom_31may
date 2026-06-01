import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/KatalonApp/LoginPage'
import {MakeAppointmentPage} from '../pages/KatalonApp/MakeAppointMentPage'

//test.describe.configure({mode:"serial"});
test('validlogin',async({page})=>{
    //tricentis insurance application for test - https://sampleapp.tricentis.com/101/
    //accelq application - https://qbank.accelq.com/
    //health care appointment - https://katalon-demo-cura.herokuapp.com/

    const Login = new LoginPage(page);
    await Login.openapplication();
    await Login.clickMakeAppointment();
    await Login.login('John Doe','ThisIsNotAPassword');

    const MakeAppointment = new MakeAppointmentPage(page);
    await MakeAppointment.verifyMakeAppointmentHeading();
    
});


test('Invalidlogin',async({page})=>{
    //tricentis insurance application for test - https://sampleapp.tricentis.com/101/
    //accelq application - https://qbank.accelq.com/
    //health care appointment - https://katalon-demo-cura.herokuapp.com/

    const Login = new LoginPage(page);
    await Login.openapplication();
    await Login.clickMakeAppointment();
    await Login.login('John Doe','invalid password');
    await Login.validateinvalidlogin();
    
});

test('bookappointment',async({page})=>{
    //tricentis insurance application for test - https://sampleapp.tricentis.com/101/
    //accelq application - https://qbank.accelq.com/
    //health care appointment - https://katalon-demo-cura.herokuapp.com/

    const Login = new LoginPage(page);
    await Login.openapplication();
    await Login.clickMakeAppointment();
    await Login.login('John Doe','ThisIsNotAPassword');

    const MakeAppointment = new MakeAppointmentPage(page);
    await MakeAppointment.verifyMakeAppointmentHeading();

    await MakeAppointment.scheduleappointment('Hongkong CURA Healthcare Center',
        '15/06/2026',
        'Eye Checkup');
    
});
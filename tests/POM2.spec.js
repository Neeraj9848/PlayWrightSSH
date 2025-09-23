const {test,expect} = require('@playwright/test');
const Login = require('../Pages/loginPage');
const SignOut = require('../Pages/signoutPage');

test('Using POM Login and Do Sign out', async ({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
const loginPage = new Login(page);
await loginPage.loginToApplication(process.env.TEST_USER, process.env.TEST_PASS);

//validate SignIn 

      const signoutpage=   new SignOut(page);

       await  signoutpage.validateSignIn();

       await  signoutpage.signoutfun();

    // validat Signout
     await    loginPage.validateSignout();


})
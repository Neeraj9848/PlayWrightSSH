const {test,expect} = require('@playwright/test');
const Login = require('../Pages/loginPage');

// What is POM (Page Object Model)?

// Design Pattern for test automation
// Each page of your application is represented by a class.
// The class contains:

// Locators → to identify elements on the page.
// Methods → to interact with those elements.
// Your test file doesn’t directly use locators. Instead, it uses methods of the page class.

// This gives:

// Code reusability → Same page methods can be reused across multiple tests.
// Easy maintenance → If locator changes, update in one place (the page class), not in all tests.
// Better readability → Tests look clean and business-focused.

test('Login to Application using POM', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const loginpage = new Login(page);

  // pass email & password from test
  await loginpage.loginToApplication(process.env.TEST_USER, process.env.TEST_PASS);


  // example assertion - change to actual expected URL or element
  await expect(page).toHaveURL(/automation|home|profile/);
});

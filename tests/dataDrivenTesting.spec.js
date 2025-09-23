const{test,expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../logintestData.json')));

test.describe("Making login multiple times with diff cred", ()=>{

    for( const data of testData){
        test(`Login Application ${data.id}`, async ({page})=>{
            await page.goto("https://freelance-learn-automation.vercel.app/login");

            await page.getByPlaceholder("Enter Email").fill(data.mailid);
            await page.locator('//input[@name="password1"]').fill(data.password);

        })
    }


    // allure-playwright is one of the dataShown module like html, we can configure in 2 ways by cli or configure in package.json

    // npx playwright test-->   runs tests and stores raw-data in allure-/results
    // allure generate allure-results -o allure-report --clean--> convert rawData into HTML report(allure-report/)
    // allure open allure-report --> starts small srver and open generated html report on browser


    // instead of running all commands everytime add scripts in package-json and run 

//     "scripts": {
//   "test:allure": "playwright test && allure generate allure-results -o allure-report --clean && allure open allure-report"
//     }

//     npm run test:allure



})
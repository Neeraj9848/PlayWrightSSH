const{test,expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../testData.json')));

test("read testData from JSON", async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page .locator('//input[@type="email"]').fill(testData.mailId);
    await page.locator('//input[@type="password"]').fill(testData.password);

    await page.waitForLoadState('networkidle');
    await page.locator('//a[@class="subLink"]').click();


    await page.getByPlaceholder('Name').fill(testData.details.name);

    await page.locator('//input[@id="email"]').fill(testData.intrests[0]);

    await page.pause();
    
})
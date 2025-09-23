const{test,expect} = require('@playwright/test');

test('How to switch to otherTab', async({browser})=>{
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://freelance-learn-automation.vercel.app/login");

   const [newpage] = await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator('(//a[contains(@href,"facebook")])[1]').click()
        ]
     )

     await newpage.waitForTimeout(3000);
     await newpage.locator('(//input[@name="email"])[2]').fill("neerajtest@gmail.com");
    await newpage.close();
     await page.waitForTimeout(3000);
     await page.locator('//input[@type="email"]').fill("test!@#gmail.com");
})
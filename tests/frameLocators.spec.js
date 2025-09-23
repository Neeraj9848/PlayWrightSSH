const {test,expect} = require('@playwright/test');

test("Handling IFrames", async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    // goTo iframe
    const iframe = await page.frameLocator('//frame[@name="packageListFrame"]');
    // locate required element in that iframe
    await iframe.locator('//a[text()="java.awt.color"]').click();
   await page.pause();
})
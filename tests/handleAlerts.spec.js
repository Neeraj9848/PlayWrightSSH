const { test, expect } = require('@playwright/test');

test('Handling Alerts', async ({ page }) => {
	await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForSelector('//button[text()="Click for JS Alert"]');
    page.on('dialog', async(d)=>{
       expect(d.type()).toContain("alert");
       expect(d.message()).toContain("I am a JS Alert");
        console.log(d.type());
        d.accept();
    })

    await  page.locator('//button[text()="Click for JS Alert"]').click();
});

test('Handle Confirm', async({page})=>{
     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForSelector('//button[text()="Click for JS Alert"]');
    //Add event listner to perform an action
    page.on('dialog',(dialogEvent)=>{
        console.log(dialogEvent.type());
        expect(dialogEvent.message()).toBe("I am a JS Confirm");
        dialogEvent.dismiss();
     
    })
  await page.waitForTimeout(3000);
    await page.locator('//button[text()="Click for JS Confirm"]').click();
    await page.waitForTimeout(3000);
})

test("Handle Prompt", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForSelector('//button[text()="Click for JS Alert"]');

    //Add event listner so respective action will takes place
    page.on("dialog",(dialogvent)=>{
        console.log(dialogvent.type());
        expect(dialogvent.type()).toContain("prompt");
        expect(dialogvent.message()).toContain("I am a JS prompt");
        dialogvent.accept("Hanuman");

    })

    await page.locator("//button[text()='Click for JS Prompt']").click();
    await page.waitForTimeout(5000);
})



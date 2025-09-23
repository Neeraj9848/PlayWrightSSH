const {test,expect} = require('@playwright/test');

test('keyBoard Activites', async({page})=>{
    //Pressing single key
    // await page.goto('https://www.google.com/');
    // await page.locator('textarea[title="Search"]').fill('testUser');
    // await page.keyboard.press('Enter');

    //Pressing Multiple keys
    await page.goto('https://www.google.com/');
    await page.click('textarea[title="Search"]');
    await page.keyboard.type('Bandaru Neeraj Kumar',{delay:800});

    await page.keyboard.down('Shift');
    for(let i=0;i<'Kumar'.length;i++){
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(1000);
    }
    await page.keyboard.press('Backspace');
    
     await page.keyboard.up('Shift');

     await page.keyboard.press('Enter');
     


})
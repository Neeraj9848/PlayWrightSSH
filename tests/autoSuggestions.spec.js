const {test,expect} = require('@playwright/test');

test('Select 2nd element in AUtoSuggetion', async({page})=>{

    await page.goto("https://www.google.com/");
    await page.locator("textarea[name='q']").fill("Playwright Automation");
    await page.waitForSelector("li[role='presentation']");
    await page.waitForTimeout(3000);
    for(let i=0;i<2;i++){
      await page.keyboard.press("ArrowDown");
      await page.waitForTimeout(1000);
    }
    await page.waitForTimeout(3000);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    
})

test('select specifix elemenetfrom autosuggestions', async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("textarea[name='q']").fill("Playwright Automation");
    await page.waitForSelector("li[role='presentation']");

    const allEle = await page.$$("li[role='presentation']");
    await page.waitForTimeout(2000);
    for(let i=0;i<allEle.length;i++){
        let text = await allEle[i].textContent();
        if(text.includes('tool')){
            await allEle[i].click();
            await page.waitForTimeout(1000);
            break;
        }
    }
})
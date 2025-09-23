const {test,expect} = require('@playwright/test');

test.use({viewport:{width:800,height:800}})
test('Handling ErrorMessage',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const width = await page.viewportSize().width;
    const height = await page.viewportSize().height;

    console.log("Width of viewport is:",width);
    console.log("Height of viewport is:",height);

    await page.locator("input[name='username']").fill('Admin');
    await page.locator("//input[contains(@class,'oxd-input oxd-input--active')]").fill('ad123');
    await page.getByRole('button',{name:'Login'}).click();

    await page.waitForTimeout(5000);

    const errormsg = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
   
    console.log("Error message is:"+errormsg);

    expect(errormsg==="Invalid credentials").toBeTruthy();

    expect(errormsg.includes('Invalid')).toBeTruthy();
})
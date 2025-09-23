const{test,expect} = require('@playwright/test');

test('Wait to Finish networkCalls', async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByText("New user? Signup").click();

    await page.waitForLoadState("networkidle");
    
    // add validations on no of checkBoxes
  const numberOfCheckBoxes =  await page.locator("//input[@type='checkbox']").count();

  expect(numberOfCheckBoxes).toBe(8);
})
const {expect,test}= require('@playwright/test');

test('GoogleFile',async ({page})=>{
    await page.goto('https://google.com');
    const url = await page.url();
    const title = await page.title();
    console.log("Title is:"+title);
    console.log("URL is:"+url);
    await expect(page).toHaveTitle(title);
  //  await expect(url).toHaveURL(/google\.com/);
  expect(url).toContain('https://www.google.com/?');
   
})
const {expect,test} = require('@playwright/test');

test('LOgin',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').type('Admin',{delay:300});
    await page.locator('input[type="password"]').fill('admin123');  //7900902822
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(5000);

await expect(page).toHaveURL(/dashboard/);
    await page.waitForTimeout(5000);

    await page.getByAltText('profile picture').first().click();
    await page.getByText('Logout').click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/auth/);

    // 1. npx playwright test loctaion --headed --retries=3 will run failled testCases upto 3 times
})
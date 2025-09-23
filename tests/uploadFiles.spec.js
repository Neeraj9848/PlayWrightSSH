const{test,expect} = require('@playwright/test');
const path = require('path');
test('uploading File',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    console.log(__dirname);
    const filePath = path.join(__dirname, '../uploads/download.jpeg');
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.locator('#file-submit').click();
    await expect( page.locator('h3')).toHaveText('File Uploaded!');

})
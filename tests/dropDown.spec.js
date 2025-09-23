const {test,expect} = require('@playwright/test');

test('Select values from list-single item', async ({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/signup');
// selecting in dropDown based on label// label means a visiable text
// prefarence order 1.label 2.value 3.index
await page.locator('#state').selectOption({label:"Goa"});
await page.waitForTimeout(3000);

// select dropDown by value
await page.locator('#state').selectOption({value:"Assam"});
await page.waitForTimeout(3000);

// selct dropDown by index
await page.locator('#state').selectOption({index:4});
await page.waitForTimeout(3000);

// check weather kerala is presnet or not in dropdown
// 1st way
const listOptions = await page.locator('#state').textContent();
console.log("DropDown elements are:"+listOptions);

// 2nd way-using loops in playwright
let state = await page.$('#state');
console.log(`The dropdown element is: ${state}`);
// Get all option elements inside the dropdown
let allElements = await page.$$('#state option');
console.log(`Total states are ${allElements.length} and they are below:`);
// Loop through each option and print text
for (let i = 0; i < allElements.length; i++) {
    let text = await allElements[i].innerText();
    console.log(text);
}

// add assertion is the city prsent or not 
await expect(listOptions.includes('Kerala')).toBeTruthy();

})

test('check mentioned city present or not', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  await page.waitForSelector('#state');

  const state = await page.$('#state');
  const listopt = await state.$$('option');   // array of ElementHandles
  const count = listopt.length;
  console.log("Total Count is: " + count);

  let ans = false;

  for (let i = 0; i < count; i++) {
    const optionText = await listopt[i].innerText();   // ✅ use listopt[i], not count[i]
    console.log("Dropdown city: " + optionText);

    if (optionText.toLowerCase() === 'kerala') {
      ans = true;
      break;
    }
  }

   expect(ans).toBeTruthy(); // enable when needed
});

test('select multiple options', async({page})=>{
 await page.goto('https://freelance-learn-automation.vercel.app/signup');

 await page.locator('#hobbies').selectOption([{index:0},{index:1},{label:"Singing"}]);
 await page.waitForTimeout(5000);
})
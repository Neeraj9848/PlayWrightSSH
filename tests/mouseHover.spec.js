const {test,expect} = require('@playwright/test');

test('Testing Hover Functionality', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/hovers");
// Get total number of users
// Global figure locator → contains all 3 users
const users = page.locator('.figure');  

const count = await users.count();

for (let i = 0; i < count; i++) {
  const currentUser = users.nth(i);

  const name = await currentUser.locator('h5').textContent();
  const profileLink = await currentUser.locator('a').getAttribute('href');

  console.log(`User ${i + 1}: ${name}, Profile → ${profileLink}`);
}


})

test('Read From Global Objects', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const globalUser = await page.locator('.figure');

    const totalUsers = await globalUser.count();
    console.log("Total figures are:"+ totalUsers);

    for(let i=0;i<totalUsers;i++){
       const currentUser =globalUser.nth(i);
       const username = await currentUser.locator('h5').innerText();
       console.log(`This is the ${i+1} user and name is:`+username);
    }
})
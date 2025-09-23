const { test, expect } = require('@playwright/test');

test('All Playwright Locators Example', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/sample.html');  // Use correct local file path

    // 1️⃣ Role Locator
    await page.getByRole('button', { name: 'Submit Form' }).click();

    // 2️⃣ Label Locator
    await page.getByLabel('Username').fill('neeraj');
    await page.getByLabel('Password').fill('mypass');

    // 3️⃣ Placeholder Locator
    await page.getByPlaceholder('Search here...').fill('Playwright');

    // 4️⃣ Text Locator
    const clickEle = page.locator('text=Claim Offer');
    clickEle.screenshot({path: 'Screenshots/img1.png'});
    clickEle.click();

    // 5️⃣ Test ID Locator
    await page.locator('[data-test-id="special-card"]').click();

    // 6️⃣ CSS Selector
    await page.locator('input#username').fill('neeraj_css');

    // 7️⃣ XPath Locator
    await page.locator('//button[contains(text(), "XPath Button")]').click();

    // 8️⃣ Chaining Locator
    const form = page.locator('form#loginForm');
    await form.locator('button[type="submit"]').click();

    // 9️⃣ nth(), first(), last()
    await page.locator('li').first().click();
    await page.locator('li').nth(1).click();
    await page.locator('li').last().click();

    // 🔟 hasText()
    await page.locator('div.card').filter({ hasText: 'Special Offer' }).click();

    // 1️⃣1️⃣ Combining Locator
    await page.locator('div.card >> text=Claim Offer').click();

    // 1️⃣2️⃣ State Filter
    const disabledInput = await page.locator('input:disabled').count();
    console.log('Disabled input found:', disabledInput);
});

// Pages/loginPage.js
const{test,expect} = require('@playwright/test')

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#email1'; // css selector
    // prefer CSS or Playwright locators instead of raw xpath
    this.password = 'input[placeholder="Enter Password"]';
    this.loginButton = 'button:has-text("Sign in")';
    this.viewText = '//h1[text()="Learn Automation Courses"]';
  }

  async enterUsername(username) {
    await this.page.waitForSelector(this.username, { state: 'visible' });
    await this.page.fill(this.username, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.password, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async validateSignout(){
     await expect(this.page.locator(this.viewText)).toBeVisible();
  }

  // Parameterized method — accepts values from the test
  async loginToApplication(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    await this.page.waitForLoadState('networkidle');
    // remove page.pause() in CI; keep only for local debugging
  }
}

module.exports = LoginPage;

import test from "@playwright/test";

test ('using css locator', async({page})=>{
//lauch url
await page.goto('https://www.saucedemo.com/')
await page.locator('input#user-name').fill('locked_out_user')
await page.locator('input.input_error.form_input').nth(1).fill('secret_sauce')
await page.locator("input[type='submit']").first().click()

// await page.locator('input[name="user-name"]').fill('standard_user');
// await page.locator('input[name="password"]').fill('secret_sauce');
// await page.locator('input[type="submit"]').click();

// await page.locator('#user-name').fill('standard_user');
// await page.locator('#password').fill('secret_sauce');
// await page.locator('#login-button').click();

})
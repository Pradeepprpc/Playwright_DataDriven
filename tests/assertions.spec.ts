import test, {expect} from "@playwright/test";

test('asserions', async({page})=>{
    //launch url
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(3000)
    //assert login shop text is visible
    await expect(page.getByRole('heading',{name:'Login - Shop'})).toBeVisible()
     await page.locator('input#email').fill('admin@admin.com')
     //assert that text box have value
     await expect(page.getByRole('textbox',{name:'Email'})).toHaveValue('admin@admin.com')
     //capture email from textbox
     const emailid =  await page.locator('input#email').inputValue()
     console.log(emailid)
    await page.locator('input.form-control').nth(1).fill('admin123')
    //assert that password text box have value
    await expect(page.getByRole('textbox',{name:'Password'})).toHaveValue('admin123')
    //capture password from textbox
    const password =await page.locator('input.form-control').nth(1).inputValue()
    console.log(password)
    await page.locator("button[type='submit']").first().click()
    await expect(page.getByRole('heading',{name:'SHOPPING CART'})).toContainText(/SHOPPING/)
     await page.waitForTimeout(3000)
  
})

// Swag Labs - Testing

test('Swag Labs', async({page})=>{
    // launch url
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com')
    await expect(page.getByText('Swag Labs', { exact: true })).toBeVisible()
    await page.locator('input#user-name').fill('standard_user')
    const emailid = await page.locator('input#user-name').inputValue()
    console.log(emailid)
    await page.locator('input#password').fill('secret_sauce')
    const password = await page.locator('input#password').inputValue()
    console.log(password)
    await page.locator('input#login-button').click()
    
})

test('Example test', async ({ page }) => {
    console.log('Example test is running');
    await page.goto('https://google.com');
})
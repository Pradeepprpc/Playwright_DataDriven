import test from "@playwright/test";

test('using css locator',async({page})=>{
    //launch url
    await page.goto('https://automationexercise.com/login')
    await page.locator("input[type='text']").fill('Pradeep')
    await page.locator("input[type='email']").nth(1).fill('pradeep.prpc@gmail.com')
    await page.locator("button[type='submit']").nth(1).click()    
})
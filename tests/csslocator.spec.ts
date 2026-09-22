import test from "@playwright/test";

test('Using css Locator',async({page})=>{
    //launch url
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(3000)
     await page.locator('input#email').fill('admin@admin.com')
    await page.locator('input.form-control').nth(1).fill('admin123')
    await page.locator("button[type='submit']").first().click()
     await page.waitForTimeout(3000)
     
})

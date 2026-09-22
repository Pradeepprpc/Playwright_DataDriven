import test from "@playwright/test";
test('handling Enviromentfile',async({page})=>{
    await page.goto(process.env.BASE_URL!)
    await page.locator('#txtUsername').fill(process.env.BASE_USER!)
    await page.locator('#txtPassword').fill(process.env.BASE_PASS!)
    await page.locator('#btnLogin').click()

})
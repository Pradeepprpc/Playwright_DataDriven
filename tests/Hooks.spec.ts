import test from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto(process.env.BASE_URL!)
    await page.locator('#txtUsername').fill(process.env.BASE_USER!)
    await page.locator('#txtPassword').fill(process.env.BASE_PASS!)
    await page.locator('#btnLogin').click()
    console.log('-------BeforeEach---------------')
})
test('click on Admin link', async({page})=>{
    await page.locator('#menu_admin_viewAdminModule').click()
    console.log('Executing Admin Test')
})
test('click on PIM link', async({page})=>{
    await page.locator('#menu_pim_viewPimModule').click()
    console.log('Executing PIM Test')
})
// test.skip('click on Leave link', async({page})=>{
//     await page.locator('#menu_leave_viewLeaveModule').click()
//     console.log('Executing Leave Test')
// })
test.afterEach(async({page})=>{
    await page.locator('#welcome').click()
    await page.getByText('Logout',{exact:true}).click()
    console.log('--------AfterEach-----------')
})




import test from "@playwright/test";

test.beforeEach(async({page})=>{
  await page.goto(process.env.BASE_URL1!)  
  await page.locator('[placeholder="Email ID"]').fill(process.env.BASE_USER1!)
  await page.locator('[placeholder="Password"]').fill(process.env.BASE_PASS1!)
  await page.getByRole('button', { name: 'Sign In' }).click();
  console.log('-------BeforeEach111---------------')

})
test('Fight details', async({page})=>{
    await page.getByRole('textbox', { name: 'Select Date' }).click();
    console.log('---------date------')
})
test.afterEach(async({page})=>{
    await page.locator('.fa.fa-gear').click();
    await page.locator('.fa.fa-lock').click();
    console.log('-------AfterEach---------------')
})
import test from "@playwright/test";

test('print all label names', async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    //return all labels from register page
    const all_Labels = await page.locator('form#registerForm>div>label').allTextContents()
    console.log(all_Labels)
})
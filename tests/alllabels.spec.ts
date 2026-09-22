import test from "@playwright/test";

test('return all labels', async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    const all_Labels = await page.locator('form#registerForm>div>label').allTextContents()
    console.log(all_Labels)
})

test('return labels', async({page})=>{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    const login_Labels = await page.locator('form#login>div>label').allTextContents()
    console.log(login_Labels)
})

test('david jones', async({page})=>{
    await page.goto('https://www.davidjones.com/login?action=register')
    const all_DJ = await page.locator('form.RegisterForm-module__7Hybva__form>div label').allTextContents()
    console.log(all_DJ)
})
import test from "@playwright/test";
test('Built in locator test',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(3000)
    await page.getByRole('textbox',{name:'First Name'}).fill('Selenium')
    await page.getByRole('textbox',{name:'Last Name'}).fill('playwright')
    await page.getByRole('textbox',{name:'Enter phone number'}).fill('987654')
    await page.getByRole('combobox').selectOption('India')
    await page.getByRole('textbox',{name:'Enter email'}).fill('Ameerpet@gmail.com')
    await page.getByRole('textbox',{name:'Password'}).fill('Test!@#4')
    await page.getByText('I agree with the terms and conditions',{exact:true}).click()
    await page.getByText(/Register/i,{exact:true}).last().click()
    await page.waitForTimeout(3000)
})

test('Built in locator test1', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.getByRole('textbox', {name:'username'}).fill('student')
    await page.getByRole('textbox', {name:'password'}).fill('Password123')
    await page.getByText(/submit/i,{exact:true}).first().click()
})

//david jones account register
test('david jones', async({page})=>{
    await page.goto('https://www.davidjones.com/login?action=register')
    await page.getByRole('textbox',{name:'First Name'}).fill('deep')
    await page.getByRole('textbox',{name:'Last Name'}).fill('n')
    await page.getByRole('textbox',{name:'Mobile Number'}).fill('42424242')
    await page.getByRole('textbox',{name:'Email'}).fill('dj@gmail.com')
    await page.getByRole('textbox',{name:'Password'}).fill('djsyd')
    await page.getByText(/Create Account/i,{exact:true}).first().click()
    await page.getByText('Keep me signed in',{exact:true}).click()
})
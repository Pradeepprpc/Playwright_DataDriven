import test from "@playwright/test";

test('Handling css selectors',async({page})=>{
    //launch url
    await page.goto('https://qa-practice.netlify.app/register')
    await  page.waitForTimeout(3000)
    await page.locator('input#firstName').fill('Akhilesh') //id value
    await page.locator('input.form-control').nth(1).fill('PlayWriught') // class 
    await page.locator('div.form-group>#phone').fill('98764') // Traversing from parent to child
    await page.locator("select[id*='dropdown']").selectOption('India') // contains
    await page.locator("input[id^='email']").fill('test@gmail.com') // starts with
    await page.locator("input[class$='control']").last().fill('Test@1234') // ends with
    await page.locator("input.form-check-input").click() // class
    await page.locator("button.btn.btn-primary").click() // class 
     await  page.waitForTimeout(3000)
})
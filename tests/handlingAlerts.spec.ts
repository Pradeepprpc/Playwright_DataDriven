import test, { expect } from "@playwright/test";

// Handling ALERT dialogue

test('Handling alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        //return type of alert
        const alerttype = dialog.type()
        console.log(alerttype)
        //returm dialog message
        const alertmessage = dialog.message()
        console.log(alertmessage)
        await page.waitForTimeout(3000)
        //click ok in dialog
        dialog.accept()

    })
    await page.getByText('Click for JS Alert').click()
    await page.waitForTimeout(3000)
    const webtext = await page.locator('#result').innerText()
    console.log(webtext)
    await expect(page.locator('#result')).toContainText(/You successfully/)

})

// Handling CONFIRM dialogue

test('Handling confirm dialog',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        const alerttype = dialog.type()
        console.log(alerttype)
        const alertmessage = dialog.message()
        console.log(alertmessage)
        await page.waitForTimeout(3000)
        dialog.dismiss()
    })
    await page.getByText('Click for JS Confirm').click()
    const webtext = await page.locator('#result').textContent()
    console.log(webtext)
    await expect(page.locator('#result')).toBeVisible()


})

// Handling PROMPT dialogue

test('Handling propmt dialog',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        const alertytpe = dialog.type()
        console.log(alertytpe)
        const alertmessage = dialog.message()
        console.log(alertmessage)
        await page.waitForTimeout(3000)
        dialog.accept('Welcome toPlaywright')
       

    })
    await page.waitForTimeout(3000)
    await page.getByText('Click for JS Prompt').click()
    const webtext = await page.locator('#result').innerText()
    console.log(webtext)
    await expect(page.locator('#result')).toHaveText(/You entered:/)
})
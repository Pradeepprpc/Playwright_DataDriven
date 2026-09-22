import { test, expect } from "@playwright/test";

test('Action: mouse hover', async({page})=>{
    await page.goto('https://www.davidjones.com/login')
    // mouse hover
    await page.locator('#radix-_R_1l536b9fivb_-trigger-Men').hover()
    //await page.getByText('[href="/men/suits"]').nth(1).click()
    await page.waitForTimeout(2000)
})

//Handling Multiple Mouse Hover

test('Handling Multiple Mouse Hover',async({page})=>{
    await page.goto('https://www.myntra.com/')
     await page.waitForTimeout(3000)
     //mouse hover to mens
     await page.locator('[data-group="men"]').first().hover()
     await page.waitForTimeout(3000)
     await page.getByText('T-Shirts').nth(0).click()
     console.log(await page.title())
     await page.waitForTimeout(3000)
     //mouse hover to kids and toys
     await page.locator('[data-group="kids"]').first().hover()
     await page.waitForTimeout(3000)
     await page.locator('[data-reactid="417"]').click()
     console.log(await page.title())
     await page.waitForTimeout(3000)
})

//script to Double click to element in a web page and handle alert

test('Double click element',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click')
    await page.waitForTimeout(3000)
    //await page.getByText(' Double click me',{exact:true}).dblclick()
    await page.getByText(' Double click me',{exact:true}).click({clickCount:2})
    const webtext = await page.locator('#double-click-result').textContent()
    console.log(webtext)
    await expect (page.locator('#double-click-result')).toContainText(/double clicked!/)
})

//script to handle right click and alert

test('Right click Handling',async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.waitForTimeout(3000)
    await page.getByText('right click me').click({button:'right'})
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(3000)
        dialog.accept()
    })
    await page.getByText('Delete').last().click()
    await page.waitForTimeout(3000)


})

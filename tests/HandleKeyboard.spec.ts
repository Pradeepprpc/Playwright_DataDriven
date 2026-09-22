import test from "@playwright/test";

//script to handle keyboard

test('Handling keyboard using arrow down',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForLoadState()
    //enter some text into textbox using keyboard type or insert text method
    await page.keyboard.insertText('playwright openings ')
    await page.waitForTimeout(2000)
    //press down arrow for five time
    for(let i=1;i<=5;i++)
    {
        await page.waitForTimeout(2000)
        await page.keyboard.press('ArrowDown')
    }
    //press enter key
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
})

// scripts to handle key board up arrow

test('Handling keyboard uparrow',async({page})=>{
    await page.goto('https://gmail.com')
    await page.waitForLoadState()
    await page.getByText('Create account',{exact:true}).click()
    await page.waitForTimeout(2000)
    for(let i=1;i<=3;i++)
    {
        await page.waitForTimeout(2000)
        await page.keyboard.press('ArrowUp')
    }
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
    await page.keyboard.insertText('qedge')
    await page.locator('span.VfPpkd-vQzf8d').first().click()
    await page.waitForLoadState()
    //identify listbox with div tag and click
    await page.locator('#month > div > div.VfPpkd-TkwUic > div').click()
    await page.waitForLoadState()
    await page.locator('ul[aria-label="Month"]>li:nth-child(9)').click()
    await page.locator('#day').fill('20')
    await page.locator('#year').fill('1978')
    await page.waitForLoadState()
     await page.locator('#gender > div > div.VfPpkd-TkwUic > div').click()
     await page.waitForTimeout(2000)
     await page.locator('ul[aria-label="Gender"]>li:nth-child(3)').click()
     await page.waitForTimeout(2000)

})

// scripts to handle auto suggestions

test('Handling auto suggestion',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(3000)
     await page.keyboard.insertText('playwright openings ')
     await page.waitForTimeout(3000)
    const alloptions = page.locator('ul[jsname="bw4e9b"]>li')
    const countOption = await alloptions.allInnerTexts()
    console.log(`No of auto suggestions ${countOption.length}`)
    for (const element of countOption) {
        console.log(element)
        
    }

})
import test from "@playwright/test";

test('Handling multiple windows ', async({page})=>{
    await page.goto('https://login.yahoo.com/account/create?specId=yidregsimplified')

    const links = [
        { index: 0,name: 'Help' },
        { index: 1,name: 'Terms' },
        { index: 2,name: 'Privacy' }
    ]
    for (const link of links) {
        const popupPromise = page.waitForEvent('popup')
        await page.waitForTimeout(2000)
        await page.locator('a[target="_blank"]').nth(link.index).click()
        const newPage = await popupPromise
        await newPage.waitForLoadState()
        console.log(`Opened ${link.name} Window: ${await newPage.title()}`)

        if (link.name === 'Help')
        {
            await newPage.locator('a[data-rapid_p="1"]').first().click()
            await page.waitForTimeout(2000)
            await page.waitForLoadState()
        }
         await page.waitForTimeout(2000)
         await newPage.close()
    }

})
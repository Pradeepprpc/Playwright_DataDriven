import test from "@playwright/test";
// script to select option in listbox - DIV tag
test('Handling non select listbox',async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(2000)
    ///identify listbox with div tag  and click it
    await page.locator('div.css-19bb58m').first().click()
    await page.waitForTimeout(2000)
    await page.locator('#react-select-2-option-1-1').click()
    await page.waitForTimeout(2000)
    await page.locator('div.css-19bb58m').first().click()
    await page.locator('#react-select-2-option-3').click()
    await page.waitForTimeout(2000)

})

//script to select option in multi listbox

test('Handling Multi non select listbox',async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(2000)
    await page.locator('div.css-19bb58m').last().click()
    const count_options = await page.locator("div[role='listbox'] div").count()
    console.log(count_options)
    const allOptionstext = await page.locator("div[role='listbox'] div").allInnerTexts()
    console.log(allOptionstext)
    for(let i=0;i<count_options;i++)
    {
        await page.waitForTimeout(2000)
        await page.locator('#react-select-4-option-'+i).click()
    }
    await page.waitForTimeout(3000)

})
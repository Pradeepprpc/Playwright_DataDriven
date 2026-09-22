import test, { Locator } from "@playwright/test";

test('Handling Multi listbox',async({page})=>{
    await page.goto('file:///C:/Users/Admin/Downloads/MultiListboxHtmlpage_lyst1787670863028.html')
    await page.waitForTimeout(2000)
    //store listbox 
    const Multi_Listbox:Locator = page.locator("[name='multiSelection']")
    //select more than one option using values
    await Multi_Listbox.selectOption(['Red','brown','purple'])
    await page.waitForTimeout(2000)
    //select more than one option using value
    await Multi_Listbox.selectOption([{value:'black'},{value:'blue'}])
    await page.waitForTimeout(2000)
    //select more than one option using label
    await Multi_Listbox.selectOption([{label:'White'},{label:'navy blue'}])
    await page.waitForTimeout(2000)
    //select more than one option using index
    await Multi_Listbox.selectOption([{index:0},{index:4},{index:8}])
    await page.waitForTimeout(2000)
    })

// Script to select one by one option

test('Select all options',async({page})=>{
    await page.goto('file:///C:/Users/Admin/Downloads/MultiListboxHtmlpage_lyst1787670863028.html')
    await page.waitForTimeout(2000)
    const Multi_Listbox:Locator = page.locator("[name='multiSelection']")
    //count no of option in listbox
    const all_options =  Multi_Listbox.locator('option')
    const count_options = await all_options.count()
      for(let i=0;i<count_options;i++)
    {
        await page.waitForTimeout(2000)
        await Multi_Listbox.selectOption({index:i})
    }
    await page.waitForTimeout(2000)

})
//launch url
// get collection of checkboxex
// verify each checkbox status by using check box method
// get each check box name and status
//if check box is checked uncheck it if not checked it

import test, { Locator } from "@playwright/test";

test('verify checkbox', async({page})=>{
    await page.goto('file:///C:/Users/Admin/Downloads/checkbox_1_lyst1788189937287.html')
    // get collection of all checkboxes
    const allcheckboxes = await page.locator("input[type='checkbox']")
    const checkbox_count = await allcheckboxes.count()
    console.log(`No of checkboxes are: ${checkbox_count}`)
    // iterate all check boxex
    for(let i=0;i<checkbox_count;i++)
    {
        //verify each checkbox status
        const eachcheckbox_status:boolean = await allcheckboxes.nth(i).isChecked()
        //get each check box name
        const checkboxname = await allcheckboxes.nth(i).getAttribute('value')
        console.log(`${eachcheckbox_status}::${checkboxname}`)

        if(eachcheckbox_status)
        {
            allcheckboxes.nth(i).uncheck()
        } else{
            allcheckboxes.nth(i).check()
        }
        await page.waitForTimeout(2000)
    }
})
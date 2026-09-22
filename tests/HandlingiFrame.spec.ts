import test, { expect, FrameLocator, Locator } from "@playwright/test";
test('Handling iframes',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    await page.waitForLoadState()
    const allframe =  page.locator('iframe')
    const framecount = await allframe.count()
    console.log(`No of frames are ${framecount}`)
    //first identify iframe and store
    const frame:FrameLocator = page.frameLocator('.demo-frame')
    const source:Locator = frame.locator('#draggable')
    const target:Locator = frame.locator('#droppable')
    //perform drag and drop
    await source.dragTo(target)
    await expect(target).toBeVisible()
    const frametext = await target.textContent()
    console.log(frametext)
    await page.waitForTimeout(5000)
    //click button link in main html page
    await page.getByText('Button',{exact:true}).click({force:true})
    await page.waitForTimeout(5000)
})

//script to count no of checkboxes and radio button inside iframe

test('Handling checkbox and radio button in iframe',async({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/')
    await page.waitForTimeout(2000)
    //store iframe
    const frame = page.frameLocator('.demo-frame')
    //verify check box is checked or uncheked
    const checkbox_status = await frame.locator('[for="checkbox-1"]').isChecked()
    console.log(`Check box status is ${checkbox_status}`)
    //assert check box not to be checked
    await expect(frame.locator('[for="checkbox-1"]')).not.toBeChecked()
    //select checkbox
    await frame.locator('[for="checkbox-1"]').check()
    await page.waitForTimeout(2000)
    //assert check box to be checked
    await expect(frame.locator('[for="checkbox-1"]')).toBeChecked()
    //print no of checkboxes and radio buttons
    const all_options = await frame.locator('.ui-checkboxradio-label.ui-corner-all.ui-button.ui-widget').allInnerTexts()
    console.log(`No of checkboxes and radio buttons ${all_options.length}`)
    for (const element of all_options) {
        console.log(element)
    }
    await page.waitForTimeout(2000)
})

// control group - TEST

test(`handling control group`, async({page})=>{
    await page.goto('https://jqueryui.com/controlgroup/')
    const frame = page.frameLocator('iframe.demo-frame')
    //verify check box is checked or not
    const checkboxstatus = await frame.locator('[for="insurance"]').isChecked()
    console.log(`checkbox status is ${checkboxstatus}`)
    // check box not to be checked
    await expect(frame.locator('[for="insurance"]')).not.toBeChecked()
    //select checkbox
    await frame.locator('[for="insurance"]').check()
    await page.waitForTimeout(2000)
    //assert check box to be checked
    await expect(frame.locator('[for="insurance"]')).toBeChecked()
    //print no of check boxes and radio buttons
    const radiobuttons = await frame.locator('[class="ui-button ui-widget ui-checkboxradio-radio-label ui-checkboxradio-label ui-controlgroup-item"]').allInnerTexts()
    const checkboxes = await frame.locator('[class="ui-button ui-widget ui-checkboxradio-label ui-controlgroup-item"]').allInnerTexts()
    console.log(`No of radiobuttons ${radiobuttons}`)
   console.log(`No of checkboxes ${checkboxes}`)
    //iterate thru
    for (const element of radiobuttons) {
        console.log(element)
    }
    for (const element of checkboxes) {
        console.log(element)
    }

})
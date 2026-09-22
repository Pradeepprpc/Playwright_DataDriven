import test, { expect, Locator } from "@playwright/test";

test('handling CHECKBOX', async({page})=>{
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
    //assert checkbox to be checked
    await expect(page.locator('#remember')).toBeChecked({checked:true})
    //verify check box is checked or not
    const checkbox:Locator = page.locator('#remember')
    const status_checkbox:boolean = await checkbox.isChecked()
    console.log(status_checkbox)
    await checkbox.uncheck()
    await expect(checkbox).not.toBeChecked()
})

//Handling RADIO BUTTON

test('handling radio button', async({page})=>{
    await page.goto('https://qa-practice.netlify.app/radiobuttons')
    // verify radio button selected or not
    const radiobutton:Locator = page.locator('#radio-button3')
    const radio_status = await radiobutton.isChecked()
    console.log(radio_status)
    await expect(radiobutton).toBeChecked()

})
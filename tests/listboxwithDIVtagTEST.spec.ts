import test, { Locator } from "@playwright/test";
//script to select option in listbox - DIV tag
test('handling list box', async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(2000)
    await page.locator('div.css-19bb58m').nth(1).click()
    await page.locator('#react-select-3-option-0-2').click()
    await page.locator('#react-select-3-option-0-4').click()

})

// script to select option in listbox - DIV tag - Gmail

test('list box for Gmail lang', async({page})=>{
    
    await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/?service%3Dmail%26flowName%3DGlifWebSignIn%26flowEntry%3DAccountChooser%26ec%3Dasw-gmail-globalnav-signin&uj=gafb-gmail_asw-globalnav-en&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2144109130:1787794337510545')
    await page.waitForTimeout(2000)
    await page.locator('div.VfPpkd-aPP78e').click()
    await page.waitForTimeout(2000)
    await page.getByRole('option', { name: 'English (United States)' }).click();
    await page.waitForTimeout(2000)
    // await page.getByRole('option', { name: 'English (United Kingdom)' }).click();
    // await page.waitForTimeout(2000)
    // await page.locator('li[data-value="af"]').click();
    // await page.waitForTimeout(2000)
})



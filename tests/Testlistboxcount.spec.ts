import { test, Locator } from '@playwright/test';

//counting options in the listbox from GMAIL
test('counting li from GMAIL listbox', async ({ page }) => {

    await page.goto('https://accounts.google.com/');

    const listbox: Locator = page.getByRole('combobox');

    // Open the language dropdown
    await listbox.click();

    // Find all options after dropdown is opened
    const all_Options = page.getByRole('option');

    // Count options
    const count_Options = await all_Options.count();

    console.log(`No of options: ${count_Options}`);

    // Display each option
    for (let i = 0; i < count_Options; i++) {
        const eachOption = await all_Options.nth(i).innerText();
        console.log(eachOption.trim());
    }
});

// handliong list box with another approach

test('handling list box', async({page})=>{
    await page.goto('https://gmail.com')
    await page.waitForTimeout(2000)
    await page.locator('div.VfPpkd-aPP78e').click()
    await page.locator("ul[role='listbox']>li:nth-child(15)").click()
    await page.waitForTimeout(2000)
    const all_Options = await page.locator("ul[role='listbox']>li").allInnerTexts()
    console.log(`No of options ${all_Options.length}`)
    for(const key in all_Options){
        console.log(`${key} :: ${all_Options[key]}`)
        
    }


})
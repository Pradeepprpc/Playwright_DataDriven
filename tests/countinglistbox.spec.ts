import test, { Locator } from "@playwright/test";

test('Counting Options in listbox',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(3000)
    //store listbox 
    const Listbox : Locator = page.getByRole('combobox')
    //search for option tag in a listbox
    const all_Options = Listbox.locator('option')
    //count all options
    const count_Options = await all_Options.all()
    console.log(`No of Options In Listbox ${count_Options.length}`)
    //iterate all options
    for (const element of count_Options) {
        //console.log(`${await element.textContent()}`)
        const eachoption = await element.innerText()
        console.log(`${eachoption.trim()}`)
    }

})

//script to verify item in a listbox

test('Verify Option In Listbox',async({page})=>{
    let Expected_Item:string ='crafts';
    let Item_Exist:boolean =false
    await page.goto('https://www.ebay.com/')
    //await page.waitForTimeout(3000)
    //store listbox 
    const Listbox :Locator = page.getByRole('combobox')
    //search for <option> tag inside listbox
    const All_Options = Listbox.locator('option')
    //count all option
    const count_Options = await All_Options.allInnerTexts()
    console.log(`No of options ${count_Options.length}`)
    const listboxOption = await All_Options.count()
    for(let i=1;i<listboxOption;i++)
    {
        const eachoption = await All_Options.nth(i).textContent()
        await page.waitForTimeout(500)
        console.log(eachoption)
        if(eachoption?.toUpperCase() === Expected_Item.toUpperCase())
        {
           Item_Exist=true
           break

        }
    }
    if(Item_Exist)
    {
        console.log(`${Expected_Item} Found In Listbox`)
    }
    else{
        console.log(`${Expected_Item} Not Found In Listbox`)
    }

})
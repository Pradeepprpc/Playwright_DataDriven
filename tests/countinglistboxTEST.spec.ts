import test, { Locator } from "@playwright/test";
import { count } from "node:console";

test('counting options in listbox', async({page})=>{
    await page.goto('https://www.amazon.com/')
    //store listbox in amazon
    const Listbox:Locator = page.getByRole('combobox')
    // search for options tag in listbox
    const all_option = Listbox.locator('option')
    // count all option
    const count_Options = await all_option.all()
    console.log(`No of Option tags in list ${count_Options.length}`)
    //iterate all options
    for (const element of count_Options) {
        const eachoption = await element.innerText()
        console.log(`${eachoption.trim()}`)
    }
})

//script to verify item name in the listbox

test('verify item name', async({page})=>{
    
    let Expected_Item:string = 'DigitAL MusIc'
    let Item_Exist:boolean = false
    await page.goto('https://www.amazon.com/')
    //search listbox
    const Listbox:Locator = page.getByRole('combobox')
    //search for options tag
    const all_option = Listbox.locator('option')
    //count all options
    const count_Options = await all_option.allInnerTexts()
    console.log(`No of options tags in listbox ${count_Options.length}`)
    const listboxOption = await all_option.count()
    // iterate list box
    for(let i=1;i<listboxOption;i++)
    {
        const eachoption = await all_option.nth(i).textContent()
        console.log(eachoption)
        if(eachoption?.toUpperCase() == Expected_Item.toUpperCase())
        {
            Item_Exist=true
            break
        }

    }
    if(Item_Exist){
        console.log(`${Expected_Item} Item found`)
    }
    else{
        console.log(`${Expected_Item} Item not found`)
    }
})
import test, { expect,Locator } from "@playwright/test";

test('Handling Listbox',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(2000)
    //store listbox into one varibale
    const Country_List:Locator =  page.locator('#countries_dropdown_menu')
    //select one option from listbox using deafult values
    await Country_List.selectOption('India')
    await page.waitForTimeout(3000)
    //select one option from listbox using label
    await Country_List.selectOption({label:'Cambodia'})
    await page.waitForTimeout(3000)
    //select one option from listbox using value
    await Country_List.selectOption({value:'Midway Islands'})
    await page.waitForTimeout(3000)
    //assert that selected value is same
    await expect(Country_List).toHaveValue('Midway Islands')
    //select one option from listbox using index
    await Country_List.selectOption({index:50})
    await page.waitForTimeout(3000)
    })

    // script to select option for ebay

    test('Handling Listbox1',async({page})=>{
        await page.goto('https://www.ebay.com/')
        await page.waitForTimeout(2000)
        //select option using values
        await page.locator('#gh-cat').selectOption('Consumer Electronics')
        await page.waitForTimeout(3000)
        //select option using value
        await page.locator('#gh-cat').selectOption({value:'26395'})
        await expect(page.locator('#gh-cat')).toHaveValue('26395')
        await page.waitForTimeout(3000)
        //select option using label
        await page.locator('#gh-cat').selectOption({label:'Tickets & Experiences'})
        await page.waitForTimeout(3000)
        //select option using index
        await page.locator('#gh-cat').selectOption({index:20})
        await page.waitForTimeout(3000)
        
    })

    // script to select option from Amazon

    test('handling list box 2', async({page})=>{
        await page.goto('https://www.amazon.com/')
        await page.waitForTimeout(2000)
        await page.locator('#searchDropdownBox').selectOption('Automotive') // using values & lebel options are same
        await page.waitForTimeout(2000)
        await page.locator('#searchDropdownBox').selectOption({value:'search-alias=digital-music'})
        await expect(page.locator('#searchDropdownBox')).toHaveValue('search-alias=digital-music')
        await page.waitForTimeout(2000)
        await page.locator('#searchDropdownBox').selectOption({label:'Movies & TV'})
        await page.waitForTimeout(2000)
        await page.locator('#searchDropdownBox').selectOption({index:20})
        await page.waitForTimeout(2000)
    })
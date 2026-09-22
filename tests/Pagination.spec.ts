import test from "@playwright/test";
test('handling pagination table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //get all pages from table
    const pages = page.locator('#pagination>li')
    // Total pagination pages
    const totalPages = await pages.count()
     console.log('Total Pages:', totalPages)
   // Loop pages
       for (let p=0;p<totalPages;p++)
       {
        // Click page
        await pages.nth(p).click()
        await page.waitForTimeout(100)
        console.log(`\n----- Page ${p + 1} -----`)
        // Get rows
        const rows = page.locator('#productTable tbody tr')
        // Loop rows
        for(let i=0;i<await rows.count();i++)
        {
            const cells = rows.nth(i).locator('td')
            // Loop columns
            for(let j=0;j< await cells.count();j++)
            {
                const celldata = await cells.nth(j).innerText()
                console.log(celldata)
            }
            console.log('---------------------------------------')
        }
       }
})

// Pagination example

test('handling pagination table1',async({page})=>{

    await page.goto('http://practice.expandtesting.com/dynamic-pagination-table')
    //get all pages from table
    const allpages = page.locator('.pagination>li')
    // total pagination pages
    const totalpages = await allpages.count()
    console.log(totalpages)
    //loop pages
    for (let p=0;p<totalpages;p++)
    {
       //click pages
       await allpages.nth(p).click()
       console.log(`\n pages ${p + 1} -----------`)
       //get rows
       const allrows = page.locator('#example tbody tr')
       //loop rows
        for(let i=0;i<await allrows.count();i++)
        {
            const rowcell = allrows.nth(i).locator('td')
            //loop columns
            for(let j=0;j<await rowcell.count();j++)
            {
                const columncell = await rowcell.nth(j).innerText()
                console.log(columncell)
            }
            console.log('==================================')
        }

    }

})

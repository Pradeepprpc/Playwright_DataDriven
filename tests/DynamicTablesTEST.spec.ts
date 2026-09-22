import test from "@playwright/test";

test('count rows and columns', async({page})=>{
    await page.goto('https://qa-practice.netlify.app/web-table')
    //locate table and store
    const webtable = page.locator('#peopleTable')
    // get all rows
    const allrows = webtable.locator('tbody>tr')
    //count all rows
    const rowcount = await allrows.count()
    console.log(`No of rows ${allrows}`)
    //iterate
    for(let i=0;i<rowcount;i++)
    {
        const cellcount = await allrows.nth(i).locator('td').count()
        console.log(`Row no ${i} :: ${cellcount}`)
    }

})

// Read specific row

test('read specific row', async({page})=>{
    await page.locator('https://qa-practice.netlify.app/web-table')
    const table = page.locator('#peopleTable')
    const row = table.locator('tbody tr').filter({
        hasText : 'Larry'
    })
    console.log('complte row:')
    //console.log(await row.textContent())
    console.log(await row.innerText())
    
})

// Print complete table data

test('print all rows', async({page})=>{
    await page.goto('https://qa-practice.netlify.app/web-table')
    //locate table
    const webtable = page.locator('#peopleTable')
    //get all rows
    const allrows = webtable.locator('tbody tr')
    // count rows
    const rowcount = await allrows.count()
    console.log(`No of rows ${rowcount}`)
    //iterate table rows
    for(let i=0;i<rowcount;i++)
    {
        const allcells = allrows.nth(i).locator('td')
        const cellcount = await allcells.count()
        //iterate cell count
        for(let j=0;j<cellcount;j++){
            const celldata = await allcells.nth(j).innerText()
            console.log(celldata)
        }
    }
    
})




import test, { expect } from "@playwright/test";

test('row and cell count',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/dynamic-table')
    await page.waitForTimeout(3000)
    //locate table and store
    const webtable = page.locator('#data-table')
    //get all rows from tbale
    const allrows = webtable.locator('tbody tr')
    //count all rows
    const rowCount = await allrows.count()
    console.log(`No of rows in a table ${rowCount}`)
    //iterate all rows
    for(let i=0;i<rowCount;i++)
    {
        //get cell size from each row
        const cellCount = await allrows.nth(i).locator('td').count()
        console.log(`Row No.${i}:${cellCount}`)
    }
   
})

// Read specific row

test('Read specific row from Dynamic Table', async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/web-table')
    const table = page.locator('#peopleTable')
    const row = table.locator('tbody tr').filter({
        hasText: 'Mark'
    })
    //await expect(row).toBeVisible();
    console.log('Complete Row:')
    console.log(await row.allTextContents())

})

// Read specific row from Dynamic Table

test('Read specific row from Dynamic Table1', async ({ page }) => {

    await page.goto('https://qa-practice.netlify.app/dynamic-table')

    const table = page.locator('#data-table')

    // const row = table.locator('tbody tr').first().filter({
    //     hasText: 'land'
    // })
    const row = table.locator('tbody tr').first().filter({
        hasText: /example.com/
    })

    await expect(row).toBeVisible()

    console.log('Complete Row:')
    console.log(await row.innerText())

})

// Print comaplete table data

test('Print comaplete table data',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/dynamic-table')
    await page.waitForTimeout(2000)
    //locate table
    const webtable = page.locator('#data-table')
    //get all rows from table
    const allRows = webtable.locator('tbody>tr')
    //count rows 
    const rowCount = await allRows.count()
    console.log(`No of rows ${rowCount}`)
    //iterate all rows
    for(let i=0;i<rowCount;i++)
    {
        const allcells = allRows.nth(i).locator('td')
        //cont all cells
        const cellCount = await allcells.count()
        //ietrate all cells
        for(let j=0;j<cellCount;j++)
        {
            const celldata = await allcells.nth(j).innerText()
            console.log(celldata)
            
        }
        console.log('-------------------------------------------------------')
    }
})

// Get Email from Dynamic Table

test('Get Email from Dynamic Table', async ({ page }) => {

    await page.goto('https://qa-practice.netlify.app/web-table');

    const table = page.locator('#peopleTable');

    const row = table.locator('tbody tr').filter({
        hasText: 'Larry'
    });

    await expect(row).toBeVisible();

    const cells = row.locator('td');

    const email = await cells.nth(2).innerText();

    console.log('Email:', email);

});

// Read dynamically available row

test('Read dynamically available row', async ({ page }) => { 
await page.goto('https://qa-practice.netlify.app/dynamic-table'); 
await page.waitForLoadState('networkidle')
const table = page.locator('#data-table')
 const rows = table.locator('tbody tr')
const rowCount = await rows.count()
console.log('Total Rows:', rowCount) 
expect(rowCount).toBeGreaterThan(0) 
// Select first available data row 
const row = rows.nth(5)
// Read complete row 
const rowText = await row.innerText()
 console.log('Selected Row:') 
 console.log(rowText)
});

// 

test('Read availble row',async ({page})=>{
    await page.goto('https://qa-practice.netlify.app/web-table')
    await page.waitForLoadState('networkidle')
    const table = page.locator('#peopleTable')
    const rows = page.locator('tbody>tr')
    const rowcount = await rows.count()
    console.log(`Total rows:`, rowcount)
    expect (rowcount).toBeGreaterThan(0)
    // select first available data row
    const row = rows.nth(3)
    // read complete row
    const rowtext = await row.innerText()
    console.log(`Selected row:`)
    console.log(rowtext)

    // const names = await page.locator('table tbody tr td').allTextContents();
    // console.log(names);

})
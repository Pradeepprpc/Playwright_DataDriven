import test from "@playwright/test";
test('Handling Webtable',async({page})=>{
    await page.goto('file:///C:/Users/Admin/Documents/employees.html')
    await page.waitForTimeout(2000)
    //locate table
    const webtable = page.locator('#employees')
    const headers = await webtable.locator('thead>tr>th').count()
    console.log(`no of headers are ${headers}`)
    //To count the rows:
    const allrows = webtable.locator('tbody>tr')
    const rowcount = await allrows.count()
    console.log(`No of rows are ${rowcount}`)
    //count no of cells in first row
    const cells = await allrows.nth(1).locator('td').count()
    console.log(`No of cells in first row ${cells}`)
})

// Handling Student web table

test('Student web table', async({page})=>{
    await page.goto('file:///C:/Users/Admin/Documents/Student.html')
    await page.waitForTimeout(2000)
    //locate table
    const studenttable = page.locator('#student')
    const stuheaders = await studenttable.locator('thead>tr>th').count()
    console.log(`No of headers are ${stuheaders}`)
    // to count the rows
    const allrows = studenttable.locator('tbody>tr')
    const rowcount = await allrows.count()
    console.log(`No of rows are ${rowcount}`)
    // count no of cells in the first row
    const cells = await allrows.nth(1).locator('td').count()
    console.log(`No of rows in the first cell ${cells}`)

})
import test, { expect } from "@playwright/test";

// script to handle caleder - approach 1
test('selecting ddmmyyy from calender1',async({page})=>{
    let dob='2-Dec-1967'
    const[date,month,year]=dob.split('-')
    await page.goto('https://flights.qedgetech.com/register.html')
    await page.waitForTimeout(3000)
    await page.locator('#popupDatepicker').click()
    await page.waitForTimeout(3000)
    //select year from calender
    await page.locator('.ui-datepicker-year').selectOption({label:year})
    await page.waitForTimeout(3000)
    await page.locator('.ui-datepicker-month').selectOption({label:month})
     // Select date directly
   await page.locator(`//a[text()='${date}']`).click();
   await page.waitForTimeout(3000)
   const selectdate = await page.locator('#popupDatepicker').inputValue()
   console.log(selectdate)
    //await expect(page.locator('#popupDatepicker')).toContainText('01-12-1967')
     await page.waitForTimeout(3000)

})

// iframe script to handle caleder - approach 2

test('selecting previous date from calendar',async({page})=>{
    let dob ='20/december/2022'
    const[date,month,year]=dob.split('/')
    await page.goto('https://jqueryui.com/datepicker/')
    await page.waitForTimeout(2000)
    //store iframe
    const frame = page.frameLocator('.demo-frame')
    //clik on testox to open calender
    await frame.locator('#datepicker').click()
    //locate year
    const calyear = frame.locator('.ui-datepicker-year')
    //locate month
    const calMonth = frame.locator('.ui-datepicker-month')
    while((await calyear.textContent()!=year)||(await calMonth.textContent())?.toLowerCase()!==month)
    {
        //click prvvious button
        await frame.getByText('Prev',{exact:true}).click()

    }
    await frame.locator(`//a[text()=${date}]`).click()
    const selectedate = await frame.locator('#datepicker').inputValue()
    console.log(selectedate)
    await page.waitForTimeout(2000)
  // await expect.soft(frame.locator('.hasDatepicker')).toHaveText('12/20/2022')

})
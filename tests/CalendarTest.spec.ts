import test from "@playwright/test";

test('select next date from calendar', async({page})=>{
  
  let traveldate = '15/September/2028'
  const [date,month,year] = traveldate.split('/')
  await page.goto('https://flights.qedgetech.com/user/pradeep-narendra.html')
  //select login credentials
  await page.locator('[placeholder="Email ID"]').fill('pradeep.prpc@gmail.com')
  await page.locator('[placeholder="Password"]').fill('Password@009')
  await page.getByRole('button', { name: 'Sign In' }).click()
await page.waitForTimeout(3000)
await page.locator('#search-date').click()
  await page.waitForTimeout(3000)
const calyear = page.locator('.ui-datepicker-year');
console.log('Year:', await calyear.textContent());
const calMonth = page.locator('.ui-datepicker-month');
console.log('Month:', await calMonth.textContent())

while (
    (await calyear.textContent())?.trim() !== year ||
    (await calMonth.textContent())?.trim().toLowerCase() !== month.toLowerCase()
) {
    await page.getByText('Next', { exact: true }).click();
}
await page.locator(`//a[text()=${date}]`).click()
await page.waitForTimeout(3000)
const selectdate = await page.locator('#search-date').inputValue()
console.log(selectdate)
await page.waitForTimeout(3000)
})
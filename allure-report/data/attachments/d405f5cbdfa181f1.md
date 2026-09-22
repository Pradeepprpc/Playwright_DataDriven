# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CalendarTest.spec.ts >> select next date from calendar
- Location: tests\CalendarTest.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | 
  3  | test('select next date from calendar', async({page})=>{
  4  |   
  5  |   let traveldate = '15/September/2028'
  6  |   const [date,month,year] = traveldate.split('/')
  7  |   await page.goto('https://flights.qedgetech.com/user/pradeep-narendra.html')
  8  |   //select login credentials
  9  |   await page.locator('[placeholder="Email ID"]').fill('pradeep.prpc@gmail.com')
  10 |   await page.locator('[placeholder="Password"]').fill('Password@009')
  11 |   await page.getByRole('button', { name: 'Sign In' }).click()
> 12 | await page.waitForTimeout(3000)
     |            ^ Error: page.waitForTimeout: Test ended.
  13 | await page.locator('#search-date').click()
  14 |   await page.waitForTimeout(3000)
  15 | const calyear = page.locator('.ui-datepicker-year');
  16 | console.log('Year:', await calyear.textContent());
  17 | const calMonth = page.locator('.ui-datepicker-month');
  18 | console.log('Month:', await calMonth.textContent())
  19 | 
  20 | while (
  21 |     (await calyear.textContent())?.trim() !== year ||
  22 |     (await calMonth.textContent())?.trim().toLowerCase() !== month.toLowerCase()
  23 | ) {
  24 |     await page.getByText('Next', { exact: true }).click();
  25 | }
  26 | await page.locator(`//a[text()=${date}]`).click()
  27 | await page.waitForTimeout(3000)
  28 | const selectdate = await page.locator('#search-date').inputValue()
  29 | console.log(selectdate)
  30 | await page.waitForTimeout(3000)
  31 | })
```
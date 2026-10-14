# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.spec.ts >> browser context
- Location: tests\register.spec.ts:18:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.ESTs9d')
Expected: "Google"
Received: ""
Timeout:  20000ms

Call log:
  - Expect "soft toHaveText" with timeout 20000ms
  - waiting for locator('.ESTs9d')
    43 × locator resolved to <svg role="img" height="92" width="272" class="ESTs9d" aria-label="Google" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">…</svg>
       - unexpected value ""

```

```yaml
- img "Google"
```

# Test source

```ts
  1  | import test, { chromium, expect } from "@playwright/test";
  2  | 
  3  | test('Handling css selectors',async({page})=>{
  4  |     //launch url
  5  |     await page.goto('https://qa-practice.netlify.app/register')
  6  |     await  page.waitForTimeout(3000)
  7  |     await page.locator('input#firstName').fill('Akhilesh') //id value
  8  |     await page.locator('input.form-control').nth(1).fill('PlayWriught') // class 
  9  |     await page.locator('div.form-group>#phone').fill('98764') // Traversing from parent to child
  10 |     await page.locator("select[id*='dropdown']").selectOption('India') // contains
  11 |     await page.locator("input[id^='email']").fill('test@gmail.com') // starts with
  12 |     await page.locator("input[class$='control']").last().fill('Test@1234') // ends with
  13 |     await page.locator("input.form-check-input").click() // class
  14 |     await page.locator("button.btn.btn-primary").click() // class 
  15 |      await  page.waitForTimeout(3000)
  16 | })
  17 | 
  18 | test('browser context', async({page})=>{
  19 |     const browser = await chromium.launch()
  20 |     const context  = await browser.newContext()
  21 |     const page1:any = await context.newPage()
  22 |     await page.goto('https://google.com')
  23 |     await expect.soft(page.locator('.ESTs9d'))
> 24 |     .toHaveText('Google');
     |      ^ Error: expect(locator).toHaveText(expected) failed
  25 |     //await browser.close()
  26 | 
  27 | })
```
// import { test, expect } from '@playwright/test';

// test('Google Search', async ({ page }) => {
//   await page.goto('https://www.google.com')
//   await expect(page).toHaveTitle(/Google/)
//   const pageTitle:string = await page.title()
//   console.log(pageTitle)
// });

// import test from "@playwright/test";


// test('Using get commands', async({page})=>{
//     // launch url
//     await page.goto('https://www.commbank.com.au/',{waitUntil:'load'})
//     //suspend tool for 5 seconds hard tule
//     await page.waitForTimeout(5000)
//     //print page title and length of the title
//     const pageTitle:string = await page.title()
//     console.log(pageTitle)
//     console.log(pageTitle.length)
//     //print page url and length of the url
//     const strUrl = page.url()
//     console.log(strUrl)
//     console.log(strUrl.length)

// })

import test from "@playwright/test";
test ('westpac bank search',async({page})=>{
    await page.goto('https://www.westpac.com.au/')
    const pageTitle:string = await page.title()
    console.log(pageTitle)

})
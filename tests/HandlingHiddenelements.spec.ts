import test, { expect } from "@playwright/test";

test('handling hidden elements',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/show-hide-element')
    await page.waitForTimeout(3000)
    await expect(page.locator('#hiddenText')).toBeVisible()
    await page.waitForTimeout(3000)
    //click hide button to hide text
    await page.locator('#showHideBtn').click()
     await page.waitForTimeout(3000)
     await expect(page.locator('#hiddenText')).toBeHidden()
     await page.waitForTimeout(3000)
     await expect(page.locator('#hiddenText')).not.toBeVisible()
     await page.waitForTimeout(3000)

})
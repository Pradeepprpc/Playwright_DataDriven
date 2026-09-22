import test from "@playwright/test";

// Script to perform drag and drop

test('Drag and drop',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.waitForTimeout(2000)
    //store A to source
    const source = page.locator('#column-a')
    //store B into target
     const target = page.locator('#column-b')
     //drag source to target
     await source.dragTo(target)
      await page.waitForTimeout(2000)
})

//script to scroll to particular element in web page - scrollIntoViewIfNeeded

test('Scroll into element',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    await page.getByText('Facebook',{exact:true}).last().scrollIntoViewIfNeeded()
    console.log(await page.title())
    await page.getByText('Facebook',{exact:true}).last().click()
    await page.waitForLoadState()
      console.log(await page.title())
    await page.waitForTimeout(3000)
})

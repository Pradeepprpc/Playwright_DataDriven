import test, { expect } from "@playwright/test";

test('Handling specific window',async({page})=>{
    await page.goto('https://gmail.com')
    //Wait for "popup" event to appear on the page 
    page.waitForEvent('popup')
    //click a help link in parent window which is responsible to launch in new tab
    await page.locator("a[target='_blank']").nth(1).click()
    //We can store the final result of const newPage = await page.waitForEvent("popup")
    const helplink = await page.waitForEvent('popup')
    await helplink.waitForLoadState()
    //assert text is visible in new tab
    await expect(helplink.locator('#material-bar-custom-product-name')).toBeVisible()
    await helplink.locator('a[data-stats-id="accounts:community"]').click()
    console.log(`Child window title:: ${await helplink.title()}`)
    await page.waitForTimeout(3000)
    await helplink.close()
     await page.waitForTimeout(3000)
    //come back to main window
    await page.bringToFront()
    await page.waitForLoadState()
    await page.locator('#identifierId').fill('pranga2010')
    console.log(`parent window title:: ${await page.title()}`)
     await page.waitForTimeout(3000)

})

// Handling Multiple Windows with child using For of loop

test('Handling Multiple Windows with child',async({page})=>{
     await page.goto('https://gmail.com');
     await page.waitForTimeout(3000)
  
  // Store targets: index of the link and the expected text/title for verification
  const links = [
    { index: 1, name: 'Help' },
    { index: 2, name: 'Privacy' },
    { index: 3, name: 'Terms' }
  ];

  for (const link of links) {
    // Start waiting for popup before clicking
    const popupPromise = page.waitForEvent('popup');
    await page.waitForTimeout(3000)
    // Click the specific link based on index
    await page.locator("a[target='_blank']").nth(link.index).click();
    
    // Wait for the popup to capture the page object
    const newPage = await popupPromise;
    await newPage.waitForLoadState();

    console.log(`Opened ${link.name} window: ${await newPage.title()}`);

    // Perform window-specific logic if needed
    if (link.name === 'Privacy') {
      await newPage.locator("a.MyGDhe").nth(4).click();
      await page.waitForTimeout(3000)
      await newPage.waitForLoadState();
    }
  await page.waitForTimeout(3000)
    // Close the child window to return focus to main flow
    await newPage.close();
  }

  // Back to parent window actions
  await page.locator('input#identifierId').fill('example@gmail.com');
  await page.waitForTimeout(3000)
  await page.close();
})

// Handling multiple windows non For of loop

test('Handling multiple windows',async({page})=>{
    await page.goto('https://gmail.com')
    await page.waitForTimeout(2000)
    //Wait for "popup" event to appear on the page for help link
    const helpromise =  page.waitForEvent('popup')
    //click help link which is responsible to open in new tab
    await page.locator("a[target='_blank']").nth(1).click()
    //to perfom any action on new tab create referenc
    const helplink =   await helpromise
    //assert text in child window
    await page.waitForLoadState()
    await expect(helplink.locator('#material-bar-custom-product-name')).toContainText(/Google Account/)
    console.log('Help page title',await helplink.title())
    await page.waitForTimeout(2000)
    //close child tab
    helplink.close()
//handle privacy tab
//Wait for "popup" event to appear on the page for privacy link
const privacyPromise = page.waitForEvent('popup')
//click privay link
await page.locator("a[target='_blank']").nth(2).click()
const privaylink = await privacyPromise
await page.waitForLoadState()
//click on FAQs link in new window
await privaylink.locator(".MyGDhe").nth(4).click()
console.log('privacy page title ',await privaylink.title())
 await page.waitForTimeout(2000)
    //close child tab
    privaylink.close()
    //go to parent window
    await page.bringToFront()
    await page.getByRole('textbox',{name:'Email or phone'}).fill('pranga2010@gmail.com')
    await page.waitForTimeout(2000)
    page.close()

})

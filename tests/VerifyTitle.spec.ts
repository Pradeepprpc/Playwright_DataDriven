import test from "@playwright/test";
test ('Checking page title', async function({page}){
    //launch url
    await page.goto('https://yahoo.com')
    // hard time to suspend tool
    await page.waitForTimeout(3000)
    const Expected_Title = 'Google'
    const Actual_Title = await page.title()
    //verify expected title matches
    if(Actual_Title.match(Expected_Title))
        {
            console.log(`Matched ${Actual_Title}  ${Expected_Title}`)
        }   
        else{
            console.log(`Not Matched ${Actual_Title}  ${Expected_Title}`)
        }
})
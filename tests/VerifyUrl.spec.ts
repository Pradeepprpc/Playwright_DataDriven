import test from "@playwright/test";

test('Verify URL', async({page})=>{
    //launch url
    await page.goto('https://facebook.com')
    const expected:string = 'http://'
    const actual:string = page.url()
    if(actual.startsWith(expected))
    {
        console.log(`URL secured ${expected}  ${actual}`)
    } else
    {
        console.log(`Not URL secured ${expected}  ${actual}`)
    }
    
})
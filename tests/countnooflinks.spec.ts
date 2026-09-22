// counting & print all links using for loop

import test,{ Locator } from "@playwright/test";

test('counting links and print links name', async({page})=>{
    //launch url
    await page.goto('https://google.com')
    //get all links which are stored into html tag <a>
    const all_Links:Locator = page.locator('a')
    //count no of links
    const linkCount = await all_Links.count()
    console.log(`No of links are ${linkCount}`)
    //iterate all links
    for(let i=0;i<linkCount;i++){
        //get each link name
        const linkName = await all_Links.nth(i).textContent()
        console.log(`${linkName}:${i}`)
    }
})

// Capture Gmail link

test('Capture text',async({page})=>{
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)
    //capture gmail text in google page
    const gmailText = await page.getByRole('link',{name:'Gmail'}).innerText()
    console.log(gmailText)
    //capture gmail link url
    const gmailurl = await page.getByRole('link',{name:'Gmail'}).getAttribute('href')
    console.log(gmailurl)
})

// search all links for facebook use for of loop (Array)

test('Using for of Loop',async({page})=>{
    await page.goto('https://facebook.com')
    //search all links with html tag <a>
    const all_links = page.locator('a')
    //count no of links
    const linkcount = await all_links.all()
    console.log(`No of links are ${linkcount.length}`)
    for (const element of linkcount) {
        console.log(`${await element.innerText()}`)
        //console.log(`${await element.getAttribute('href')}`)
    }
})
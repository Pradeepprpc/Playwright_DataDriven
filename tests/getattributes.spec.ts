// capture image text 
import test, { Locator } from "@playwright/test";

test('capture image text', async({page})=>{
    await page.goto('https://www.google.com/')
    const imageText = await page.getByRole('link',{name:'Images'}).innerText()
    console.log(imageText)
})

// getattribure to capture image url

test('capture image url', async({page})=>{
    await page.goto('https://www.google.com/')
    const imageurl = await page.getByRole('link',{name:'Image'}).getAttribute('href')
    console.log(imageurl)
})

//capture all links count

test('capture all links', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/?utm_source=chatgpt.com')
    const all_links:Locator = page.locator('a')
    const linkCount = await all_links.count()
    console.log(`No of links ${linkCount}`)
    for (let i=0;i<linkCount;i++)
    {
        const linkName = await all_links.nth(i).textContent()
        console.log(`${linkName}:${i}`)
    }
})

//capture all links and print

test('capture links using forof', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/?utm_source=chatgpt.com')
    const all_Links = page.locator('a')
    const linkCount = await all_Links.all()
    console.log(`No of links are: ${linkCount.length}`)
    for (const element of linkCount) {
    console.log(`${await element.innerText()}`)
    console.log(`${await element.getAttribute('href')}`) 
    }
})


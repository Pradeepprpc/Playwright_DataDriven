import test, { expect } from "@playwright/test";
import path from "path";

test('Single file upload',async({page})=>{
    const filepath = path.join(__dirname,"../TestData/Pega.dotx.pdf")
    await page.goto('https://qa-practice.netlify.app/file-upload')
    await page.waitForTimeout(2000)
    await page.locator('#file_upload').setInputFiles(filepath)
    await page.getByText('Submit',{exact:true}).click({force:true})
    const message = await page.locator('#file_upload_response').textContent()
    console.log(message)
    await expect(page.locator('#file_upload_response')).toContainText(/You have successfully uploaded/)
    await page.waitForTimeout(4000)

})

// multiple files upload

test('Multiple file Upload',async function({page}){
    //store all files to upload
    const filepath1 =path.join(__dirname,"../TestData/Pega.dotx.pdf")
    const filepath2 =path.join(__dirname,"../TestData/REST SERVICE.docx")
    const filepath3 =path.join(__dirname,"../TestData/RESTAPI.json")
     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(3000)
    await page.locator('#filesToUpload').setInputFiles([
        filepath1,
        filepath2,
        filepath3
    ])
    const filename = await page.locator("ul#fileList>li").allInnerTexts()
    console.log(filename)
    await page.waitForTimeout(3000)
})
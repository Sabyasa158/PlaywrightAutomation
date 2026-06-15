const {test,expect} = require('@playwright/test')

test('Single file', async({page})=>{

    await page.goto("https://demoqa.com/upload-download")

    await page.waitForSelector("#uploadFile")

    await page.locator("#uploadFile").click()

    

})

test('Multiple file', async({page})=>{

})


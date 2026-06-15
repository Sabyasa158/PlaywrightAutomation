const {expect,test} = require('@playwright/test')

test('Handle double click', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const btn_CopyText = page.locator("//button[normalize-space()='Copy Text']")

    // double click

    await btn_CopyText.dblclick()

    // Validate

    const field2 = page.locator("#field2")

    await expect(field2).toHaveValue("Hello World!")
    
    await page.waitForTimeout(5000)

})



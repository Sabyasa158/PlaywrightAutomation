const {test,expect} = require('@playwright/test')

test('handle radio button', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator("//input[@id='sunday']").check()
    await page.check("//input[@id='sunday']")

    await expect(await page.locator("//input[@id='sunday']")).toBeChecked()

    await expect(await page.locator("//input[@id='sunday']").isChecked).toBeTruthy()
    await expect(await page.locator("//input[@id='monday']").isChecked).toBeFalsy()

    await page.waitForTimeout(5000)
    



})













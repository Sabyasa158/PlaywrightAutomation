const{test,expect} = require('@playwright/test')

test('Checkboxes', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.check("//input[@id='monday' and @type='checkbox']")

    expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()

    // Array of which days the user want to check
    const checkboxLocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='thursday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']"
    ]

    for(const locator of checkboxLocators){
        await page.locator(locator).check()  // Checked the checkboxes
    }

    await page.waitForTimeout(5000)

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked()){

            await page.locator(locator).uncheck()
        }
    }

    await page.waitForTimeout(5000)


})
























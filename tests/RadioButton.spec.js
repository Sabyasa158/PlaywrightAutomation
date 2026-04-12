const {test,expect} = require('@playwright/test')

test('Handle radio button', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator("//input[@id='sunday']").check()
    await page.check("//input[@id='sunday']")

    await expect(await page.locator("//input[@id='sunday']")).toBeChecked();
    
    await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
    
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

    // Mutiple checkboxes
    // Checked radio button

    const checkboxes = [
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']"
    ]

    for(const checkbox of checkboxes){
        await page.locator(checkbox).check()
    }

    await page.waitForTimeout(5000)
    
    // Unchecked checkboxes 

    for(const checkbox of checkboxes){
        if(await page.locator(checkbox).isChecked()){

            await page.locator(checkbox).uncheck()
        }
    }

    await page.waitForTimeout(5000)



})













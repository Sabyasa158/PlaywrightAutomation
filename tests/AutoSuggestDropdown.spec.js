const {test,expect} = require('@playwright/test')

test('Auto suggest dropdown', async({page}) =>{

    await page.goto("https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/")

    await page.locator("#cb1-input").fill("Alaska")

    // waitforselector are all options are displayed on the box  
    //await page.waitForSelector("//ul//li[@role='option']")

    const StateOption = await page.$$("//ul//li[@role='option']")

    for(const option of StateOption) {
        const value = await option.textContent()
        //console.log(value)
        if(value.includes("California")) {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000)



})





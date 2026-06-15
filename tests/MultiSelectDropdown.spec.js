const {test,expect} = require('@playwright/test')

test('Handle MultiDropdown', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Select multiple options from multi select dropdown
    // await page.selectOption("#colors",['Blue','Red','Yellow'])

    // Assertions
    // 1) Check number of option in dropdown 
    // const options = await page.$$("#colors option")
    // await expect(options).toHaveLength(7);

    // 2) Check number of option in dropdown using js array
    // const options = await page.$$("#colors option")
    // console.log("Number of options: ",options.length);
    // await expect(options.length).toBe(7)

    // 3) Check presence of value in the dropdown
    const content = await page.locator("#colors").textContent()
    await expect(content.includes('White')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    
    await page.waitForTimeout(5000)
})


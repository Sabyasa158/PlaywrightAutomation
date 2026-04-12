const {test,expect} = require('@playwright/test')

test('Handle Dropdown', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Multiple ways to select option from dropdown

    // 1) lable with visible text
    // await page.locator("#country").selectOption({label:'India'})

    // 2) With visible text
    // await page.locator("#country").selectOption("India")

    // 3) By using value
    // await page.locator("#country").selectOption({value:'uk'})

    // 4) By using index
    // await page.locator("#country").selectOption({index:3})

    // 5) By text
    // await page.selectOption("#country","India")

    // Assertions
    // 1) Check the number of options in dropdown
    // const option = await page.locator("#country option")
    // await expect(option).toHaveCount(10)

    // 2) Check the number of options in dropdown as the lenght of an elements
    // const options = await page.$$("#country option")
    // console.log("Number of options: ",options.length)
    // await expect(options.length).toBe(10)

    // 3) Check presence of value in the dropdown 
    // const content = await page.locator("#country").textContent()
    // await expect(content.includes("India")).toBeTruthy()

    // 4) Check presence of value in dropdown by using loop
    // const options = await page.$$("#country option")
    
    // let status = false
    
    // for(const option of options){
    //     // console.log(await option.textContent())
    //     var value = await option.textContent()
    //     if(value.includes("France")){
    //         status=true
    //         break
    //     }
    // }

    // await expect(status).toBeTruthy()

    // 5) Select the dropdown by using loop
    const options = await page.$$("#country option")

    for(const option of options){
        let value = await option.textContent()
        if(value.includes('France')){
            await page.selectOption("#country",value)
            break
        }
    }

    await page.waitForTimeout(5000)

})




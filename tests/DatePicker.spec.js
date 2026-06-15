const {test,expect} = require('@playwright/test')

test('Handle dates', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.fill("#datepicker","05/13/2026")

    // Validate date picker

    // const year = "2026"
    const year = "2025"
    // const month = "June"
     const month = "August"
    // const date = "11"
    const date = "15"

    await page.click('#datepicker') // Opens calender

    while(true){
        const CurrentYear = await page.locator('.ui-datepicker-year').textContent()
        const CurrentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(CurrentMonth == month && CurrentYear == year){
            break;
        }

        // await page.locator("[title='Next']").click() // Next button
        await page.click("//a[@title='Prev']") // Previous button

    }

    // date selection using loop
    // const CurrentDates = await page.$$("//a[@class='ui-state-default']")

    // for(const dates of CurrentDates){
    //     if(await dates.textContent()==date){
    //         await dates.click()
    //         break;
    //     }
    // }

    // date selection without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)



    await page.waitForTimeout(5000)





})



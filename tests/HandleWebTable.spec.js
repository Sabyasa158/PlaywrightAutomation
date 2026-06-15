const { test, expect } = require('@playwright/test')

test('Handle web table', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("#productTable")

    // Select and validate rows and columns

    const columns = table.locator("thead tr th")
    console.log("Number of columns: ", await columns.count())
    await expect(await columns.count()).toBe(4)

    const rows = table.locator("tbody tr")
    console.log("Number of rows: ", await rows.count())
    await expect(await rows.count()).toBe(5)

    // Select check box only for 4th row

    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: "Smartwatch"
    // })

    // await matchedRow.locator('input').check()

    // Select multiple checkboxes of table

    // await selectProduct(page,rows,'Smartphone')
    // await selectProduct(page,rows,'Laptop')
    // await selectProduct(page,rows,'Wireless Earbuds')

    // Print all product details using loop
    // for (let i = 0; i < await rows.count(); i++) {
        
    //     const row = rows.nth(i)
    //     const tds = row.locator('td')

    //     for (let j = 0; j < await tds.count()-1; j++) {
    //        console.log(await tds.nth(j).textContent())
    //     }
        
    // }

    // Read data from all pages in a table
    const pages = await page.locator('#pagination li a')
    console.log("Number of pages in the table: ", await pages.count())

    for (let p = 0; p < await pages.count(); p++) {
        if (p>0) {
            await pages.nth(p).click()
        }
        
        for (let i = 0; i < await rows.count(); i++) {
        
        const row = rows.nth(i)
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count()-1; j++) {
           console.log(await tds.nth(j).textContent())
        }
    }
        
    }


    await page.waitForTimeout(5000)

})

async function selectProduct(page, rows, name) {

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
}


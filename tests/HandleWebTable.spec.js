const {test,expect} = require('@playwright/test')

test('Handle table', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("#productTable")

    // Count number of rows and columns in a table

    const columns = await table.locator("thead tr th")
    console.log("Number of columns: ", await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await table.locator("tbody tr")
    console.log("Number of rows: ", await rows.count())
    expect(await rows.count()).toBe(5)

    await page.waitForTimeout(5000)

    // select check box for product 4

    // const matchedRow = rows.filter({
    //     has: page.locator("td"),
    //     hasText: "Smartwatch"
    // })

    // await matchedRow.locator('input').check()

    await page.waitForTimeout(5000)

    // Select multiple checkbox by resuable function

    // await selectProduct(rows,page,'Laptop')
    // await selectProduct(rows,page,'Tablet')
    // await selectProduct(rows,page,'Wireless Earbuds')

    // Print all product details using loop

    for(let i=0;i<await rows.count();i++){

        const row = rows.nth(i)
        const td = row.locator("td") // td is column and within td what are the data have

        for(let j=0;j<await td.count()-1;j++){
            console.log(await td.nth(j).textContent())
        }
    }

    

})

async function selectProduct(rows,page,name) {
    const matchedRows = rows.filter({
        has: page.locator("td"),
        hasText: name
    })
    await matchedRows.locator("input").check()
}


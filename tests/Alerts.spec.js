const {test,expect} = require('@playwright/test')

// test('Handle Alert', async({page}) =>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     // Enabling Dialog window handler
//     page.on('dialog',async dialog=>{
//         expect(dialog.type()).toContain('alert')
//         expect(dialog.message()).toContain("I am an alert box!")
//         await dialog.accept()
//     })

//     await page.click("#alertBtn")
    
//     await page.waitForTimeout(5000)

test.skip('Confirmation Dialog', async({page})=>{ // Here skip means that the execution will skip if we remove it then it will execute
     
     await page.goto("https://testautomationpractice.blogspot.com/")

    // Enabling of dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept()
    })

    await page.click("#confirmBtn")
    var msg = await page.locator("//p[@id='demo']")
    await expect(msg).toHaveText("You pressed OK!")

    await page.waitForTimeout(5000)

})


test('Prompt Dialog', async({page})=> {
     
     await page.goto("https://testautomationpractice.blogspot.com/")

    // Enabling of dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept("Tim")
    })

    await page.click("#promptBtn")
    var msg = await page.locator("//p[@id='demo']")
    await expect(msg).toHaveText("Hello Tim! How are you today?")

    await page.waitForTimeout(5000)

})






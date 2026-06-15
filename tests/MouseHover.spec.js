const {expect,test} = require('@playwright/test')

test('Handle mouse hover', async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/")

    const desktops = await page.locator("//a[normalize-space()='Desktops']")

    const mac = await page.locator("//a[normalize-space()='Mac (1)']")

    // Mouse Hover
    await desktops.hover()
    await mac.hover()
    
    await mac.click()

    await page.waitForTimeout(5000)

})


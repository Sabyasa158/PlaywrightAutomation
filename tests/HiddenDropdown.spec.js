const{test,expect} = require('@playwright/test')

test('Handle dropdown',async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')

    await page.locator("[type='submit']").click()

    await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click()
    await page.locator("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[2]")

    await page.waitForTimeout(5000)

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options) {
        const jobTitle = await option.textContent()
        //console.log(jobTitle)
        if(jobTitle.includes("QA Engineer")) {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000)

})



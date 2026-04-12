const {test,expect} = require('@playwright/test')

test('Assertion', async({page}) =>{

    await page.goto("https://demo.nopcommerce.com/register")

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logo = await page.locator('.header-logo')

    await expect(logo).toBeVisible()

    const searchbox = await page.locator('#small-searchterms')

    await expect(searchbox).toBeEnabled()

    const male_Checkbox = await page.locator('#gender-male')

    await male_Checkbox.click()

    await expect(male_Checkbox).toBeChecked()

    const regButton = await page.locator('#register-button')

    await expect(regButton).toHaveAttribute('type','submit')

    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    await expect(await page.locator('.page-title h1')).toContainText('Reg')

    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    const CurrencyOpt = await page.locator("//select[@name='customerCurrency']//option")

    await expect(CurrencyOpt).toHaveCount(2)

    





})




















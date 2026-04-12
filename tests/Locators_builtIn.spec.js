const {test,expect} = require('@playwright/test')

test('Bult-inLocators', async ({page}) => {
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // await page.click('//a[normalize-space()="Login"]');
    // await page.fill('#email', 'sabyasachi.ghosh@panini8.com');
    // await page.fill('#password', 'sabyasachi@Ghosh');

    // await page.click("//button[normalize-space()='Sign In']");


    const logo = await page.getByAltText('company-branding')

    await expect(logo).toBeVisible(await expect(logo).toBeVisible({ timeout: 50000 }))

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {type:'submit'}).click()

    const name = await page.locator("//p[@class='oxd-userdropdown-name]").textContent()
    await expect(page.getByText(name)).toBeVisible()

    await page.close();



})
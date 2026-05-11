const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://dev.chanakya.panini8.com/');

  await page.click('//a[normalize-space()="Login"]');
  await page.fill('#email', 'sabyasachi.ghosh@panini8.com');
  await page.fill('#password', 'sabyasachi@Ghosh');

  await page.click("//button[normalize-space()='Sign In']");

  await page.click("//button[normalize-space()='My Dashboard']");

  try {
  await page.click("//button[@aria-label='Close toast']", { timeout: 5000 });
} catch (e) {
  console.log('Close toast button not found, continuing...');
}

  const categoryText = await page.$$("//div[@class='hidden h-fit self-start lg:col-span-1 lg:block lg:sticky lg:top-0']//div[@class='block']//div[@class='grid grid-cols-3 gap-1']//button//span");

  for(const category of categoryText){
    await category.click();
    const cat = await category.textContent();
    console.log(cat);
  }

  await page.close();
});
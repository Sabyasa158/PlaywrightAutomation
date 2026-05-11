import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill('saby');
  
  await page.locator('#loginpassword').fill('saby123');
  
  await page.getByRole('button', { name: 'Log in' }).click();
});
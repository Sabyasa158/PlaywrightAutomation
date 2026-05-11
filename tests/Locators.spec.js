//const {test,expect} = require('@playwright/test');

import {test,expect} from '@playwright/test';

test('Locators', async({page})=>{

    await page.goto("https://dev.chanakya.panini8.com/");

    await page.click('//a[normalize-space()="Login"]')

    await page.fill('#email','sabyasachi.ghosh@panini8.com')
    await page.fill('#password','sabyasachi@Ghosh')

    await page.click('//button[normalize-space()="Sign In"]')

    
    await page.click('//button[@aria-label="Open sidebar menu"]')

    await page.click('//div[@class="hidden lg:block"]//button[contains(@class,"flex items-center w-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer p-4")]')

    const logout = page.locator('//button[normalize-space()="Sign out"]')

    await expect(logout).toBeVisible();

   
    await page.close();





})


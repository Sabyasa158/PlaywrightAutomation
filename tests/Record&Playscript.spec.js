import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.chanakya.panini8.com/login');
 
  await page.getByRole('textbox', { name: 'Email Address' }).fill('sabyasachi.ghosh@panini8.com');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Sabyasachi@');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('button', { name: 'Close toast' }).click();

  await page.getByRole('button', { name: 'My Dashboard' }).click();
  await page.getByRole('button', { name: 'All', exact: true }).click();
  await page.getByRole('button', { name: 'Teaching', exact: true }).click();
  await page.getByRole('button', { name: 'Non-Teaching' }).click();


  await page.getByRole('combobox').selectOption('Monday');
  await page.getByRole('combobox').selectOption('Tuesday');
  await page.getByRole('combobox').selectOption('Wednesday');
  await page.getByRole('combobox').selectOption('Thursday');
  await page.getByRole('combobox').selectOption('Friday');
  await page.getByRole('combobox').selectOption('Saturday');
  await page.getByRole('combobox').selectOption('Sunday');

  
});
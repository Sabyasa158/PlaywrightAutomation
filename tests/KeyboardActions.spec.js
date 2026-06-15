const {test,expect} = require('@playwright/test')
const { prependListener } = require('node:cluster')

test('Handle Keyboard action', async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    await page.type("[name='text1']","Hello world")

    // ctrl+A
    await page.keyboard.press('Control+A')

    // ctrl+c
    await page.keyboard.press('Control+C')

    // Press tab to move to the next textbox
    await page.keyboard.down('Tab')

    // ctrl+v
    await page.keyboard.press('Control+v')

    await page.waitForTimeout(5000)


})



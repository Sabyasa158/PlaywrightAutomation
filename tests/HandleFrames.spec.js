const {test,expect} =require('@playwright/test')

test('Test with Frames', async({page}) =>{

    // await page.goto("https://ui.vision/demo/webtest/frames/")

    // total frames

    // const noofFrames = await page.frames()
    // console.log("Number of frames: ", noofFrames.length)

    // Get frame using frame URL

    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill('[name="mytext1"]', "ABC")

    // Using frame locator
    // const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]')
    // inputbox.fill("hello")

    // await page.waitForTimeout(5000)

    // Nested frames
    await page.goto("https://the-internet.herokuapp.com/nested_frames")

    const frame3 = await page.frame({url:"https://the-internet.herokuapp.com/frame_bottom"})
    //const childFrame = await frame3.childFrames()
   
    await expect(frame3.locator("body")).toHaveText("BOTTOM")

    await page.waitForTimeout(5000)




})


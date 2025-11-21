import {Page,test} from '@playwright/test'
import {takeScreenshot} from "../utility/helpers"

test("screenshots",async({page})=>{

    await page.goto("https://vivanta-web-qa1v2.tajhotels.com/en-in")
    await takeScreenshot(page, "Homepage");

})
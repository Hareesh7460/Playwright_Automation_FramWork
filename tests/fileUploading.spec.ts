import {test,Page} from "@playwright/test"

test("fileUploading",async({page})=>{
    await page.goto("https://web-sit.nonprod.ecampus.com/myaccount/price-match")
    await page.waitForLoadState('load')
    await page.locator("//p[@class='price-match-note-sign']").click();
    await page.locator("//div[contains(text(),'Human Anatomy & Physiology')]").click();
    const fileEnablePro= page.waitForEvent('filechooser')
    await page.locator("(//label[@class='pm-browse-btn'])[1]").click();
    const updatestatusforFileUpload= await fileEnablePro;
    await updatestatusforFileUpload.setFiles("testData\\demoQA_data.csv")


})
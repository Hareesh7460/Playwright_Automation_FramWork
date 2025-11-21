//import { expect } from "playwright/test"

import {test, expect, page} from "@playwright/test";

test("Profile_info",async({page})=>{
    await page.goto('https://web-dev.nonprod.ecampus.com/');
    const profileicon= page.locator('//button[@class="user-profile top-header-arrow-button "]');
    await expect(profileicon).toBeVisible();
    await profileicon.click();
    const personalinfoValue= page.locator('//div[@class="user-flex-box"]/a[contains(text(),"Personal Info")]');
    await expect(personalinfoValue).toBeVisible();
    await profileicon.click();
    await profileicon.click();
    await page.waitForLoadState('load');
    const pagevalidation= await page.locator("//a[contains(text(),'Personal Info')]").textContent();
    // Validating the page
    await expect(pagevalidation).toEqual("Personal Info");
    await page.locator("//a[contains(text(),'Personal Info')]").click();
    await page.waitForLoadState('load');
    await page.locator("//button[contains(text(),' Edit Personal Info')]").click();
   
    const cancelbutton= page.locator("//parent::div[@class='row after-edit']/button[@class='cancel-pwd-button cancel-pwd']");
    await expect(cancelbutton).toBeVisible();
    //filling user details

    const today= new Date()
    let dateformat1= today.toISOString().slice(0,10);
    console.log(dateformat1);

const ids=["firstName","lastName", "email","birthday","school"]
const values=["Hareesh","Bale","balehareesh7460@gmail.com",dateformat1,"Tech Schooll"]

for(let i=0;i<ids.length;i++){

    const loc=page.locator(`//input[@id='${ids[i]}']`);
    await loc.fill(values[i]);
}

const drop=["role","gradDate","major"]
const dropdownValue=["faculty","parent","alumni"]
for(let i=0;i<drop.length;i++){
    await page.locator(`//select[@id='${drop[i]}']`).selectOption(dropdownValue[i]);

}

// clicking on save button
await page.locator("//button[@class='save-pwd save-pwd-button']").click()
const al= await page.locator("//div[contains(text(),'Profile completed')]").textContent();
console.log(al);
await expect(al).toEqual("Profile completed");
await page.locator("//div[@class='closebtn close']").click();
})
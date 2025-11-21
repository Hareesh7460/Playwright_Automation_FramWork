
import {Expect,Page, test,Locator, expect } from "playwright/test";


/* profile info page title validation //h2[contains(text(),'Personal Info')]
*/

export class ProfileInfo{
    readonly page:Page
    readonly profileicon: Locator;
    readonly personalInfo_Link:Locator;
    readonly personaIfo_Page_validation: Locator;
    readonly editbtn: Locator;
    readonly cancelbtn: Locator;
    readonly savebtn: Locator;
    readonly profileCompleted: Locator
    readonly closeIcon_ProfileCompleted: Locator

    constructor(page:Page){
        this.page=page;
        this.profileicon=page.locator('//button[@aria-label="Account"]')
        this.personalInfo_Link= page.locator("//a[contains(text(),'Personal Info')]")
        this.personaIfo_Page_validation=page.locator("//h2[contains(text(),'Personal Info')]");
        this.editbtn= page.locator("//button[contains(text(),' Edit Personal Info')]");
        this.cancelbtn= page.locator("//parent::div[@class='row after-edit']/button[@class='cancel-pwd-button cancel-pwd']")
        this.savebtn = page.locator("//button[@class='save-pwd save-pwd-button']")
        this.profileCompleted = page.locator("//div[contains(text(),'Profile completed')]");
        this.profileCompleted= page.locator("//div[@class='closebtn close']")
        this.closeIcon_ProfileCompleted= page.locator("//div[@class='closebtn close']")
        
    }

    async opensite(){
        await this.page.goto("https://web-dev.nonprod.ecampus.com/");
    }
    async profileFilling(){
        await this.profileicon.click();
        await this.personalInfo_Link.click();
        await expect(this.personaIfo_Page_validation).toHaveText("Personal Info");
        await this.editbtn.click();
        await expect(this.cancelbtn).toBeVisible();
         const today= new Date()
    let dateformat1= today.toISOString().slice(0,10);
    console.log(dateformat1);

const ids=["firstName","lastName", "email","birthday","school"]
const values=["Hareesh","Bale","balehareesh7460@gmail.com",dateformat1,"Tech Schooll"]

for(let i=0;i<ids.length;i++){

    const loc=this.page.locator(`//input[@id='${ids[i]}']`);
    await loc.fill(values[i]);
}

const drop=["role","gradDate","major"]
const dropdownValue=["faculty","parent","alumni"]
for(let i=0;i<drop.length;i++){
    await this.page.locator(`//select[@id='${drop[i]}']`).selectOption(dropdownValue[i]);

}

    await this.savebtn.click();
    await expect(this.profileCompleted).toBeVisible();
    await this.closeIcon_ProfileCompleted.click();

    }


}


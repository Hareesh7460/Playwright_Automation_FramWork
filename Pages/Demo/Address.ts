import { Locator, Page } from "playwright";
import { expect } from "playwright/test";
import addressData from "../../testData/addressPage.json"

 const ids=["firstName","lastName","address1","address2","city","zip","phone"]
 const idvalues= ["Haressh","bale","Techouts","Gachibowlli","Hyderabad","50004","9948965767"]
const drop=["state","country"];
const drop_values=["KY","UK"]


export class Address{
    readonly page:Page
    readonly profileIcon: Locator;
    readonly Address_LInk: Locator;
    readonly Address_PageTitle: Locator;
    readonly Add_New_Address_btn: Locator;
    readonly saveButton: Locator;

    constructor(page:Page){
        this.page=page
        this.profileIcon= page.locator('//button[@class="user-profile top-header-arrow-button "]')
        this.Address_LInk= page.locator("//a[contains(text(),'Addresses')]")
        this.Address_PageTitle=page.locator("//h1[@class='addresses-page-title']")
        this.Add_New_Address_btn= page.locator("//p[@id='addNewAddress']")
        this.saveButton= page.locator("//button[@class='addresses-save-btn' and not(@onclick='submitEdit(event)')]")
     
        

    }

    async openSite(){
        await this.page.goto("https://web-dev.nonprod.ecampus.com/")
    }

    async addressJourney(){
       await this.profileIcon.click();
        await expect (this.Address_LInk).toHaveText("Addresses");
        await this.Address_LInk.click();
        await this.Add_New_Address_btn.click();
    }

    async fillingUserDetails(addressData:any){
          for(let i=0;i<ids.length;i++){
            await this.page.locator(`//input[@id='${ids[i]}']`).fill(addressData[ids[i]]);
          }
          for(let j=0;j<drop.length;j++){
            await this.page.locator(`//select[@id='${drop[j]}']`).selectOption(drop_values[j]);
            await this.page.locator(`//select[@id='${drop[j]}']`).selectOption( { label: 'Option 2' })
            await this.page.locator(`//select[@id='${drop[j]}']`).selectOption( { index:2 })
          }
          this.saveButton.click();

    }

}
import { Locator, Page } from "playwright";
import { expect } from "playwright/test";
import userdata from "../../testData/addressPage.json"


//  const ids=["firstName","lastName","address1","address2","city","zip","phone"]
//  const idvalues= ["Haressh","bale","Techouts","Gachibowlli","Hyderabad","50004","9948965767"]
const drop=["state","country"];
const drop_values=["KY","UK"]


export class Address{
    readonly page:Page
    readonly profileIcon: Locator;
    readonly Address_LInk: Locator;
    readonly Address_PageTitle: Locator;
    readonly Add_New_Address_btn: Locator;
    readonly saveButton: Locator;
    readonly fName:Locator;
    readonly lName:Locator;
    readonly address1:Locator;
    readonly address2: Locator;
    readonly city:Locator;
    readonly zip:Locator;
    readonly phone: Locator
    readonly state: Locator;
    readonly country:Locator

    constructor(page:Page){
        this.page=page
        this.profileIcon= page.locator('//button[@class="user-profile top-header-arrow-button"]')
        this.Address_LInk= page.locator("//a[contains(text(),'Addresses')]")
        this.Address_PageTitle=page.locator("//h1[@class='addresses-page-title']")
        this.Add_New_Address_btn= page.locator("//p[@id='addNewAddress']")
        this.saveButton= page.locator("//button[@class='addresses-save-btn' and not(@onclick='submitEdit(event)')]")
        this.fName=page.locator("//input[@id='firstName']")
        this.lName= page.locator("//input[@id='lastName']");
        this.address1= page.locator("//input[@id='address1']");
        this.address2= page.locator("//input[@id='address2']");
        this.city= page.locator("//input[@id='city']");
        this.zip= page.locator("//input[@id='zip']");
        this.phone= page.locator("//input[@id='phone']");
        this.state=page.locator("//select[@id='state']");
        this.country= page.locator("//select[@id='country']")
        

    }

    async openSite(){
        await this.page.goto("https://web-dev.nonprod.ecampus.com/")
        await this.page.waitForLoadState('load');
    }

    async addressJourney(){
       await this.profileIcon.click();
        await expect (this.Address_LInk).toHaveText("Addresses");
        await this.Address_LInk.click();
        await this.Add_New_Address_btn.click();
    }


        async fillingAddressDetails(userdata:any){
        await expect(this.fName).toBeVisible();
        this.fName.fill(userdata.fname)
        await expect(this.lName).toBeVisible();
        this.lName.fill(userdata.lname)
        await expect(this.address1).toBeVisible()
        this.address1.fill(userdata.address11)
        await expect(this.address2).toBeVisible()
        this.address2.fill(userdata.address22)
        await expect(this.city).toBeVisible
        this.city.fill(userdata.city1)
        await expect(this.zip).toBeVisible();
        this.zip.fill(userdata.Uzip)
        
        await expect(this.phone).toBeVisible();
        this.phone.fill(userdata.uPhoneNumber)
        await expect(this.state).toBeVisible();
        this.state.selectOption(userdata.Ustate);
        await expect(this.country).toBeVisible();
        this.country.selectOption(userdata.Ucountry);
    }


    async save(){
        await this.saveButton.click()
    }
   


}
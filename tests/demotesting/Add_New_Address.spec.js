import {page,test, expect} from '@playwright/test';

test("Add_New_Address",async({page})=>{
     await page.goto('https://web-dev.nonprod.ecampus.com/');
    const profileicon= page.locator('//button[@class="user-profile top-header-arrow-button "]');
    await expect(profileicon).toBeVisible();
    await profileicon.click();
    const personalinfoValue= page.locator('//li[@class="user-flex-box"]/a[contains(text(),"Personal Info")]');
    await expect(personalinfoValue).toBeVisible();
    await profileicon.click();
    await profileicon.click();
    await page.waitForLoadState('load');
    await expect(page.locator("//a[contains(text(),'Addresses')]")).toHaveText("Addresses");

     await page.locator("//a[contains(text(),'Addresses')]").click();
     // Verifying whether user is lands on the Address page

    const pagetitle= await page.locator("//h1[@class='addresses-page-title']").textContent();
    
    expect(pagetitle).toEqual("Addresses");
    await page.locator("//p[@id='addNewAddress']").click();
    
    // Taken only one xpath and passing the attribute values dynamically by looping the values
    const ids=["firstName","lastName","address1","address2","city","zip","phone"]
    const idvalues= ["Haressh","bale","Techouts","Gachibowlli","Hyderabad","50004","9948965767"]
    const firstName=idvalues[ids.indexOf("firstName")];
    const lastName= idvalues[ids.indexOf("lastName")];

    for(let i=0;i<ids.length;i++){
        await page.locator(`//input[@id='${ids[i]}']`).fill(idvalues[i]);
        
        
    }

    const drop=["state","country"];
    const drop_values=["KY","UK"]
    for(let i=0;i<drop.length;i++){
        await page.locator(`//select[@id='${drop[i]}']`).selectOption(drop_values[i]);
    }
     
    await page.locator("//button[@class='addresses-save-btn' and not(@onclick='submitEdit(event)')]").click();

    const loc= page.locator("//p[@class='addresses-user-name']");
    const count= await loc.count();
    const usernames=[];
    for(let i=0;i<count;i++){
        const text= await loc.nth(i).textContent();
        console.log(text);
        usernames.push(text);
        console.log(usernames);
    const name= firstName+" "+ lastName;
    if(name.includes(usernames)){
        console.log(name+": address got created");
    }        
        
    }
  

})
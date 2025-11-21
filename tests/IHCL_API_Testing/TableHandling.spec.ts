import {test,BrowserContext, expect} from "@playwright/test"
import { promises, reverse } from "dns"
import { permission } from "process"
import { compileFunction } from "vm"

test("handling_Tables",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const rowvalue= "Smartphone"

  // await page.locator("//table[@id='productTable']/tbody/tr").scrollIntoViewIfNeeded()

    const row= page.locator("//table[@id='productTable']/tbody/tr").filter({
        has: page.locator(`//td[contains(text(),"${rowvalue}")]`)


    })
    console.log(row);
    await row.scrollIntoViewIfNeeded()
    await row.locator("//input[@type='checkbox']").click()
    
    await page.waitForTimeout(2000);
})

test("Handlingtables",async({page})=>{
    page.goto("https://cosmocode.io/automation-practice-webtable/")

    const countryName= "Germany"

    const row = page.locator("//table[@id='countries']/tbody/tr").filter({

        has: page.locator(`//td/strong[text()='${countryName}']`)
    })

    await row.scrollIntoViewIfNeeded()
    await row.locator("//td/input[@class='hasVisited']").click()
})

// multiple windows
test("multiple_windows", async({context})=>{
    const pageA= await context.newPage()
    await pageA.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

    const [pageB]= await Promise.all([
        context.waitForEvent("page"),
        pageA.click("#newTabBtn")
    ])

    //await pageB.waitForLoadState("load")
    console.log("Page B title is: ", await pageB.title())
    const alertCTA= pageB.locator("#alertBox")
    if(await alertCTA.isVisible){

        await alertCTA.click(  )
        console.log("cliked CTA")
    }
    else{
        console.log(" element not clicked")
    }
   
  // await pageA.click("#newWindowsBtn")
    

})

//Handling Location models
test("test_Geo_Location_mode",async({browser})=>{
    const loc= await browser.newContext({
        permissions: ['geolocation'],
        geolocation:{latitude: 17.438424919537695, longitude: 78.36598635566484}
    })
    const page= await loc.newPage()
    await page.goto("https://www.vivantahotels.com/en-in")

})

//Maps functions
test("maps_realtime",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const listLocator= await page.locator(".form-check-label").all()
    const text= await Promise.all(
        listLocator.map(async(weekName)=>{
            return await weekName.innerText()
        })
    );
    console.log(text)
})

test("map_usingForList",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const locatorss= await page.locator(".form-check-label").all()
    const week= await Promise.all(
    
        locatorss.map(async(weeks)=>{
           return await weeks.innerText()
           

        })
    )
    console.log(week)
    await expect(week).toContain("Sunday");
})

test("String Reverse", async()=>{
    const name= "hareesh"
    let Reverse=""
    for( let i=name.length-1;i>=0;i--){
        
        Reverse += name[i]

    }
    console.log(Reverse)

    // another built in method
    const string_name= "Tech"
    let reversed= name.split("").reverse().join()
    console.log(reversed)
    /* output:  h,s,e,e,r,a,h
    */

    // Split method
    const message= "Hello User, Well Come back"

    let msg= message.split(",")
    console.log(msg)
    
    const name22= "Hareesh Rakesh Bharath Vinay Sunil"
    let names= name22.split(" ")
    console.log(names)
    const Vname= "Hareesh"
    if(names.includes(Vname)){
        console.log(`${Vname} Found`)
    }
    else{
        console.log(`${Vname} notFound`)
    }


})




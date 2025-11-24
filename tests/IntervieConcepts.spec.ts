import {test, Page, expect} from "@playwright/test"

// Alerts handling

test("handling Alerts",async({page})=>{

   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog",async(dialog)=>{
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toEqual("I am a JS Alert")
        await dialog.accept();
    })

    await page.locator("//button[contains(text(),'Click for JS Alert')]").click();
    await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")

     await page.locator("//button[contains(text(),'Click for JS Alert')]").click();
    await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")
})

/*

test("handling Alerts1",async({page})=>{
       await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on("dialog",async(dialog)=>{
    expect(dialog.type()).toBe("alert")
    await dialog.accept()
})
})
    */


test("handling Alerts by geving promt",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    
    page.on("dialog", async(dialog)=>{
        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt")
        await dialog.accept("hello Type Script")
    })

    await page.locator("//button[contains(text(),'Click for JS Prompt')]").click();

})

// Handling the dropdowns
test("handling_the_DropDowns",async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption("Opel")
    await page.locator("#cars").selectOption(["Saab", "Volvo"])
    await page.locator("#cars").selectOption({value:"Audi"})
})

/*test("dropdowns",async({page})=>{
    await page.locator("#car").selectOption("Opt")
    await page.locator("cars").selectOption({value:"audi"})
    await page.locator(".cars").selectOption(["adui", "Saab"])
}) */

// Handling the multiple windows or tabs
test("Windows handling",async({context})=>{ 
        const page= await context.newPage();
        page.goto("https://testpages.eviltester.com/styled/windows-test.html")
        const pagepromis=context.waitForEvent("page");
        page.locator("#gobasicajax").click();
        const newpage= await pagepromis;
        newpage.locator(".styled-click-button").click();


})

test("handling_multiple_tab",async({browser})=>{
    const context= await browser.newContext()
    const tab_A= await context.newPage()
    await tab_A.goto("https://testpages.eviltester.com/styled/windows-test.html")
    
    // saving second tab
    const [tab_B]= await Promise.all([
        context.waitForEvent("page"),
       tab_A.click("#car")

    ])
     await tab_B.waitForLoadState("load")

    const [tab_C]= await Promise.all([
        context.waitForEvent("page"),
        tab_B.click("#car2")
    ])
})

//Handling multiple tabs

test("handleMultipleTabs",async({context})=>{
    const page= await context.newPage();
    page.goto("https://testpages.eviltester.com/styled/windows-test.html")
    const newpages= context.waitForEvent("page")
    page.locator("#gobasicajax").click();
    const newpage= await newpages;
    await newpage.locator(".styled-click-button").click({button:"left"})

})

// IFrams Handling
test("Handling Frams",async({page})=>{
    await page.goto("https://testpages.eviltester.com/styled/iframes-test.html")
    const fram= await page.frameLocator("#theheaderhtml")
    await fram.locator(".page-navigation").highlight();
})



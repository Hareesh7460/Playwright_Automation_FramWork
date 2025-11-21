// Selectors in Playwright
import {expect, Page,test} from '@playwright/test'
import testData from '../../testData/addressPage.json';


test("Interview Questions",async({page})=>{
// Question no:1 What are the main types of selectors in Playwright?
    /* Answer: We use following 3 selectios
                1. CSS
                2. Xpath
                3. Role based selectors( GetBytext, GetByLable)
                */

        // Example Program:
        
    page.click(".Name")  //CSS
    page.locator("xpath").fill("this is xpath selector");
    page.getByLabel("details of rolebased").click(); 

//Questions no :2 Difference between page.locator() and page.$()? 
  /* Answer: Page.Locator -- have auto wait, retires and it can intract with multiple times
             page.$ ---- Element handel, and manual waits needed
             */
    //Example: 
    const button = page.locator('#submit');
    await button.click(); 

// Question no: 3 How to wait for dynamic elements like loader/spinner?

//Example:
await page.locator(".loader").waitFor({state:"hidden"})
await page.locator('#nextBtn').click();

//Question no: 4  Type a function that clicks element only if visible

//Example:
const Locator= page.locator("xpath");

if(await Locator.isVisible()){
    await Locator.click()
}

// Question no: 5 Explain Hooks
test.beforeAll("I'm beforAll",({page})=>{
    console.log("Im before All Hook:  I will execute before all test")

})

test.afterAll("I'm after",({page})=>{
    console.log("I'm afterall hook: ' I will execute after all test")
})

test.beforeEach("I'm beforeEach",({page})=>{
    console.log("I'm beforeEach: ' I will execte before each test")
})

// Question: 6 Assertions Types

test("Assertions",({page})=>{
   expect("hello").toBe("hello") // this will help to validate the value by comparling the both expected and actual
   expect("User").not.toBe("Hello") // 
    const locator = "name"

 expect(page.locator("user")).toBeVisible();
 expect(page.locator("xpath")).toBeHidden() // .not.toBeHidden()

expect(page.locator("xpath")).toBeChecked() // .not.toBeChecked()

 expect(page.locator("xpath")).toBeDisabled() // .not.toBeDisabled()

expect(page.locator("xpath")).toBeEditable() // .not.toBeEditable()

// expect(locator).toBeEmpty() // .not.toBeEmpty()

// expect(locator).toBeEnabled() // .not.toBeEnabled()

// expect(locator).toBeFocused() // .not.toBeFocused()

// expect(locator).toHaveAttribute(name, value) // .not.toHaveAttribute()

// expect(locator).toHaveClass(value) // .not.toHaveClass()

// expect(locator).toHaveCount(number)

// expect(locator).toHaveCSS(name, value)

// expect(locator).toHaveId(value)

// expect(locator).toHaveJSProperty(name, value)

// expect(locator).toHaveText(text) / .not.toHaveText()

// expect(locator).toContainText(text) / .not.toContainText()

// expect(locator).toHaveValue(value) / .not.toHaveValue()
   
})

// Question no: 7 ️⃣ Test Data
// Answer: 	JSON, CSV, or .env files

//await page.fill('#username', testData.validUser.username);



// Questions: 8  ️ Real-World Scenario (Loader + iFrame + Dropdown)

const fram= page.frameLocator("xpatha")
await fram.locator("xpath").click();
await fram.locator("xaptha").waitFor({state:"hidden"})
await fram.locator("dropdwon xpath").selectOption({label:"option2 "})
await fram.locator("xpath for submit button in from").click()

})
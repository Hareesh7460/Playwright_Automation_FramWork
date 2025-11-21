import { expect,test } from "playwright/test";

test("handlingNew_Windowds",async({context})=>{
    const page = await context.newPage();
    await page.goto("https://testpages.eviltester.com/styled/windows-test.html");
    // WAITING for page loaded and validating the page
    await page.waitForLoadState('load');
    await expect(page).toHaveTitle("Windows Example Test");

    /* here the step will wait until new tab opened.
     and this step will excuted after performed clicks action for new window */

    const upcomingpage= context.waitForEvent("page");

    // Clicking a link for new tab open
    await page.locator("#gobasicajax").click();

    // Now im storing the upcoming window in to a variable

    const newTab = await upcomingpage;
    await newTab.locator("//input[@type='submit']").click();



})
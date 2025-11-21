import {test,expect} from '@playwright/test'
/* Describe(): this will be describe a group of Test
*/


test.beforeAll(async()=>{
    console.log("I'm before all test");

})

test.beforeEach(async()=>{
    console.log("I'm before each")
    
})

test.afterAll(async()=>{
    console.log("I'm after all")
})

test.afterEach(async()=>{
    console.log("I'm after Each");
})


test.describe("describe annotation",()=>{
test("annotation prc1",async({page})=>{
 
    console.log("I'm 1st annotation");


})

test("annotation prc2",async({page})=>{
 
    console.log("I'm 2nd annotation");


})
})

/* test only(): this will execute only that particular test which is marked on as testannotation only

*/

test("annotation prc3",async({page})=>{
    console.log("I'm 3rd annotation");
})

/* Skip(): this annotation will skip the specific function or test() and we can use for group test also after describe annotation we need put .skip
*/
test.skip("annotation prc4",async({page})=>{
 
    console.log("I'm 4th annotation");


})

/* Test Fixme(): this will be like as skip but here we go to know with is not completed or there are bugs, so that need to be fixed untill this will not executed

*/
test("annotation prc5",async({page})=>{
 
    console.log("I'm 5th annotation");


})

/* Test Slow(): This will make test will runs slow as 3timmes of timeouts
*/

test("annotation prc6",async({page})=>{
    test.slow();
    console.log("I'm 6th annotation");


})
/* Set Timeout: This will changing the timeout for the currenctly running test, Zero means no timeout
*/

test("annotation prc7",async({page})=>{
    test.setTimeout(2000);
 
    console.log("I'm 7th annotation");


})

/* Test Fail(): this annotation will help to fail any test cases or grop of tests intentationally 
*/

test.fail("annotation prc8",async({page})=>{
 
    console.log("I'm 8th annotation");


})
test("annotation prc9",async({page})=>{
 test.fail();
    console.log("I'm 9th annotation");


})
/* skip the test using browser specific():
*/
test("annotation prc10",async({page,browserName})=>{
    test.skip(browserName='chromium');
 
    console.log("I'm 10th annotation");


})
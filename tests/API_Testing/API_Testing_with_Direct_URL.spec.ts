import {request, test, expect } from "@playwright/test"

let reqest_context3:any
test.beforeAll("Storing the Base URL into the beforeTest",async()=>{
  reqest_context3= await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com/"
  });
});


// Using request in the function
test("API testing 1",async({request})=>{

  const response1=  await request.get("https://restful-booker.herokuapp.com/booking")
  console.log(await response1.json());
})



// Using " Request " by importing from playwring 

test( "API testing 2", async()=>{
  const reqest_context= await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com/"
  });

  const response2 = await reqest_context.get("/booking")
  console.log(await response2.json())

})

// Using before test URL from before test fuction

test("API testing 3", async()=>{
  const response3= await reqest_context3.get("/booking")
  console.log(await response3.json())
})


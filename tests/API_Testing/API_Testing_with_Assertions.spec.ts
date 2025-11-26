// import {test, expect, request} from "@playwright/test"

// let req_context2:any
// test.beforeAll("API testing Base URL",async()=>{
//     req_context2= await request.newContext({
//         baseURL: "https://restful-booker.herokuapp.com"
//     })
// })


// test("API_testing_Assertions",async()=>{

//    const respo= await req_context2.get("/booking/770")
// // Here is the Assertion for status code
//   // expect(respo.status()).toBe(200);
//    expect(respo.ok()).toBeTruthy
//    console.log(await respo.json())
//    // Assertion for response
//    const body = await respo.json()
//    expect(body).toMatchObject({
// "firstname": "John",
//     "lastname": "Smith",
//     "totalprice": 111,
//     "depositpaid": true,
//     "bookingdates": {
//         "checkin": "2018-01-01",
//         "checkout": "2019-01-01"
//     },
//     "additionalneeds": "Breakfast"

//    })



// })

// test("API Assertions",async()=>{
    
//     const respo2= await req_context2.get("/booking/1289")

//    // expect(respo2.status()).toBe(200)

//     const body2= await respo2.json()
//     expect(body2).toMatchObject({

//     "firstname": "Josh",
//     "lastname": "Allen",
//     "totalprice": 111,
//     "depositpaid": true,
//     "bookingdates": {
//         "checkin": "2018-01-01",
//         "checkout": "2019-01-01"go
//     },
//     "additionalneeds": "super bowls"


//     })

// })
// test("API testing", async({request})=>{
//     const response = await request.get("https://api.demoblaze.com/entries")
//     const jsonresponse= await response.json()

//     console.log(jsonresponse.Items[0].desc)
// })
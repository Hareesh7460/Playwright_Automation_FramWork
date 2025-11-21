import {expect, request, test} from "@playwright/test"

let respo_Context:any
test.beforeAll("Pull_Request_before_Test",async()=>{
    respo_Context= await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            "Content-Type":"application/json"
        }
    })
})

test("pull_Request",async()=>{
    const response= await respo_Context.post("/Booking",
        {
            data:{
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }
    )
    const response_Json= await response.json()
    console.log(response_Json)
    // Assertions
    expect(response_Json.booking).toMatchObject({
        
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast" 

    })

})
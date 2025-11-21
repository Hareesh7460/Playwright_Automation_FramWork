import{request, test} from "@playwright/test"

let reqestContect12:any
test.beforeAll("BaseURL_in_API_Request",async()=>{
     reqestContect12 = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com/",
        extraHTTPHeaders:{
            accept:'application/json'
        }
    })
})

test("API_testing_with_header",async()=>{
     const response1 = await reqestContect12.get("/booking")
   console.log(await response1.json()) 
})

// Passing path paramenter 

test("API_testing_with_Path",async()=>{
   const respo2= await reqestContect12.get("/booking/2")
   console.log(await respo2.json())
})

//Passing Query Parameter passing it in URL
/*Fisrt way to impliment
*/
test("API_Testing_Query_Parameter",async()=>{
    const respo3= await reqestContect12.get("/booking?firstname=Mary&lastname=Ericsson")
    console.log(await respo3.json())
})

/* 
Secound way to impliment
*/
test("API_Testing", async()=>{
    const respo4= await reqestContect12.get("/booking",{
        params:{
            firstname:"Eric",
            lastname:"Jackson"
        }
    })
    console.log(await respo4.json())

})


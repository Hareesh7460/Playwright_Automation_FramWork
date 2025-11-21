import{test, request} from "@playwright/test"

let ihcl_BaseURL:any

test("Empty_Cart_And_Base_URL",async()=>{
    ihcl_BaseURL=  await request.newContext("https://api-uatv2.tajhotels.com/cartService/v1/cart")

//Clearing the Cart before adding room to card
   const respo22= await ihcl_BaseURL.delete("empty-cart",{

   } )

})




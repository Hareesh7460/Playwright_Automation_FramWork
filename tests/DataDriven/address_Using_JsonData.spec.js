import { expect } from "playwright/test";
import userdata from "../../testData/addressPage.json"
import{ test} from "../../MyFixtures/dataDriven/addressFixtures"

test("addressFilling",async({address})=>{
    await address.openSite();
    await address.addressJourney()
    
   for(const user of userdata){
        await address.fillingAddressDetails(userdata)
        await address.save();
    }
})


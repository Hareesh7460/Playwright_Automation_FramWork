import {test as baseTest} from "@playwright/test"
import{Address} from "../../Pages/driven/Address"

type adddress={
    address:Address;
}


 export const test= baseTest.extend<adddress>({
    address: async({page},use)=>{

        const address= new Address(page);

        await use(address);

    }

 })

 export {expect} from "@playwright/test"
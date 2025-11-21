import { test as baseTest } from "playwright/test";
import {Add_New_PaymentMethod} from "../../Pages/AddPaymentMethods"

type PaymentFixtures={
 paymentMethod:Add_New_PaymentMethod;

}  


export const test=baseTest.extend<PaymentFixtures>({

    paymentMethod:async({page},use)=>{
        const paymentmethod= new Add_New_PaymentMethod(page);
        await use(paymentmethod);
        
    }

})
 
type payment={ 
    payment:Add_New_PaymentMethod
}

const test2= baseTest.extend<payment>({
    payment: async({page},use)=>{
        const paymentww = new Add_New_PaymentMethod(page)
        use(paymentww)

    }
})
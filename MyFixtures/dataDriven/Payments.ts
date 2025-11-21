import {test as baseTest} from "@playwright/test"
import{Add_New_PaymentMethod1} from "../../Pages/driven/Paymentmethods"
import paymentdata from "../../testData/payment.json"

type payments={
    payments:Add_New_PaymentMethod1;
    paymentData: typeof paymentdata;
}

export const test = baseTest.extend<payments>({

    payments:async({page},use)=>{
        const payment=new Add_New_PaymentMethod1(page);
        await use(payment);

    },
       paymentData: async ({}, use) => {
        await use(paymentdata); // <-- Here we provide the JSON data
    }

})
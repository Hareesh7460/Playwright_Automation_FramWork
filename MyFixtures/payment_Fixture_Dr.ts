import { Add_New_PaymentMethod12} from "../Pages/paymentmethod_Dr"
import {test as baseTest} from '@playwright/test'

type paymentdriventest={
    paymentdriven: Add_New_PaymentMethod12;
}

// export const test = baseTest.extend<paymentdriventest>({
//     paymentdriven:async({page},use)=>{
//         const paymentdriven= new Add_New_PaymentMethod12(page);
//         await use(paymentdriven);
//     }
// })

type paymentthings={
    paymentof:Add_New_PaymentMethod12;

}

const test= baseTest.extend<paymentthings>({
    paymentof:async({page},use)=>{
        const driven= new Add_New_PaymentMethod12(page);
       // await use(dr)
    }
})
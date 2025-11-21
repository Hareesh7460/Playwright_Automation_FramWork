import { expect } from "playwright/test";
import {test} from "../../MyFixtures/dataDriven/Payments"
import paymentd from "../../testData/payment.json"

test.beforeEach("openBrowser",async({payments})=>{
    await payments.openSite()
})

test("paymentMenthod",async({payments,paymentData })=>{
    await payments.add_New_PaymentMotheds(paymentData );
})

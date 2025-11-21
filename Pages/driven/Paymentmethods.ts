import {test,Locator,expect,Page} from '@playwright/test';
import paymentdata from "../../testData/payment.json"


/* 
payment method link from profileIcon : //a[contains(text(),'Payment Methods')]
verify payment page: //h3[contains(text(),'Payment Methods')]
Add new payment method: //span[contains(text(),'Add Payment Method')]
verify add new payment method screen model : //p[contains(text(),'New Payment Method')]
card details input filed : //input[@id='${ids}'] { values: "cardNumber","cardHolder", "securityCode"}
experie moth $ year: //select[@id='${id}']  {Values: "expirationMonth", "expirationYear"}
cancel button for new paymentmethod: //button[@id='cancelBtn'and @onclick]
save button for new payment method: (//button[@type='submit' and @class='btn save-btn btn-block border-radius-twenty'])[1]
*/

export class Add_New_PaymentMethod1{
    readonly page:Page
    readonly profileIcon: Locator;
    readonly paymentMethodLink: Locator;
    readonly verifyPaymentScreen: Locator;
    readonly add_New_PaymentMethodBtn: Locator 
    readonly verfyingNewPaymentMethod: Locator
    readonly cancel_button: Locator;
    readonly savebutton: Locator
    readonly cardNumber: Locator;
    readonly cardHolderName: Locator;
    readonly securityCode: Locator;
    readonly expMM: Locator;
    readonly expYY: Locator;

    constructor(page:Page){
        this.page= page;
        this.profileIcon= page.locator('//button[@class="user-profile top-header-arrow-button"]');
        this.paymentMethodLink= page.locator("//a[contains(text(),'Payment Methods')]");
        this.verifyPaymentScreen = page.locator("//h3[contains(text(),'Payment Methods')]")
        this.add_New_PaymentMethodBtn= page.locator("//span[contains(text(),'Add Payment Method')]");
        this.verfyingNewPaymentMethod=page.locator("//p[contains(text(),'New Payment Method')]");
        this.cancel_button= page.locator("//button[@id='cancelBtn'and @onclick]");
        this.savebutton= page.locator("(//button[@type='submit' and @class='btn save-btn btn-block border-radius-twenty'])[1]");
        this.cardNumber= page.locator('//input[@id="cardNumber"]');
        this.cardHolderName= page.locator("//input[@id='cardHolder' and not( @value='Ecampus')]")
        this.securityCode = page.locator("(//input[@id='securityCode'])[1]")
        this.expMM= page.locator("(//select[@id='expirationMonth' ])[1]");
        this.expYY= page.locator("(//select[@id='expirationYear' ])[1]");


    }

      async openSite(){
        await this.page.goto("https://web-dev.nonprod.ecampus.com/")
    }

        async add_New_PaymentMotheds(paymentdata:any){
            for(const data of paymentdata){
                  console.log(paymentdata,"tyyyy")
        await this.profileIcon.click();
        await this.paymentMethodLink.click();
        await expect(this.verifyPaymentScreen).toHaveText("Payment Methods");
        await this.add_New_PaymentMethodBtn.click();
        await expect(this.verfyingNewPaymentMethod).toHaveText("New Payment Method");
       
              this.cardNumber.fill(data.cNumber);
         this.cardHolderName.fill(data.cHolder);
         this.securityCode.fill(data.cSecurityCode);
         this.expMM.selectOption(data.cExpMonth);
         this.expYY.selectOption(data.cExpYear)


            }
      
    }
       
        // this.page.waitForTimeout(3000)
        //  this.cancel_button.click();
    }

    




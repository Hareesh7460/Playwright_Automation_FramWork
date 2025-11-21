import {test as baseTest} from "@playwright/test"
import {dragAndDrop} from "../Pages/dragandDrop"


type draganddrop={
    draganddrop:dragAndDrop;
}

export const test= baseTest.extend<draganddrop>({

    draganddrop:async({page},use)=>{

        const draganddrop= new dragAndDrop(page);
        await use(draganddrop)

    }

})
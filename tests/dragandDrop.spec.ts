import {test} from "../MyFixtures/dragAndDropFixture"
import { expect} from "playwright/test"


test("dragandDrop",async({draganddrop})=>{

    await draganddrop.opensite();
    await draganddrop.dragandDropfunction();

})

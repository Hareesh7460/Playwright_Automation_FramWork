import {test, Page, Expect, Locator} from "@playwright/test"
//https://demoqa.com/droppable

export class dragAndDrop{
    readonly page:Page
    readonly sourcepoint:Locator;
    readonly targetpoint: Locator;


    constructor(page:Page){
        this.page=page;
        this.sourcepoint= page.locator("//div[@id='draggable']")
        this.targetpoint=page.locator("(//div[@id='droppable']/p[contains(text(),'Drop here')])[1]")
        

    }

    async opensite(){
      await  this.page.goto("https://demoqa.com/droppable")
      await this.page.waitForLoadState("load")

    }

    async dragandDropfunction(){
        await this.sourcepoint.dragTo(this.targetpoint);
    }
}




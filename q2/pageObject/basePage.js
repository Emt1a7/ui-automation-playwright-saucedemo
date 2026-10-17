export default class BasePage{
    constructor(page){
        this.page = page;
    }

   LinkElement(element){
         return this.page.getByRole("link", { name: element})
   }

   inputElement(str){
        return this.page.getByRole("textbox", { name: str});
   }

   buttonElement(str){
     return this.page.getByRole("button", {name: str}); 
   }

   checkoutElement(str){
     return this.page.getByPlaceholder("textbox", {name: str})
   }

   
   

   async clickOnLinkElement(str){
        await this.LinkElement(str).click();
   }

   async enterDataInInputField(fieldname, inputData){
        await this.inputElement(fieldname).fill(inputData);
   }

   async clickOnButton(str){
        await this.buttonElement(str).click();
   }

   async checkout(fieldname, inputData) {
          await this.checkoutElement(fieldname).fill(inputData)
   }
   
}   
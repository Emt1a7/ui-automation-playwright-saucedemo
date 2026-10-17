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

//   const errorElement = page.get_by_text("Epic sadface: Sorry, this user has been locked out.")
   
   


   async clickOnLinkElement(str){
        await this.LinkElement(str).click();
   }

   async enterDataInInputField(fieldname, inputData){
        await this.inputElement(fieldname).fill(inputData);
   }

   async clickOnButton(str){
        await this.buttonElement(str).click();
   }
   
   async verifyError(str){
        await this.errorElement(str);
   }
}   
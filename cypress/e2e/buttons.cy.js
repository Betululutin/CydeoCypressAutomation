/// <reference types="cypress" />

describe('Context: My First Tests ',()=>{
    

    beforeEach(() => {
        
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })

    

    it('Check Different Button Actions',() => {
          // select a button with text
          cy.contains('Button 2').should('be.visible').click();
          cy.contains('Clicked on button two!').should('be.visible');


        // find element with class attribute and create a list then select 3rd element frim the list

     cy.get('.btn.btn-primary').then(($buttons) => {
     cy.wrap($buttons).eq(2).click();

      //assert the text
     cy.contains('Clicked on button three!').should('be.visible')

     })

     //you got all buttons with tagName:each method is creating me a loop
     cy.get('button').each((item,index,list) => {
       //assert lenght of the list, verify number of buttons
       expect(list).to.have.length(6);
       expect(item).to.have.attr("onclick");
     })

     //I will get all buttons like previous approach, get only the item then check for text each time. if it is equal to 
     //button 4, then click on it

     cy.get('button').each((item) => {
        if(item.text()== "Button 4"){
     cy.log(item.text()); //this command write the text at test console
      //item.lick(); you cannot use cypress click func on jQueary element you need to WRAP IT

      cy.wrap(item).click();
      cy.contains('Clicked on button four!').should('be.visible');

        }
      })

       //npx cypress run --headless -b chrome

    })


   


})
/// <reference types="cypress" />


describe("Locators",()=>{
    beforeEach(() => {
        cy.visit('/elements')
      })
      it("locating elemnts with get commands",()=>{
        //get all elemnts by tag name
      cy.get("button")

      //get elemnts by class name
      cy.get(".btn-with-class")

      //get all elemnts with specific classes
      cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

      //get all elements by id
    //   cy.get("[id='btn-with-id']")
    cy.get("#btn-with-id")

    //get all elememts by specific attribute
    cy.get("[type='submit']")

    //get all ememnts by tag name and class
    cy.get("button.Elements-btn")

    //get all elements by tagname class and id
    cy.get("button.Elements-btn#btn-with-id")

    //get all elements by  specific data test id
    //using command we make in commands.js
    cy.getByTestId("btn-id-1")

      })

      it("locationg elements with contains", ()=>{
        cy.contains("Unique Text")

        //get element by text
        cy.contains("Not Unique Text")


      })
})

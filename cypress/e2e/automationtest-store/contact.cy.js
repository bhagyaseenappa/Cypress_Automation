/// <reference types="cypress" />

import users from "../../fixtures/users.json"

describe("test the Contact Us form via Test store", () => {
    it("submit the Contact us form successfullyon the Test store", () => {

        cy.visit("https://automationteststore.com/")
        cy.contains('a', 'Contact Us').click()
        cy.get('#ContactUsFrm_first_name').type('Danial')
        cy.get('input[id="ContactUsFrm_email"]').type('abc.abc@abc.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('how to return the damaged goods')
        cy.get('button[title="Submit"]').click()
        //assert('Your enquiry has been successfully sent to the store owner!', 'Your enquiry has been successfully sent to the store owner!')
        cy.get('.contentpanel section :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!') 
    });

    // it("verify that the form has not been submitted successfully", () => {
    //     cy.visit("https://automationteststore.com/")
    //     users.forEach((user) => {
    //         cy.log(user.id)
    //         cy.log(user.name)
    //         cy.log(user.username)
    //         cy.log(user.email)
    //         cy.log(user.address.city)

    //     })
    // })


})


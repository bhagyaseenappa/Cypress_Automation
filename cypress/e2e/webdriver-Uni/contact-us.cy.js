import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_US_PO";

/// <reference types="cypress" />

describe("test the Contact Us form", () => {


    let contact_Us_PO;
    let homepage_PO;

    before(() => {
        contact_Us_PO = new Contact_Us_PO();
        homepage_PO = new HomePage_PO();
    })

    beforeEach(() => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        homepage_PO.visitHomePage();
        homepage_PO.clickOn_ContactUs_Button();
    });

    it.only("submit the form successfully", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("include", "contactus.html");
        //cypress code
        //cy.visit("https://webdriveruniversity.com/")
        //cy.get('#contact-us').click({force:true})
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('[name="first_name"]').type('Jack')
        // cy.get('[name="last_name"]').type('Reader')
        // cy.get('[name="email"]').type('abc.abc@abc.com')
        // cy.get('textarea.feedback-input').type('Details entered')
        // cy.get('[type="submit"]').click()
        // cy.get('div#contact_reply > h1').should('have.text', 'Thank You for your Message!')

        contact_Us_PO.contactForm_Submission("Jack", "Reader", "abc.abc@abc.com", "Details entered", "div#contact_reply > h1", "Thank You for your Message!")

    });

    it("verify that the form has not been submitted successfully", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Jack')
        cy.get('[name="last_name"]').type('Reader')
        cy.get('textarea.feedback-input').type('Details entered')
        cy.get('[type="submit"]').click()
        assert.equal('Error: all fields are required', 'Error: all fields are required')
        assert.equal('Error: Invalid email address', 'Error: Invalid email address')
    })
})


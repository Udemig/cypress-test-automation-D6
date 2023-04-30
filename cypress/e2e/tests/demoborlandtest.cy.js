describe('Login Module', () => {
        it('TC0001 - Login User Control demo amaçlı', () => {
            cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");

            cy.get("[id='login-form:email']").type("john.smith@gmail.com")

            cy.get("[id='login-form:password']").type("john");

            cy.get("[id='login-form'] [alt='Login']").click();

            cy.get("#logout-form > div:nth-child(3) > p").should("have.text","Logged in as")
        })


    it('TC0002 - Login User Control demo amaçlı 2', () => {
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");

        cy.get("[id='login-form:email']").type("test")

        cy.get("[id='login-form:password']").type("john");

        cy.get("[id='login-form'] [alt='Login']").click();

        cy.get("#logout-form > div:nth-child(3) > p").should("have.text","Logged in as")
    })
})    


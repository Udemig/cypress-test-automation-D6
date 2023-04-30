class MainPage{

    openWebSite(){
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");
        return this;
    }

    fillEmail(value){
        cy.get("[id='login-form:email']").type(value);
        return this;
    }

    fillPassword(){
        cy.get("[id='login-form:password']").type("john");
        return this;
    }

    loginClick(){
        cy.get("[id='login-form'] [alt='Login']").click();
        return this;
    }


    loggedInControl(){
        cy.get("#logout-form > div:nth-child(3) > p").should("have.text","Logged in as")
        return this;
    }

    signUpClick(){
        cy.get("#login-form\:signup").click();
        return this;
    }

    signUpClick(){
        cy.get("[id='login-form:signup']").click();
        return this;
    }
}

export default MainPage;
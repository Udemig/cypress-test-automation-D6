class SignUpPage{

    fillFirstName(value){
        cy.get("[id='signup:fname']").type(value);
        return this;
    }
}

export default SignUpPage;
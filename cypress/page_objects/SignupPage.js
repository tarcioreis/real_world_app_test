class SignupPage {

    selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        confirmPasswordField: "[name='confirmPassword']",
        signupButton: "[type='submit']"
    }

    accessSignupPage() {
        cy.visit("http://localhost:3000/signup");
    }

    userSignup(firstName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectors.firstNameField).type(firstName);
        cy.get(this.selectors.lastNameField).type(lastName);
        cy.get(this.selectors.userNameField).type(userName);
        cy.get(this.selectors.passwordField).type(password);
        cy.get(this.selectors.confirmPasswordField).type(confirmPassword);
        cy.get(this.selectors.signupButton).click();
    }

}

export default SignupPage;
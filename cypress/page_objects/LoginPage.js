class LoginPage {

    selectors = {
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        signinButton: "[type='submit']",
        invalidDataMessage: "[role='alert']"
    }

    accessLoginPage() {
        cy.visit("http://localhost:3000/signin");
    }

    login(username, password) {
        cy.get(this.selectors.userNameField).type(username);
        cy.get(this.selectors.passwordField).type(password);
        cy.get(this.selectors.signinButton).click();
    }

    checkMessageForInvalidData() {
        cy.get(this.selectors.invalidDataMessage).contains('Username or password is invalid')
    }
}

export default LoginPage
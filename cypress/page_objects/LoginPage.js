class LoginPage {

    selectors = {
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        signinButton: "[type='submit']"
    }

    accessLoginPage() {
        cy.visit("http://localhost:3000/signin");
    }

    login(userName, password) {
        cy.get(this.selectors.userNameField).type(userName);
        cy.get(this.selectors.passwordField).type(password);
        cy.get(this.selectors.signinButton).click();
    }
}

export default LoginPage
import userData from '../fixtures/userData.json'
import LoginPage from '../page_objects/LoginPage.js'
import SignupPage from '../page_objects/SignupPage.js'

const userLogin = new LoginPage();
const userSignup = new SignupPage();

describe("Fazer login com dados válidos", () => {
    it("Deve fazer login com informações válidas", () => {
        //userLogin.accessLoginPage();
        // cadastrar o usuário e depois testa o login
        userSignup.accessSignupPage();
        userSignup.userSignup(userData.validUser.firstName, userData.validUser.lastName,
                          userData.validUser.userName, userData.validUser.password,
                          userData.validUser.confirmPassword);
                          
        userLogin.login(userData.validUser.userName, userData.validUser.password);
    })
});
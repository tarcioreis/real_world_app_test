import userData from '../fixtures/userData.json'
import SignupPage from '../page_objects/SignupPage.js'

const userSignup = new SignupPage();

describe('Registro de usuário com dados válidos', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    userSignup.accessSignupPage();
    userSignup.userSignup(userData.validUser.firstName, userData.validUser.lastName,
                          userData.validUser.userName, userData.validUser.password,
                          userData.validUser.confirmPassword);
    
  })
})
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

  it.only('Não deve registrar usuário com dados inválidos', ()=> {
    userSignup.accessSignupPage();
    userSignup.userSignup(userData.invalidUserRegister.firstName,
                          userData.invalidUserRegister.lastName,
                          userData.invalidUserRegister.userName,
                          userData.invalidUserRegister.password,
                          userData.invalidUserRegister.confirmPassword
    );

  });
})
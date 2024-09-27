import pantalla from "../selectores/pantalla.js"
import mensajes from "../selectores/mensajes.js";

describe('Saucedemo', () => {
   let user_fail;
  beforeEach('login_fail', () => {
    cy.visit('/')
    cy.viewport(1100,900)
    cy.fixture('./users_fail').then(user => {
      user_fail = user;
    })
  })

  it('login_fail', () => {
    user_fail.forEach((user) => {
      cy.escribir(pantalla.login.usuario, user.usuario)
      cy.escribir(pantalla.login.clave, user.clave)	
      cy.hacer_click(pantalla.login.btn_ingresar)
      cy.asertion_texto(pantalla.login.mjs_fail, mensajes.login.msg_fail) 
    })
  })
})
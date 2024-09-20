import pantalla from "./selectores/pantalla.js"
import mensajes from "./selectores/mensajes.js";

describe('Saucedemo', () => {
   let users_blocked;
  beforeEach('login_blocked', () => {
    cy.visit('/')
    //cy.viewport(1100,900)
    cy.fixture('./users_blocked').then(user => {
      users_blocked = user;
    })
  })

  it('login_blocked', () => {
   
      cy.escribir(pantalla.login.usuario, users_blocked.usuario)
      cy.escribir(pantalla.login.clave, users_blocked.clave)	
      cy.hacer_click(pantalla.login.btn_ingresar)
     cy.asertion_texto(pantalla.login.mjs_fail, mensajes.login.msg_blocked) 
  
  })
})
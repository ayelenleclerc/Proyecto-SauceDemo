import pantalla from "../selectores/pantalla.js"
import mensajes from "../selectores/mensajes.js"

describe('Login Saucedemo.com', () => {

  let users_ok;
  before('Login ok', () => {
    cy.visit('/')
    cy.fixture('./users_ok.json').then((data) => {
      users_ok = data
    })
  })

  it('login ok de saucedemo', () => {
    users_ok.forEach((user) => {
      cy.escribir(pantalla.login.usuario, user.usuario)
      cy.escribir(pantalla.login.clave, user.clave)
      cy.hacer_click(pantalla.login.btn_ingresar)
      cy.hacer_click(pantalla.menu.icono_burger)
      cy.hacer_click(pantalla.menu.logout)
      cy.asertion_texto(pantalla.login.select_title, mensajes.login.msg_ok)
      })
    })
        
})
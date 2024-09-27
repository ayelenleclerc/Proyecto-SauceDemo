import pantalla from "../e2e/selectores/pantalla.js"

Cypress.Commands.add('login_standard_user', () => {
    cy.escribir(pantalla.login.usuario,"standard_user" )
    cy.escribir(pantalla.login.clave, "secret_sauce")	
    cy.hacer_click(pantalla.login.btn_ingresar)
})

Cypress.Commands.add('login_problem_user', () => {
    cy.escribir(pantalla.login.usuario,"problem_user" )
    cy.escribir(pantalla.login.clave, "secret_sauce")	
    cy.hacer_click(pantalla.login.btn_ingresar)
})
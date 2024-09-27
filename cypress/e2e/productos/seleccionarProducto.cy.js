describe("Seleccion de productos", () => {
    before(() => {
        cy.visit('/')
        cy.login_standard_user()
        })
    it('selecccion de producto Mochila', () => {
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
        cy.get('[data-test="item-sauce-labs-backpack-img"]').should('have.class', 'inventory_details_img')
        cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99')
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-badge"]'). should('have.text','1')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="continue-shopping"]').click()
    })

})

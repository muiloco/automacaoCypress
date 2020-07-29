/// <reference types="Cypress"/>

class BoardsPage{
    validarCaminhoUrl(){
        cy.url().should('include', '/boards')
    }
}

export default BoardsPage;
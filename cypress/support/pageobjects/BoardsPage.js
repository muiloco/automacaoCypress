/// <reference types="Cypress"/>

import BoardsElements from '../elements/BoardsElements'
const boardsElements = new BoardsElements

class BoardsPage{
    validarCaminhoUrl(){
        cy.url().should('include', '/boards')
    }

    visualizarBotaoQuadrosLateral(){
        cy.get(boardsElements.botaoQuadrosLateral())
        .should('be.visible')
        .should('contain', 'Quadros')
    }

    visualizarBotaoModelos(){
        cy.get(boardsElements.botaoModelos())
        .should('be.visible')
        .should('contain', 'Modelos')
    }

    visualizarBotaoInicio(){
        cy.get(boardsElements.botaoInicio())
        .should('be.visible')
    }
}

export default BoardsPage;
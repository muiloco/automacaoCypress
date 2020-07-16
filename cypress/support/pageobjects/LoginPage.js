/// <reference types="Cypress"/>

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage{
    acessarSite(){
        cy.visit(url)
    }

    clicarBotaoLogin(){
        cy.get(loginElements.botaoLogin()).click()
    }

    visualizarBotaoNaoConseguiuEntrar(){
        cy.get(loginElements.botaoNaoConseguiuEntrar()).should('contain', 'Não conseguiu entrar?')
    }

    visualizarBotaoCriarConta(){
        cy.get(loginElements.botaoCriarConta()).should('contain', 'Criar uma conta')
    }

    visualizarBotaoContinuarGoogle(){
        cy.get(loginElements.botaoGoogle()).should('contain', 'Continuar com o Google')
    }

    visualizarBotaoContinuarMicrosoft(){
        cy.get(loginElements.botaoMicrosoft()).should('contain', 'Continuar com a Microsoft')
    }

    visualizarBotaoContinuarApple(){
        cy.get(loginElements.botaoApple()).should('contain', 'Continuar com a Apple')
    }
}

export default LoginPage;
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
}

export default LoginPage;
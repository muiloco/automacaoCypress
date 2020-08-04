/* global Given, Then, When */
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import LoginPage from '../pageobjects/LoginPage'
import BoardsPage from '../pageobjects/BoardsPage'
const loginPage = new LoginPage
const boardsPage = new BoardsPage

Given('Acessar a pagina do Trello', () => {
    loginPage.acessarSite();
}) 

When('Acessar o Trello com uma conta valida', () => {
    loginPage.clicarBotaoLogin();
    loginPage.inserirValorLogin(Cypress.config("email"));
    loginPage.inserirValorSenha(Cypress.config("password"));
    loginPage.clicarBotaoFazerLogin();
})

Then('Visualizar se o caminho da url esta direcionando para boards', () => {
    boardsPage.validarCaminhoUrl();
})

Then('Visualizar so o botão de Quadros da Lateral esta visivel e com texto correto', () => {
    boardsPage.visualizarBotaoQuadrosLateral();
})

Then('Visualizar se o botão de Modelos esta visivel e com texto correto', () => {
    boardsPage.visualizarBotaoModelos();
})

Then('Visualizar se o botão de Inicio esta visivel', () => {
    boardsPage.visualizarBotaoInicio();
})
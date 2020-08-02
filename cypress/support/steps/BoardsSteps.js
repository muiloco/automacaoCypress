/* global Given, Then, When */

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
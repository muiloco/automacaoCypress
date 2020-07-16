/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acessar o site do Trello", () => {
    loginPage.acessarSite();
})

When("acessar tela de Login", () => {
    loginPage.clicarBotaoLogin();
})

Then("devo visualizar função de não conseguiu entrar", () => {
    loginPage.visualizarBotaoNaoConseguiuEntrar();
})

Then("devo visualizar função de criar conta", () => {
    loginPage.visualizarBotaoCriarConta();
})
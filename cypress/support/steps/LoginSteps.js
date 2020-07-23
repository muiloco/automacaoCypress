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

Then("devo visualizar função continuar com o google",() => {
    loginPage.visualizarBotaoContinuarGoogle();
})

Then("devo visualizar função continuar com o microsoft", () => {
    loginPage.visualizarBotaoContinuarMicrosoft();
})

Then("devo visualizar função continuar com o apple", () => {
    loginPage.visualizarBotaoContinuarApple();
})

When("inserir no campo email um email valido", () => {
    loginPage.inserirValorLogin("test@test.com");
})

When("inserir no campo senha uma senha valida", () => {
    loginPage.inserirValorSenha("test123");
})

When("clicar no botão Fazer login", () => {
    loginPage.clicarBotaoFazerLogin();
})

Then("devo visualizar O Texto: Quadros Pessoais", () => {
    loginPage.visualizarTexto();
})
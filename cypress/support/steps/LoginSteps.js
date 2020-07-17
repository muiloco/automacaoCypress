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

When("inserir no campo email um email não valido", () => {
    loginPage.inserirValorLogin("asdf@asdf.com");
})

When("inserir no campo senha uma senha não valida", () => {
    loginPage.inserirValorSenha("teste");
})

When("clicar no botão Fazer login", () => {
    loginPage.clicarBotaoFazerLogin();
})

Then("devo visualizar mensagem de erro: Este e-mail não tem uma conta", () => {
    loginPage.visualizarMensagemErro();
})
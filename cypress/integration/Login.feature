Feature:Funções da tela Login no Trello

    Esse teste consiste na validação de alguns cenários de validação ao logar no site do Trello
    
    Scenario: Visualizar opção de não lembrar senha
        Given acessar o site do Trello
        When acessar tela de Login
        Then devo visualizar função de não conseguiu entrar
    
    Scenario: Visualizar opção de Criar Conta
        Given acessar o site do Trello
        When acessar tela de Login
        Then devo visualizar função de criar conta

    Scenario: Visualizar opções de acesso com outras contas
        Given acessar o site do Trello
        When acessar tela de Login
        Then devo visualizar função continuar com o google
        Then devo visualizar função continuar com o microsoft
        Then devo visualizar função continuar com o apple
        
    Scenario: Acessar com a conta no Trello
        Given acessar o site do Trello
        When acessar tela de Login
        When inserir no campo email um email valido
        When inserir no campo senha uma senha valida
        When clicar no botão Fazer login
        Then devo visualizar O Texto: Quadros Pessoais
        
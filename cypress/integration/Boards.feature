Feature: Funções presentes no menu principal do Trello

    Os cenários abaixo são baseados para validar funções do menu principal do Trello

    Scenario: Validar funções do menu principal
        Given Acessar a pagina do Trello
        When Acessar o Trello com uma conta valida
        Then Visualizar se o caminho da url esta direcionando para boards
Feature: Caixa de Comentários
  Como um leitor que gosta de debater
  Quero deixar minha opinião em uma notícia
  Para interagir com outros leitores

  Scenario: Adicionar um comentário com sucesso
    Given que eu estou visualizando uma notícia detalhada
    When eu preencho o campo de comentário com "Excelente análise sobre o tema!"
    And clico no botão "Enviar Comentário"
    Then meu comentário deve ser exibido na lista de discussões abaixo do post
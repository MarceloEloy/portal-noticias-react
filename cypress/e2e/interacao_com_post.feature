Feature: Interação com o Post
  Como um usuário engajado
  Quero abrir uma notícia detalhada e poder curti-la
  Para demonstrar apoio ao conteúdo

  Scenario: Entrar em um post e clicar no botão curtir
    Given que eu estou na página inicial do portal de notícias
    When eu clico no primeiro cartão de notícia disponível
    Then eu devo ser redirecionado para a página detalhada da notícia
    When eu clico no botão "Curtir"
    Then o contador de curtidas deve ser incrementado
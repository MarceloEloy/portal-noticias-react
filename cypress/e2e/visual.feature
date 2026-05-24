Feature: Identidade Visual e Responsividade
  Como um leitor do portal
  Quero que a interface seja limpa, acessível e responsiva
  Para ler as notícias confortavelmente em qualquer dispositivo

  Background:
    Given que eu estou na página inicial do portal de notícias

  Scenario: Validar elementos fixos da identidade visual
    Then o cabeçalho deve exibir o título "Portal de Notícias"
    And o rodapé deve exibir o texto de copyright com o ano "2025"

  Scenario: Validar comportamento responsivo no celular
    When eu altero o tamanho da tela para um celular "iphone-xr"
    Then o menu de navegação deve se adaptar ao layout mobile
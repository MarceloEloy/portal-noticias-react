Feature: Busca de Notícias
  Como um leitor do portal
  Quero pesquisar por termos específicos
  Para encontrar notícias do meu interesse rápido

  Background:
    Given que eu estou na página inicial do portal de notícias

  Scenario: Buscar por uma notícia existente
    When eu digito "Tecnologia" no campo de pesquisa
    Then eu devo ver os cartões de notícias relacionados a "Tecnologia"

  Scenario: Navegar para a página de contato
    When eu clico no link de navegação "Contato"
    Then a URL deve conter "/contato"
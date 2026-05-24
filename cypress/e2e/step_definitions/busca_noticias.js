import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Contexto
Given("que eu estou na página inicial do portal de notícias", () => {
  cy.visit("/");
});

// Cenário 1: Busca
When("eu digito {string} no campo de pesquisa", (termo) => {
  // Encontra o input baseado no placeholder definido na sua SearchBar.jsx
  cy.get('input[placeholder="Pesquisar notícias..."]')
    .should("be.visible")
    .type(termo);
});

Then("eu devo ver os cartões de notícias relacionados a {string}", (termo) => {
  // Valida se os NewsCard exibidos contêm o termo pesquisado (na categoria ou título)
  cy.get(".card").each(($card) => {
    cy.wrap($card).should("contain.text", termo);
  });
});

// Cenário 2: Navegação pelo Header
When("eu clico no link de navegação {string}", (linkTexto) => {
  // Procura pelo link dentro da estrutura do seu Header.jsx
  cy.get(".menu a").contains(linkTexto).click();
});

Then("a URL deve conter {string}", (urlEsperada) => {
  cy.url().should("include", urlEsperada);
});
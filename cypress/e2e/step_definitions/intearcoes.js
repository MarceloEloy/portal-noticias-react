import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Passos de Interação com o Post
When("eu clico no primeiro cartão de notícia disponível", () => {
  cy.get(".link-noticia").first().click();
});

Then("eu devo ser redirecionado para a página detalhada da notícia", () => {
  cy.url().should("match", /\/noticia\/\d+/);
});

When("clico no botão {string}", (textoBotao) => {

  cy.contains("button", textoBotao, { matchCase: false }).should("be.visible").click();
});

Then("o contador de curtidas deve ser incrementado", () => {
  cy.contains("button", "Curtir 1").should("be.visible");
});

// Passos de Comentários
Given("que eu estou visualizando uma notícia detalhada", () => {
  cy.visit("/noticia/1");
});

When("eu preencho o campo de comentário com {string}", (comentarioTexto) => {
  cy.get('textarea[placeholder="Escreva seu comentário..."]')
    .should("be.visible")
    .type(comentarioTexto);
});

Then("meu comentário deve ser exibido na lista de discussões abaixo do post", () => {
  cy.contains("Excelente análise sobre o tema!").should("be.visible");
});
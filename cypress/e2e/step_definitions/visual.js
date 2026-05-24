import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("o cabeçalho deve exibir o título {string}", (tituloEsperado) => {
  cy.get(".header h1.logo").should("have.text", tituloEsperado);
});

Then("o rodapé deve exibir o texto de copyright com o ano {string}", (ano) => {
  cy.get(".footer p").should("contain.text", `© ${ano} - Mundo Notícias`);
});

When("eu altero o tamanho da tela para um celular {string}", (dispositivo) => {
  cy.viewport(dispositivo);
});

Then("o menu de navegação deve se adaptar ao layout mobile", () => {
  cy.get(".menu").should("be.visible");
});
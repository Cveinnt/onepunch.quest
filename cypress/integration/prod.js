// need to disable service worker as it caches the page and this breaks Cypress
Cypress.on("window:before:load", (window) => {
  delete window.navigator.__proto__.ServiceWorker;
});

describe("Check if production data available", () => {
  it("Load the app", () => {
    cy.visit("/");

    cy.contains("ONE PUNCH");
  });

  it("Choose the training level based on input", () => {
    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("2"); // (0 25]: beginner
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("11");

    cy.clearLocalStorage();
    cy.visit("/");

    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("50"); // (25 70]: intermediate
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("24");

    cy.clearLocalStorage();
    cy.visit("/");

    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("75"); // (70, inf): advanced
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("43");
  });
});

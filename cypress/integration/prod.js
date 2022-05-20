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
    cy.get('input[type="number"]').type("2"); // (0 39]: level 1
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("11");

    cy.clearLocalStorage();
    cy.visit("/");

    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("40"); // (39, 59]: level 2
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("15");

    cy.clearLocalStorage();
    cy.visit("/");

    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("300"); // (200, inf): level 10
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("53");
  });
});

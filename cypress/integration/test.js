// need to disable service worker as it caches the page and this breaks Cypress
Cypress.on("window:before:load", (window) => {
  delete window.navigator.__proto__.ServiceWorker;
});

describe("Initialize the app", () => {
  it("Load the app", () => {
    cy.visit("/");

    cy.contains("ONE PUNCH");
  });

  it("Choose the training level based on input", () => {
    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("10"); // (0 39]: level 1
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("10");

    cy.clearLocalStorage();
    cy.visit("/");

    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("50"); // (40 59]: level 2
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("20");

    cy.clearLocalStorage();
    cy.visit("/");

    cy.contains("Ok, let's start").click();
    cy.get('input[type="number"]').type("75"); // (60 79]: level 3
    cy.contains("Ok, what's next?").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("30");
  });
});

describe("Do the workout", () => {
  it("Pass the workout", () => {
    localStorage.page = "Home";
    localStorage.level = 1;

    cy.visit("/");
    cy.contains("Start next training").click();
    cy.contains("Perform 10 push-ups");
    cy.contains("I made it").click();
    cy.get(".training-number").contains("2");
    cy.contains("I made it").click();
    cy.get(".training-number").contains("2");
    cy.contains("I made it").click();
    cy.get(".training-number").contains("2");
    cy.contains("I made it").click();
    cy.contains("Nice");
    cy.contains("It was ok").click();
    cy.get(".sidebar-info li:nth-child(1)").contains("10");
    cy.get(".sidebar-info li:nth-child(2)").contains("20");
    cy.get(".sidebar-info li:nth-child(3)").contains("2");
    cy.contains("Start next training").click();
    cy.wait(300).contains("I made it").click();
    cy.wait(300).contains("I made it").click();
    cy.wait(300).contains("I made it").click();
    cy.wait(300).contains("I made it").click();
    cy.contains("It was hard").click();
    cy.get(".sidebar-info li:nth-child(1)").contains("20");
    cy.get(".sidebar-info li:nth-child(2)").contains("20");
    cy.get(".sidebar-info li:nth-child(3)").contains("2");
    cy.contains("Start next training").click();
    cy.contains("I made it");
    cy.get(".menu-toggle").last().click();
    cy.contains("Cancel this training").click();
    cy.contains("Yes").click();
    cy.get(".sidebar-info li:nth-child(1)").contains("20");
    cy.get(".sidebar-info li:nth-child(2)").contains("20");
    cy.get(".sidebar-info li:nth-child(3)").contains("2");
    cy.contains("Start next training").click();
    cy.contains("I made it").click();
    cy.contains("Skip the wait").click();
    cy.contains("I made it");
  });

  it("Repeats the last training available", () => {
    localStorage.page = "Training";
    localStorage.set = 2;
    localStorage.currentStep = 1;
    localStorage.congratsShown = true;

    cy.visit("/");

    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("It was ok").click();
    cy.get(".sidebar-info li:nth-child(3)").contains("3");
    cy.contains("Start next training").click();
    cy.contains("I made it");
  });

  it("Doesn't show congratulations after 100 sit-ups when it was too hard", () => {
    localStorage.page = "Training";
    localStorage.set = 10;
    localStorage.currentStep = 1;
    localStorage.removeItem("congratsShown");

    cy.visit("/");

    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("It was hard").click();
    cy.get(".sidebar-info li:nth-child(3)").contains("10");
  });

  it("Shows congratulations after 100 sit-ups", () => {
    localStorage.page = "Training";
    localStorage.set = 10;
    localStorage.currentStep = 1;
    localStorage.removeItem("congratsShown");

    cy.visit("/");

    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("I made it").click();
    cy.contains("It was ok").click();
    cy.contains("Hey there, you just did");
    cy.contains("Thanks!").click();
    cy.get(".sidebar-info li:nth-child(3)").contains("10");
  });
});

describe("Menu", () => {
  it("Opens menu", () => {
    cy.get(".menu-toggle").last().click();
    cy.contains("App created by Vincent Wu");
  });

  it("Closes menu", () => {
    cy.get(".menu-overlay").click();
  });

  it("Manual training level setting", () => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get(".menu-toggle").click();
    cy.contains("Change level").click();
    cy.contains("Set your level to:").next().select("2");
    cy.contains("Accept").click();
    cy.get(".sidebar-info li:nth-child(2)").contains("20");
    cy.get(".sidebar-info li:nth-child(3)").contains("2");
  });

  it("Instructions", () => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get(".menu-toggle").click();
    cy.contains("Instructions").click();
    cy.contains("How should I start?");
    cy.contains("Back").click();
  });

  it("Change language", () => {
    cy.contains("Change language").click({ force: true });
    cy.contains("Set your language to:").next().select("中文");
    cy.contains("Accept").click();
    cy.contains("一拳");
  });

  it("Reset the app", () => {
    localStorage.page = "Home";
    localStorage.level = 1;
    localStorage.set = 1;

    cy.visit("/");
    cy.get(".menu-toggle").click();
    cy.contains("Reset the app").click();
    cy.contains("I am sure").click();

    cy.contains("ONE PUNCH");
  });
});

describe("News", () => {
  it("Does not show the news for new user", () => {
    localStorage.lastActive = 5555;
    localStorage.page = "Home";

    cy.visit("/");
    cy.get(".infoPopup-content").should("not.exist");
  });

  it("Shows the news for active user", () => {
    localStorage.lastActive = 5555;
    localStorage.page = "Home";
    localStorage.situpsTotal = 5;

    cy.visit("/");
    cy.get(".infoPopup-content").should("be.visible");
  });

  it("Closes the news popup", () => {
    cy.get(".infoPopup-action").click();
    cy.get(".infoPopup-content").should("not.exist");
  });
});

describe("User interface", () => {
  it("Shows the training idicator", () => {
    localStorage.page = "Training";
    localStorage.level = 1;
    localStorage.set = 1;

    cy.visit("/");
    cy.get(".sidebar-info-indicator").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, 0, 61)"
    );
    cy.contains("I made it").click();
    cy.wait(300);
    cy.get(".sidebar-info-indicator").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, 0, 122)"
    );
  });
});

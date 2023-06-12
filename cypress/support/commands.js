Cypress.Commands.add("search", (sel, input) => {
  cy.get(sel).type(input, { delay: 100 });
  cy.get(sel + " button").click();
});
Cypress.Commands.add("validateLinkStatus", { prevSubject: true }, (subject) => {
  const url = subject.prop("href");
  if (Cypress._.isString(url) && !Cypress._.isEmpty(url)) {
    cy.request({
      method: "HEAD",
      url,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  }
});

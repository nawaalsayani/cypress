import {headings} from '../../fixtures/headings.json';

const sizes = ['iphone-x', 'ipad-mini', [1024, 768]];

describe('Wiki Main Page Smoke Test', () => {
    beforeEach(() => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');
    });
    sizes.forEach((size) => {
        it(`Validate main page shows correct information on ${size} view`, () => {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
              } else {
                cy.viewport(size)
              }
            // Add assertions to verify that the main page is loaded with the expected results
            cy.get("[id='mp-welcome']").should('contain', headings.title);
            cy.get("[id='mp-tfa-h2']").should('contain', headings.tfa);
            cy.get("[id='mp-itn-h2']").should('contain', headings.itn);
            cy.get("[id='mp-dyk-h2']").should('contain', headings.dyk);
            cy.get("[id='mp-otd-h2']").should('contain', headings.otd);
            cy.get("[id='mp-tfl-h2']").should('contain', headings.tfl);
            cy.get("[id='mp-tfp-h2']").should('contain', headings.tfp);
        })
    }),
    it('Validate search input', () => {
        // Validate search input is working as expected
        cy.search("[id='searchform']",'Cypress (software)');
        cy.url().should('include', '/wiki/Cypress_(software)');
        // Add assertions to verify that the search results page is loaded with the expected results
        cy.get('.firstHeading').should('have.text', 'Cypress (software)');
        cy.get("[id='mw-content-text']").should('contain', 'Cypress is a frontend testing tool');
    })
    it('Move menu options to sidebar', () => {
        cy.get('[id="vector-main-menu-dropdown"]').click();
        cy.get('[id="vector-main-menu"]').should('contain', 'move to sidebar');
        // Validate the options have been moved to the sidebar
        cy.get('[id="vector-main-menu"]').should('contain', 'About Wikipedia');
    })
    it('Validate all the links on the main page', () => {
        cy.get('a').each((link) => {
        cy.wrap(link).validateLinkStatus();
        });
    });
})
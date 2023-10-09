describe('Static React Website E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cj_dot_com'); // Update URL as needed
  });

  it('Loads the homepage and verifies the title', () => {
    cy.title().should('eq', 'CJs Website');
  });

  
  it('Tests website responsiveness', () => {
    cy.viewport(320, 480); //Test mobile view
    // TODO: Add assertions for mobile layout

    cy.viewport(1024, 768); // Test tablet view
    // Add assertions for tablet layout

    cy.viewport(1440, 900); // Test desktop view
    // TODO: Add assertions for desktop layout
  });

  it('Verifies the presence of key elements', () => {
    cy.get('nav').should('exist');
    cy.get('#about').should('exist'); //looks for id='about'
    cy.get('footer').should('exist');

    // TODO: Add more element checks as needed.
  });

});

describe('Realizar Logout da pagina', () => {
  it('deve realizar o logout da pagina', () => {
    cy.visitPage();
    cy.url().should('include', '/login');
    cy.logoutPage();
  });
});
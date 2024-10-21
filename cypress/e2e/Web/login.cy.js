
describe('Navegação para a pagina front.serverest', () => {
  it('deve visitar a página de login', () => {
    cy.visitPage('uri'); // Visita a página de login
    
    // Verificações após visitar a página
    cy.url().should('include', '/home');
    cy.contains('h1','Serverest Store');
  });
});

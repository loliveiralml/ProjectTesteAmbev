
describe('Pesquisa Produto', () => {
  it('deve visitar a página e pesquisar um produto', () => {
    cy.visitPage();
    cy.pesquisarproduto();
    cy.verificaproduto();
    
  });
});

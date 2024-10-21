
describe('selecionar Produto', () => {
  it('deve visitar a página e selecionar um produto', () => {
    cy.visitPage();
    cy.selecionarproduto();
    cy.url().should('include', '/carrinho');
    cy.contains('h1','Em construção aguarde')
    
  });
});

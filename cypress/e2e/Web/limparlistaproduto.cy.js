
describe('Limpar Lista Produto do carrinho', () => {
  it('deve adicionar produto no carrinho e apos limpar produto do carrinho', () => {
    cy.visitPage();
    cy.selecionarproduto();
    cy.listacompras();
    cy.url().should('include', '/minhaListaDeProdutos');
    cy.contains('h1','Lista de Compras')
    cy.limparproduto().wait(3000);
    cy.get('[data-testid="shopping-cart-empty-message"]').should('text','Seu carrinho está vazio')
  });
});

Cypress.Commands.add('visitPage', (pageName) => {
    cy.fixture('parm').then((parm) => {
      
        cy.visit(parm.uri);
        cy.get('[data-testid="email"]').type(parm.email);
        cy.get('[data-testid="senha"]').type(parm.password);
        cy.get('[data-testid="entrar"]').click();
     
      });
    });

    Cypress.Commands.add('logoutPage', (pageName) => {
        cy.fixture('parm').then((parm) => {
            cy.get('[data-testid="logout"]').should('be.visible').click();
         
          });
        });
    

    Cypress.Commands.add('pesquisarproduto', (pageName) => {
        cy.fixture('parm').then((parm) => {
            cy.get('[data-testid="pesquisar"]').type(parm.prodpesquisa);
            cy.get('[data-testid="botaoPesquisar"]').click();
         
          });
        });
        Cypress.Commands.add('verificaproduto', (pageName) => {
            cy.fixture('parm').then((parm) => {
                cy.get('.card-title').contains(parm.prodpesquisa)
             
              });
            });

        Cypress.Commands.add('selecionarproduto', (pageName) => {
            cy.fixture('parm').then((parm) => {
                cy.get('.card-title').contains(parm.selectproduto)
                cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();
                cy.get('[data-testid="adicionar carrinho"]').click();
                        
             });
            });
            Cypress.Commands.add('limparproduto', (pageName) => {
                cy.get('[data-testid="limparLista"]').click();
                            
                 
                });
                Cypress.Commands.add('listacompras', (pageName) => {
                    cy.get('[data-testid="lista-de-compras"]').click();
                                
                     
                    });
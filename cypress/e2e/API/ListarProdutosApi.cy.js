import {
  expect
} from 'chai';
import parmprodutos from './Elementos/parmprodutos'
import parameters from './Elementos/parameters'

const parm = new parmprodutos;
const parms = new parameters;

describe('Listar produtos via API Post', () => {
  it('Deve enviar dados de produto para a API e retornar status 200', () => {
    const requestBody = {
   
      "nome": parmprodutos.nome,
      "preco": parmprodutos.preco,
      "descricao": parmprodutos.descricao,
      "quantidade": parmprodutos.quantidade,
      "_id": parmprodutos._id
    }

    cy.request({
      method: 'GET',
      url: (parms.baseUri + '/produtos'),
      parameters: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
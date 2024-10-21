import { expect } from 'chai';
import parmcadclientes from './Elementos/parmcadclientes'
import parameters from './Elementos/parameters'

const parm = new parmcadclientes;
const parms = new parameters;
describe('Cadatrar novo usuário via API Post', () => {
  it('Deve enviar dados de cadastro de novo usuário para a API e retornar status 200', () => {
    const requestBody = {
      "nome": parm.nome, 
      "email": parm.email, 
      "password": parm.password,
      "administrador": parm.administrador
    }

    cy.request({
      method: 'POST',
      url: (parms.baseUri + '/usuarios'),
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.body.message).eq("Cadastro realizado com sucesso");
      expect(response.status).to.eq(201);
    });
  });
});
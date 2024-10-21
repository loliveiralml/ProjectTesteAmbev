import {  expect} from 'chai';
import parmclientes from './Elementos/parmclientes'
import parameters from './Elementos/parameters'

const parm = new parmclientes;
const parms = new parameters;

describe('Login via API Post', () => {
  it('Deve enviar dados de login para a API e retornar status 200', () => {
    const requestBody = {
      "nome": parm.nome,
      "email": parm.email,
      "password": parm.password,
      "administrador": parm.administrador,
      "_id": parm._id
    }

    cy.request({
      method: 'GET',
      url: (parms.baseUri + '/usuarios'),
      parameters: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
import { expect } from 'chai';
import parameters from './Elementos/parameters'

const parm = new parameters;

describe('Login via API Post', () => {
  it('Deve enviar dados de login para a API e retornar status 200', () => {
    const requestBody = {
      "email": parm.email, 
      "password": parm.password
    }

    cy.request({
      method: 'POST',
      url: parm.baseUrapi,
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.body.authorization).contain('Bearer ');
      expect(response.body.message).eq("Login realizado com sucesso");
      expect(response.status).to.eq(200);
    });
  });
});

describe('Falha de Login via API Post', () => {
  it('Deve falhar o login na API e retornar status 400', () => {
    const requestBody = {
      "email": parm.email, 
      "password": parm.erropassword
    }

    cy.request({
      method: 'POST',
      url: parm.baseUrapi,
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      },failOnStatusCode: false,
    }).then((response) => {
      expect(response.body.message).eq('Email e/ou senha inválidos');
      expect(response.status).to.eq(401);
    });
  });
});

describe('Falha de Login sem envio das credenciais via API Post', () => {
  it('Deve falhar o login na API por falta de credenciais e retornar status 400', () => {
    const requestBody = {
      "email": "", 
      "password": ""
    }

    cy.request({
      method: 'POST',
      url: parm.baseUrapi,
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      },failOnStatusCode: false,
    }).then((response) => {
      expect(response.body.email).eq('email não pode ficar em branco');
      expect(response.body.password).eq('password não pode ficar em branco');
      expect(response.status).to.eq(400);
    });
  });
});
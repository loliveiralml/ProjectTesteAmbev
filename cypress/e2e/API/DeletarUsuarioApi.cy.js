import {
  expect
} from 'chai';
import parmcadclientes from './Elementos/parmcadclientes'
import parameters from './Elementos/parameters'


const parm = new parmcadclientes;
const parms = new parameters;
let  requestBody = {
  "nome": parm.nome,
  "email": parm.email,
  "password": parm.password,
  "administrador": parm.administrador
}
let saida;


describe('Deletar usuário via API Post', () => {
    it('Identificar dados de cadastro de usuário para realizar a deleção', () => {
    
    cy.request({
      method: 'GET',
      url: (parms.baseUri + '/usuarios'),
      parameters: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const valorId = (response.body.usuarios);
      const idEncontrado = valorId.find(nome => nome.nome === requestBody.nome);
      
      
      saida = idEncontrado._id;
       
      
      cy.log('retonrno log1: ', valorId);
      cy.log('retonrno log2: ', idEncontrado._id);
      cy.log('retonrno log3: ', saida);
      
    });
  });

  it('Deve deletar do cadastro  usuário para a API e retornar status 200', () => {
   
    cy.request({
      method: 'DELETE',
      url: (parms.baseUri + '/usuarios/'+saida),
      parameters: saida,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      //expect(response.body.message).eq("Cadastro realizado com sucesso");
      expect(response.status).to.eq(200);
      cy.log('retonrno log1: ', saida);
    });
  });
});
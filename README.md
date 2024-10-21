
Autmatização de casos de testes Web e API , utilizando Cypress.

🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Passso a passo Inicialização : 

1- Criar uma pasta para o projeto .
2- Clonar o projeto a partir desta branch.
3- Executar o comando "npm install cypress" adiciona  a sessão de dependencias do projeto.
4- Executar o comando "npx cypress install" se ocorrer erro executar o comando "npx cypress install --force" caso já exista a instalação será feito um refresh.
5- Executar o comando "npx cypress open " - Para execução iniciail.


📢 A aplicação o qual os teste rodam , é viva e passiva de alterações , entre elas as de acesso os qual neste projeto estão configuradas nas pastas "Elementos" para API e fixture para Web.

No caso de algum destes serem apagados , basta inserir novamente via aplicação:

☕️ curl -X 'POST' \
  'https://serverest.dev/usuarios' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "nome": "xxx",
  "email": "xx@qa.com.br",
  "password": "teste",
  "administrador": "false"
}'


🔥 Payload´s :

Web : 

{
  "nome": "ze delivery",
  "email": "zeno@qa.com.br",
  "password": "teste",
  "administrador": "false"
}

API : 

{
      "nome": "bololtrano",
      "email": "bololtrano@qa.com.br",
      "password": "teste",
      "administrador": "false"
      
    }


📋 Pré-requisitos
Ter o Cypress intalado na maquina local.
Ter o Node  intalado na maquina local.


🔧 Ambientes : 
Para os testes de Web foi utilizado a pagina : https://front.serverest.dev.
Para os teste de API foi utilizado : https://serverest.dev.


⚙️ Executando os testes :
Os comando abaixo visam apoiar e facilitar a experiência da execução dos testes 

 npm run e2e:WEB --> Executa apenas os testes relacionados ao FRONTEND.
 npm run e2e:API --> Executa apenas os testes relacionados ao BACKEND.
 npm run cypress:run --> Executa todos os testes somente no console Ex.(console do Visual Studio Code).
 npm run cypress:run:headed Executa todos os testes somente em tela Ex.(Diretamente no Chrome).

🛠️ Construído com
Cypress - https://docs.cypress.io/guides/overview/why-cypress
Java Script - https://www.javascript.com/
NodeJS - https://nodejs.org/en

📌 Versão
Nós usamos SemVer para controle de versão. Para as versões disponíveis, observe as tags neste repositório.

✒️ Autores
Desenvolvimento Leandro de Oliveira - Analista QA.
Documentação Leandro de Oliveira - Analista QA.

📄 Licença
Este projeto é publico é tem como objetivo colaborar com aqueles que desejam avaliar,aprender ou mesmo tirar exemplos de partes do código.

🎁 Expressões de gratidão
Agradeço a oportunidade de estar realizando de forma colaborativa para os time envolvidos .
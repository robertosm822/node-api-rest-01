# NODE-API-REST-STWARS-01
API Node.JS REST
Consumer API Star Wars

- Adicionar um planeta (com nome, clima e terreno)
  => REQUISIÇÃO POST: http://localhost:3000/planets/
  Observações importante:  no momento em que o planeta será é inserido, existe uma consulta por nome da API (https://swapi.co/) para resgatar os links dos "films" relacionados ao planeta.
- Listar planetas
  => REQUISIÇÃO GET: http://localhost:3000/planets/
- Buscar por nome
  => REQUISIÇÃO GET: http://localhost:3000/planets/search?name=<STRING NAME>
- Buscar por ID
  => REQUISIÇÃO GET: http://localhost:3000/planets/<iID_OBJETC_MONGODB>
- Remover planeta
  => REQUISIÇÃO DELETE: http://localhost:3000/planets/<iID_OBJETC_MONGODB>


TECNOLOGIAS UTILIZADAS:
  - Sistema operacial: Linux Ubuntu v18;
  - MongoDB base Cloud Free Online: https://www.mongodb.com/cloud/atlas
  - Gerenciar de Bancos MongoDB: https://blog.robomongo.org/robo-3t-1-2/
  - Server Node.JS: https://nodejs.org/en/
  - Ferramenta de Testes de consumo da API: https://www.getpostman.com/
  - Paocte de template: https://expressjs.com/pt-br/starter/installing.html
  - Pacote para abstratir banco MongoDB: https://mongoosejs.com/docs/
  - Pacote para manipular Browser CROS Domain API: https://www.npmjs.com/package/cors
  - Manipular API externas: https://www.npmjs.com/package/request
  - https://www.npmjs.com/package/body-parser
  - https://www.npmjs.com/package/morgan

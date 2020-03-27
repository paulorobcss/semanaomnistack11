const express = require('express'); // importando o módulo 'express' para dentro da variável express
const cors = require('cors');
// importando o arquivo routes, como é um arquivo, precisa de './' antes do nome do arquivo
const routes = require('./routes');

const app = express(); // criando a aplicação

app.use(cors());

// informando ao app que estaremos usando json para as requisições
app.use(express.json());
app.use(routes);



/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * from users
  * Query Builder: table('users').select('*').where()
  */



app.listen(3333); // acesso à aplicação através do localhost:3333
const express = require ('express');
const cors = require('cors');
const routes = require ('./routes');
const app = express();

app.use(cors({
    /**origin */
}));
app.use(express.json());
app.use(routes);

app.listen(3333);   //3333 padrao node

//Rota / Recurso

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * npm install nodemon -D (-D instala como dependencia de dev)
  * nodemon utilizado para não precisar restartar a aplicação
  */ 

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após: "?"(Filtros, paginação) [query]
  * Route Params: Parâmetros utilizados para identificar recursos [params]
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc...
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where() -- [knexjs é o mais utilizado]
    */
const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros:
  *  
  * Query (request.query): Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route (request.params): Parâmetros utilizados para identificar recursos
  * Request Body: é o corpo da requisição, utilizado para criar ou alterar recursos   
  */

  /**
   * SQL: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc 
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

    
/** Query */
app.get('/users', (request,response) => {
    
    const query = request.query;

    console.log(query);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Celso Costa'
    });
});


/** Route */
app.get('/users/:id', (request,response) => {
    
    const params = request.params;

    console.log(params);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leopoldo Costa'
    });
});

/** Req Body */
app.post('/users', (request,response) => {
    
    const body = request.body;

    console.log(body);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leopoldo Costa'
    });
});
app.listen(3333);
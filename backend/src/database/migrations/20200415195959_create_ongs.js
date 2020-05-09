exports.up = function(knex) { //metodo responsavel pela criação da tabela.
  return knex.schema.createTable ('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();      
      table.string('email').notNullable();      
      table.string('whatsapp').notNullable();      
      table.string('city').notNullable();      
      table.string('uf',2).notNullable();      
  });
};

exports.down = function(knex) { //metodo responsavel por deletar tabela, caso ocorra problemas
  knex.schema.dropTable('ongs');  
};

// npx knex migrate:latest -- cria as tabelas
// npx knex migrate:make create_incidents --armazena os casos da app
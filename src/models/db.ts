// Connect database

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

knex.raw('select 1+1 as result').then(function () { 
    // there is a valid connection in the pool 
    console.log('Database Connection - √');
});

export default knex;
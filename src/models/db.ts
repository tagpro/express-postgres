import * as Knex from 'knex';
import { Model } from 'objection';

// Connect database

// Initialize knex.
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./../../knexfile.js')[environment];
const knex = Knex(knexConfig);

// Create or migrate:
knex.migrate.latest().then(() => {
    console.log('Migrations done- √');
}).catch((error) => {
    console.log('Migrations done - ✗', error);
    // migrations are finished
});;

knex.raw('select 1+1 as result')
    .then(() => {
        // there is a valid connection in the pool
        console.log('Database Connection - √');
    })
    .catch(error => {
        console.log('Database Connection - ✗', error);
    });

console.log('Initialization and Migrations complete');

Model.knex(knex);

export {
    knex as default,
    Model,
};
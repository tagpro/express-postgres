import * as Knex from 'knex';
import { TableBuilder } from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
    // Run this in postgres directly it plays up on its own
    await knex.raw(' create extension if not exists "uuid-ossp";');
    await knex.schema
        .createTable('entity', (table: TableBuilder) => {
            table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        });
};

exports.down = (knex: Knex): Promise<any> => {
    knex.raw('drop extension if exists "uuid-ossp"');
    return knex.schema
        .dropTableIfExists('entity');
};

import * as Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTableIfNotExists('jobprice', table => {
        table.increments('id').primary()
        table.integer('pricetable_id').unsigned()
        table.integer('jobtype_id').unsigned()
        table.foreign('pricetable_id').references('pricetable.id')
        table.foreign('jobtype_id').references('jobtype.id')
        table.float('price').notNullable()
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('jobprice')
}
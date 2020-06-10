import * as Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('job', table => {
        table.increments('id').primary();
        table.integer('client_id').unsigned()
        table.integer('jobtype_id').unsigned()
        table.integer('productcolor_id').unsigned()
        table.foreign('client_id').references('client.id')
        table.foreign('jobtype_id').references('jobtype.id')
        table.foreign('productcolor_id').references('productcolor.id')
        table.integer('qtd').notNullable()
        table.float('shipping').notNullable()
        table.date('date').notNullable()
        table.boolean('isrepetition').notNullable()
        table.boolean('isnocost').notNullable()
        table.boolean('ispaid').notNullable()
        table.float('total').notNullable()
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('job')
}
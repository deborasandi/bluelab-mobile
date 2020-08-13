import Knex from 'knex'

/* Altura
Marca 
Lote */

export async function up(knex: Knex){
    return knex.schema.createTable('polimax', table => {
        table.increments('id').primary()
        table.integer('height').notNullable()
        table.string('brand').notNullable()
        table.string('lot').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('polimax')
}
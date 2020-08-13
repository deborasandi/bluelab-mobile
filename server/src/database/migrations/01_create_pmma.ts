import Knex from 'knex'

/* Tipo do Bloco (Calcinável, Provisório)
Altura
Cor
Marca 
Lote */

export async function up(knex: Knex){
    return knex.schema.createTable('pmma', table => {
        table.increments('id').primary()
        table.string('blockType').notNullable()
        table.integer('height').notNullable()
        table.string('color').notNullable()
        table.string('brand').notNullable()
        table.string('lot').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('pmma')
}
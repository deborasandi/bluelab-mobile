import Knex from 'knex'

/* Nome (Texto)
Material (Texto)
Descrição (Texto)
Marca (Texto)
Lote (Texto) */

export async function up(knex: Knex){
    return knex.schema.createTable('item', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('material').notNullable()
        table.string('description').notNullable()
        table.string('brand').notNullable()
        table.string('lot').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('item')
}
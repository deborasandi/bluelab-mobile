import Knex from 'knex'

/* Dimensões (Largura, Altura, Comprimento (medidas em números reais))
Tipo (Texto)
Cor (Texto)
Marca (Texto)
Lote (Texto) */

export async function up(knex: Knex){
    return knex.schema.createTable('dissilicato_litio', table => {
        table.increments('id').primary()
        table.float('width').notNullable()
        table.float('height').notNullable()      
        table.float('length').notNullable()
        table.string('type').notNullable()
        table.string('color').notNullable()
        table.string('brand').notNullable()
        table.string('lot').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('dissilicato_litio')
}
import Knex from 'knex'

/* Tipo do bloco (Pode ser: HT, SHT/ST, TT, 3D)
Altura (10,12,14,16,18,20,22,25,30)
Cor (Mesmas do programa)
Fator (Texto)
Marca (Texto)
Lote (Texto) */

export async function up(knex: Knex){
    return knex.schema.createTable('zirconia', table => {
        table.increments('id').primary()
        table.string('blockType').notNullable()
        table.integer('height').notNullable()
        table.string('color').notNullable()
        table.string('factor').notNullable()
        table.string('brand').notNullable()
        table.string('lot').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('zirconia')
}
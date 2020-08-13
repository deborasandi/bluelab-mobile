import Knex from 'knex'

/* Fabricante (Texto)
Diâmetro (Ø0.3, Ø0.5, Ø0.6, Ø1.0, Ø1.5, Ø2.0, Ø2.5, Ø3.0) 
Tipo (Ball, Cônica, Flat/Reta, Tórica, Ponta, Fresa T)
Altura (Texto somente números inteiros)
Maquina (Roland, Imes) */

export async function up(knex: Knex){
    return knex.schema.createTable('fresa', table => {
        table.increments('id').primary()
        table.string('manufacturer').notNullable()
        table.string('diameter').notNullable()
        table.string('type').notNullable()
        table.integer('height').notNullable()
        table.string('machine').notNullable()
        table.date('date').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('fresa')
}
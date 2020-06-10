import * as Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('client', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('cpf_cnpj').notNullable()
        table.string('tel').notNullable()
        table.string('cel').notNullable()
        table.string('address').notNullable()
        table.integer('number').notNullable()
        table.string('compl').notNullable()
        table.string('district').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        table.string('cep').notNullable()
        table.string('resp_name').notNullable()
        table.string('resp_cpf').notNullable()
        table.string('resp_cel').notNullable()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.integer('pricetable_id').unsigned()
        table.foreign('pricetable_id').references('pricetable.id')
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('client')
}
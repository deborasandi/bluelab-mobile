import * as Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTableIfNotExists('user', table => {
        table.increments('id').primary()
        table.integer('client_id').unsigned()
        table.foreign('client_id').references('client.id')
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.boolean('isadmin').notNullable()      
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('user')
}
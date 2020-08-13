import Knex from 'knex'

const connection = Knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'bluelab'
  }
})

export default connection
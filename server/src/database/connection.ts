import knex from 'knex';
import path from 'path';
import {DBParams} from '../utils/utils'

const params = DBParams()

var connection = knex({
  client: 'mysql',
  version: '5.7',
  connection: {
    host : params.host,
    user : params.user,
    password : params.password,
    database : params.database
  }
});

export default connection;
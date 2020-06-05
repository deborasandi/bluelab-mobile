import knex from 'knex';
import path from 'path';

var connection = knex({
  client: 'mysql',
  version: '5.7',
  connection: {
    host : 'bluelabdb.c7tsyx37zboh.us-east-2.rds.amazonaws.com',
    user : 'bluelabadmin',
    password : 'bluelabadmin',
    database : 'bluelabdb'
  }
});

export default connection;
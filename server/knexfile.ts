import * as path from 'path'
import {DBParams} from './src/utils/utils'

const params = DBParams()

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host : params.host,
      user : params.user,
      password : params.password,
      database : params.database
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
  },
  production: {
    //client: "mysql",
    //connection: "mysql://root:123456@127.0.0.1:3306/knexdb",
  },
};
const path = require('path')

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host : 'localhost',
            user : 'root',
            password : 'admin',
            database : 'bluelab'
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
    }
}
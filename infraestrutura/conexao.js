const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3310',
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao
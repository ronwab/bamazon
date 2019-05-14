require('dotenv').config();
let config = require('./config')
let inquirer = require('inquirer');
let mysql = require('mysql');

let Connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    port: config.db_port,
    database: config.db_name
})

module.exports.connection = Connection
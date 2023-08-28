const mysql = require('mysql2');

const connectionDB = mysql.createPool({
    host:           process.env.DB_HOST_NAME,
    port:           process.env.DB_PORT,
    user:           process.env.DB_USER_NAME ,
    password:       process.env.DB_PASSWORD,
    database:       process.env.DB_NAME
});

module.exports = connectionDB;
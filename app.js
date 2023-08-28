const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1372;
const mysql = require('mysql2');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const connectionDB = mysql.createPool({
    host:           process.env.DB_HOST_NAME,
    port:           process.env.DB_PORT,
    user:           process.env.DB_USER_NAME ,
    password:       process.env.DB_PASSWORD,
    database:       process.env.DB_NAME
});

connectionDB.getConnection( (err, connection) => {
    if (err) throw err;
    console.log(`connection: ${connection.threadId}`)
});

const routes = require('./server/routes/loginRoute');

app.use('/', routes);

app.listen(port, () => console.log(`listening on port ${port}!`))
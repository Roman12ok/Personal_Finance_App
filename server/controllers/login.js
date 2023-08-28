const connectionToDb = require('../db/dbConnection')

exports.read = (req, res) => {
    connectionToDb.getConnection((err, connection) => {
        if (err) throw err;
        const getIncomeTable = "SELECT * FROM User_Table";

        connectionToDb.query(getIncomeTable, (err, result) => {
            connection.release();
            if (err) throw err;
            res.status(200).send(result);
        })
    })
}
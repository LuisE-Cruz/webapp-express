const mysql = require('mysql2');
require('dotenv').config()

const credentials = {
    host: process.env.DB_HOST || "my_host",
    user: process.env.DB_USER || "my_user",
    password: process.env.DB_PASSWORD || "my_password",
    database: process.env.DB_NAME || "my_database_name"
}

const linkup = mysql.createConnection(credentials)

linkup.connect((err) => {
    if (err) {
        console.error('Database connection error', err);
        return;
    }
    console.log('Database succesfull connection');

})

module.exports = linkup
// 📌 1. Configuration de MySQL (config/db.js)
const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Pas de mot de passe
    database: 'transports'
  
});



module.exports = pool.promise();
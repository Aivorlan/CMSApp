//Dependencies

// Connection 
const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '4971645Jh!',
  database: 'emp_cmsa_db'
})

module.exports = db
var mysql = require('mysql');
//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dbdev_senja'
});

conn.connect((err) => {
  if(err) throw err;
  console.log('Mysql Connected...');
});

module.exports = conn;
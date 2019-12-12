var express = require('express'),
  	mysql = require('mysql'),
  	app = express(),
  	port = process.env.PORT || 8000;

// Controller Routing
const books = require('./api/routes/bookRoutes');
app.use('/books', books);

//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dbdev_senja'
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

app.listen(port);

console.log('SenJa RESTFUL API server started on: ' + port);
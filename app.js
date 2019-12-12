var express = require('express'),
  	app = express(),
  	port = process.env.PORT || 8000;

// Controller Routing
const books = require('./api/routes/bookRoutes');
app.use('/books', books);

app.listen(port);

console.log('SenJa RESTFUL API server started on: ' + port);
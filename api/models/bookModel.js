const express = require('express');
const app = express();
const db = require("../../db");

var Books = function(book){
    this.seq = book.seq;
    this.code = book.code;
    this.category_id = book.category_id;
    this.title = book.title;
    this.author = book.author;
    this.publisher = book.publisher;
    this.rack_id = book.rack_id;
    this.synopsys = book.synopsys;
};

Books.getAllBooks = function (result) {
	let sql = "SELECT * FROM books";
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    result(null, results);
  });
};

module.exports = Books;
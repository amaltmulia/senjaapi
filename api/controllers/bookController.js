const MBooks = require('../models/bookModel');

exports.index = function (req, res) {
    // res.send('Greetings from the Book controller!');
    let books = new MBooks.getAllBooks(function (err, book) {
        if (err) return next(err);
        res.send(book);
    });
};
const express = require('express');

const mongoose = require('mongoose');

const Bookscollection = mongoose.model('Bookscollection');




function insertRecord(req, res) {
    var book = new Bookscollection();
   bookTitle = req.body.bookTitle;
    ISBN = req.body.ISBN;
    fee = req.body.fee;
    Publisher = req.body.Publisher;
    DatePublished = req.body.DatePublished;

    book.save((err, doc) => {
        if (!err)
            res.redirect('client/booklist');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("client/addbook", {
                    viewTitle: "Insert Book",
                    book: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}


module.exports = router;
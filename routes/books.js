var express = require("express");
var router = express.Router();

const Book = require("../models/Book");

router.post("/", (req, res, next) => {
  Book.create({
    title: req.body.title,
    year: req.body.year,
    codeISBN: req.body.codeISBN,
    quantity: req.body.quantity,
    genre: req.body.genre,
    author: req.body.author,
  })
    .then((createdBook) => {
      console.log("Book created ->", createdBook);
      res.status(201).send(createdBook);
    })
    .catch((error) => {
      console.error("Error while creating the book ->", error);
      res.status(500).send({ error: "Failed to create the book" });
    });
});

router.get('/', (req, res, next) => {
    Book.find()
        .populate('author')
        .then((foundBooks) => {
            console.log(foundBooks)
            res.status(201).send(foundBooks)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
})

router.post('/update/:id', (req, res, next) => {
    Book.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}
    )
    .then((updatedBook) => {
        console.log(updatedBook)
        res.status(200).send(updatedBook)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.get('/delete/:id', (req, res, next) => {
    Book.findByIdAndDelete(req.params.id)
        .then((deletedBook) => {
            console.log(deletedBook)
            res.status(200).send(deletedBook)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
})

module.exports = router;

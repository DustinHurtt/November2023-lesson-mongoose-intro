var express = require("express");
var router = express.Router();

const Author = require("../models/Author");
const Book = require("../models/Book");

/* GET home page. */
router.post("/", (req, res) => {
  Author.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
  })
    .then((createdAuthor) => {
      console.log("Author added ->", createdAuthor);

      res.status(201).send(createdAuthor);
    })
    .catch((error) => {
      console.error("Error while creating the author ->", error);
      res.status(500).send({ error: "Failed to create the author" });
    });
});

module.exports = router;

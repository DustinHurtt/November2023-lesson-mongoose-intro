
// ./models/Author.model.js
const { model, Schema } = require('mongoose')
// CREATE SCHEMA
const AuthorSchema = new Schema({
    firstName: String,
    lastName: String,
    bio: String,
  },
  {
    timestamps: true
  });
  
module.exports = model("Author", AuthorSchema);
  
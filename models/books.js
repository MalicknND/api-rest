const mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  book_name: { type: String },
  author: { type: String },
  content: { type: String },
  maisonDedition: { type: String },
  cathegorie: { type: String },
  dateDeSortie: { type: Date },
  quantityInStock: { type: Number },
});

module.exports = mongoose.model("Books", BookSchema);

const mongoose = require("mongoose");
const BookList = mongoose.model("Books");

module.exports.display = (req, res) => {
  return res.render("add_book");
};

module.exports.send = (req, res) => {
  var book = new BookList({
    book_name: req.body.book_name,
    author: req.body.author,
    content: req.body.content,
    maisonDedition: req.body.maisonDedition,
    cathegorie: req.body.cathegorie,
    dateDeSortie: req.body.dateDeSortie,
    quantityInStock: req.body.quantityInStock,
  });

  book.save((err, docs) => {
    return res.redirect("back");
  });
};

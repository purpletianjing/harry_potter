var Book = require("../book.js");

function loadBooks() {
  return [new Book('harry_potter_1', 1, 8.00),
    new Book('harry_potter_2', 2, 8.00),
    new Book('harry_potter_3', 3, 8.00),
    new Book('harry_potter_4', 4, 8.00),
    new Book('harry_potter_5', 5, 8.00)];
}

module.exports = loadBooks();
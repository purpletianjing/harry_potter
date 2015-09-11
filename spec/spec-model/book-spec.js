var Book = require("../../model/book.js");

describe("Book", function() {
  describe("attributes", function() {
    var book = new Book('harry_potter_1',1,8.00);
    it("name", function() {
      expect(book.name).toBe('harry_potter_1');
    });

    it("id",function() {
      expect(book.id).toBe(1);
    });

    it("price",function() {
      expect(book.price).toBe(8.00);
    })
  });
});
var pos = require("../../model/main.js");
var allPromotions = require("../../model/helper/allPromotions.js");
var allBooks = require("../../model/helper/allBooks.js");
var SettleMent = require("../../model/settle-ment.js");

var totalPrice = 51.6;
var bookIds = [];

beforeEach(function() {
  bookIds = [1,2,3,1,2,4,5,3,2,1,1,1,2,3,4,1];
})

describe("function",function() {
  it("main",function(){
    SettleMent.setPromotions(allPromotions);
    SettleMent.setBooks(allBooks);
    expect(pos(bookIds)).toBe(totalPrice);
  });
});
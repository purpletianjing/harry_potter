var BookBasket = require("../../model/book-Basket.js");

describe("BookBasket",function() {
  describe("function",function() {
    var classifyResult = [{id:1,num:2},{id:2,num:3},{id:3,num:2},{id:4,num:1},{id:5,num:1}];
    var promotions = [{ count: 5, bookIds: [ 4, 5, 1, 3, 2 ] },{ count: 3, bookIds: [ 1, 3, 2 ] },{ count: 1, bookIds: [ 2 ] }];
    var bookBasket = new BookBasket();
    it("computePromotions",function() {
      expect(bookBasket.computePromotions(classifyResult)).toEqual(promotions);
    });
  });
})
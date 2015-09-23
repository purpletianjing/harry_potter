var BookBasket = require("../../model/book-Basket.js");

describe("BookBasket", function () {
  describe("function", function () {
    var classifyResult = [{id: 1, num: 6}, {id: 2, num: 4}, {id: 3, num: 3}, {id: 4, num: 2}, {id: 5, num: 1}];
    var promotions = [ 0, 2, 1, 1, 1, 1 ];
    var bookBasket = new BookBasket();
    it("computePromotions", function () {
      expect(bookBasket.computePromotions(classifyResult)).toEqual(promotions);
    });
  });
})
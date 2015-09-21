var SettleMent = require("../../model/settle-ment.js");
var allPromotions = require("../../model/helper/allPromotions.js");
var allBooks = require("../../model/helper/allBooks.js");
var countResult = [];
var count = [];
var totalPrice = 59.6;

beforeEach(function () {
  count = [{count:5 , bookIds: [4, 5, 1, 3, 2]}, {count: 3, bookIds: [1, 3, 2]}, {count: 1, bookIds: [2]}];
  countResult = [{count: 5, bookIds: [4, 5, 1, 3, 2], percents: 0.25}, {
    count: 3,
    bookIds: [1, 3, 2],
    percents: 0.1
  }, {count: 1, bookIds: [2], percents: 0}];
});

describe("SettleMent", function () {
  describe("function", function () {
    var settleMent = new SettleMent();
    SettleMent.getPromotions(allPromotions);
    SettleMent.getBooks(allBooks);

    it("getPromotionPrice", function () {
      settleMent.getBookInventory(count);
      settleMent.getPromotionPercents();

      expect(settleMent.bookInventory).toEqual(countResult);
    });

    it("getTotalPrice",function() {
      expect(settleMent.getTotalPrice()).toBe(totalPrice);
    })
  });
});
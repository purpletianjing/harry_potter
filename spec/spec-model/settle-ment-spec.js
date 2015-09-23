var SettleMent = require("../../model/settle-ment.js");
var Promotion = require("../../model/promotion.js");
var allPromotions = require("../../model/helper/allPromotions.js");
var bookInventory = [];
var count = [];
var promotions = [];

describe("SettleMent", function () {
  beforeEach(function () {
    count = [0, 2, 1, 0, 3, 0];
    bookInventory = [0, 2, 1, 0, 3, 0];
    promotions = [new Promotion('BUY_ONE_NO_PROMOTIONS', 0, 1),
      new Promotion('BUY_TOW_DIFFRENCES', 0.05, 2),
      new Promotion('BUY_THREE_DIFFRENCES', 0.1, 3),
      new Promotion('BUY_FOUR_DIFFENCES', 0.2, 4),
      new Promotion('BUY_FIVE_DIFFENCES', 0.25, 5)];;
  });

  describe("set attributes", function () {
    var settleMent = new SettleMent();
    it("promotions", function () {
      settleMent.setPromotions(allPromotions);
      expect(settleMent.promotions).toEqual(promotions);
    });

    it("bookInventory", function () {
      settleMent.setBookInventory(count);
      expect(settleMent.bookInventory).toEqual(bookInventory);
    });
  });

  describe("get total price by promotion strategy",function() {
    var settleMent = new SettleMent();
    settleMent.setPromotions(allPromotions);

    it("53 change to 44",function() {
      settleMent.setBookInventory(count);
      expect(settleMent.getTotalPrice()).toBeCloseTo(108,1);
    });

    it("one book", function () {
      settleMent.setBookInventory([0,1]);
      expect(settleMent.getTotalPrice()).toBeCloseTo(8,1);
    });

    it("two different books",function() {
      settleMent.setBookInventory([0,0,1]);
      expect(settleMent.getTotalPrice()).toBeCloseTo(8*2*(1-0.05),1);
    });

    it("three different books",function() {
      settleMent.setBookInventory([0,0,0,1]);
      expect(settleMent.getTotalPrice()).toBeCloseTo(8*3*(1-0.1),1);
    });

    it("two different books and one kinds more than 1",function() {
      settleMent.setBookInventory([0,0,0,0,2,0]);
      expect(settleMent.getTotalPrice()).toBeCloseTo(4*8*2*(1-0.2),1);
    });
  });
});
var Promotion = require("../../model/promotion.js");

describe("Promotion", function() {
  describe("attributes", function() {
    var promotion = new Promotion('BUY_TWO_DIFFRENCES', 0.05,2);
    it("type", function() {
      expect(promotion.type).toBe('BUY_TWO_DIFFRENCES');
    });

    it("price",function() {
      expect(promotion.percents).toBe(0.05);
    });
    it("num",function() {
      expect(promotion.num).toBe(2);
    })
  });
});
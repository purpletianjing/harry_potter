var Promotion = require("../../model/promotion.js");

describe("Promotion", function() {
  describe("attributes", function() {
    var promotion = new Promotion('BUY_TOW_DIFFRENCES', 0.05);
    it("type", function() {
      expect(promotion.type).toBe('BUY_TWO_DIFFRsENCES');
    });

    it("price",function() {
      expect(promotion.percents).toBe(0.05);
    })
  });
});
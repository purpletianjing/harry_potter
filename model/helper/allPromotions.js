var Promotion = require("../promotion.js");

function loadPromotions() {
  return [new Promotion('BUY_ONE_NO_PROMOTIONS', 0, 1),
    new Promotion('BUY_TOW_DIFFRENCES', 0.05, 2),
    new Promotion('BUY_THREE_DIFFRENCES', 0.1, 3),
    new Promotion('BUY_FOUR_DIFFENCES', 0.2, 4),
    new Promotion('BUY_FIVE_DIFFENCES', 0.25, 5)];
}

module.exports = loadPromotions();


var Promotion = require("../promotion.js");

function loadPromotions() {
  return [new Promotion('BUY_TOW_DIFFRENCES', 0.05),
    new Promotion('BUY_THREE_DIFFRENCES', 0.1),
    new Promotion('BUY_FOUR_DIFFENCES', 0.2),
    new Promotion('BUY_FIVE_DIFFENCES', 0.25)];
}

module.exports = loadPromotions();
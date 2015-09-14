var promotions = require("./helper/allPrpmotions.js");

function BookBasket() {

}

BookBasket.prototype.computePromotions = function (classifyResult) {
  var bookMark = 0;
  for (var object in classifyResult) {
    if (classifyResult[object] >= 1) {
      classifyResult[object]--;
      bookMark++;
    }
  }
};

module.exports = BookBasket;
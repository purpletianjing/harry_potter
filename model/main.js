var Classify = require("./classify.js");
var BookBasket = require("./book-Basket.js");
var SettleMent = require("./settle-ment.js");


function pos(bookIds,allPromotions) {
  var classify = new Classify();
  var bookBasket = new BookBasket();
  var settleMent = new SettleMent();

  var classifyResult = classify.group(bookIds);
  var promotionBooks = bookBasket.computePromotions(classifyResult);
  settleMent.setPromotions(allPromotions);
  settleMent.setBookInventory(promotionBooks);
  var totalPrice = settleMent.getTotalPrice();
  return totalPrice;
}

module.exports = pos;
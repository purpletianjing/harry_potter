var Classify = require("./classify.js");
var BookBasket = require("./book-Basket.js");
var SettleMent = require("./settle-ment.js");


function pos(bookIds) {
  var classify = new Classify();
  var bookBasket = new BookBasket();
  var settleMent = new SettleMent();

  var classifyResult = classify.group(bookIds);
  var promotionBooks = bookBasket.computePromotions(classifyResult);
  settleMent.getBookInventory(promotionBooks);
  settleMent.getPromotionPercents();
  var totalPrice = settleMent.getTotalPrice();
  return totalPrice;
}

module.exports = pos;
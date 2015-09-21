var Classify = require("./classify.js");
var BookBasket = require("./book-Basket.js");
var SettleMent = require("./settle-ment.js");

function main(bookIds) {
  var classify = new Classify();
  var bookBasket = new BookBasket();

  var classifyResult = classify.group(bookIds);
  var promotionBooks = bookBasket.computePromotions(classifyResult);

}
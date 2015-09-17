var promotions = require("./helper/allPrpmotions.js");

function BookBasket() {

}

function sortBy(a,b){
  return b.num - a.num;
}

BookBasket.prototype.computePromotions = function (classifyResult) {
  classifyResult.sort(sortBy);
  return classifyResult;
};

module.exports = BookBasket;
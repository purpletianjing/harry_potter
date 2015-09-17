function SettleMent() {

}

var promotions = [];
var books = [];

SettleMent.getPromotions = function(allPromotions) {
  promotions = allPromotions;
}

SettleMent.getBooks = function(allBooks) {
  books = allBooks;
}

function getPercents(value,promotions) {

}

SettleMent.prototype.getPromotionPrice = function(count) {
  var promotionCounts = getPromotionsByCount(count);
  count.forEach(function(value) {
    getPercents(value,promotions);
  });
}

module.exports = SettleMent;
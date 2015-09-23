function SettleMent() {
  this.bookInventory = [];
  this.promotions = [];
}

var promotions = [];
var books = [];

SettleMent.prototype.setPromotions = function(allPromotions) {
  this.promotions = allPromotions;
}

SettleMent.prototype.setBookInventory = function(count) {
  this.bookInventory = count;
}

function getPercentByIndex(index,promotions) {
  var percents = 0;
  promotions.forEach(function(promotion) {
    if(index === promotion.num) {
      percents = promotion.percents;
    }
  })
  return percents;
}

SettleMent.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  var promotions = this.promotions;
  this.bookInventory.forEach(function(value,index) {
    if(value !== 0) {
      percents = getPercentByIndex(index,promotions);
      totalPrice += 8 * value * index * (1 - percents);
    }
  });
  return totalPrice;
}

module.exports = SettleMent;
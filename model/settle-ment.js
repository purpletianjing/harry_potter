function SettleMent() {
  this.bookInventory = [];
}

var promotions = [];
var books = [];

SettleMent.getPromotions = function(allPromotions) {
  promotions = allPromotions;
}

SettleMent.getBooks = function(allBooks) {
  books = allBooks;
}

function getEveryPercent(value,promotions) {
  promotions.forEach(function(promotion) {
    if(value.count === promotion.num) {
      value.percents = promotion.percents;
    }
  });
}

SettleMent.prototype.getBookInventory = function(count) {
  this.bookInventory = count;
}

SettleMent.prototype.getPromotionPercents = function() {
  this.bookInventory.forEach(function(value) {
    getEveryPercent(value,promotions);
  });
}

function getEveryBookPrice(totalPrice,bookId,percent) {
  var price;
  books.forEach(function(book) {
    if(bookId === book.id) {
      price = book.price * (1 - percent);
    }
  });
  return price;
}


function getEveryItemPrice(totalPrice,percent,everyItem) {
  everyItem.bookIds.forEach(function(bookId) {
    totalPrice += getEveryBookPrice(totalPrice,bookId,percent);
  });

  return totalPrice;
}

SettleMent.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  var percent = 0;
  this.bookInventory.forEach(function(everyItem) {
    percent = everyItem.percents;
    totalPrice = getEveryItemPrice(totalPrice,percent,everyItem);
  });
  return totalPrice;
}


module.exports = SettleMent;
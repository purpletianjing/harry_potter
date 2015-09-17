//var promotions = require("./helper/allPrpmotions.js");

function BookBasket() {

}

function sortBy(a,b){
  return a.num - b.num;
}

function reduceNum(results,countObject) {
  for(var i = 0; i < results.length; i++) {
    if(results[i].num > 0) {
      results[i].num--;
      countObject.count++;
      countObject.bookIds.push(results[i].id);
    } else  {
      delete results[i];
    }
  }
}

function computeEveryPromotion(results,promotionBooks) {
  var countObject = {count:0,bookIds:[]};
  results = results.filter(function(result) {
    return result.num > 0;
  });
  reduceNum(results,countObject);
  promotionBooks.push(countObject);
}

BookBasket.prototype.computePromotions = function (classifyResult) {
  var promotionBooks = [];
  var results = classifyResult.sort(sortBy);
  var length = 0;
  var num = results[results.length-1].num;

  for(var i = 0; i < num; i++) {
    computeEveryPromotion(results,promotionBooks);
  }
  return promotionBooks;
};

module.exports = BookBasket;
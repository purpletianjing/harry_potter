function BookBasket() {

}

function sortBy(a, b) {
  return a.num - b.num;
}

function reduceNum(results, countObject) {
  var count = 0;
  for (var i = 0; i < results.length; i++) {
    if (results[i].num > 0) {
      results[i].num--;
      count++;
    } else {
      delete results[i];
    }
  }
  return count;
}

function computeEveryPromotion(results, promotionBooks) {

  results = results.filter(function (result) {
    return result.num > 0;
  });
  var index = reduceNum(results);
  promotionBooks[index]++;
}

function findMostPromotions(promotionBooks) {
  var minIndex = promotionBooks[3] > promotionBooks[5] ? promotionBooks[5] : promotionBooks[3];
  for (var i = minIndex; i > 0; i--) {
    promotionBooks[3]--;
    promotionBooks[5]--;
    promotionBooks[4] += 2;
  }
}

BookBasket.prototype.computePromotions = function (classifyResult) {
  var promotionBooks = [0, 0, 0, 0, 0, 0];
  var results = classifyResult.sort(sortBy);
  var num = results[results.length - 1].num;

  for (var i = 0; i < num; i++) {
    computeEveryPromotion(results, promotionBooks);
  }

  findMostPromotions(promotionBooks);
  return promotionBooks;
};

module.exports = BookBasket;
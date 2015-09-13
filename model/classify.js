function Classify() {

}

Classify.prototype.group = function(bookIds) {
  var classifyResult = {};

  bookIds.forEach(function(bookId) {
    classifyResult[bookId] = classifyResult[bookId] + 1|| 1;
  });
  return classifyResult;
};

module.exports = Classify;
function Classify() {

}

Classify.prototype.group = function(bookIds) {
  var groupObject = {};

  bookIds.forEach(function(bookId) {
    groupObject[bookId] = groupObject[bookId] + 1|| 1;
  });
  return groupObject;
};

module.exports = Classify;
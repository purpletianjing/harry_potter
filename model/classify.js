function Classify() {

}

Classify.prototype.group = function(bookIds) {
  var groupResult = [];
  var groupTemp = {};
  var judgeResult;

  book_ids.forEach(function(bookId) {
    judgeExist(bookId,groupResult);
  });
  return groupResult;
};

function judgeExist(bookId,groupResult) {
  groupResult.forEach(function(groupTemp) {
    groupTemp[bookId] = groupTemp[bookId] + 1 || 1;
  })
}

module.exports = Classify;
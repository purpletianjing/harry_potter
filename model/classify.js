function Classify() {

}

Classify.prototype.group = function(bookIds) {
  var classifyResult = [];

  bookIds.forEach(function(bookId,index) {
    classifyBookIds(bookId,index,classifyResult);
  });

  return classifyResult;
};

function classifyBookIds(bookId,index,classifyResult) {
  var classifyObject = {};

  for (var i = 0; i < classifyResult.length; i++) {
    if (classifyResult[i].id === bookId) {
      classifyResult[i].num++;
      return;
    }
  }

  classifyObject.id = bookId;
  classifyObject.num = 1;
  classifyResult.push(classifyObject);
}

module.exports = Classify;
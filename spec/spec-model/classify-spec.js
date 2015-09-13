var Classify = require("../../model/classify.js");

var bookIds;

beforeEach(function() {
  bookIds = [1,2,3,1,2,4,5,3,2];
});

describe("Classify",function() {
  var classify = new Classify();
  var classifyResult = {1:2,2:3,3:2,4:1,5:1};
  describe("function",function() {
    it("group",function() {
      expect(classify.group(bookIds)).toEqual(classifyResult);
    });
  });
});
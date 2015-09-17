var Classify = require("../../model/classify.js");

var bookIds;

beforeEach(function() {
  bookIds = [1,2,3,1,2,4,5,3,2];
});

describe("Classify",function() {
  var classify = new Classify();
  var classifyResult = [{id:1,num:2},{id:2,num:3},{id:3,num:2},{id:4,num:1},{id:5,num:1}];
  describe("function",function() {
    it("group",function() {
      expect(classify.group(bookIds)).toEqual(classifyResult);
    });
  });
});
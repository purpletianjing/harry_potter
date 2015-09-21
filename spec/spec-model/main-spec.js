var main = require("../../model/main.js");

var totalPrice = 51.6;
var bookIds = [];

beforeEach(function() {
  bookIds = [1,2,3,1,2,4,5,3,2];
})

describe("function",function() {
  it("main",function(){
    expect(main(bookIds)).toBe(totalPrice);
  })
});
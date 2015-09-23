var pos = require("../../model/main.js");
var allPromotions = require("../../model/helper/allPromotions.js");
var SettleMent = require("../../model/settle-ment.js");

var bookIds = [];

describe("function",function() {
  beforeEach(function() {
    bookIds = [1,1,2,2,3,3,4,5];
  });

  it("one book", function () {
    expect(pos([1],allPromotions)).toBeCloseTo(8,1);
  });

  it("two different books",function() {
    expect(pos([1,2],allPromotions)).toBeCloseTo(8*2*(1-0.05),1);
  });

  it("three different books",function() {
    expect(pos([1,2,3],allPromotions)).toBeCloseTo(8*3*(1-0.1),1);
  });

  it("two different books and one kinds more than 1",function() {
    expect(pos([1,1,2],allPromotions)).toBeCloseTo(8*2*(1-0.05)+8,1);
  });

  it("four different books",function() {
    expect(pos([1,2,3,4],allPromotions)).toBeCloseTo(8*4*(1-0.2),1);
  });

  it("five different books",function() {
    expect(pos([1,2,3,4,5],allPromotions)).toBeCloseTo(8*5*(1-0.25),1);
  });

  it("53 change to 44",function(){
    expect(pos([1,1,2,2,3,3,4,5],allPromotions)).toBeCloseTo(51.2,1);
  });

  it("second 53 change to 44",function(){
    expect(pos([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5],allPromotions)).toBeCloseTo(16*(8*(1-0.20)),1);
  });

  it("second 53 change to 44",function(){
    expect(pos([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5],allPromotions)).toBeCloseTo(12*(8*(1-0.20))+ 5*8*(1-0.25),1);
  });
});
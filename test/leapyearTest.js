/******************************************************************************
* Execution : 1. default node cmd> leapyear.js
* 2. if nodemon installed cmd> nodemon leapyear.js
*
* Purpose : Number of random call required to generate N distinct coupon.
*
* @description : Given a Year as input it should check whether if the year is a leap year or not a leap year
t
* @file :leapyear.js
* @overview : test cases using mocha test
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Kiran Mayi <kiranmayi.raj29@gmail.com>
* @version : v13.1.0
* @since : 26-02-2020
******************************************************************************/








const assert = require('chai').assert; //assert to determine the status of the failure
const leap = require("../BasicPrograms/leapyear");
describe('get if leap year or not from leapyear.js', () => { //holds collection of test
    it('should be a 4 digit number', () => { //it() is the test itself

        assert.equal(leap.isLeap(2019),false);
    });
    it("should not be negative", () => {
        assert.equal(leap.isLeap(-1929),false);
    });
    it("should not be decimal number", () => {
        assert.equal(leap.isLeap(1.2),false);
    });
    it("should not be a string or a character", () => {
        assert.equal(leap.isLeap("abdc"),false);
    });
    it("should not be less than 4 digits", () => {
        assert.equal(leap.isLeap(193),false);
    });
    it("for leap year should return true", () => {
        assert.equal(leap.isLeap(1600),true);
    });
    
});
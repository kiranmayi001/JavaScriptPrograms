/******************************************************************************
* Execution : 1. default node cmd> power.js
* 2. if nodemon installed cmd> nodemon power.js
*
* Purpose : Number return the power of 2 to the power of that input Number.
*
* @description : Given the number as input it should return the power of it with base 2.
t
* @file :power.js
* @overview : test cases using mocha test
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Kiran Mayi <kiranmayi.raj29@gmail.com>
* @version : v13.1.0
* @since : 26-02-2020
******************************************************************************/








const assert = require('chai').assert; //assert to determine the status of the failure
const pow = require("../BasicPrograms/power");
describe('returning just the power of two that is less than 31 and greater than 0 power.js', () => { //holds collection of test
    it('should be a positive integer', () => { //it() is the test itself

        assert.equal(pow.powerof(5), 32);
    });

    it('should not exceed 31', () => { //it() is the test itself

        assert.equal(pow.powerof(32), 0);
    });
    it('should not be less than 0', () => { //it() is the test itself

        assert.equal(pow.powerof(-1), 0);
    });


});
const assert = require('chai').assert; //assert to determine the status of the failure
const har = require("./home/user/Desktop/Mocha/BasicPrograms");
describe('get harmonic value from flipcoin.js', () => { //holds collection of test
    it('should be be a positive integer', () => { //it() is the test itself

        assert.equal(har.harmonic(2),1.5);
    });
    it("should not be negative",()=>{
        assert.equal(har.harmonic(-1),'undefined');
    });
    it("should not be decimal number",()=>{
assert.equal(harmonic.har(1.2),'undefined');
    });
    it("should not be a string or a character",()=>{
assert.equal(harmonic.har("abdc"),'wrong input');
    });
    it("should be a 0",()=>{
assert.equal(harmonic.har(0),'undetermined');
    });
});
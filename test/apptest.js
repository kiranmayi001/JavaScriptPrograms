const assert = require('chai').assert; //assert to determine the status of the failure
const app = require('../app');
describe('Check UserName from app', () => { //holds collection of test
    it('should be equal to or greater than 3 char', () => { //it() is the test itself

        assert.equal(app.username(), 'hello');
    })
})
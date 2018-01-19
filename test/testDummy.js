const expect = require('chai').expect;
const dummy = require('../dummy.js');

describe("Testing dummy.js", function() {
    it("Returns 10", function() {
        var result = dummy();

        expect(result).to.be.equal(10);
    })
})
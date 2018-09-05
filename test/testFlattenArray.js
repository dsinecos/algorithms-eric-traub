const expect = require('chai').expect;
const flattenArray = require('../flattenArray.js');

describe("Test flattenArray.js", function() {
    it("flattenArray is a function", function() {
        expect(flattenArray).to.be.a('function');

    })

    it("Returns a one dimensional array as-is", function() {

        var result = flattenArray([1, 2, 3, 4, 5]);

        expect(result).to.deep.equal([1, 2, 3, 4, 5])
    })

    it("Flattens a bi-dimensional array", function() {
        var result = flattenArray([[1, 2], [3, 4], [5, 6]])

        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6])
    })

    it("Flattens an array composed of other arrays", function() {
        var result = flattenArray([[1, 2], 3, 4, [[[5]], 6, 7, [[8, 9], [10, 11]]]]);

        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    })
})
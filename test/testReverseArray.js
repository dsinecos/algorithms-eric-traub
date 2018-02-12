const expect = require('chai').expect;
const reverseArray = require('../reverseArray.js');

describe("Test reverseArray.js", function() {

    it("reverseArray is a function", function() {
        expect(reverseArray).to.be.a("function");
    });

    it("Reverses an array of numbers where length of array is odd", function() {
        var result = reverseArray([1, 2, 3, 4, 5]);

        expect(result).to.deep.equal([5, 4, 3, 2, 1]);
    })

    it("Reverses an array of numbers where length of array is even", function() {
        var result = reverseArray([1, 2, 3, 4]);

        expect(result).to.deep.equal([4, 3, 2, 1]);
    })

    it("Reverses an array of characters", function() {
        var result = reverseArray(['h', 'e', 'l', 'l', 'o']);

        expect(result).to.deep.equal(['o', 'l', 'l', 'e', 'h']);
    })

})
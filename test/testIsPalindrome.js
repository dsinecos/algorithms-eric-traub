const expect = require('chai').expect;
const isPalindrome = require('../isPalindrome.js');

describe("Test isPalindrome.js", function () {
    it("Returns true when string is a Palindrome", function () {
        var result = isPalindrome("Madam I'm Adam");

        expect(result).to.be.true;
    })

    it("Returns true when string is a Palindrome", function () {
        var result = isPalindrome("race car");

        expect(result).to.be.true;
    })

    it("Returns false when string is not a palindrome", function () {
        var result = isPalindrome("Coding java script");

        expect(result).to.be.false;
    })

})
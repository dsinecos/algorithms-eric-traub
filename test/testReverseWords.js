const expect = require('chai').expect;
const reverseWords = require('../reverseWords.js');

describe("Test reverseWords.js", function() {

    it("reverseWords is a function", function() {
        expect(reverseWords).to.be.a("function");
    });

    it("Returns null on empty input", function() {
        var result = reverseWords("");

        expect(result).to.be.null;
    });

    it("Returns reverse when the string is composed of only one word", function() {
        var result = reverseWords("text");

        expect(result).to.be.equal("txet");

    });

    it("Returns reverse of the words but not the string", function() {
        var result = reverseWords("This is a string");

        expect(result).to.be.equal("sihT si a gnirts");
    });
})
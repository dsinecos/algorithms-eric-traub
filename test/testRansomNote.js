const expect = require('chai').expect;
const ransomNote = require('../ransomNote.js');

describe("Test ransomNote.js", function () {
    it("Returns true when ransom note is possible", function () {
        var result = ransomNote("a a", "a quick brown fox jumped over a lazy dog");

        expect(result).to.be.true;
    })

    it("Returns false when ransom note is not possible", function () {
        var result = ransomNote("a a a", "a quick brown fox jumped over a lazy dog");

        expect(result).to.be.false;
    })

    it("Udemy course Test case 1", function() {
        var result = ransomNote("this is a secret note for you from a secret admirer", "puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited");

        expect(result).to.be.true;
    });

    it("Udemy course Test case 2", function() {
        var result = ransomNote("this is a secret note for you from a secret admirer", "puerto rico is a place of great wonder and excitement it has many waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited");

        expect(result).to.be.false;
    });

    it("Udemy course Test case 3", function() {
        var result = ransomNote("this is a secret note for you from a secret admirer", "puerto rico is a place of great wonder and excitement it has many waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also that you must wear hiking boots this is one of the best places i have ever visited");

        expect(result).to.be.false;
    });
})
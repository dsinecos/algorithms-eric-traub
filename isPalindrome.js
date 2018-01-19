module.exports = isPalindrome;

function isPalindrome(str) {
    str = str.toLowerCase()

    var charArray = str.split("");
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");

    var lettersArray = [];
    charArray.forEach(function(char) {
        if(validCharacters.indexOf(char) > -1) lettersArray.push(char);
    });

    if(lettersArray.join("") === lettersArray.reverse().join("")) return true;
    else return false;
}
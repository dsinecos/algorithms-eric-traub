
// Convert string to array
// Apply Regex check
// Shift valid characters
// Join Array
// Return String

function caesarCipher(str, shift) {

    var charArray = str.split("");
    var upperCaseCheck = /[A-Z]/g
    var lowerCaseCheck = /[a-z]/g

    var charCodeArray = charArray.map(function(char) {
        // console.log(char.match(regexCheck));
        
        if(char.match(upperCaseCheck)) {

            var shiftedCharCode = char.charCodeAt() + shift;

            if(shiftedCharCode > 90) {
                shiftedCharCode = shiftedCharCode - 90 + 65;
            }

            if(shiftedCharCode < 65) {
                shiftedCharCode = shiftedCharCode - 65 + 90;
            }

            return shiftedCharCode;

        } else if(char.match(lowerCaseCheck)) {

            var shiftedCharCode = char.charCodeAt() + shift;

            if(shiftedCharCode > 122) {
                shiftedCharCode = shiftedCharCode - 122 + 97;
            }

            if(shiftedCharCode < 97) {
                shiftedCharCode = shiftedCharCode - 97 + 122;
            }

            return shiftedCharCode;

        } else {
            return char.charCodeAt();
        }
    });

    var shiftedString = charCodeArray.map(x => String.fromCharCode(x)).join("");

    return shiftedString;

}

module.exports = caesarCipher;

// console.log('a'.charCodeAt());
// console.log('z'.charCodeAt());
// console.log('A'.charCodeAt());
// console.log('Z'.charCodeAt());
// console.log(String.fromCharCode(91));

// console.log(String.fromCharCode(65,66,67));

var result = caesarCipher("Zoo Keeper", 2);
console.log(result);
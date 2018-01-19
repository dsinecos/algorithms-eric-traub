// Create a charMap for magazineText
// Create a charMap for noteText
// Check if the charMap for noteText is smaller than or equal to magazineText

// Assuming that both noteText and magazineText are lowercase and do not contain any punctuation

function ransomNote(noteText, magazineText) {

    var noteArray = noteText.split(" ");
    var magazineArray = magazineText.split(" ");

    var magazineMap = {};

    for (let element of magazineArray) {

        if (magazineMap[element]) {
            magazineMap[element] = magazineMap[element] + 1;
        } else {
            magazineMap[element] = 1
        }
    }

    var isNotePossible = true;

    noteArray.forEach(function(element) {
        if(magazineMap[element]) {
            magazineMap[element] = magazineMap[element] - 1;
        } else {
            isNotePossible = false;
        }
    });

    return isNotePossible;

}

module.exports = ransomNote;
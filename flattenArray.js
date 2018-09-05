function flattenArray(array) {

    let flattenedArray = [];

    for (let element of array) {
        if (element instanceof Array) {
            let flattenedElement = flattenArray(element);
            flattenedArray = [...flattenedArray, ...flattenedElement];
        } else {
            flattenedArray = [...flattenedArray, element]
        }
    }

    return flattenedArray;
}

module.exports = flattenArray;
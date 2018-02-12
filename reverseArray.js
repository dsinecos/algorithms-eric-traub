function reverseArray(arr) {

    if(!arr.length) {
        return null;
    }

    var len = arr.length;

    for(let i = 0; i < (len / 2); i++) {
        var start = i;
        var end = len-1-i;

        var left = arr[start];
        var right = arr[end];

        if(start === end) {
            arr[start] = arr[start]
        } else {
            arr[start] = right;
            arr[end] = left;
        }
    }

    return arr;



}

module.exports = reverseArray;

// var arr = [1, 2, 3, 4, 5];
// var next = reverseArray(arr);

// console.log(next);
// console.log(reverseArray(arr));

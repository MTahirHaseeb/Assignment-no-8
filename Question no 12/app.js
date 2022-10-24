//  Quesstion no 12
//  Write a ts program to print all unique element in an array.
var arr = [1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8];
var count = {};
arr.forEach(uniqueElements);
function uniqueElements(item, index) {
    if (count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1;
    }
}
console.log(count);

//  Question no 6
// Write a ts program to count total number of even and odd elements in array 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenCount = 0;
var oddCount = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenCount++;
    }
}
console.log("Total number of Even  Element", evenCount);
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        oddCount++;
    }
}
console.log("Total number of odd  Element", oddCount);

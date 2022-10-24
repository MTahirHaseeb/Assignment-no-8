//  Question no 5
//  Write a ts program to find second largest element in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var largestNumber = 0;
var secondLargestNumber = 0;
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
}
console.log("largest number", largestNumber);
for (var i = 0; i <= arr.length; i++) {
    if ((arr[i] > secondLargestNumber) && (arr[i] < largestNumber)) {
        secondLargestNumber = arr[i];
    }
}
console.log("Second largest number", secondLargestNumber);

// Question no 4
//  Write a ts program to find maximum and minimun element in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] < arr[i + 1])
        console.log(arr[i]);
}

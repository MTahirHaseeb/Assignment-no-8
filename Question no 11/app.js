//  Question no 11
//  Write a ts program to count frequency of each element in an array.
var arr = [1, 2, 1, 3, 1, 2, 2, 4, 1, 4, 6];
var count = {};
arr.forEach(frequencyElement);
function frequencyElement(item) {
    if (count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1;
    }
}
console.log(count);
// var one:number=0;
// var two:number=0;
// var three:number=0;
// var four:number=0;
// for(var i:number=0; i<arr.length; i++){
//     if(arr[i]==1){
//         one++;
//     }
//     else if(arr[i]==2){
//         two ++;
//     }
//     else if(arr[i]==3){
//         three++;
//     }
//     else{
//         four++;
//     }
// }
// console.log("Total number of 1 =",one);
// console.log("Total number of 2 =",two);
// console.log("Total number of 3 =",three);
// console.log("Total number of 4 =",four);

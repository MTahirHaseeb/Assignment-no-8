//  Question no 8
// Write a ts program to count total number of negitive elements in array.

var arr:number []=[-1,-2,-3,-4,5,6,7,8,9]

var negitiveCount:number=0;

for(var i:number =0; i<arr.length; i++){
    if(arr[i]<0){
        negitiveCount++;
    }
}
console.log("Total number of Negitive Elements ", negitiveCount);
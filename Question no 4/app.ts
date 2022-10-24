// Question no 4
//  Write a ts program to find maximum and minimun element in an array

var arr:number [] = [ 1,2,3,4,5,6,7,8,9]
var max:number=arr[0];
var min:number=arr[0];
for ( var i:number=0; i<=arr.length; i++){
    if(arr[i]<min)
    min=arr[i];
}
console.log(min)

for(var i:number=0; i<= arr.length; i++){
    if(arr[i]>max){
        max=arr[i];

    }
}
console.log(max);
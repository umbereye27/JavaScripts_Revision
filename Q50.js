// function that checks if an array is sorted in ascending order.
function sortedArray(arr) {
  let NewArray= arr.slice( 0, arr.length);
  console.log("The current array is:", NewArray);
  let sortedArray=arr.sort( (a, b) => a-b);
  console.log("The sorted array is:", sortedArray);
  let num=0;
  for (let i = 0; i < arr.length; i++) {
    if (NewArray[i]===sortedArray[i]) {
       num+=1;
    }
}
if(num===arr.length){
  return "Array is assending order";
}
else{
  return "Array is assending order";
}
}
var arr1 =[1,2,3,4,5];
var Arr2=[3,54,78,9,6];
console.log(sortedArray(Arr2));
console.log(sortedArray(arr1));
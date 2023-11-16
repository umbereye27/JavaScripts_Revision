// function that checks if all elements in an array are positive.

function isAllPostiveElement(arr) {
   if(arr.every(element => element > 0)){
    return "All element are positive";
   }
   else{
    return "All are not positive";
   }
   
    
}
console.log(isAllPostiveElement([3,4,5,6,9,-6]));
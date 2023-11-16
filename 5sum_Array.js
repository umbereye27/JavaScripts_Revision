function sumOfArray(array){
    let sum = 0;
for (let i=0; i<array.length;i++){
  sum+=array[i];
}
return sum;
}
console.log("The sum of all element is",sumOfArray([3,8,4,8,9,6]));
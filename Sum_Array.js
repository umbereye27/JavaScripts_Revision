function sumOfArray(array){
    let sum = 0;
for (let i=0; i<array.length;i++){
  sum+=array[i];
}
return sum;
}
console.log(sumOfArray([3,8]));
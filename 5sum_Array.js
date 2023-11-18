function sumOfArray(array){
    let sum = 0;
// for (let i=0; i<array.length;i++){
//   sum+=array[i];
// }
// return sum;


array.forEach(element => {
  sum += element;
});
return sum;
}
console.log("The sum of all element is",sumOfArray([3,8,4]));

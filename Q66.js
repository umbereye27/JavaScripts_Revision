// A. Write a function that calculates the sum of all elements in an array.

function sumOfArray(array){
    let sum = 0;
array.forEach(element => {
  sum += element;
});
return sum;
}
console.log("The sum of all element is",sumOfArray([3,8,4]));


// B. Create a program that prints all even numbers from an array.

let arr =[2,4,5,7,8,10];
let newArr= arr.filter(element => element%2===0);
console.log(newArr);

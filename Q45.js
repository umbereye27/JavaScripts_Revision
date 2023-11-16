// function that calculates the sum of the even numbers in an array.

function sumEvenNbr(array) {
    let sumOfEvenNbr=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2===0){
            sumOfEvenNbr+=array[i];
        }
    }
    return sumOfEvenNbr;
    
}
console.log('The sum of all even number in array is:' ,sumEvenNbr([4,6,5,2,8,10,9,17]));

// function that sorts an array of numbers in ascending order.

function sortArray(array){

    let NewArray= array.sort((a,b)=>a-b);
     
    return NewArray;

}
console.log( sortArray([100,50,69,90,73,2,4]));
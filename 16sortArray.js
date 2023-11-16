function sortArray(arr){
    let sortedElement=arr.sort((a,b) => a-b);
    console.log(sortedElement);

    let NewArray= sortedElement.slice(-3).concat(sortedElement.slice(0,3));
    console.log(NewArray);

    let first3sorted = sortedElement.slice(0,3);
    console.log(first3sorted);
}
let Array= [3,4,8,2,1,6,3,4];
(sortArray(Array));

function minimumElement(arr){
    let min = Math.min(...arr);
    return min;
}
const array=[89,9,0,4,6,100];
console.log("The smallest number", minimumElement(array));
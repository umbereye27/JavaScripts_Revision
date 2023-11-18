// function that finds the median of an array of numbers
 
function findMedian(arr) {
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);
    
    if (arr.length % 2 === 0) {
        return (arr[middle] + arr[middle - 1]) / 2;
    } else {
        return arr[middle];
    }
}

console.log(findMedian([1, 2, 3, 4, 5, 6]));

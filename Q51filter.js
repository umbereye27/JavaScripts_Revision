// function that filters out negative numbers from an array.

function filterArray(arr) {
   const result = arr.filter((element) => element > 0);

    return result;
}
console.log(filterArray([2,4,3,-2,4]));
// function that removes duplicates from an array.


function removeDuplicates(arr) {
    let uniqueElements = new Set(arr);
    let NewArray = Array.from(uniqueElements);

    return NewArray;
}


console.log(removeDuplicates( [11,3, 12,12, 3, 32,44,44, 5, 6,5, 1]));

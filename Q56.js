

function intersectionArray(arr1, arr2) {

    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let element of setB) {
    
        if (setA.has(element )) {
            intersectionResult.push(element );
        }
        
    }
    
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9,8];
const array2 = [0, 3, 5,6,8,5];
console.log( intersectionArray(array1, array2));
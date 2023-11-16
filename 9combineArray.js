function combineArray(array1,array2){
    let CombitionOfArray = array1.concat(array2);
    return CombitionOfArray;
}
const arrayOne = ["a","b","c","d"];
const arrayTwo = ["e","f","g"];
console.log(combineArray(arrayOne,arrayTwo));

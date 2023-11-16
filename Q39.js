// function that checks if a given value is present in an array.

function valuePresent(array, value) {

let presentvalue=array.indexOf(value);
if (presentvalue === -1){
    return " value is not presented in array";
}
else{
    return " value is presented in array";
}
}
console.log(valuePresent([6,7,3,6,7,3,3,0,5,9],9));

// function capitolizesArray(arr) {
//     return arr.map(str => str.toUpperCase());
// }
// console.log(capitolizesArray(['Carine','umbereye']));

function CapitalArray(arr){
    var capitalLetter=[];
    for (let i = 0; i < arr.length; i++) {
        capitalLetter[i] = arr[i].toUpperCase();
        
    }
    return capitalLetter;
   
}
console.log("the capitalised word :",CapitalArray(["celine","carine","jacky"]));
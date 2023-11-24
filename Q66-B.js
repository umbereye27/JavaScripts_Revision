const evenNumber = (arr) => {
    let evenNbr = arr.filter((Element) => Element % 2===0);
    return evenNbr;
}
console.log(evenNumber([2,4,3,5,6,8]));
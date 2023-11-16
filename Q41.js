// function that returns the first n elements of an array.

function firnstNbrElement(array,n) {
    var result=array.slice(0,n);
    return result;
}
console.log(firnstNbrElement([ 'n','a', ' m','b','u','c','y','x' ],3));
function factorial(num) {
    let fact = 1 ;
    for (let a =1; a <= num; a++){
        fact = fact * a;
    }
    return fact;
}
console.log(factorial(3));
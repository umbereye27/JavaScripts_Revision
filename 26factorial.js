function factorial(num) {
    let fact = 1 ;
    for (let a =1; a <= num; a++){
        fact = fact * a;
    }
    return fact;
}
console.log("The factorial on number is:", factorial(3));
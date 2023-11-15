function biggerNumber(num1,num2) {
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    else{
        return "numbers are equal"
    }
}
console.log( biggerNumber(15,15));
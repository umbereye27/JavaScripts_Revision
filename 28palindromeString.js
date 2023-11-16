function palindromeString(string) {
    let reversedWord= string.split('').reverse().join('');

    if(reversedWord === string){
        return "The string is polindrome";
    }
    else{
        return "The string is not polindrome";
    }

}
console.log(palindromeString("dada"));
function palindromeString(string) {
    let reversedWord= string.split('').reverse().join('');

    if(reversedWord === string){
        return "The string is polondrome";
    }
    else{
        return "The string is not polondrome";
    }

}
console.log(palindromeString("dad"));
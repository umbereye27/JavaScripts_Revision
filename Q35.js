function countVowels(string){
    vowels = "aeiouAEIOU";
    count = 0;
    for (let i=0; i<string.length; i++){
        if (vowels.indexOf(string[i]) !== -1){
            count++;
        }
    }
console.log (count);
}
countVowels("carine");

// vowels.indexOf(string[i]): The indexOf method is used to 
// find the index of the character string[i] within the vowels string. 
// If the character is not found, indexOf returns -1.
//  If the character is found, it returns the index of the character in the vowels string.